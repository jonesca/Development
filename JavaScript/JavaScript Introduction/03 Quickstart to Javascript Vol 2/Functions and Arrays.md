# Functions and Arrays
## Functions
Create a function like this:

```javascript
function functionName(parameters, parameters){
    //code to be run in here
}

//Call the function like this:
functionName(argument, argument);
```

## Arrays
Define and create an array like this:  
`var friends =[];`  
 
Values can be added to the array at the time of creation like:  
`var friends = ["Mark","Lisa","Denny"];`

```javascript
var friends = ["Mark","Lisa","Denny"];

//call and display a member of the array
console.log(friends[1]); //displays Lisa, Mark is in position 0

friends[3] = "Bob"; //adds Bob to our list of friends in position 3

friends.push("Mary"); //adds Mary to the last position in the array
```

### Example
Loop through an array to greet friends using a function

```javascript
var friends = ["Mark","Lisa","Denny","Peter","Steven","Claudette"];

function greetFriends() {
    for(var i = 0; i < friends.length; i++){
        console.log("Hi there " + friends[i]);
    }
}

greetFriends();
```