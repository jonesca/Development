# Introduction to Advanced Techniques in Javascript and jQuery  

```javascript
//This is the way many beginning develpers define a function
function myFunction(text){...}

//This is how experienced developers generally define a function
myFunction = function(text){...}
```
These two function declarations are equivelant.  Both create a variable called myFunction; however, the second definition makes it clear that a variable will be created called myFunction and it will contain the code.  

As defined the two variables listed above are part of the global scope - this is not a good practice  

#### The minimum way a function should be defined is as follows:  
```javascript
var myFunction = function(text){...}
```
This tells javascript to limit the scope of the function to the current containing code block.  Usually this is the script tag in an HTML page.

#### To store our function in its own object:
```javascript
var myObject = {myFunction:function(text){...}}
```
This makes nice encapsulation of related promoting reusability; however,  it  is still only available to the containing code block with the <em>var</em> keyword

```javascript
myObject = {myFunction:function(text){...}}
```
This makes the encapsulated code available globally and referred to as a <strong>Name Space</strong>.  Make sure the name <em>myObject</em> is unique, meaningful, short and has little chance of having widespread use.  This allows you to create code (functions etc...) without having to worry about conflicting with other libraries.