##Module 3: Interacting with the DOM
- [Module 1: jQuery Fundamentals](01 jQuery Fundamentals.md)
- [Module 2: Using jQuery Selectgors](02 jQuery Fund - Using Selectors.md)  
- [Module 4: Handling Events](04 jQuery Fund - Handling Events.md)
- [Module 5: Working with Ajax Features](05 jQuery Fund - Working with Ajax Features.md)  


###Introduction  
 
###Iterating Through Nodes  
.each(function(index, Element)) is used to iterate through jQery objects:
```javascript
//interate through each div element and return it's index number and text
$('div').each(function(index) {
  alert(index+ '=' +$(this).text());
});  
```
###MOdifying Properties and Attributes  
this.propertyName can be used to modify an object's properties directly

```javascript 
//Iterates through each div and modifies the title.  If the property does not exist, it will be added
$('div').each(function(i) {
	this.title="My Index="+i;
	});
```
###Adding and Removing Nodes
  .append() to append nodes to the bottom of a child element
  .prepend() to prepend nodes to the top of a child element
  .wrap() to wrap a node with another
  .remove() will remove matched elements from the DOM
  Example:
  ```javascript
  <div class="state">Arizona</div>
  
  $('.state').wrap('<div class="US_State" />');
  //the above code results in:
  
  <div class="US_State">
  	<div class="state">Arizona</div>
  </div>
  
  $('.phonoe, .location').remove(); //will result in objects with .phone or .location classes being removed from the DOM
  ```
###Modifying Styles
```javascript
///The .css() function can be used to modify and object's style:
	$("div").css("color", "red");

///Multiple css values in one statement
	$('div').css({
		'color':'#ccc',
		'font-wight':'bold'
		});  
```
###Modifying Classes 
.addClass() 
.hasClass()
.removeClass()
.toggleClass()
```javascript
$('p').addClass('classOne');
//More than one class
$('p').addClass('classOne classTwo');

//.hasClass returns true if the class exists
if($('p').hasClass('styleSpecific')) {
	//perform work	
}

//.removeClass() can remove one or more classes
$('p').removeClass('classOne classTwo'); //remove spedified
$('p').removedClass(); //remove all classes from all paragraph tags

//.toggleClass() alternates adding or removing a class based on the current presence or abence of the class
$('#PhoneDetails').toggleClass('highlight');
``` 