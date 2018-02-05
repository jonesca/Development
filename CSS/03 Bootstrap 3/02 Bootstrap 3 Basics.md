# Bootstrap 3 Basics

## Buttons

```html
<button class="btn btn-warning btn-lg">Menu</button>
```

* By just creating a _`<button></button>`_ element we use the default behavior of the browser
* **.btn** class uses the  default bootstrap behavior
* **.btn-warning** class uses the bootstrap theme that has been applied
* **.btn-lg** makes the button larger; .btn-sm makes the button smaller
* Can apply these classes to other elements such as _`<href>`_.  The look and feel remain the same; however, the behavior may change.

## Icons

* Glyphicons were dropped in Bootstrap 4.  Some options are:
    * [Glyphicons](https://glyphicons.com/)
    * [Octicons](https://octicons.github.com/)
    * [Font Awesome](http://fontawesome.io/)

## Navs and Navbars

```html
<body>
    <div id="page">
        <header class="container"> <!-- this specifies a container for the navigation bar -->
            <div id="menu" class="navbar navbar-default navbar-fixed-top"> <!-- this is the navbar the default style and it always shows on the top of the page-->
                <div class="navbar-header"> 
                    <button class="btn btn-success navbar-toggle"
                            data-toggle="collapse"
                            data-target=".navbar-collapse"><span class="glyphicon glyphicon-cehvron-down"></span></button>
                    <div id="logo">
                        <a href='.'><h4>The Big Lebowski</h4></a>
                    </div>
                </div>
                <div class="navbar-collapse collapse"> <!--This collapses the navigation when it gets small enough -->
                    <ul class="nav navbar-nav navbar-right">
                        <li class="nav active"><a href=".">Home</a></li>
                        <li class="nav"><a href="about.html">About</a></li>
                        <li class="nav"><a href="contact.html">Contact</a></li>
                    </ul>
                </div>
            </div>
        </header>
    </div>
</body>

<!-- in site.css need to add some margin to the top of the body to ensure the content doesn't fall behind the navigation bar -->
```

* In **site.css** need to add some margin to the top of the body to ensure the content doesn't fall behind the navigation bar

```css
/*site.css*/
body{
    margin-top: 70px;
}
```

* Now copy the header and footer sections to each page of the site so the same look and feel is across all pages.  _With pure HTML there isn't a layout page option._

## Lists

* **`<ul class="list-unstyled">`** removes bullets
* **`<ul class="list-unstyled list-inline">`** takes same list but left to right instead of top down
* **`<ul class="list-group">`** and specify **class="list-group-item"** on each `<li>` in the list

## Tables

`<table class="table table-striped table-bordered table-hover table-condensed">`

## Forms

```html
<form>
    <div class="form-group">
        <lable for="nameInput">Your Name</lable>
        <input type="text"
                name="nameInput"
                class="form-control"
                placeholder="e.g. Your Name" />
</form>
```