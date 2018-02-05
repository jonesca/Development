#Bare-Bones JavaScript

##Data Types and Variables
In JavaScript you can work with the following things:
 - **Strings:** textual content, wrapped in quotation marks (single or double)
 - **Numbers:** *integer (2)* or *floating point (2.4)* or *octal (012)* or *hexidecimal (0xff)* or *exponent literal (1e+2)*
 - **Boolean:** true or false with *no quotes*
 - **Arrays:** simple lists *indexed* starting with 0 denoted with []
  - ['Cody', 'Rachelle', 'Porscha', 'Jasmine', 'Caden', 'JC']
 - **Objects:** lists of key, value pairs using {}
  - {firstName: 'Cody', lastName: 'Jones'}
  - {parents: ['Art', 'Calleen'], kids: ['Porscha', 'Jasmine', 'Caden', 'JC']}
###Variables
Always declare your variables.  If you don't they will place in the **global scope**
  - **bad:** myName = 'Cody';
  - **good:** *var* myName = 'Cody';
  - **still good:** *var* myName = 'Cody';
  						  //more stuff
						    myName = 'Joe';

##JavaScript Operators
 - Conditionals
  - if, else
  - switch
 - Operators
  - +, -, *, %, ++, --
  - <, >, ==, !=, >=, <=, ===. !==
  - ! (not), && (and), || (or)
  
##Loops
 - Loops *iterate* through a list of some kind
 - JavaScript relies on *explicit* iteration.  Must explicitly loop through each div for example
 - jQuery allows for both (because it does the looping for you)
 - **for** loops - for general-purpose iteration.  Used with arrays or array-like objects
  - three statements and a code block
   1. initial value
   2. condition
   3. increment
    
```javascript
 for (var i = 0; i < 3; i++) {
   alert (i+1);
   }
 ```
    
 ```javascript
 var divs = document.getElementsByTagName('div');
   
 for (var i = 0, divCount = divs.length; i < divCount; i++) { //seperating the var statement with a comma declares both as variables
   // do something with each div individually
   divs[i].style.color = 'red';
   }
 ```
      
 - **for-in** loops - used with arrays or objects (but don't use with arrays)
 ```javascript
 for (var person in family) {
   alert('the ' + person + ' is ' + family[person]);
 }
 ```
 
 - **while** loops
 ```javascript
 var i = 1;
 while (i < 4) {
  alert(i);
  i++;
 }
 ```
 
 - **do-while** loops
 ```javascript
 var j = 1;
 //code block alwayss executed at least once
 do {
  alert(j);
  j++; 
 } while (j < 4);
 ```
 
 ##Function and Arguments
 In JavaScript you can also work with **funcctions:**
 - Functions allow you to **define** a block of code, name that block, and then **call** it later as many times as you want.
  - `function myfunction() {/*code goes here*/}` //defining
  - `myFunction()` //calling the function *myFunction*
 - You can define function with **parameters**
  - `function myFunction(param1, param2) {/*code goes here*/}`
 - You call the functions with **arguments**
  - `myFunction('one', 'two')`
 
```javascript
//define a function
 function doSomething() {
  alert( 'I am something' ); 
 }
 
 //call the function
 doSomething();
 
//define a function
function sumThing(a, b) {
 return a + b; 
}

//call the function
var mySum = sumThing(1, 2);

alert( mySum );
```

###The Arguments Object
- Every function has an arguments object
 - a collection of the arguments passed to the function when it is called
 - an "array-like object" in that is is indexed and has a **length** property but can't attach array methods to it
 - allows for a variable numbeer of arguments
 
```javascript
 //define the function
 function logThing() {
  for (var i = 0; i < arguments.length; i++) {
   console.log(arguments[i]); 
  } 
 }
 
 //call the function
 logThing(1, 2, 'three');
 
 /* prints to the console:
 >> 1
 >> 2
 >> three
 */
 ```
 
####Function to sum a list of arguments
 
```javascript
 function sumThing() {
   var sum = 0;
  for ( var i=0; i < arguments.length; i++) {
  //console.log(arguments[i]);
  sum = sum + arguments[i];  //sum += arguments[i] is the same thing just shorthand
  } 
  
  return sum;
 }
 
 sumThing(1,5,8,15);
 ```
 
##Named and Anonymous Functions
- Functions can return other functions

```javascript
function multiple(n) {
 function f(x) {
  return x * n; 
 } 
 return f;
}

var triple = multiple(3);
var quadruple = multiple(4);

console.log(triple(5)); //returns 15
console.log(quadruple(5)); //returns 20
console.log(multiple(4)(5)); //returns 20
```
###Named vs. Anonymous Functions
- Named

```javascript
 function foo(){} //function declaration
 var foo = function foo(){}; //function expression
```
 
- Anonymous: anonymous functions are functions that have no name

```javascript
 - var foo = function(){}; //function expression
```

- Prevalent in jQuery

```javascript
$(document).ready(function() { //anonymous function.  Ready is a function being passed a function
  
});
```

##Anonymous Functions
- Good for creating closures
- Can be *defined* and then immediately *invoked*: "immediately invoked function expression, " (a.k.a. **IIFE**; pronounced "iffy")
 - Used by plugins to keep jQuery safe
-Used as "callback" functions

```javascript
(function() {
 //variables are defined within this scope and only apply in the functions
 //avoid name collisions 
}) ();

//For example IFFE:
(function($) {//"$" is the function's param

}) (jQuery); // function is called with "jQuery"

//Callback Example
$('p').slideDown('slow', function() {
  //code in here is not executed
  //until after the slidedown is finished
  //jQuery calls the code in here when effect ends
  //for instance you could fade something out then remove it in the function
});
```
