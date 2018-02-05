#jQuery Fundamentals by Dan Wahlin

##Module 1: jQuery Fundamentals
- [Module 2: Using jQuery Selectgors](02 jQuery Fund - Using Selectors.md)  
- [Module 3: Interacting with the DOM](03 jQuery Fund - Interact with DOM.md)
- [Module 4: Handling Events](04 jQuery Fund - Handling Events.md)
- [Module 5: Working with Ajax Features](05 jQuery Fund - Working with Ajax Features.md)

Go to Jquery.com and download the version you need or load from a CND (Content Delivery Network)

Src = "http://ajax.microsoft.com/ajax/jquery/jquery-[version].js"

Src = "http://ajax.googleapis.com/ajax/libs/jquery/[version]/jquery.min.js"

To use reference the jquery.js in your html.  

For example:

``` html
<html>
	<head>
		<script type="text/javascript" src="jquery.js"></script>
		<script type="text/javascript">
			window.onload = function() {
				alert('Window loaded');
				//Note: this is the standard javascript way
				};
		
			$(document).ready(function(){
				alert('DOM loaded');
				//Note: this is the jQuery way
				//This is where you put the selectors and jQuery elements
				$('#myContent').html('Hello World');
				//this is a selector to select the id listed and change the HTML shown
			});
		</script>
	</head>
	<body>
		<div id="myContent">
		My jQuery enabled Page!
		</div>
	</body>
</html>
```

The $ symbol is an alias for the word jQuery.  So, `$(document).ready()` means we are passing the document object to jQuery and then call the jQuery *ready* function. 
This detects when the DOM hierarchy has been loaded not the whole page.

jQuery Documentation site: [jQuery.com](http://api.jquery.com/) Get familiar with the jQuery documentation site!





