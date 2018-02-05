# Finding Parts of the Page

## Selection APIs

* **document.getElementsByClassName()** - returns all elements with the specified class. This returns a live result meaning if you select and make changes the result will be shown immediately on the page.
* **document.querySelector()** - returns the first element with the specified criteria. The querySelector options return a static result meaning any changes will not be made immediately.
* **document.querySelectorAll()** - returns all elements with the specified criteria in a node list that looks like an array

### Examples

`document.getElementsByClassName('img-responsive')`

`document.querySelector('.img-responsive')`

`document.querySelectorAll('.img-responsive')`

`document.querySelectorAll('#example-container li:first-child')` returns the first list item found in the section of code delineated by the id _example-container_
