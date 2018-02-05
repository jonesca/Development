##Working with Ajax Features
- [Module 1: jQuery Fundamentals](01 jQuery Fundamentals.md)
- [Module 2: Using jQuery Selectgors](02 jQuery Fund - Using Selectors.md)  
- [Module 3: Interacting with the DOM](03 jQuery Fund - Interact with DOM.md)
- [Module 4: Handling Events](04 jQuery Fund - Handling Events.md)

###Introduction
###jQuery Ajax Features
 - jQuery allows Ajax requests to be made from a page:
  -	allows parts of a page to be updated
  - Coss-Browser Support
  - Simple API
  - GET and POST supported
  - Load JSON, XML, HTML or even scripts
 - jQuery provides several functions that can be used to send and receive data:
  - `$(selector.load()`: loads HTML data from the server
  - `$.get()` and `$.post()`: get raw data from the server
  - `$.getJSON()`: Get/Post and return JSON
  - `$.ajax()`: provides core functionality
 - jQuery Ajax functions work with REST APIs, Web Services and more
  
###Loading HTML Content from the Server
- `$(selector).load(url,data,callback)` allows HTML content to be loaded from a server and added into a DOM object:
```javascript
$(document).ready(function(){
  $('#HelpButton').click(function(){
    $('#MyDiv').load('HelpDetails.html'); //relative URL will run relative to where the page is loaded from
  });
});
```

 - A selector can be added after the URL to filter the content that is returned from calling load():
 
 `$('#MyDiv').load('HelpDetails.html #MainTOC');` will filter the HelpDetails.html and return the detail from the #MainTOC id selector
 
 The next parameter you pass is the data to be passed to the server `load(url,data);`: 
 `$('#MyDiv').load('GetCustomers.aspx', {PageSize:25});`  Will return 25 customers
 
 - You can also pass a 3rd parameter which is a Callback function of load()
  
  ```javascript
  $('#OutputDiv').load('NotFound.html', fuction(response, status, xhr) {
    if (status == "error") {alert(xhr.statusText);
    }
  });
  ```
 
###Making GET Requests
- `$.get(url,data,callback,datatype)` can retrieve data from a server:
```javascript
$.get('HelpDetails.html', function(data) {
  $('#OutputDiv').html(data);
});
```

A really good jQuery Source viewer can be found at: james.padolsey.com/jquery

 - `$.getJSON(url,data,callback)` can retrieve data from a server:
 
 ```javascript
 $.getJSON('customerJson.aspx',{id:1},
 function(data){
   alert(data.FirstName + ' ' + data.LastName);
 });
 ```
###Making POST Requests
 - POST requests are not cached in the browser and can POST large amounts of data
 - `$.post(url,data,callback,datatype)` can post data to a server and retrieve results
 
 ```javascript
 $.post('GetCustomers.aspx', {PageSize:15},
  function(data){
    $('#OutputDiv').html(data);
  }
 );
 ```
###Introduction to the ajax() function
- `ajax()` is one function to rule them all
- The ajax() function provides extra control over making Ajax calls to a server
- Configure using JSON properties
 - contentType
 - data
 - dataType
 - error
 - success
 - type (GET or POST)
 
- The ajax() function is configured by assigning values to JSON properties:

```javascript
//check api.jquery.com for information about $.ajax()
$.ajax({
  url: '../CustomerService.svc/InsertCustomer',
  data: customer,
  dataType: 'json',
  success: function (data, status, xhr){
   alert("Insert status: " + data.d.Status + '\n' + data.d.Message); 
  },
  error: function (xhr, status, error) {
   alert('Error ocurred: ' + status); 
  }
});
```