# CSS - The Box Model

- All content on a page and all elements are produced in boxes

## Border Margin Padding

- **Border** is the border of an elemental box
- **Padding** is the space between the inside border of a box and the content
- **Margin** is the space between the outside border and adjacent elements

## Top Right Bottom Left

- Shortcut syntax lets you set padding, margin and border rules with a single rule...
- Starting from the top and going clockwise.  *Top Right Bottom Left*
- Also allowed to set multiple properties on elements such as border-bottom

```css
ul li{
    /*Set left padding*/
    padding-left:5px;
    /*set margin on Top Right Bottom Left*/
    margin: 0 3px 0 3px;
    /*set the bottom border to 3px width, solid style and black color*/
    border-bottom: 3px solid black;
}
```

## Vertical Margins Collapse

- Vertical margins collapse; they are *not* cumulative
- Horizontal margins do not collapse; they are cumulative

## Width

- Most elements want to extend to the far right of the screen
- Constrain with the **width** property value
- The width property value is the content area.  Any border, padding or margin adds to the width

## Display and Visibility

### Display is generally block, inline or none

- Block elements sit on tope of each other
- Inline elements only move downward when there is not enough space
- Display of none removes an element
- Can NOT set the width of an *inline* element
- *inline-block* allows for setting width and having the elements behave like inline

### Visibility

- Hidden  elements are not visible, but reserve space