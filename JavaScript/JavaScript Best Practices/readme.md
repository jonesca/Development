# JavaScript Best Practices

## Linting Code

- A linter scans your code to detect potential problems and errors

### JS Lint

- Preconfigured
- Not very configurable

### ES Lint

- The most recednt
- Custom rules support
- Lots of configuration

### JS Hint

- Fork of JSLint
- Much more configurable
- Built in package support
- Not extensible

#### Using JSHint

- Use JSHint from the browser at jshint.com.  Paste your code in and see what errors are suggested.
- Use Brackets with the JSHint plugin
- Use JSHint from the command line

## Syntax

### Equality

- Single = is assignment
- Double == compares two value variables; if variables are two different types, it will convert them to the same type...
- Triple === compares two variables with no type conversion (USE TRIPLE === by default)

```JavaScript
/* ************************************************************* */
/* Not the prefered way to go about checking if something exists */
/* ************************************************************* */
var x = 1;

if (x) {
    console.log('Exist');
} else {
    console.log('Not Exist');
}

/* ************************************************************* */
/* The preferred method for checking if something exists         */
/* ************************************************************* */
var x = 1;

if (typeof x !== 'undefined'){
        console.log('Exist');
} else {
    console.log('Not Exist');
}
```

## Bahaviors

### Strict Mode

- "JavaScript is trying to help... Don't let it." 

```javascript
'use strict'; /* makes it so JS doesn't try to help */
var toPrint = "print me";

function print(out) {
    stringToPrint = out;
    console.log()
}
```