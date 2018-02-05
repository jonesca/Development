# Cascading and Inheritance in CSS

## Cascade

- The weight or precedence of style sheets.

### Default (use agent)

- Least weight
- The default stylesheet of a browser.  If no other styles are specified this is the default behavior.

### User

- More weight
- A way to override the default stylesheet for a browser and all pages you visit in a browswer
- Add `!important` to a style to keep it from being overridden by a higher weight stylesheet

### Author

- Most weight
- The stylesheets of a page as designed by the author

## Ordering the rules

- The last listed selector rule takes precedence
    - When there are conflicting rules in the same or different stylesheet, the last listed style takes precedence or the style in the last listed stylesheet.

## CSS Reset

- A set of rules that override the defaults for given browser for all HTML elements
- Many "open source" CSS Reset stylesheet available
- Name the file cssreset.css and include it as the first listed stylesheet for the site

## Specificity

- Each browser gives a number of specificity for each rule
- The higher the number the higher the specificity.  Rules with a higher specificity number win out
- The number is made of **ABC**
    - A is the count of ID selectors in a rule
    - B is the count of class and attribute selectors
    - C is the count of type selectors
- *Inline* styles are the most specific and win out over all the rest
    - `<p style="background-color:Black">text</p>`

```css
*           /* a=0 b=0 c=0 -> specificty =   0 */
LI          /* a=0 b=0 c=1 -> specificty =   1 */
UL LI       /* a=0 b=0 c=2 -> specificty =   2 */
LI.red      /* a=0 b=1 c=1 -> specificty =  11 */
#content    /* a=1 b=0 c=0 -> specificty = 100 */
```

## Inheritance

- Some property values flow down the document tree.  For example if you style the font size of a div all child elements of that div receive the same font size unless you specify otherwise