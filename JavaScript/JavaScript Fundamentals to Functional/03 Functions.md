#Anatomy of a Function
Functions are an object that does something  

<b>Function Metaphor</b>  
Function is a blender; the blender can be passed around or set down, have fruit put in it and a button pushed to blend.  
The Blender being the function, the fruit being the arguments or parameters and the button being the code button that starts the function execution.

##Anatomy
![Anatomy](.\img\FuncAnatomy.JPG)
#Definition
- Everywhere you see the word <i>function</i> that is where the function definition begins  
- `var namImprover = function...` is an example of the name of a function <i>nameImprover</i>
 - This is the recommended way to name your function  
- Another way to name a function is shown as: `function nameStaySame(name)...` where the name of the function is <i>nameStaySame</i>  
- `$('body').hide();` <i>hide</i> is a name of a function

#Body
The body is the data located between the two curly brackets  
The code in the body of a function is never interpreted until the function is called  
Call time is when the function is actually interpretted and the code in the body is run  
Call time begins with the open parens of a function call when the function is called.
 - For example: hide(), $('body'), log(val);

```javascript
var nameImprover = function (name, adj) {
	return 'Col ' + name + ' Mc' + adj + ' pants';
};

$('body').hide();

myArr.forEach(function(val){ console.log(val);});

$('button').on('click', fuction(){
	console.log('Don\'t press my buttons!');
});
```
#Arguments and Parameters
Parameters are found right after the function key word. Before call time they have no value.  Parameters gete value by passing them arguments.  

##Return / Side Effects
If you don't have a specific <b>return</b> statement telling your function to return something it will return undefined  
Return will immediately break out of the functions and return something so you have to be careful where you place
a return  
Other outcomes of a functions are <b>side effects</b>

```javascript
var add = function(a, b){
	return a + b;
};

add(3, 4, 5); //returns 7
add(4, 10, 3); //returns 14
//how do we change the function to retun 13?
var add = function(a, b, c){
	return b + c;
};

```
The arguments keyword is powerfull; it allows you to see what arguments are being passed to the function
so you can trouble shoot what the function is doing with the parameters and arguments  

![Arguments Keyword](.\img\ArgumentsKeyWord.JPG)  

```javascript
var add = function(){
	reesults = 0;
	for(var i = 0; i < arguments.length; i++){
		results += arguments[i];
	}
	return results;
};
add(3, 10, 5, 3, 4, 6, 7, 100); //Returns the sum of all the arguments
```

![Arguments Example](.\img\Example1.jpg)

The arguments keyword is and array-<i>like</i> method.  This means all the Array methods don't / won't
work with the arguments keyword  

#Constructors
A constructor is a function that returns an object

#Looping

```javascript
//Loop through and create the animals and add them to the farm  

var AnimalMaker = function(name){
	return{
		speak: function(){
			console.log("my name is ", name);
		},
		name: name,
		owner, 'CJ'
	};
};

var animalNames = ['Sheep', 'Liger', 'Big Bird'];

var farm = [];

for(var i = 0; i < animalNames.length; i++){

//solution 1
	farm [i] = AnimalMaker(animalNames[i]);

//Solution 2:
	var animal = AnimalMaker(animalNames[i])
	farm.push(animal);
	
//Solution 3:
	farm.push(AnimalMaker(animalNames[i])); //this condenses the previous two lines into a single line
}

// Loop through the farm and have the animals say their name
for(var i = 0; i < farm.length; i++){
	farm[i].speak();
}
```
