# JavaScript from Scratch

**Jesse Liberty** http://JesseLiberty.com @JesseLiberty

## Fundamentals

- An _**expression**_ is anything that evaluates to a value. For example, strings and numbers
- Variables **var** store the value of expressions for use later in the code
- The **+** operator is used to concatenate strings.  The concatenated string is normally stored in a variable.
- **Operators** that work on 2 values are called binary 3 + 5 is a binary expression.
- A **Statement** is any set of expressions

## Program Flow

- Unless told otherwise a JS program starts at the top and reads line by line to the bottom and stops

### If Statements

- If statements evaluate to true go to the next statement otherwise do something else

```javascript
var ageAsString = prompt("What is your age? ", "");
var age = Number(ageAsString);
//alert(age);

if ( age < 40 ) {
    alert("Oh you're so young...");
} else if ( age === 40 ) {
    alert("40 and older ROCKS!");
} else {
    alert("Don't worry, you're young at heart");
}

alert ("Thank you");
```

### Braces

- The braces group statements into a block of related statements

### While and Do While

- While a condition is true do something. This could result in the loop not running.
- Do something while a condition is true ensures the loop runs at least once.

### For loop

- Initialize a condition, run the loop, change the condition and check the condition again to determine whether to run the loop again or not. For a given condition do something...

### Break Statement

- Use the break statement to break out of a while or for loop

### Switch Statement

- A large number of If, else, else if statements makes a program difficult to read and maintain.  The switch statement helps with that problem.

```javascript
var animal = 'dog';

switch(animal){
    case "cat":
        alert("meow");
        break;
    case "dog":
        alert("bark");
        break;
    case "horse":
        alert("whinny");
        break;
    default:
        alert ("Unknown Animal!");
        break;
}
```

## Truth

### Boolean Values

- true
- false

### Boolean Operations

- And (&&) returns true if both sides are true
- Or (||) returns true if either side is true
- Not (!) reverses the truth of the statement it is applied to

### Falsy values

- "Falsy" values evaluate to false
- null, undefined, NaN, "", 0

### Truthy values

- Everything else

### Equality

- == vs. ===
  - == checks for simple equality 0 == false is true
  - === checks for exact equality 0 === false is false

### Operators

#### Unary

- meaning 1 term

```javascript
var x = 5;
x++;
alert(x);
```

- **x++** is the same as **x+=1** is the same as **x = x + 1;**

#### Binary

- meaning 2 terms
- **z = x + y;**
- "+" is a binary operator

#### Ternary

- meaning 3 terms
- using the conditional operator
- **var y = x < 10 ? x:10;**
- ? is a conditional operator
  - Term 1 is the condition to test **x < 10**
  - Term 2 is the value to return if the condition is true **x**
  - Term 3 is the value to return if the condition is false **10**
  - This is **_exactly_** the same as an if/else statement

## Functions

- Functions are the "heart & soul" of JavaScript.  In fact, they are the center piece of almost all programming languages.
- Functions can be thought of as "sub-routines" or little blocks of code that can be called over and over passing values in and getting values back.
- JavaScript runs top to bottom line after line.  When a function call is encountered - processing essentially stops and the function is processed.  When a **return** statement is encountered in the function processing resumes with the next line.

### Function Basics

- Named functions
- Anonymous functions (not named)
- Can be assigned to a variable
- Parameters
  - Too many? Ignored
  - Too few? Undefined

```javascript
// Can name the function as shown.  Or, can make it an anonymous function and assign it to a variable when calling it.  For example, var add = function (x, Y) {...}
function add(x, y) {
  var z = x + y;
  return z;
}
// if we just call add(5, 7) the function works; however, the value is thrown away because we aren't storing it anywhere.  Assigning it to a variable allows us to do something with the value returned by the functions.
var sum = add(5, 7);
alert(sum);
output.innereHTML = sum; //write the value of sum to the innerHTML property of the div with an id="output"

```

### Functions Return

- Return and Returning a value
  - No return value? Undefined

### Hoisting

- Functions in JavaScript support Hoisting. Hoisting means your function is lifted as if to the top of the file.  This is useful if one function calls another and you don't want to have to worry about the order in which you declare your functions.  You can also call a function before it is defined in the code.

### Functions and Scope

- In JavaScript the **ONLY** thing that creates scope is functions
- **Scope** deals with what variables are visible and at what time
  - Nested functions are in scope of outer function
  - Braces do not create scope
  - Global vs. Local values
