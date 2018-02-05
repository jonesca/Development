# Responsive Web Design

## Ben Callahan

@bencallahan  
http://seesparkbox.com  
http://buildresponsively.com

### Definition

#### A Fluid Foundation

Honor the proportions of the design by creating percentage-based grids instead of fixed-width, pixel-based grids

#### Flexible Content

With a grid based on proportions, the content put in that grid must also respond

#### Media Queries

When content and design are no longer working in harmony a larger shift in layout is necessary.

##### Example:

```html
<!-- link to an online css but only apply if the conditions are met -->
<link media="(min-width: 30em)"...>
<link media="screen and (min-width: 30em)"...>

<!-- apply the styles listed in the curly brackets if the rules indicated apply This type of media query goes directly in the style sheet -->
@media (min-width: 30em) { ... }
@media screen and (min-width: 30em) { ... }
```

Media types such as "screen" and "print" can be found at http://www.w3.org/TR/CSS21/media.html#media-types

Features can be found at http://www.w3.org/TR/css3-mediaqueries

Put large resolution media queries first in the CSS followed by smaller resolution media queries if you are designing for larger resolutions using max-width.  For small resolution first designs use min-width and design for small resolution devices.

##### Pros & Cons

###### Large Rez First

* Easy support for old IE
* Small devices load all assets

###### Small Rez First

* More logical (build up vs tear down)
* Old IE is tricky