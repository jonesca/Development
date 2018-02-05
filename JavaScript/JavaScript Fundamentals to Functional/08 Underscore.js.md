#Underscore.js INtroduction
###What is underscore.js?  
It is a utility library that provides functional methods for you to use in your JS.
###Where is it?
http://underscorejs.org/  
Include it in your HTML:  
Annotated Source:  
http://underscorejs.org/docs/underscore.html

- underscore.js is made to work in any environment whereas jQuery is made to only work in the Browser.

#_.each()
```javascript
_.each([1,2,3], function(val,i,list){ //for an array it is index.  For an object use property name not index.
  console.log(val);
});
```  
- Iterates over a <b>list</b> of elements, yielding each in turn to an <b>iterator</b> function
- Each invocation of <b>iterator</b> is called with theree arguments:  (element, index, list). If <b>list</b> is a JavaScript object, <b>iterator</b>'s arguments will be (value, key, list).
- IMPORTANT: <b><u>You can't return anything from each</u></b>

###Example of _.each() usage
```javascript
//_.each(list, iterator)
var pocketmon = ['Charisaur', 'Bulbazard', 'Twomew'];

var logger = function(val){
  console.log(val);
};

_.each(pocketmon, logger); 
```
###Looping with _.each
![Looping with _.each](.\img\Loopingwith_each.JPG)

- In the example the for loop and the _.each call do the same thing.
- can use `function(name, index, list)` if you want; however, since it is not being used index and list are not needed.

#_.map()
###_.map() defined
`_.map([1,2,3], function(v,i,list){console.log(v)})`  
- Produces a new array of values by mapping each value in <b>list</b> through a trasformation function(<b>iteratror</b>).
- Each invocation of <b>iterator</b> is called with three arguments: (element, index, list).  If <b>list</b> is a JavaScript object, <b>iterator</b>'s aruments will be (value, key, lists).
- As opposed to `_.each` which can't return anything, it is <b>VERY</b> important what you return with `_.map`

###_.map() usage
![_.map usage](.\img\mapusage.jpg)

#Looping with _.map()  
###Example 01
![Looping with _.map](.\img\Loopingwith_map01.jpg)

###Example 02
![Looping with _.map](.\img\Loopingwith_map.jpg)

#Underscore Exercise  
- Use _.each to loop through an array and console.log() all the values. Now use it to console.log() the indices. How would this be different if you were looping through an object? 
```javascript
_.each([1,2,3], function(value,index,list){
  console.log(value);
  console.log(index);
})
```
 - If using object you would have the property name rather than indeces 

- Write a function called checkValue that searches an array for a value. It takes an array and a value and returns true if the value exists in the array, otherwise it returns false.

```javascript
var helloArr = ['bonjour', 'hello', 'hola'];

var checkValue = function(arr, val) {
  //checks if the val is in arr
  for (var i = 0; i < arr.length; i++){
    if(arr[i] === val){return true;}
  }
  return false;
}

checkValue(helloArr, 'bye');
```
- Rewrite checkValue using _.each. Make sure that you have underscore.js included where you are running your code.
```javascript
var checkValue = function(arr, val){
  result = false;
  _.each(arr, function(v){
    if(v === val){
      result = true;
    }
  });
  return result;
}

checkValue(helloArr, "bonjour");
```
- Write a loop that pushes all the values in an object to an array.  

```javascript
input: {two: 2, four: 4, three: 3, twelve: 12}
output: [2, 4, 3, 12]
```

- Use _.map to mimic the previous behavior.  

```javascript
var myNums = _.map({two: 2, four: 4, three: 3, twelve: 12}, 
  function(val, prop, obj){
    return val; //returns [2, 4, 3, 12]
    return prop; //returns [two, four, three, twelve]
  })
```

```javascript
input: {two: 2, four: 4, three: 3, twelve: 12}
output: [2, 4, 3, 12]
```

- Use _.filter to return all the even numbers in an array.  

```javascript
//_.filter only returns the true outcome
_.filter({two: 2, four: 4, three: 3, twelve: 12}, function(val){
  return val % 2 === 0) //val mod 2 = zero if val is even
})

//returns [2, 4, 12]

input: [9,8,7,6,5,2]
output: [8,6,2]
```