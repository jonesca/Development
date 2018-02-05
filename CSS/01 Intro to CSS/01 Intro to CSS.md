# Introduction to CSS (Cascading Style Sheets)

In CSS we use **selector**s.  A selector is a patter used to apply styles to elements

## Selectors

```css
/*Star selector*/
/*Everything matches and should be styled accordingly*/
* {
    color:white;
}

/*Element selector*/
body {
    background-color:#cccc99;
    /*an image on the web*/
    background-image:url("http://example.com/image.jpg");
    /*an image in the root dir of the page*/
    background-image:url("bg.jpg");
}

/*ID selector*/
#menu {
    background-color:#ffff00;
}

/*Class selector*/
.booktitle {
    font-style:italic;
}

/*Descendent selector*/
/*style all p elements inside a div element*/
div p {
    background-color:#ddddaa;
}

/*Child selector*/
/*style all p elements that are children of a div element*/
/*a child is directly below the div rather than anywhere in a div*/
div > p {
    background-color:#ddddaa;
}

/*attribute selector*/
/*style all img elements that have an alt attribute of "spacer"*/
img[alt=spacer] {
    padding:0px;
}

/*psuedo class selector*/
/*psuedo class are those not specifically set on an element but are inherit based on some characteristic of the element*/
a:visited {
    color:#dddddd;
}

/*Import the styles in a specified stylesheet to this one*/
@import url("styles2.css")
```

## Specifying CSS Property Values

* **Keywords**
    * thin, thick, larger
* **Physical measurements**
    * inches(in), points(pt), picas(pc)
* **Screen measurements**
    * pixels (px)
* **Relative measurements**
    * %, em
* **Color codes**
    * *red, green blue*: #rrggbb, rgb (r,g,b) 
* **Fonts**
    * Helvetica, sans-serif
* **Functional notation**
    * rgb(r,g,b),url("http://example.com/bg.jpg")

