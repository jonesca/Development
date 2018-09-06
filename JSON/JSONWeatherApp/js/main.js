// JavaScript Document

// Create a name;value pair
var start = '{"favColor":"Orange", "favSeason":"Fall"}';

// Convert it to a JSON Object
var myObject = JSON.parse(start);
console.log(myObject);

// Convert the JSON Object back to a string
var myString = JSON.stringify(myObject);
console.log(myString);

// Convert it to a JSON Object
var myObject = JSON.parse(myString);
console.log(myObject);


// Single Level JSON
var theData1 = '{"first":"Cody", "last":"Jones", "city":"Wellsville"}';
var myObj = JSON.parse(theData1);
console.log(myObj);

document.getElementById('message').innerHTML = myObj.last + ", " + 
    myObj.first + ": " + 
    myObj.city;

// Double Level JSON
var theData2 = '{"Jane":{"age":"29", "degree":"MFA"}, "Jim":{"age":"49", "degree":"MA"}}'
var myObj2 = JSON.parse(theData2);
console.log(myObj2);

document.getElementById('message').innerHTML = myObj2.Jane.age;


// Triple Level JSON
var theData3 = '{"Jane":{"age":"29", "degree":{"BA":"UVA", "MA":"VMI"}}, "Jim":{"age":"49", "degree":"MA"}}'
var myObj3 = JSON.parse(theData3);
console.log(myObj3);

document.getElementById('message').innerHTML = myObj3.Jane.degree.BA;

//// Create a new XMLHttpRequest Object
//var xhr = new XMLHttpRequest();
//
//// prepare the object
//xhr.open('GET', 'data.json', 'true');
//xhr.responseType = 'text';
//xhr.send();
//
//xhr.onreadystatechange = function() {
//    console.log(xhr.readyState);
//    console.log(xhr.status);
//    console.log(xhr.statusText);
//} // end function
//
//xhr.onload = function(){
//    if (xhr.status === 200){
//        var mystuff = JSON.parse(xhr.responseText);
//        console.log(mystuff);
//    } // end if
//} // end onload function

//In a real application it would look more like this:
var xhr = new XMLHttpRequest();

xhr.open('GET', 'data.json', 'true');
xhr.responseType = 'text';

xhr.onload = function(){
    if (xhr.status === 200){
        var mystuff = JSON.parse(xhr.responseText);
        console.log(mystuff);
    } // end if
} // end onload function

xhr.send();