#Building REusable Components
When determining whether or not make a method <b class="highlight">Static</b> or <b class="highlight">Extension</b> consider the following questions:
- Is the instance a parameter?
- Operate on that instance?
- Appear in Intellisense?

A <i class="blue">yes</i> to each of these indicates an <b class = "highlight">Extension</b> method