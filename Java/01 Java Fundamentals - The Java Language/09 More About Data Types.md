# More About Data Types

## String Class

* The String class stores a sequence of Unicode characters
    * Stored using UTF-16 encoding - essentially means it can store any character you are likely to ever want to work with in Java
    * Literals are enclosed in double quotes ""
    * Values can be concatenated using + and +=
        * \+ combines two strings and gives back a new string
        * += adds a string onto the value of an existing string
    * String object are immutable. This means once created a string object can never be changed so anything that changes that value requires a new instance of the string object be created.

### Select String Class Methods

* Length: length of the string or number of character in the string
* String for non-string: valueOf - change non-string values into strings
* Create new sring(s) from existing:
    * concat
    * replace
    * toLowerCase
    * toUpperCase
    * trim
    * split
* Formatting: format
* Extract substring: 
    * charAt
    * substring
* Test substring:
    * contains
    * endsWith
    * startsWith
    * indexOf
    * lastIndexOf
* Comparison
    * compareTo
    * compareToIgnoreCase
    * isEmpty
    * equals
    * equalsIsIgnoreCase

## String Equality

* == compares references `if (s1 == s2)` is false because even if the two strings are the same they are referencing different objects.
* The _equals_ compares character for character.  With string comparison we will use the _equals_ method for most cases.  Example: `if (s1.equal(s2))` is true
* intern() ensures two strings with the same value will reference the same object...

## StringBuilder Class

* **StringBuilder** provides mutable string buffer
    * For best performance pre-size buffer
        * Will grow automatically if needed
    * Most common methods: **append** and **insert**
    * Use **toString** to extract resulting string

```java
StringBuilder sb = new StringBuilder(40); //pre-size buffer to 40
//sb.capacity() will return 40
Flight myFlight = new Flight(175);
String location = "Florida";

sb.append("I flew to "); //I flew to
sb.append(location); //I flew to Florida
sb.append(" on "); //I flew to Florida on
sb.append(myFlight); //I flew to Florida on Flight #175

int time = 9;

int pos = sb.length() - " on ".length() - myFlight.toString().length();

sb.insert(pos, " at "); //I flew to Florida at on Flight #175
sb.insert(pos + 4, time); //I flew to Florida at 9 on Flight #175
// NOT yet a string - use toString to extract string
String message = sb.toString(); //"I flew to Florida at 9 on Flight #175" now it is an official string
```

## Primitive Wrapper Classes

!["Primitive Wrapper Classes Hierarachy](PrimWrapClasses.jpg)

## Final Fields

* Marking a field as **final** prevents it from being changed once assigned
    * A simple final field must be set during creation of an object instance
        * Can be set with field initializer, initialization block, or constructor
    * Adding the **static** modifier makes a final field a named constant
        * Cannot be set by an object instance

## Enumeration Types

* Enumeration types useful for defining a type with a finite list of valide values
    * Declare with the **enum** keyword
    * Provide a comma-separated value list

```java
    public enum FlightCrewJob{
        Pilot,
        CoPilot,
        FlightAttendant,
        AirMarshal
    }
```