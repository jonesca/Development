//Use this file to implement Part One of your project

var animal = {}; //create a variable object

animal.username = "Minnie"; //assign a property using dot notation
animal['tagline'] = "Feed Me!"; //assign a property using bracket notation

var noises = []; //create an empty variable array

animal['noises'] = noises; //assign the array as a property of the object

console.log(animal); //show the animal object in the console

var count = 0;
for (var key in animal) {
	count++; //this is the same as count = count + 1;
	if (key === "username") { //the === is a strict check and the == is a little more loose
	    console.log("Hi my name is: " + animal[key]);	
	} else if (key === "tagline") {
		console.log("I like to say: " + animal[key]);
	}
}


var noiseArray = ["Meow", "Hiss"]; //create an array with 1 element

noiseArray[1] = "Oink"; //Assign an element to my array using bracket notation
noiseArray.push("Moo"); //Append an element to my array
noiseArray.unshift("CluckCluck"); //Add an element to the beginning of the noiseArray
noiseArray[noiseArray.length] = "Bark"; //Using bracket notation add another noise to the end

console.log(noiseArray.length);

console.log(noiseArray);

animal.noises = noiseArray; //Nest the Array in the Object
console.log(animal);

var animals = []; //create a new array

animals.push(animal); //insert our animal object into the animals array
//Create a new animal quackers
var quackers = {username: 'DaffyDuck', tagline: 'Yippeee!', noises: ['quack', 'honk', 'sneeze', 'growl']};

animals[animals.length] = quackers; //add the quackers object to the end of the animals array
console.log(animals);
console.log(animals.length);
console.log("Create two new animals");

//create an animal object dog using object literal notation
var dog = {
	username: 'Mojo',
	tagline: 'Pet Me!',
	noises: ['bark', 'woof', 'whine']
};

//create an animal object honeybadger using all dot notation
var honeyBadger = {};
honeyBadger.username = 'Randall';
honeyBadger.tagline = 'Honey badger dont care';
honeyBadger.noises = ['screech', 'growl'];

animals.push(dog, honeyBadger);
console.log(animals.length);

//We now have a collection of animals with properties in our Array

//1. Write a function, "AnimalTestUser" that has one string parameter, "username".  
//It returns an object with a username property
//2. In the "AnimalTestUser" function, create a check that sees how many arguments are passed.
//If there is more than one argument, create a property, "otherargs" that is an array of the remaining arguments.
//3. Write a constructor function, "AnaimalCreator" that returns a single animal object.
// The constructor function has 4 parameters: "username, species, tagline, and noices."
//The animal object should have at least 5 properties: "username, species, noises, tagline, and friends."
//The values should all be strings except "noises and friends", which are arrays.
//4. Write a function, "addFriend" that takes an animal object (like the one retuned from the "AnimalCreator" function) and adds another animal object as a friend.
//5. Change your "addFriend" function to only add the username of the friend, not the whole object.
//6. Create a "myFarm" collection of at least 3 animal objects.  Give them some friends using addFriend, too!
//7. Create a function, "addMatchesArray", that takes a farm (array of animal objects) and adds a new pro to each animal object called "matches" that is an empty array.  
//Hint: you will need a loop
//8. create a function, "giveMatches", that takes a farm collection (aka an array of animal objects that already has a match property.
//If selects a name from the friends array and adds it to the "matches' array.
//You can choose how the selection is made (random, the first element, etc).  make sure all yur animal objects have friends

//Questions 1 & 2

function AnimalTestUser(username) {
	var argLength = argumentss.length;
	var otherArgs = [];
	if (argLength > 1) {
		for (var i=1; i < argLength; i++) {
			otherArgs.push(arguments[i]);
		} 
	}
	
	return {
		username: username,
		otherArgs: otherArgs
	};
}

var testSheep = AnimalTestUser('CottonBall', {'loves dancing': true}, [1,2,3] );
console.log(testSheep );

//Question 3
function AnimalCreator (username, species, tagline, noises){
	var animal = {
		username: username,
		species: species,
		tagline: tagline,
		noises: noises,
		firends: []
	};
	return animal;
}

var sheep = AnimalCreator('Cloud', 'sheep', 'You can count on me!', ['baahhh', 'arrgg', 'chewchewchew']);
console.log(sheep);

//Questions 4 & 5
function addFriend(animal, friend){
	animal.friends.push(friend.username); //just add the username
	animal.friends.push(friend); //push the whole friend object
}
var cow = AnimalCreator('Moo', 'cow', 'got milk?', ['moo', 'moooooo']);
console.log(cow);

var llama = AnimalCreator('Zeny', 'llama', 'lllll', ['sdf', 'sdfsf']);
console.log(llama);
addFriend(sheep, cow);
console.log(sheep);
addFriend(sheep, llama);
console.log(sheep);

//Question 6
var myFarm = [sheep, cow, llama];
addFriend(cow, sheep);
addFriend(llama, cow);
console.log(myFarm);

//Question 7
function addMatchesArray(farm){
	for (var animal in farm){
		farm[animal].matches = [];
	}
}
addMatchesArray(myFarm);
console.log(myFarm[0]);

//Questions 8
function giveMatches(farm){
	for (var animal in farm){
		farm[animal].matches.push(farm[animal].firends[0]);
	}
}

giveMatches(myFarm);
console.log(myFarm[0]);

//create a Friendslist
//Create a Relationships object

var friends = [];
friends.push(animals[0].username, animals[1].username);

console.log(friends);

var relationships ={};
relationships.friends = friends;

console.log(relationships); //--> Object {friends: ["Mittens", "DaffyDuck"]}
console.log(Object.keys(relationships).length); //--> 1

var matches = [];
relationships.matches = matches;
relationships.matches.push('pig');
console.log(relationships);
//-->Object {friends: ["Mittens", "DaffyDuck"], matches: ["pig"]}

for (var i=0; i < animals.length; i++) {
	animals[i].relationships = relationships;
}

console.log(animals); 