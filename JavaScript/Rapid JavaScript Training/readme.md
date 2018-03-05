# Rapid JavaScript Training

- **Mark Zamoyta** markzamoyta@gmail.com

## JavaScript Basics

- The preferred place for **\<script>\</script>** tags in the **\<body>\</body>** at the end so your page can load in the browser while the script is running.

- The **defer** keyword delays the execution of the script until other scripts listed after have run..._not a good idea to use defer_

```html
<script defer src="js/app.js"></script>
<script src="js/salesOrder.js"></script
```

- When a **var**iable is not initialized it's value and type are always set to undefined

### Simple Datatypes

- String
- Number
- Boolean

### Complex Datatypes

- object
  - **JSON** is of type objects
  - **Arrays** are of type object
  - **null** is of type object
- function

### Function Fundamentals

- The reason for creating/declaring functions is so they may be called over and over; otherwise, there really isn't much use.

#### Example of the simplest type of function

```javascript
function printOrder() {
  console.log('Printing order.');
}

printOrder();
// Shows Printing order. in the console
```

#### Example of passing a parameter

```javascript
function printOrder(orderID) {
  console.log('Printing order:' + orderID);
}

printOrder('9002');
// Shows Printing order: 9002 in the console
```

#### Example of returning a value from a function

- The **return** keyword is how we get information back from a function
- Assign a variable to the function to store the value being **return**ed

```javascript
function calcTotalPrice(quantity, price)
{
  return quantity * price;
}

var totalPrice = calcTotalPrice(2, 4.00);
console.log(totalPrice);
// Shows 8 in the console
```

#### Function Expression Example

- This is an anonymous function meaning it doesn't have a name
- A function expression delcares a function and assigns it to a variable
- The _typeof_ the variable is **function**
- When _activateOrder_ is called it will write a message to the console
- Assigning functions to a variable is fairly common in javaScript

```javascript
var activateOrder = function(){
  console.log('Order activated.');
};

activateOrder();
// Order activated. shows in the console
// If the () are left off nothing will print since it is just a reference to a variable and doesn't execute anything
```

### If and Switch Statements

- if want multiple cases to equate to the same value they can be lined up
- if no cases match the condition the statement returns undefined

```javascript
var orderType = 'unknown';
var shipMethod;

switch (orderType){
  case 'business':
  case 'personal':
    shipMethod = 'UPS Ground';
    break;
  default:
    shipMethod = 'USPS';
    break;
}
console.log(shipMethod);
//USPS shown in the console
```

### while and do...while Statements

- **while** is used to test a condition and do something as long as that condition is true
- **do...while** will always execute once and then check the condition

### for and for...in

#### for

```javascript
var lineItemCount = 3;

for (var i=0; i<lineItemCount; i++)
  console.log(i);
// 0 1 2 shows in the console
```

#### break

- **break** is used to exit a loop

```javascript
var lineItemCount = 5;

for (var i=0; i<lineItemCount; i++)
  console.log(i);
  if (i == 1)
    break;
// 0 1 shows in the console and the function breaks out
```

#### continue

- **continue** is used to go to the next iteration of a loop

```javascript
var lineItemCount = 5;

for (var i=0; i<lineItemCount; i++)
  if (i==1)
    continue;
  console.log(i);
// 0 2 3 4 shows in the console
```

#### for...in

```javascript
// declare a JSON object
var lineItem = {
  product: 'Widget 1',
  quantity: 4,
  price: 9.50
};

// the variable field is used to loop through each property in the object
for (var field in lineItem)
  console.log(field);
// product quantity price shows in the console
```

```javascript
var lineItem = {
  product: 'Widget 1',
  quantity: 4,
  price: 9.50
};

for (var field in lineItem)
  console.log(field + ": " + lineItem[field]);
// product: Widget 1 quantity: 4 price: 9.50 shows in the console
```

### JavaScript Usage Features

```javascript
var $product = 'PRD-4000';
$product += 'X2'; //same thing as $product = $product + 'X2'
console.log($product);
// PRD-4000X2 shows in the console
```

## Variables, Types and Scope

### Hoisting

- Hoisting refers to having access to variables before they are even declared.
  - Two Pass Compilation in JavaScript
    - Pass 1: All declarations are located and identifiers are known by the compiler
    - Pass 2: Execution occurs in Pass 2. Because all variables are known from Pass 1, they may be accessed before they're declared.
