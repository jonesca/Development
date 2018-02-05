# LESS is More

```html
<head>
    <link rel="stylesheet/less"
        type="text/css"
        href="css/my.less">

    <script src="js/less.js"
        type="text/javascript"></script>
</head>
```

```less
//variables
@main-color: Pink;

//CSS
body {
    background: @main-color;
}
```

## LESS on the Server

* Support for Server Support
  * Node.js
  * ASP.NET
  * Other ways for Rails, JSP, etc.


```less
@baseFontSize: 14px;
/* Commonts */
// Comments too
#main
{
    h1
    {
        font-size: @baseFontSize;
    }
}
```

## Variables

* Variables in LESS are Constants, you can't redefine a LESS variable in the code

```less
@a: Black;                  //Color
@b: 4px;                    //Units
@c: 1.0em;                  //Units
@d: Helvetica, sans serif;  //Strings
@e: 1px #000 Solid 0 0;     //Complex Type
```

## Operations

* Operations Just Work

```less
font-size: 4px + 4;         //8px
font-size: 20px * .8;       //16px
color: #fff / 4;            //#404040;
width: (100% / 2) + 25%     //75%
```

## Color Functions

* The color variable should be a numeric value rather than a string value to avoid errors in the CSS / LESS files when using one of the color functions

```less
color: lighten(@color, 10%);
color: darken(@color, 10%);

color: saturate(@color, 10%);
color: desaturate(@color, 10%);

color: fadein(@color, 10%);
color: fadeout(@color, 10%);
color: fade(@color, 10%);

color: spin(@color, 10%);
color: mix(@color, #246);

@hue: hue(@color);
@sat: saturation(@color);
@light: lightness(@color);
@alpha: alpha(@color);
@color: hsl(20%, 30%, 40%);
```

## Math

```less
@rnd: round(3.14);
@top: ceil(3.14);
@bot: floor(3.14);
@per: percentage(.14);
```

## Mixins

* Repeatable sections
    * Feel like functions
    * But insert more than one name/value pair
    * Can accept parameters, defaults and overloads

```less
// A common mixin to do rounded corners across different browsers
.rounded-corners-all(@size) {
    border-radius: @size;
    -webkit-border-radius: @size;
    -mos-border-radius: @size;
}

//call the mixin
#form
{
    .rounded-corners-all(5px);
}
```

* Mixins can have default values

```less
.rounded-corners-all(@size: 5px) {
    border-radius: @size;
    -webkit-border-radius: @size;
    -mos-border-radius: @size;
}

//when calling don't need to specify size

#form
{
    .rounded-corners-all;
}
```

### Overloads

```less
//using overloads
.color(@color) {
    color: @color;
}

.color(@color, @factor) {
    color: lighten(@color, @factor);
}

#form
{
    .color(#888, 20%) //Uses 2nd overload
}
```

### Guards

```less
//using Guards
//use this one when the alpha chanel is >= to 50%
.color(@color) when (alpha(@color) >= 50%) {
    color: Black;
}

//use this one when the alpha chanel is < 50%
.color(@color) when (alpha(@color) < 50%){
    color: transparent;
}

#form
{
    .color(@mainColor); //uses 1st overload
}
```

## Nested Rules

* **Allows you to structure rules in a logical way**
    * Hierarchies imply the cascading/specificityh
    * LESS then deconstructs it into CSS for you

### Example

#### CSS

```CSS
/* CSS */
nav{
    font-size: 14px;
    font-weight: bold;
    float: right;
}

nav ul {
    list-style-type: none;
}

nav ul li {
    float: left;
    margin: 2px;
}
```

#### LESS

```less
nav {
    font-size: 14px;
    font-weight: bold;
    float: right;
    ul{                         //Makes "nav ul {....}"
        list-style-type: none;
        li {                    //Make "nav ul li {....}"
            float: left;
            margin: 2px;
        }
    }
}
```
* **Use Combinator (&) to mix with with parent:**

```less
//Use Combinator (&) to mix with with parent:
a {
    text-decoration: none;
    &:hover {
        text-decoration: underline;
    }
}

// RESULTS IN
a { text-decoration: none; }
a:hover { text-decoration: underline; }
```

## Namespaces

```less
// Namespacing for organization grouping

#my-forms {
    .set-button {
        font-size: 14px;
        text-align: center;
    }
}

#submit-button {
    #my-forms > .set-button;
}
```

## Scoping

```less
// Variables/Mixins are Scoped

@size: 24px;

#form {
    @size: 18px;        //different scope different size

    .button {
        font-size: @size; //18px;
    }
}
```

## String Interpolation

```less
//Can use Ruby/PHP style string insertion
@root: "/images/";

#form {
    background: url("@{root}background.jpg");
    // Becomes url("/images/background.jpg")
}
```

## Using JavaScript

```less
//Embed with back-quotes to execute JS
@root: "/images";
@app-root: `"@{root}".toUpperCase()`;

#form {
    // Becomes url("/IMAGES/back.jpg");
    background: url("@{app-root}/back.jpg");
}
