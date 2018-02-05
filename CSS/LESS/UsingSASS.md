# Using SASS

## What is SASS

* **Dynamic Style Sheet Language**
    * Syntactically Awesome StyleSheets
    * Compiles to CSS
    * Introduces programming features to CSS

* **SASS has two syntaxes**
    * SASS and SCSS

```SCSS
/* SASS */
// Was not valid CSS originally
$baseFontSize: 14px;

#main
  h1
    font-size: $baseFontSize

/* SCSS */
// Looks and feels like CSS and is valid CSS
$baseFontSize: 14px;

#main
{
  h1
  {
    font-size: $baseFontSize;
  }
}
```

## Variables

```scss
$myColor: #ffeedd;

$a: Black;                  //Color
$b: 4px;                    //Units
$c: 1.0em;                  //Units
$d: Helvetica, sans-serif;  //Lists
$e: 1px #000 Solid 0 0;     //Also Lists
```

## Operations

* Operations are the same as in LESS

## Color Functions

* Very similar to LESS using the *$* as the variable instead of *@*

```scss
color: lighten($color, 10%); //darken, saturate, desaturate too

color: fade_in($color, .1); //fade_out too

color: invert($color); //complement too
```

## Other Functions

```scss
$quoted: quote($sometext);
$unquoted: unquote($sometext);

$value: if(true, $color1, $color2);

$rnd: round(3.14);
$top: ceil(3.14);
$bot: floor(3.14);
$per: percentage(.14);
```

## Directives

* **Operations on the CSS**
    * @import
    * @extend
    * @mixin
    * @function

### @import

```scss
@import "foo.css";  //Emits CSS Import
                    //@import url(foo.css);

@import "foo.scss"; //Embeds in result
@import "foo";      //Also embeds

//Nested Import too
#main {
    @import "colors";
}
```

### @extend

```scss
//Inherits Styles from another
.button {
    color: black;
}

.submit-button {
    @extend .button;
    border: 1px black solid; //inherits the rules of button and adds the border rule
}

//--------------------------------------------------------------
//Emits
.submit-button {
    border: 1px solid black;
}
.button, .submit-button {
    color: black;
}

//--------------------------------------------------------------
//Multiple inheritance too

.submit-button {
    @extend a:hover; //inherit from any rule
    @extend .button; //mutiple rules
    border: 1px black solid;
}
```

### @mixin

* **Repeatable sections**
    * Feel like functions
    * Used insert one or more than one name/value pair
    * Can accept parameters, defaults and overloads

```scss
@mixin font-large {
    font: {
        size: 14px;
        family: san-serif;
        weight: bold;
    }
}

//using @include and name of the mixin injects the mixin into the form
#form {
    @include font-large;
}
```

#### Parameters with Mixins

```scss
//PARAMETERS
@mixin rounded-corners-all($size) {
    border-radius: $size;
    -webkit-border-radius: $size;
    -moz-border-radius: $size;
}

#form {
    @include rounded-corners-all(5px);
}
//-----------------------------------------
//Parameters with default value
@mixin rounded-corners-all($size: 5px) {
    border-radius: $size;
    -webkit-border-radius: $size;
    -moz-border-radius: $size;
}

#form {
    @include rounded-corners-all;  //using the default value since no specific value is specified
}
```

### @function

```scss
//Value calculations
$app-width: 900px;
@function column-width($cols) {
    @return ($app-width / $cols) - ($cols * 5px);
}

.col2 {
    width: column-width(2);
}
```

## Control Directives

* **For control Flow**
    * @if
    * @for
    * @each
    * @while

### Examples

#### @if

```scss
h1 {
    @if $size > 14px {
        color: blue;
    }
    @else if $size < 14px {
        color: red;
    }
    @else {
        color: green;
    }
}
```

#### @for

```scss
$page-width: 1000px;

@for $col from 1 through 4 {
    .col#{$col} {
        width: $page-width / $col;
    }
}
```

#### @each and @while

```scss
@each $item in first, second, third, fourth {
    .#{$item} {
        background-url: url(/images/#{$item}.jpg);
    }
}

$i: 1;
@while $i < 5 {
    h#{$i} {
        font-size: $i * 4px;
        $i: $i + 1;
    }
}
```