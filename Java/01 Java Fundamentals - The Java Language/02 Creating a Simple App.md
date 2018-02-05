# Creating a Simple App

```java
public class Main {

// This is the main method
// For the application to run it must be in a class with a member called main
// This is the entry point to any Java application
    public static void main (String[] args) {
	    System.out.println("Hello World");
    }
}
```

Need to add C:\Program Files\Java\jre1.8.0_141\bin to the path  
From a command prompt type java -version to see the version of Java being run and to validate Java is in the path and working as expected  
To run the program from the cmd prompt enter `Java Main`.  
The name of the class is case sensitive so `java main` will not work because main is not Capitalized.  
The cmd prompt must be set to the directory where Main.class is located.

## Statement Structure and Whitespace
* Programs are made up of statements
* Statements end with a semicolon
* Parts separated by zero or more whitespace.  Whitespace can be space, tab, newline (in java)

### **Whitespace doesn't matter**
`System.out.println("Hello World");` and `System.out.println ( "Hello World" );` are equivalent statements.  As is `System.out.println(    "Hello World")  ;`  

## Comments
Comments allow us to put notes into our source code or mark code that we don't want to be seen by the compiler.  Comments are ignored by the compiler.
### Using Comments
* Add human-readable notes source code to explain *stuff*
* "Hide" source code you don't want to run; however, you don't want to delete either
### Types of comments
* Line comments
    > // this will comment out an entire line up to the carriage return
* Block comments
    > /* ... */ The compiler skips everything between the notations indicating a comment.  This can ocur in the middle of a line or span multiple lines
* JavaDoc comments
    > /** ... */ Allows you do generate documentation using this format. When you run the program; the JavaDoc utility will generate documentations right from the source code file.  To learn more about JavaDoc visit [Oracle's JavaDoc Intro](http://bit.ly/psjavadoc)

## Introducing Packages
Packages are a very important concept in Java
* Packages provide organization
* Follow standard naming convention
* Affect source code file structure

### Package Naming Conventions
* All lowercase
* Use reversed domain name to assure global uniqueness
* Add further qualifiers to assure uniqueness within a company/group

### Members Become Part of the Package
So when we put a class in a package the name of the class is no longer just Main (as an example) the name of the class is now com.pluralsight.myproject.Main

### Package Name and Source File Structure
* Java requires no correlation between package names and source code file structure
* **But** mosts IDE's require a sub-folder for each part of the package name
![Package Name and Source File Structure](pkgstructure.jpg)
* When running from the command prompt must run using the entire package name `Java com.pluralsight.example.Main`

#### Package Example
```java
package com.pluralsight.myproject;
package com.pluralsight.IS.myproject; //example showing package created by IS

public class Main {
    public static void main (String[] args) {
	    // Source code
    }
}
```
