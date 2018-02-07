# Common Object Patterns

## Magic Arguments

* Arguments aren't required like .NET languages
* Like all variables in JavaScript arguments are _untyped_

```javascript
//A simple function to return the sum of any number of arguments
function myFunc() {
    var x = 0;

    for (var i = 0; i < arguments.length; i++) {
        x = x + arguments[i];
    }
    return x;
}
```

## Chaining

```Javascript
jQuery('.foo') // use jQuery to find the elements with the class foo
    .addClass('bar') // call the method add a class bar to the elements found
    .fadeIn('slow') // call the fade in method
    .html('Hello World') // modify the HTML of those elements

// execute three lines of code based on the jQuery selector without having to assign that to a variable
```

### Implement a chained API

```javascript
// Define the API
var Calc = function (start) {
    this.add = function (x) {
        start = start + x;
        return this;
    };

    this.multiply = function (x) {
        start = start * x;
        return this;
    };

    this.equals = function (callback) {
        callback(start)
        return this;
    };
}

// Write the chained API calling the function and the methods
new Calc(0)
    .add(1)
    .add(2)
    .multiply(3)
    .equals(function (result) {
        console.log(result);
    });
```

## Observable Properties

- JavaScript does not have _method bodies_ like .NET does
- JavaScript properties are really just public fields
- Use _methods-as-properties_

### Methods-as-properties