- Variables declared outside a function are said to have global scope
- Variables declared inside a function are local only to the function in which they are declared and any nested functions

```javascript
function hypotenuse(a,b){
  function square(x){
    return x*x;
  }
  return Math.sqrt(square(a) + square(b));
}
output.innerHTML=hypotenuse(3,4);

//returns 5
```

### Closure

- **Closure** means a function is called in the scope in which it was declared; NOT in the scope in which it's invoked.

### Recursion

- **Recursion** is when a function calls itself

```JavaScript
function func1(num, exp){
  if (exp === 0) {
    return 1;
  }
  return num * func1(num, exp-1);
}

var answer = func1(4, 3)
output.innerHTML = answer;
```

## Objects and Collections

- **Objects** can be thought of as collections of properties
  - Additional properties can be added "on the fly"
  - Non-existent properties return undefined
  - Objects can have functions (often called methods)

### Objects

#### Example

- Here is an object to gather information about a dog

```JavaScript
var dog = {
  name: "Charlie",
  breed: "Mix",
  weight: 12,
  color: "Brown"
};

//get properties from the dog object
var dogWeight = dog.weight;
alert(dogWeight);

//add a property on the fly to the dog object
dog.disposition = "wonderful";

var disp = dog.disposition;

//change properties
dog.weight = 15;

var dogWeight2 = dog.weight;
alert(dogWeight2);
```

### Arrays

- Arrays act as collections
- **Length** is number of items in array
- Arrays are zero offset; the last member of an array is at length - 1
- **Push** adds a member to an array
- **Pop** returns last value in array
- For loops can iterate over an array

#### Defining Arrays

- Define an empty array

```javascript
var empty = []; // this is an empty array; items can now be added
empty[0] = 1;
empty[1] = 2;
alert(empty); // returns 1,2
```

- Define an array with preset values

```javascript
var primes = [1,2,3,5,7,11];
var thridPrime = primes[2]; // this is 3
```

- Arrays do not require uniform values to be valid

```javascript
var myArray = [1, "hello", false]; // this is a valid array
var truth = myArray[2];
alert(truth); // yields false

var myArrayLength = myArray.length;
alert(myArrayLength); //yields 3
```

- Define an array using a function

```javascript
function range(max) {
  var retVal = [];
  for ( var i = 0; i < max; i++) {
    retVal[i] = i * 2;
  }
  return retVal;
}

alert(range(5)); // yields 0,2,4,6,8
```

### Arrays Part 2

- Push

```javascript
function range(max) {
  var retVal = [];
  for ( var i = 0; i < max; i++) {
    retVal.push(i * 2); // Will push i*2 to the end of the array
  }

  var last = retVal.pop();
  alert(last); // yields 8 and the next alert only yields 0,2,4,6 because the 8 was popped off before we see it
  return retVal;
}

alert(range(5)); // yields 0,2,4,6,8
```

### Strings

- Literals use either single or double quotes
  - Allows inclusion of other character in string
    - If the string is defined with single quotes then doubles can be used in the string and will not be read as ending the string and vice-versa.
- Escape sequences begin with the \
  - Can escape quotes inside a string as well using the backslash "\" preceding the quote
  - **\n** is the escape character for new line.  This is ignored by _innerHTML_
- Use **+** operator for concatenation
- Many methods available for string
  - **charAt(index)** give a single character as a string at an index

  - **indexOf(string)** pass in a substring and find the index
    - `var indexOfBrown = newString.indexOf("brown");` tells you where in the string the word brown begins.
    - `var indexOfJumps = newString.indexOf("jumps");`
  - **Split** cuts a string into an array
    - `var myArray = newString.split(" ");` creates an array from a string with each space being the character to split on
  - **Slice** copies a piece of the string
    - `var myFox = newString.slice(indexOfBrown, indexOfJumps);` slice wants the index to begin cutting and the index to end cutting.

### Regular Expressions

```javascript
var myString = "my zip is 01720-1234 what is yours?";
var offSet = myString.search(/\b[0-9]{5}(?:-[0-9]{4})?\b/);
alert(offSet); // yields the starting index for the zip code
```

- The application **RegexBuddy** provides great help in determining what the regular expression for something might be... NOT FREE
- regexlib.com is an online resource very similar
