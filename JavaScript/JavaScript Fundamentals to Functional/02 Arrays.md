#Arrays vs. Objects
Use an array instead of object when you need order, when it doesn't make sense to use objects like the names of pets

#Access and Assignment
```javascript
var box = [];

box[0] = true;
box[1] = 'meow';
box.push({'hello' : 'goodbye'});

var i = 0;

box[i]; // returns true
box[1]; //retuns 'meow'
box.pop(); //returns {'hello' : 'goodbye'}.  pop removes the last item and returns it
```

```javascript
var box = [];

box['size'] = 9;
box['0'] = 'meow';

box.size; //returns 9
box[0]; //returns 'meow'
box.0; //returns 'meow'
```
#Iteration
###For In loop
```javascript
var box = [];

box['size'] = 9;
box['0'] = 'meow';

for(var k in box){
	console.log(k); //returns '0' 'size'
	console.log(box[k]); //returns 'meow' and 9
	console.log(box.k); //returns undefined because you can't use dot notation with variables
}
```
###For loop
This is a mathematical iteration; there is no relation between i and the array, box
```javascript
var box = [];

box['size'] = 9;
box['0'] = 'meow';
box.push('Whoohoo!');

for(var i = 0; i < box.length; i++){
	console.log(i); //returns 0, 1
	console.log(box.i); //undefined
	console.log(box[i]; //'meow', 'Whoohoo!'
}

box.size; //returns 9 using dot notation
box['size']; //returns 9 using bracket notation
box[0]; //returns "meow"
box[1]; //returns "Whoohoo!"
```

#Native Properties

```javascript
var box = [];

box['size'] = true;
box['0'] = 'meow';

box.length; //returns 1
```

```javascript
var box = [];

box['0'] = 'meow';
box[3] = {'babyBox' : true};

box['length']; //returns 4.  Length keeps track of the index of the last value NOT the actual number of values in the array and adds one since it is zero based
box[length]; //returns undefined because there are no quotes around length in bracket notation
box[box.length - 1]; //returns the value of the last element
```
