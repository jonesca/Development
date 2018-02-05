# Javascript Design Patterns

<div class="container">
<div class="row">
<div class="col-md-3">

## Creational
1. Constructor
2. Module
3. Factory
4. Singleton

</div>
<div class="col-md-3">

## Structural
1. Decorator
2. Facade
3. Flyweight

</div>
<div class="col-md-3">

## Behavioral
1. Command
2. Mediator
3. Observer

</div>
</div>
</div>

# Creating a New Object

<div class="container">
<div class="row">
<div class="col-md-3">

#### Just use curly braces...
`var obj = {};`
</div>
<div class="col-md-5">

#### Use Object.create  
`var next Obj = Object.create(Oject.prototype);`
</div>
<div class="col-md-3">

#### Use the new keyword
`var lastObj = new Object();`

</div>
</div>
</div>

# Assigning Keys and Values

<div class="container">
<div class="row">
<div class="col-md-5">

## Dot notation
```Javascript
var obj = {};
obj.param = 'new value';
console.log(obj.param); // new value
```
</div>
<div class="col-md-5">

## Bracket notation
```Javascript
var obj.{};
obj['param'] = 'new value';
console.log(obj['param']); // new value
```

</div>
</div>
</div>

