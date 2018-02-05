##Module 2 Using jQuery Selectors
- [Module 1: jQuery Fundamentals](01 jQuery Fundamentals.md)
- [Module 3: Interacting with the DOM](03 jQuery Fund - Interact with DOM.md)
- [Module 4: Handling Events](04 jQuery Fund - Handling Events.md)
- [Module 5: Working with Ajax Features](05 jQuery Fund - Working with Ajax Features.md)

###Selecting Nodes by Tag Name

```javascript
//jQuery selector examples within JavaScript
$("selectorExpresion");
$('p'); //select all p elements
$('p, a, span'); //get all the comma seperated tags
$('ancestor descendant'); //selects all descendants fo the ancestor: $('table tr')
$('div').css('background-color', 'Green'); //selects all the div elements and changes the color to Green
//show the HTML inside each div element
$('div').each(function() {
	alert($(this).html());
});
//count the number of divs and spans on a page
var coll = $('div, span');
alert (coll.length);
```

###Selecting Nodes by ID  
```javascript
//select <p id="myID">
$('#myID')
```

###Selecting Nodes by Class Name  
```javascript
$('.myClass')
//selects <p class="myClass"> element
$('.BlueDiv, .RedDiv') //selects all listed classes
$('a.myClass') //selects only <a> tags with class="myClass"
```

###Selecting Nodes by Attribute Value
```javascript
$('a[title]') //selects all <a> elements where there is a title attribute
$('a[title="Programming Info"]')
//EXAMPLES
alert($('div[title]').length); //alerts the number of divs where there is a title
var divs = $('div[title="Div Title"]'); //find all the divs where the title is Div Title and store it in a collection called divs
  alert(divs.length); //alert the length of the divs collection
var inputs = $('input[type="text"]'); //finds all inputs where type = text
  inputs.css('background-color', 'yellow'); //changes the background color of all the inputs with a type of text to yellow
```

###Selecting Input Nodes
```javascript
$(':input') //selects allinput elements including: input, select, textarea, button, image, radio and more
//Example
$(':input[type="radio"]') //targets all radio buttons on the page  
var inputs = $(':input'); //select all the inputs into a collection 
	alert($(inputs[1]).val()); //alert the second input (the first input is [0]  
```

###Additional Selector Features
```javascript
:contains() //will select elements that match the contents within the contains exception
$('div:contains("pluralsight")') //the match is case sensitive
$('tr:odd') and $('tr:even') //select odd / even rows in a table
//[attribute^="value"] will select all elements with an attribute that begins with stated value:
//[attribute$="value"] will find all the text that ends with the value
//[attribute*="value"] will find all the text that contains the value  
Example:
$('input[value^="Events"]')

```

Test Site: [codylindley.com](http://codylindley.com/jqueryselectors)
