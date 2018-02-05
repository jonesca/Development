#Using the $.map Method
Map allows an array of objects to be changed.  For instance we can change the FN:Cody LN:Jones to FirstName:Cody LastName:Jones

##NOTE
momentjs.com - <b style="text-decoration: underline;">Moment.js</b> is a very handy javascript date library for parsing, validating, manipulating, and formatting dates.  
<b style="text-decoration: underline;">toastr.js</b> is a good thing to use as well to see the output of a code snippet / function

#Using the $.grep Method
grep allows us to filter an array and keep only the items that return truthy values

#Using the $.type Method
type returns meaningful output indicating the type of data

#Feature Detect NOT $.browser Detect
Detecting the browser is too difficult and has been deprecated from recent versions of jQuery.
- Feature Detection is preferred over Browser Sniffing
- The Modernizr library is the defacto method of detecting features

#Using the $.Callbacks Objects
Like multi-task delegates in C#  
<b>Can chain a series of functions to be used one after another; however, they don't wait for one another to complete</b>

#When and How to use jQuerynoConflict
- Use this method if:
 - you want to use jQuery alongside another library that uses the $ sign as a special function
 - you want to use two different versions of jQuery on the same page

#Using the $.extend Method
Used to merge the properties of two different objects together; a common use case is when making a jQuery plugin

