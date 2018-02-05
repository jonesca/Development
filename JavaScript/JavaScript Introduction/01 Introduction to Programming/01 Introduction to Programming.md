# Introduction to Programming in JavaScript
\- Kyle Simpson

- The code you write is for you to read; the computer converts to binary
- Source code is for the developer and others to read and understand what the program is doing

`a = b * 2;` This is a single statement.  A single statement generally ends with a semicolon.  The number 2 is a <em>literal</em> value.  <em>a</em> and <em>b</em> are known as variables. If a word or letter doesn't have a special meaning in the language it is a variable or identifier. `b * 2` is the expression.  The = symbol indicates assignment.  So we are computing the value of the expression and assigning it to the variable or identifier <i>a</i>.  The entire statement is known as an <strong>assignment statement</strong>.

Statements are made up of one or more <em>expressions</em> An expression is any reference to a variable or value, or a set of variable(s) and value(s) combined with operators.

`alert("Hello World");` alert is a function of the browser not JavaScript.

`console.log("Hello World");` is the simplest way to print out messages.

In a console: 

```javascript
var a = 2; 
console.log(a);
```
 will return 2

```javascript
var age = prompt("what is your age?")
console.log(age);
```
returns whatever you enter for your age.

## Operators
`a = a + 2` and `a += 2` are equivelant statements.  The shortcut operator just modifies the existing operator. 

### Explicit Conversion
`a = String(a);` converts a <em>numeric</em> value of a to a <em>string</em> value  
`b = Number(a);` converts a <em>string</em> value of a to a <em>numeric</em> value

### Comments
Comments in code should explain the <em>why</em> or if necessary the <em>how</em>.  <strong>NEVER</strong> the what; your code should do that.  
Be as verbose as necessary; no more, no less.  

### variables
Always formal declare variables 

```javascript
var a = 42;
let b = 2;
const c = 42;
```

Always declare variables before using them  
An identifier can also be declared as a function: `function a() {}` = declaring a variable called a that has this function value in it...  

### Conditional Statements
<strong>Falsy</strong> values are those with the following values:
- 0, -0 NaN (not a number number)
- "" empty string
- false
- null
- undefined

If it isn't falsy it is truthy

### Loops
Loops are also conditional; they test the conditional and run while the condition is true

### Functions
A function is a way to logically group a piece of code together, but a function makes it so you can call that code more than once.