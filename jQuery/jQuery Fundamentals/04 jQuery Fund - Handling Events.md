##Module 4 - Handling Events
- [Module 1: jQuery Fundamentals](01 jQuery Fundamentals.md)
- [Module 2: Using jQuery Selectgors](02 jQuery Fund - Using Selectors.md)
- [Module 3: Interacting with the DOM](03 jQuery Fund - Interact with DOM.md)  
- [Module 5: Working with Ajax Features](05 jQuery Fund - Working with Ajax Features.md)

###Handling Events
```javascript
function WireEvents() {
	//When the button is clicked the data in the boxes will be written in the Div with ID DivOutput
	$('#SubmitButton').click(function(){
		var firstNameVal = $('#FirstNameTextBox').val();
		var lastNameVal = $('#LastNameTextBox').val();
		$('#DivOutput').text(firstNameVal + ' ' + lastNameVal);
	});
	
	//When the data in the fields having a class of MyInput changes the class Highlight will be added
	$('.MyInput').change(function(){
		alert($(this).val());
		$(this).addClass('Highlight');
	});
	
	//find the Div with ID of MyDiv and do something when we mouse enter also chained to the function is what to do on mouse leave
	$('#MyDiv', 'tr').mouseenter(function(){
		Toggle(this); //does the same thing as the highlight lines of code
		$(this).toggleClass('Highlight');  //mouse enter highlights according the the class settings
		$(this).css('cursor', 'pointer'); //change the cursor to the hand when enter
	})
	.mouseleavae(function(){
		Toggle(this);
		$(this).toggleClass('Highlight'); //mouse leave removes highlight
	});
	.mouseup(function(e){ //can call the function e what ever you want there is nothing magic about e
		$this).text('X: ' + e.pageX + ' Y: ' + e.pageY);
		alert($(e.target).attr('id'));
	}
	
	function Toggle(div){
		$(Div).toggleClass('Highlight');
	}
}
```
###Binding to Events

- `.on(eventType, handler(eventObject)` attaches a handler to an event for the selected element(s).  This was added in jQuery 1.7  
- Use `.on()` instead of bind with jQuery 1.7 or newer  
- `.off(event)` is used to remove a handler previously bound to an element

```javascript
$('#test').off() //unbinds all from the element
$('#test').off('click'); //unbinds click from the element

$('#MyDiv'.on('click', function(){
	//Handle click event
});

//combines events in one statement using on
$('#MyDiv').on('mouseenter mouseleave', function() {
	$(this).toggleClass('entered');
	});
```
###live(), delegate(), and on()
 - live(), delegate(), and on() allow new DOM elements to automatically be "attached" to an event handler
 - Allow children to be added to a container without explicitly attaching an event handler to each child
 - On() replaces live(), delegate(), bind()
 ```javascript 
 //This is a map of what happens on tr when different events occur
 $("#MyTable, tr").on({
	 mouseenter: function(){
		 $(this).addClass("over");
	 },
	 mouseleave: function(){
		 $(this).removeClass("out");
	 }
 });
 ```
 
###Handling Hover Events
 - Hover events can be handled using `hover()`:  
 `$(selector).hover(handlerIn, handlerOut)`  
 - handlerIn is equivalent to mousenter and handlerOut is equivalent to mouseleave 
 For Example, the following code block highlights #target on mouseenter and sets it back to white on mouseleave
 ```javascript
 $('target').hover(
	 function(){
		 $(this).css('background-color', '#00FF99');
	 },
	 function(){
		 $(this).css('background-color', '#FFFFFF');
	 }
 );
 ```
 
 Another option is `$(selector).hover(handlerInOut)` to fire the same handler for mouseenter and mouseleave events 
 An example with jQuery's toggle methods to toggle the class over to a paragraph element
 ```javascript
 $('p').hover(function(){
	 $(this).toggleClass('over');
 });
 ```
 