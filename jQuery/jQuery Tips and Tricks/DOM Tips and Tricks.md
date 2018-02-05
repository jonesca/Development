#Using a CDN with A Fallback

CDN = Content Delivery Network.
A cloud type service allowing you download jQuery from a more localized server
##Benefits
- Caching of scripts
- Support for HTTP and HTTPS
- Regional Servers - decreased latency
- Allows for more condurent calls (parallelism)
- Google scripts: https://developers.google.com/speed/libraries/devguide

###Location on a server
```javascript
<script
  src="//CDNLocation.com/libs/jquery.min.js">
  //notice no protocol like HTTP or HTTPS this allows the page to choose which it needs
</script>```

###Fallback
```javascript
<script>windows.jquery || document.write(
	'<script src="js/jquery-version.min.js"><\/script>')
  //if the server script loads great; if not use the local copy and the page won't break
</script>```

#Working with Selectors
##Selector Caching
###Without Caching or Chaining
This method results in querying the DOM over and over and over
```javascript
function processData(){
	$(".display").addClass("processed");
	$(".display").fadeIn(500);
}

function removeTitle(){
	$(".display").removeAttr("title");
}```

###With Caching & Chaining
This method results in querying the DOM once and caching the results in the variable
```javascript
var display = $(".display");

function processData(){
	display.addClass("processed")  //chaining so we don't need the ; until the statement is complete
			.fadeIn(500); //this is an example of chaining rather than putting display.
}

function (){
	display.removeAttr("title");
}
```

- Use $(this) in callback functions to access the target element:

####BAD
```javascript
$("#btn").click(function (){
	$("#btn).addClass("highlight");
});
```
####GOOD
```javascript
$("#btn").click(function(){
	$(this).addClass("highlight");
}
```

#Limit DOM Interactions
- Avoid manipulating the DOM from within a loop
- Instead of manipulating the DOM in a loop use string concatenation:
```javascript
var divs = "";
for (var i = 0; i < total; i++) {
	divs += "<div>" + i + "<div>";
}
$("#emailList").html(divs);
```

#Checking if an Element Exists
jQuery always returns a wrapped set of the elements you selected so all you have to do is check the length
```javascript
var link = $("#mainlink")
if (link.length) { //element exists
	link.attr("title", "Pluralsight Courses");
}
else {
	alert("No elements founds");
}
```
#Using the end() function with chaining
Use .end() to move up one step in the context of where you are to access the parent element

##Using and Object with Setter Methods
- Whgen calling a setter method multiple times use an object

```javascript
//Less maintainable
$("a.main").attr("href", "http://pluralsight.com")
			.attr("title", "Pluralsight Courses");

//More Maintainable
$("a.main").attr({
	"href": "http://pluralsight.com",
	"title": "Pluralsight Courses"
});
```
#Use Classes over Styles
- Multiple styles can be set using the JQuery css() function:
```javascript
$("div").css({
	"background": "#efefef",
	"color": "#000",
	"border": "1px solid black"
});
```
- However, is this the best way to set styles?
- Favor adding classes over setting styles for ease of maintainability:
```javascript
<style type="text/css">
	.panel {
		background: #efefef;
		color: #000;
		border: 1px solid black
	}
</style>

//...

$("div").addClass("panel");
```