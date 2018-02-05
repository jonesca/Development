# Task Creation

The three methods above are all interchangeable for right now...

```javascript
 //***********
var task = {};
 //***********

task.title = "My task";
task.description = "My Description";
task.toString = function (){
    return this.title + " " + this.description;
}

console.log(task.title); //My task
console.log(task.toString()); //My task My Description
```

```javascript
 //***********
var task = Object.create(Object.prototype); //gives the same result as the line above
 //***********

task.title = "My task";
task.description = "My Description";
task.toString = function (){
    return this.title + " " + this.description;
}

console.log(task.title); //My task
console.log(task.toString()); //My task My Description
```

```javascript
 //***********
var task = new Object(); //gives the same result
 //***********

task.title = "My task";
task.description = "My Description";
task.toString = function (){
    return this.title + " " + this.description;
}

console.log(task.title); //My task
console.log(task.toString()); //My task My Description
```

Another alternative
```javascript
 //***********
var task = {
    title: "My Title"
    description: "My Description"
    };

 //***********

task.toString = function (){
    return this.title + " " + this.description;
}

console.log(task.title); //My task
console.log(task.toString()); //My task My Description
```
