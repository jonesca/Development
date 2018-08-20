String literals are declared in quotes.  For example: `var name = "Frodo";`
<b>Strings are immutable</b>
* The contents of a string cannot be changed after the string is created
 - Sometimes it looks like the string in a variable is changed but it isn't; a new variable of the same name is created with new text
* *String* is a **reference** type; however, we work with strings as if they were **value** types

<b>Value Type</b>
- Store their data directly
- Examples
 - int, decimal, bool, enum

<b>Reference Type</b>
- Store references to their data
- Examples
 - string, object

#Working with .NET STring Methods
There is an extensive library of methods for working with strings.  For example:
.ToLower() and .ToUpper() will change the case of a strinng
.Replace() to find a strinng and replace it with another
.Length to get the length of a string
.IndexOf
.StartsWith() and .EndsWith()
and many, many more -- Google is your friend

#Handling Nulls
###Null String Handling Best Practices
###<font color="grean">**DO:**</font>
- Handle nulls
- Write unit tests that cover null conditions
- Use IsNullOrWhiteSpace when testing for null in a block of code
- Use the null-conditional operator when checking for null in a sinngle statement

###<font color="red">**AVOID:**</font>  

#Defining Verbatim String Literals
##Best Practices
###<font color="grean">**DO:**</font>
- Use verbatim string literals when the strinng contains special characters such as backslashes
- Use verbatim string literals to hold folder or file names <font color="burntorange">@"c:\mydir\myfile.txt";</font>
- Use two quotes to include quotes inn a verebatim strinng literal <font color="burntorange">@"Say it with a long ""a"" sound"</font>

###<font color="red">**AVOID:**</font>
- Using verbatim string literals when there is no reason. For example: <font color="burntorange">@"Frodo"</font>

#Formatting Strings
##String.Format Best Practices
###<font color="grean">**DO:**</font>
- Use String.Format to insert the value of an expression into a string
 -  <font color="burntorange">Bettere technique with C#6</font>
- Include a formatting string as needed
 - <font color="burntorange">String.Format("Deliver by: {0:d}", deliveryBy);</font>
 
###<font color="red">**AVOID:**</font> 
- Using String.Format when concatenating string literals
 - <font color="burntorange">String.format("Hello {0}", "World");/font>
 
#Using String Interpolation
String interpolation provides and easier way to format our strings

```csharp
//string.format
var pc = String.Format("{0}-{1}", product.Category, product.SequenceNumber);

//string interpolation
var pc = $"{product.Category}-{product.SequenceNumber}";
//The $ defines the string as interpolated
```
##String Interpolation Best Practices
###<font color="grean">**DO:**</font>
- Use string interpolation instead of String.Format
- Include a formatting string as needed
 - For example: <font color="burntorange">$"Deliverby:{deliverBy :d}"</font> 
###<font color="red">**AVOID:**</font>
- If you are using Visual Studio 2013 or older; string interpolation is introduced in C#6
 
#Building Long Strings
To help with building and managing long strings .Net provided a special class called <b>StringBuilding</b>
- Conceptually a mutable string
- Allows string operations, such as concatenation, without creating a new string
- Provides methods for manipulating the mutable string
 - Append, Insert, Replace, etc...
- Use ToString to convert to a string
- More efficient when working with strings that are
 - Built up with many separate concatenation operations
 - Changed a large number of times, such as within a loop

##Long String Best Practices
###<font color="grean">**DO:**</font>
- Use StringBuilder when building up a string with numerous concatenation operations
- Use StringBuilder when modifying a string numerous times <font color="burntorange">such as in a loop</font>

###<font color="red">**AVOID:**</font>
- Using StringBuilder when only modifying a string a few times