- The word "hoisting" is used to describe this behavior because it's as if the declarations are lifted (hoisted) to the top of the function before execution.
- During hoisting, hoisted variables are initialized to undefined; this causes a lot of errors because variables are set to undefined in the first pass; however, they aren't initialized to the correct values until the second pass.  The way to avoid this is to avoid hoisting all together, expecially with variables

### Numbers

- All numbers are of type _number_ in javaScript
- Any number that begins with 0 is _octal_ having a base of 8
  - Octal numbers range from 0 to 7
  - in _strict_ mode Octals aren't allowed

```javascript
var oct = 070;
console.log(oct);
// 56 shows in the console
```

- Hex numbers are much more common.
  - Hex numbers begin with 0x

```javascript
var hex = 0x10;
console.log(hex);
// 16 shows in the console
```

### String

- **string** is a primitive data type
- _length_ is a string property so it is not necessary to when calling length to include ()
- **.trim()** is a function that trims leading and trailing whitespace from a string
- **.toLowerCase()** converts a string to all lower case letters
- **.toUpperCase()** converts a string to all UPPER case letters

### Boolean

- **true** and **false** are specified all lower case or you'll get an error
- "**!!**" will turn any variable into boolean.  The first ! turns it to boolean and negates it.  The second ! reverses the first for the correct boolean value

### undefined & null

- A declared variable that has not be initialized will be set to **undefined**
  - It is not good practice to explicitly let a variable be _undefined_
  - To wipe out a variable, it is good practice to use **null**
- If a variable is set to undefined we know JavaScript did that.  If the variable is set to null we know the code did that.
- When variable is initialized to _null_ it becomes an empty **object**
- JavaScript considers undefined and null to be equal.  So if they are compared with == they evaluate to true.  When compared with === they evaluate to false since undefined is typeof undefined and null is typeof object

### Global Scope

- When working outside a function **this** === **window** evaluates to true indicating global scope

## Operators

### Addition "+"

- JavaScript uses floating point number for decimals; floating point numbers are inaccurate so **5.1 + 3.3** evaluates to 8.39999999 rather than 8.4 as expected.
  - To fix this error:

  ```javascript
  var total = 5.1 + 3.3;
  console.log(total.toFixed(2));
  //8.40 shows in the console
  ```

- JavaScript treats everything as a **string** context first
- Strings are concatenated using "+"

### Subtraction "-"

- Subtraction is defaulted to numeric context with subtraction "-"
- With strings, JavaScript sees the "-" and immediately puts everything in a numeric context

```javascript
var total = 3.8 - 2.1; //evaluates to 1.69999997
console.log(total.toFixed(3)); //evaluates to 1.700 with subraction we use 3 as the rounder
var total = "300" - "200"; //evaluates to 100
var total = "PRD300" - "ITEM200"; //evaluates to NaN
```

- If you have a specialized object that needs to operate as a number you do so by assigning the value of the object to _valueOf_

```javascript
var obj = {
  valueOf: function() {return 100;}
};
var total = 300 - obj;
console.log(total); //evaluates to 200
```

### Unary Operatorys "++ -- +value -value"

- **++level** or **level++** is the same as saying **level = level + 1**
  - Different is when level is incremented

```javascript
var level = 5;
var nextLevel = ++level; //evaluates to 6
var nextLevel = level++; //evaluates to 5 since level == 5 and is assigned then incremented
```

- Use **"-"** to flip the positive/negative value of a number

```javascript
var value = -42;
value = -value; //evaluates to 42
```

### Bitwise Operators

```javascript
var num1 = parseInt('1010', 2);
var num2 = parseInt('0110', 2);
var total = num1 & num2; //the & is the bitwise operator. we want to and these two numbers together.  Where 1 lines up with 1 it is 1 - evaluates to  10
//essentially, the comparing down so 1,0; 1,0; 1,1; 0,0
//working with binary numbers the bits are important not the decimal value
var total = num1 | num2; // | is the bitwise or.  evaluates to 1 if there is a 1 in the compare.  Evaluates to 1110
var total = num1 ^ num2; // ^ is exclusive or; to get 1 to come down one value must be 1 and one value must be 0 - Evaluates to 1100
```

### Miscellaneous Operators

#### compound operators

- **+=**
- **-=**
- ***=**
- **/=**
- **%=**
- **<<=**

```javascript
var total = 6;
total += 4; // simply adding 4 to the value of total.  Same thing as total = total + 4;
```

```javascript
var total = 1;
total <<= 2; // shift left 2: take 1, multiply it by 2 then do it a again - results in 4
var total = 4;
total >>= 1; //shift right 1: take 4 devide by 2 once - results in 2
```

## Arrays and Reference Types

### Understanding Reference Types