# Bootstrap
- Open Source Framework for Building Web Apps
 - Composed of CSS / LESS
  - LESS is a language for writing program like facilities in CSS
 - JavaScript Components
 - Modular and Skinnable
 - Built-in Support for 80% of common design metaphors
 
 [boot swatch](http://bootswatch.com) has templates you can install that will change the look and feel of bootstrap
 
 ## The Bootstrap Grid System
 
 ![Bootstrap Grid System](img/GridSystem.jpg)
 
 
- 12 Columns wide for the full width of a page no matter how wide the display might be
 - A class of .col-xx-6 indicates 6 columns have been spanned in the grid; the xx indicates the size of screen we are looking for
 - .col-xx-9 | .col-xx-3 = span the first section across 9 and the last section across 3
 - .col-xx8 .col-xx-offset-2 = span 8 columns but skip the first two
 - .col-xx-6 | .col-xx-3 .col-xx-offset-2 = span the first 6, skip 2 and span the next 3.
  
- if you exceed the 12 available columns bootstrap is smart enough to wrap the entire column span to the next page.

### Multiple Grids

- Grids have a type for screen size: 
 - .col-lg-xx: >= 1200px or wider screens
 - .col-md-xx: >= 992px
 - .col-sm-xx: >= 768px
 - .col.xs-xx: < 768px
 
- .col-md-6 .col-xs-12 = on a very small screen (xs and sm) use all 12 of the grids; however, on a medium size screen or larger (md and lg) use 6 grids
    - can include all sizes if it really is important to change the display for each size screen
 
 ## Bootstrap and Forms