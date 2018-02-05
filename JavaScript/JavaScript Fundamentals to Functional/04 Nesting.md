#Nesting Objects
```javascript
var box = {};
box['innerBox'] = {};  //var box = {"innerbox" : {}}
box['innerBox']['full'] = true;  //var box = {"innerBox" : {full : true}}
//can also be written in dot notation
box.innerBox.full = true;
box.innterBox; //Returns {full:true]
var myInnterBox = box.innterbox;
myInnerBox; //Returns {full:true]
```

##Triple Nest

```javascript
var box = {};
box.innerBox = {};
box.innerBox.babyBox = {};
box.innerBox['babyBox']; //Returns {}
box.innerBox['babyBox'].says = "What's up!?";
box.innerBox['babyBox']; //Returns {says : "What's up!?"}
//-----------------------------------------------------------
var bb = box.innerBox['babyBox']; //Returns {}
box.innerBox['babyBox'].says = "What's up!?";
bb; //Returns {'says' : "What's up!?"}
```

#More Nesting Examples

##Doubly Nested
```javascript
var box = {};

box['innerbox'] = {};
box['innerbox'].full = true;

//box[innerbox]['height'] = 10; //this will not work because there aren't any quotes around innerbox
box['innerbox']['height'] = 10; //fixed

box.otherBox = {};
var innerbox2 = 'otherBox';
box[innerBox2].full = false; //will not work with just this line; need the two lines above to make it work
```

