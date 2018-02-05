#Callbacks
##Module Pattern 
Highlevel overview of how to create a module 
```javascript
var Module = function(){
	
	var private Property = 'foo';
	
	function privateMethod(args){
		//do something
	};
	
	return {
		publicProperty: "",
		publicMethod: function(args){
			//do something
		},
		privilegedMethod: function(args){
			privateMethod(args);
		}
	};
};
```

How to use a module example
```javascript
var Car = function(){
	var gasolineLevel = 10;
	
	function useGas(amt){
		if(gasolineLevel - amt < 0){
			console.log("out of gas :[");
		} else {
			gasolineLevel -= amt;
		}
	};
	
	return {
		radioStation: "104.5",
		
		changeStation: function(station){
			this.radioStation = station;
		},
		go: function(speed){ useGas(speed); }
	};
}
```
##Higher-order Functions & Callbacks  
##Higher-Order Functions
![Higher-Order Functions](.\img\HigherOrderFunctions.JPG)

##Callbacks
```javascript
var ifElse = function(condition, isTrue, isFalse){
	if(condition){
		return isTrue(); //must return and call() the function or it returns undefined
	} else {
		return isFalse();
	}
};

ifElse(true,
  function(){ console.log(true);},
  function(){ console.log(false);}
);
```
###Example2 

```javascript
var ifElse = function(condition, isTrue, isFalse){
	if(condition){
		return isTrue(); //must return and call() the function or it returns undefined
	} else {
		return isFalse();
	}
};

var logTrue = function(){ console.log(true);};
var logFalse = function(){ console.log(false);};

ifElse(false, logTrue, logFalse) //returns false

```

##Passing Arguments  
###Example of passing arguments
```javascript
var increment = function(n){ return n + 1; };

var square = function(n){ return n*n; };

var doMathSoIDontHaveTo = function(n, func){
	func(n); 
};
	
doMathSoIDontHaveTo(5, square);
doMathSoIDontHaveTo(4, increment);
```

##Callbacks Exercise Solution  
Write a function, funcCaller, that takes a func (a function) and an arg (any data type). The function returns the func called with arg(as an argument.  

```javascript
var funcCaller = function(func, arg) {
	return func(arg);
};
```

Write a function, firstVal, that takes an array, arr, and a function, func, and calls func with the first index of the arr, the index # and the whole array.

```javascript
var firstVal = function(arr, func){
	func(arr[0], 0, arr);
};
```

Change firstVal to work not only with arrays but also objects. Since objects are not ordered, you can use any key-value pair on the object.

```javascript
firstVal = function(list, func){
	if(Array.isArray(list)){
		return func(arr[0], 0, arr);
	} else {
		for(var k in list){
			return func(list[k], k, list);
		}
	}
};
```