#Objects

##Property Access

```javascript
var box = {}; //variable box in which we are storing and object literal.
box.material = "cardboard"; //shows dot notation.  The value can be any datatype or even another object
box.material; //returns cardboard
var cb = box.material; //returning the value cardboard and saving it in a variable cb
box.size; //undefined - size has not been defined in our box object

```
We use dots a lot. Whenever we use a dot whatever is left of the dot is an object

##Bracket Notation
```javascript
var box = {};
box["material"] = "cardboard";

box.material; //returns "cardboard"
box[material]; //returns "cardboard"
var cb = box[material]; //assigns "cardboard" to the variable cb

var box = {"material" : "cardboard"}  //cardboard is the value of the material property of the object box

//------------------------------------------------------------------------------

var box {};
box["material"] = "cardboard";
var key = "material";
console.log(key) //returns "material"
box[key]; //returns "cardboard"
box["key"]; //returns undefined because it makes 'key' a string and is interpreted as a property of the box object and there is not key property of the box object
```

###Expressions
```javascript
var box = {};
box["material"] = "cardboarad";

var func = function(){
	return "material";
};

box [func()]; //returns "cardboard"
```
##Object Best Practices
```javascript
var box = {};
box['material'] = "cardboard";
var key = 'material';

box['key']; //undefined
box.key; //undefined
box[key]; //"cardboard"
```

With dot notation use valid names

###The Rules

|        Dots      |      |     Brackets      |      |
|------------------|------|-------------------|------|
| Strings          | good | "strings          | good |
|------------------|------|-------------------|------|
| Numbers          | bad  | "Weird Characters | good |
|------------------|------|-------------------|------|
| Quotations       | bad  | Variables         | good |
|------------------|------|-------------------|------|
| Weird Characters | bad  | numbers           | good |
|------------------|------|-------------------|------|
| Expressions      | bad  | Expressions       | good |
Exercise files: https://github.com/bgando/object-exercises/ 

##Storing Data and Object-literal Notation
```javascript
var box = {};

box["material"] = "cardboard";

box["size"] = {
	"height": 2,
	"width": 80
};

//area in this example is a method because it is a function stored as a property on an object.
box.area = function(){ 
	return box.size.height * box.size.width;
};
```
If a function is stored as a property on an object that is called a method.  

```javascript
//This is object literal notation
var box = {
	size : 9,  //quotes not needed on name
	'~/[."4' : 'meow'  //quotes needed on name since it has special characters
};

box['size']; //returns 9
box['~/[."4']; //returns 'meow'
```

##Iteration
###For-In loop
```javascript
var box = {};

box['material'] = "cardboard";
box[0] = 'meow';
box['^&*'] = "testing 123";

//for and in are key words in the loop
//var key is a variable we just create. It holds the value of the property name always. Can be named anything; doesn't have to be key
//box refers to the object we are looping through
for(var key in box){
	console.log(key); 
	//returns 'material', '0', '^&*' but not necessarily in that order; order is not guaranteed
	console.log(box[key]); 
	//can only use bracket notation here because we are working with a variable: key.  Dot notation doesn't work with variables in this sense.
	//if we put quotes around key we would then be looking for a property named key on the object box rather than the variable
	//returns the values
}
```