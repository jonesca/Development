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