# Rapid JavaScript Training

- **Mark Zamoyta** markzamoyta@gmail.com

## JavaScript Basics

- The preferred place for **\<script>\</script>** tags in the **\<body>\</body>** at the end so your page can load in the browser while the script is running.

- The **defer** keyword delays the execution of the script until other scripts listed after have run..._not a good idea to use defer_

```html
<script defer src="js/app.js"></script>
<script src="js/salesOrder.js"></script
```

- When a **var**iable is not initialized it's value and type are always set to undefined

### Simple Datatypes

- String
- Number
- Boolean

### Complex Datatypes

- object
  - **JSON** is of type objects
  - **Arrays** are of type object
  - **null** is of type object
- function
