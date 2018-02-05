#Closure Introduction
Closure happens when you return a function from within a function and the inner function retains access to the scope

```javascript
var closureAlert = function(){
	var x = "Help! I'm a variable stuck in a closure!";
	var alerter = function(){
		alert(x);
	};
	alerter();
};
```
To call the function in the console enter <i>closureAlert()</i>  
If you just enter <i>closureAlert</i> it will just return the function definition

```javascript
var closureAlert = function(){
	var x = "Help! I'm a variable stuck in a closure!";
	var alerter = function(){
		alert(x);
	};
	setTimeout(alerter, 1000); //waits 1000 milliseconds then calls the alerter function; however, it does not pause the code.  It just continues.
	console.log('will still run right after');
};
```

#Creating a Closure
```javascript
var closureAlert = function(){
	var x = 0;
	var alerter = function(){
		alert(++x);
	};
	return alerter; //returns the function definition itself; does not invoke it
};

var funcStorer = closureAlert();
var funcStorer2 = closureAlert();
funcStorer();
```
#Closure Questions
It is a closure when it holds reference to a variable in a different scope; generally a parent scope so it has access to the data  

#Closures and Functional Programming
##Example of how we could use closure
```javascript
var add = function(num){
	var num1 = num;
	
	var addToNum1 = function(num2){
		return num1 + num2;
	};
	return addToNum1; //this returns the nested function and retains access to the scope environment num1 with equals 5
};

var add5 = add(5);  //Assigns the function to add5 and sett num1 to 5

add5(2); //returns 7
add5(3); //returns 8
```
#Closure Objects
This also works if returning an object with methods  

```javascript
function counter(){
	var n = 0;
	return{
		count: function() { return ++n; },
		reset: function() { n = 0; }
	};
};

var myCounter = counter();
//set n = 0
//sets myCounter as an object with 2 properties.  Returns: Object {count: function, reset: function}
myCounter.count() //calls and invokes the count property of the object using dot notation
myCounter['count']() //calls and invokes the count property of the object using bracket notation

```
#Closure Recipe
##Closure Creation
![Closure Recipe](.\img\ClosureRecipe.JPG)  
##Closure Execution
![Closure Execution](.\img\ClosureExecution.JPG)

###Stopwatch Example
```javascript
var makeStopwatch = function(){
	console.log('initialized');
	var elapsed = 0;
	console.log(elapsed);
	
	var stopwatch = function(){
		console.log('stopwatch');
		return elapsed
	};
	var increase = function(){ elapsed++; };
	setInterval(increase, 1000); 
	
	return stopwatch;
	
};

var x = makeStopwatch();

```
