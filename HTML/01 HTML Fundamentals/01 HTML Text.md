# Text and Lists

## Block vs. Inline

<div class="col-md-12 container divborder">
<div class="row">
<div class="col-md-4 innerdivborder">

### Block elements
- Container elements for grouping
- May contain other bolock elements and Inline elements
- Example: `<p>`

</div>
<div class="col-md-5 innerdivborder">

### Inline elements
- Container for text and other inline elements
- Inline elements can not contain block elements; for example, a **&lt;span&gt;** tag which is an inline element can not contain a **&lt;div&gt;** tag which is a block element.  But the reverse is ok.

</div>
<div class="col-md-6 innerdivborder">

### Text breaking and white space
- By using the **&lt;pre&gt;** tag whitespace is respected 
- Explicit line break: **&lt;br /&gt;**
- Horizontal rule (visible line): **&lt;hr /&gt;**
- Character entities
  - Non-breaking space: `&nbsp` space which cannot be used for line breaks

</div>
<div class="col-md-5 innerdivborder">

### Document elements
- **&lt;sup&gt;** and **&lt;sub&gt;** = Superscript and subscript
- **&lt;cite&gt;** = Cite work by another
- **&lt;abbr&gt;** and **&lt;acronym&gt;** = Abbreviation or ancronymn
- **&lt;em&gt;** and **&lt;strong&gt;** = emphasis
- **&lt;code&gt;** and **&lt;samp&gt;** = Indicates code block or program output
- **&lt;kbd&gt;** and **&lt;var&gt;** = keyboard input and code variables
- **&lt;blockquote&gt;** and **&lt;q&gt;** =  block level or inline quotes

</div>
</div>

### Lists

<div class="innerdivborder">

##### Three type of lists
- Unordered or bulleted Lists indicated by **&lt;ul&gt;** and nested **&lt;li&gt;** elements
- Ordered or numbered Lists indicated by **&lt;ol&gt;** and nested **&lt;li&gt;** elements
- Definition list or term + definition **&lt;dl&gt;** (definition list) and nested **&lt;dt&gt;** (definition term) and  **&lt;dd&gt;** (definition definition) elements

</div>
</div>