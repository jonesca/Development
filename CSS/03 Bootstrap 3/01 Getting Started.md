# Getting Started

* **class="container"** - the container class defines pages sizes based on the viewport.  This is a page level element; you can't really next a container inside of a container. Container elements make sense at major page sections such as _main_, _sidebar_ and _footer_

## Grid System

* **.col-xx-10 .col-xx-offset-2** - uses 10 columns of the grid but _pushes_ the 10 columns 2 to the right.  **offset** means push
* If the column size definition is beyond the 12 available columns the defined column will wrap to the next row

### MUltiple Grids

* .col-lg-xx >= 1200px or desktop computers / laptops (hi-res)
* .col-md-xx >= 992px or landscape tablets
* .col-sm-xx >= 768px or portrait tablets
* .col-xs-xx < 768px or phones

### Offset and Rows

* **.col-md-offset-2** helps push the columns so we can center them better on the page or move them where we want/need them
* **.row** gives us a logical break in the container so column size definitions don't stack up against each other and create unwanted wrapping. The class of row should be part of a div_ inside a page level element such as body, header, main, sidebar, footer, etc...

### Images and Responsive helpers

* **.pull-left/right** is a bootstrap class that will "float" the content of the element left/right. The float will be in the surrounding grid system not the screen
* **.img-thumbnail** styles the image with a little buffer, border, padding and helps the image size to the width of the page
* **.hidden-xs** hides the element content on the specified screen sizes
* **.visible-md** makes the element visible only on the specified screen sizes

## Theming Bootstrap

* **.navbar** creates a bar that contains elements
* Add the css style sheet _bootstrap-theme.min.css_ for included themes in bootstrap
* [bootswatch.com](http://bootswatch.com) contains full themes for bootstrap. Include this css file after the bootstrap call to override the default behavior.  *_suggest_* naming the file with the theme to keep track; for example _amelia.bootstrap.min.css_

## Customizing Bootstrap

* When downloading bootstrap you can choose which elements you may or may not be using and only download those definitions you are going to use in order to reduce the footprint of bootstrap in your site.  This will have to be done each time bootstrap is updated; therefore, it really isn't worth if a large portion of bootstrap is being use.  However, if all you are using is the grid system for example it may be worth it.