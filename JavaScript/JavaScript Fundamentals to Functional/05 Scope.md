#Local and Global Scope
Scope is where our variables have meaning; it is created dynamically whenever we call the function; when we call a function we create scope    
Local scope is how we create a scope in JS; the only way to do this is to wrap it in a function:  
```javascript
var func = function(){
	var local = true;  //create the scope here
};

console.log(local); //error because there is not variable outside the function
```

Global variables can be accessed anywhere in the application  
```javascript
var x = 'global!' //declaring a variable outside the function makes it a global variable

function encapsulate(){
	z = 'global here, too!'; //leaving the keyword var off when declaring in the function makes the variable part of the global scope
	window.y = 'also global!'; //putting it on the windows object also makes it global in the browser
}
```
#Parent vs. Child Scope
How is scope affected if a function is nested inside another function?  
Parents do not have access to child scope
Children <b><u>DO</b></u> have access to parent scope  
```javascript 
var g = 'global';

function blender(fruit) {
	var b = fruit;
	var y = 'yogurt';
	
	function bs() {
		alert(b + ' and ' + y + ' makes ' + b + ' swirtl');  //accessing the variables y and b in the parent scope 
	}
	bs();
}

blender('blueberry');
```
#Precedence
How to determine which variable takes precedence in the event of a conflict 
Precedence is determine by which ever is most local to variable 
```javascript
var g = "global";

function go() {
	var l = "local";
	var g = "in here!";
	alert(g + " inside go"); //at runntime g = " in here!"
}

go(); //when this function is call and during runtime g = " in here!"
alert(g + " outside go"); //after the go() function ends g = " outside go" because it is a global variable outside the function
```

##Block Scope
```javascript
var inBlock = false;

for (var i = 0; i < 5; i++){
	var inBlock = true; //not a function; rather a block of code and inBlock is reset to true
};

if(inBlock){ //implies true
	console.log('Is there block scope? ' + !inBlock); //yes because inBlock is true ! indicates the opposite
	//returns "Is there block scope? false
}
```