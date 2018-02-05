#Introduction
An anonymous function is a function with no name assigned and poised to run in order of execution

#Anatomy of a jQuery Command

```javascript
//find all the div elements on a page
var divs = $('div');
divs //shows all the divs selected
divs.length //shows the number of divs selected

var h2s = $('h2'); //selects all the h2 elements
var text = $('h2').text(); //gets the text associated with the h2 element.  In this case the call to text is using the "getter" functionality
$('h2').text('1234 Main Street'); //changes the value of the text in the h2 element.  In this case the call to text is using the "setter" functionality. 
//Many functions in jQuery of both getter and setter functions.

```
#Finding Parts of a Page
##CSS 3 Selectors

###Values for <i>ID</i> must be unique  
- Example: `<div id = "content-container">`  

To select the id "content-container" use `$('#content-container')`  

###Values for <i>class</i> may be repeated and have multiple space-separated values  
- Example: `<h1 class="title">Introduction</h1>`  

To select a the <i>class</i> use a dot such as `$('.title')`  

###Pseudo classes reflect a specific state of an element
They are easy to spot because they make use of a colon right after the element name.  
- Example: `$('div:first-child')`

A good course for more information on CSS3 is [<b>CSS3 From Scratch</b>](http://bitly.com/ps-css3)  
A good course for more information on CSS is [<b>Introduction to CSS</b>](http://bitly.com/ps-css)  
  
```javascript
var firstFeature = $('#special-features li:first-child'); //Finds and selects the element with the ID of special-features then selects the list item's first child or the first bullet point in the associated list 

var weblinks = $('a[href^="http://"]');  //Find any anchors on the page having an attribute of href that start with a value of http://.  The ^ symbol indicates "start with".  This selector returns links to external links; there are no relative links on the page returned
```

##HTML Literals
By passing in fragments of HTML you can create new elements using jQuery.

```javascript
var div = $('<div>This is a DIV</div>'); // creates a div
var elements = $(['<span>one</span>', '<span>two</span>']); //creates an erray of elements
```

##DOM Elements
Can work with native DOM elements as well  
For example:

```javascript
var detail = $(document.getElementByID('house-detail')); //don't use the # to indicate ID here because we are using the DOM element not a CSS3 selector and the # is unique to jQuery

var titles = $([document.querySelector('h2'), document.querySelector('h3')]); //selects all of the H2 and H3 titles on a page
```

#Adding Style and Effects with a Little Class
```javascript
$('h2').attr('style', 'background-color:#ff3'); //brute force way to change style
$('h2').css({bacgroundColor: '#f60' });  //sets the background color
$('h2').css('bacgroundColor'); //gets the background color
$('h2').addClass('highlight'); //add the highlight class to the h2 element
$('h2').removeClass('highlight'); //removes the highlight class to the h2 element
$('h2').addClass(function(){
	return 'bordered';  //adds the class bordered to the h2 element.  Can use removeClass here too
});
//other handy functions are show, hide, toggle, fadeIn, fadeOut (the fade functions have a speed parameter as well)
$('h2').fadeIn('fast');
```

#When Events Happen
An event is something that happens such as a click, mouse enter / leave, key down / up / press, page load, form submitted, window scrolling, element focused, etc...  

```javascript
$(function(){ //this is the jQuery ready all command will be in this function that is in the .js file
	console.log('the page is ready');
});

$(document).ready(function(){
	console.log('the page is ready');
});

$('#save-button').on('click', fuction(){
	console.log('the save button is clicked');
});

//handle an event only the first time it happens
$('#save-button').one('click', fuction(){
	console.log('the save button is clicked');
});

$('#save-button').click(fuction(){
	console.log('clicked');
});

$('#save-button').blur(fuction(){
	console.log('No more love :(');
});  //click the button and tab off of it
```

#Chaining Makes It Easier
```javascript
//Inefficient Example.  This requires accessing the DOM on each call to get the same selector each time
$('#special-features li').addClass('highlight bordered');
$('#special-features li').height('200px');
$('#special-features li').width('50%');

//Efficient example accomplishing the same result.  Chained only requires accessig the DOM one time
$('#special-features li').addClass('highlight bordered')
						 .height('200px')
						 .width('50%');
						 
//Even more efficient
var items = $('#special-features li');  //stores the selected li in a variable so you don't have query the DOM again if you use the selector over and over

	items.addClass('highlight bordered')
		 .height('200px')
		 .width('50%');
```

#Working with User Input
```javascript
$('notes-box').val('these are my notes'); //set the selected text box to have the indicated string
$('notes-box').val(); //returns the text contained in the selected text box
```

#Other courses on jQuery
[jQuery Fundamentals](http://bitly.com/ps-jq-fun)  
[jQuery Advanced Topics](http://bitly.com/ps-jq-adv)  
