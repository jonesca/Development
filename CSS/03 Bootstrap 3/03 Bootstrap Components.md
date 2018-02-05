# Bootstrap Components

* A class of **page-header** creates a visible section of the page to head the page and provide some information of the page

## Breadcrumbs

* Breadcrumbs are created with an _order list_ having a class of **breadcrumb**

### Example of a Page Header and Breadcrumbs

```html
<div class="page-header">
    <ol class="breadcrumb">
        <li><a href="/">Home</a></li>
        <li class="active">About</li>
    </ol>
    <h1>About The Big Lebowski</h1>
</div>
```

## Button Groups

* Button groups make a group of buttons look like one control with multiple options similar to how a radio button group may appear and behave
* classes are btn-group and btn-group-vertical to display vertically
* btn-group-sm
* change the element to **label** instead of **button** to use toggle classes and continue to use the btn classes to keep the look and feel of buttons

```html
<div class="form-group">
    <lable class="control-lable col-md-2">Favorite</label>
    <div class="col-md-10">
        <div class="btn-group btn-group-sm" data-toggle="buttons">
            <label class="btn btn-success"><input type="radio">The Dude</label>
            <label class="btn btn-success"><input type="radio">Donny</label>
            <label class="btn btn-success"><input type="radio">Maude</label>
        </div>
    </div>
</div>
```

## Dropdown

```html
<div class="dropdown">
    <button class="btn" data-toggle="dropdown">Show Me</button> <!-- this makes it work-->
    <ul class="dropdown-menu"> <!-- adding style="display: block;" shows the menu for viewing purposes-->
        <li><a href="#" tabindex="-1">Walter</a></li> <!-- tabindex of -1 makes it so pressing tab will not select this item -->
        <li><a href="#" tabindex="-1">Bunny</a></li>
        <li class="divider"></li> <!-- creates a dividing line in the list -->
        <li class="disabled"><a href="#" tabindex="-1">The Big Lebowski</a></li> <!-- the disabled class greys out the option in the list -->
    </ul>
</div>
```

## Input Groups

```html
<!-- can use to decorate input fields with helpful information-->
<div class="input-group">
    <span class="input-group-addon"><span class="glyphicon"></span></span>
    <input type="text" name="nameInput" class="form-control" placeholder="e.g. Your Name" />
    <span class="input-group-addon">!</span>
</div>
```

## Pagination

```html
<!-- add a previous and next button side by side -->
<ul class="pager">
    <li><a href="#">&larr; Prev</a></li>
    <li><a href="#">Next &rarr;</a></li>
</ul>

<!-- add a previous and next button on the left and right side of the screen -->
<ul class="pager">
    <li class="previous"><a href="#">&larr; Prev</a></li>
    <li class="next"><a href="#">Next &rarr;</a></li>
</ul>

<!-- create a pages with next and previous buttons included -->
<ul class="pagination">
    <li class="disabled"><a href="#">&laquo;</a></li>
    <li class="active"><a href="#">1</a></li>
    <li><a href="#">2</a></li>
    <li><a href="#">3</a></li>
    <li><a href="#">&raquo;</a></li>
</ul>
```

## Thumbnails

Using a class of thumbnail on an image div provides options for including a title and additional text.

## Panels

```html
<div class="panel panel-default">
    <div class="panel-heading">
        <h2 class="panel-title">Panel Title</h2>
    </div>
        <div class="panel-body">
            <p>This is my content</p>
        </div>
    <div class="panel-footer">
        <button class="btn btn-primary">Click Me</button>
    </div>
</div>
```

## Wells

A class of **well** gives a section of content a border with a look of being _sunken_ a bit