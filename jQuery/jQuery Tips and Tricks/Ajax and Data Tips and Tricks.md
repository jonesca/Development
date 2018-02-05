#Ajax and Data Tips and Tricks

##How to use Ajax Promises
Ajax = Asynchronous JavaScript and XML 
Asynchronouse = of or requiring a form of computer control timing protocol in which a specific operation begins upon receipt of an indication (signal) that the preceding operation has been completed.

<b>What is a Promise?</b>
- A promise is essentially the code saying "I promise to give you the data or an error when the asynchronous call returns"
- A promise is an object that helps deal with deferred results
- Typically used with asynchronous operations
- Example scenario that uses promises:
 1. Client calls an asynchrounous function named getAccount()
 2. getAccount() immediately returns a promise object
 3. Client uses promise object to wire up success/error callbacks
 4. getAccount() continues to execute in the background
 5. Client callback(s) runs once getAccount() returns results
 
 ###Example:
 ```javascript
 //EXAMPLE 1
 function getCustomers() {
	 //this is the promise object
	 return $.getJSON("http://localhost/api/cutomers");
 }
 
 //Consuming the promise an wiring up callbacks
 getCustomers()
 	//Success callback
	 .done(function (custs) {
		 //Process data
	 })
	 //Failure callback
	.fail(function (data) {
		alert(data.statusText);
	});
	
//EXAMPLE 2
function getCustomers() {
	 //this is the promise object
	 return $.getJSON("http://localhost/api/cutomers");
 }
 
 //Consuming the promise an wiring up callbacks
 getCustomers()
 	//Success callback
	 .then(function (custs) {
		 //Process data
	 },
	 //Failure callback
	(function (data) {
		alert(data.statusText);
	});
 ```
 
 ##Consolidating jQuery Ajax Calls