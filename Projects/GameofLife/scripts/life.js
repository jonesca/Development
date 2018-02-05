function $(selector, container) {
    return (container || document).querySelector(selector);
}

(function () {

    //the underscore is convention to refer to the prototype and be able to change the name later without having to modify several lines of code
    var _ = self.Life = function (seed) {
        this.seed = seed;
        this.height = seed.length;
        this.width = seed[0].length; //the width is the length of any row

        this.prevBoard = [];
        this.board = cloneArray(seed);
    };

    _.prototype = {
        next: function () {
            this.prevBoard = cloneArray(this.board);

            //start wtih row first; the first column is the row
            for (var y = 0; y < this.height; y++) {
                for (var x = 0; x < this.width; x++) {
                    var neighbors = this.aliveNeighbors(this.prevBoard, x, y);
                    var alive = !!this.board[y][x]; //is the current cell alive
                    //console.log(y, x, ': ', neighbors);
                    //*********************************************************************************
                    // LOGIC
                    //********************************************************************************* */

                    if (alive) {
                        if (neighbors < 2 || neighbors > 3) {
                            this.board[y][x] = 0;
                        }
                    }
                    else {
                        if (neighbors == 3) {
                            this.board[y][x] = 1;
                        }
                    }
                }
            }
        },

        aliveNeighbors: function (array, x, y) {
            var prevRow = array[y - 1] || []; // if the previous row defined by array[y-1] doesn't exist assign it the value of an empty array
            var nextRow = array[y + 1] || []; // if the next row defined by array[y+1] doesn't exist assign it the value of an empty array

            return [
                prevRow[x - 1], prevRow[x], prevRow[x + 1], //this gets the 3 cells above the current cell
                array[y][x - 1], array[y][x + 1], //two cells left and right of current
                nextRow[x - 1], nextRow[x], nextRow[x + 1] //this gets the cells under the current cells
            ].reduce(function (prev, cur) {
                return prev + +!!cur;
            }, 0);
        },

        toString: function () {
            return this.board.map(function (row) { return row.join(' '); }).join('\n');
        }
    };

    // Helper Functions
    // Clone the previous state of the array so you don't confuse the algorithm as it changes to the next generation
    // Warning: Only clones 2D arrays
    function cloneArray(array) {
        return array.slice().map(function (row) { return row.slice(); });
    }

})();

// *******************************************************************************
// Test the Logic
// *******************************************************************************
// var game = new Life([
//     [0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0],
//     [0, 0, 1, 1, 1, 0],
//     [0, 1, 1, 1, 0, 0],
//     [0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0]
// ]);

// console.log(game + '');

// game.next();

// console.log(game + '');

// game.next();

// console.log(game + '');

// *******************************************************************************

(function (){

var _ = self.LifeView = function (table, size) {
    this.grid = table;
    this.size = size;
    this.started = false;
    this.autoplay = false;

    this.createGrid();
};

_.prototype = {
    createGrid: function () {
        var me = this;

        var fragment = document.createDocumentFragment(); /* This creates a part of the document that isn't visible to the DOM until ready to write; thereby, reducing the unnecessary interaction with the DOM */
        this.grid.innerHTML = ''; /* Empty the table before starting to build it to be sure starting with a clean slate */
        this.checkboxes = []; /* Creates an empty array of checkboxes */

        for (var y=0; y<this.size; y++) {
            var row = document.createElement('tr');
            this.checkboxes[y] = [];

            for (var x=0; x<this.size; x++) {
                var cell = document.createElement('td');
                var checkbox = document.createElement('input');
                checkbox.type = 'checkbox';
                this.checkboxes[y][x] = checkbox;
                checkbox.coords = [y, x];

                cell.appendChild(checkbox);
                row.appendChild(cell);

            }
            fragment.appendChild(row);
        }

        this.grid.addEventListener('change', function(evt){
            if (evt.target.nodeName.toLowerCase() == 'input') {
                me.started = false;
            }
        })
// *******************************************************************************
// Move around the grid using the keyboard
// *******************************************************************************

        this.grid.addEventListener('keyup', function(evt) {
            var checkbox = evt.target;

            if (checkbox.nodeName.toLowerCase() == 'input') {
                var coords = checkbox.coords;
                var y = coords[0];
                var x = coords[1];

                switch (evt.keyCode){
                    case 37: // left
                        if (x > 0) {
                            me.checkboxes[y][x-1].focus();
                        }
                        break;
                    case 38: // up
                        if (y > 0) {
                            me.checkboxes[y-1][x].focus();
                        }
                        break;
                    case 39: // right
                        if (x < me.size - 1) {
                            me.checkboxes[y][x+1].focus();
                        }
                        break;
                    case 40: // down
                        if (y < me.size - 1) {
                            me.checkboxes[y+1][x].focus();
                        }
                        break;
                }
            }
        });

// *******************************************************************************


        this.grid.appendChild(fragment);
    },

    get boardArray() {
        return this.checkboxes.map(function (row) {
            return row.map(function (checkbox) {
                return +checkbox.checked;
            });
        });
    },

    play: function () {
        this.game = new Life(this.boardArray);
        this.started = true;
    },

    next: function () {
        var me = this;

        if (!this.started || this.game) {
            this.play();
        }

        this.game.next();

        var board = this.game.board;

        for (var y=0; y<this.size; y++) {
            for (var x=0; x<this.size; x++) {
                this.checkboxes[y][x].checked = !!board[y][x];
            }
        }

        if (this.autoplay) {
            this.timer = setTimeout(function (){
                me.next();
            }, 1000);
        }
    }
};

})();

var lifeView = new LifeView(document.getElementById('grid'), 12);

(function() {

    var buttons = {
        next: $('button.next')
    }
    buttons.next.addEventListener('click', function(event){
        lifeView.next();
        clearTimeout(lifeView.timer);
    });

    $('#autoplay').addEventListener('change', function(){
        buttons.next.disabled = this.checked;

        if (this.checked) {
            lifeView.autoplay = this.checked;
            lifeView.next();
        } 
        else {
                clearTimeout(lifeView.timer);
        }
    });

})();