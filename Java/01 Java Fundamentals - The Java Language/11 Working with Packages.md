# Working with Packages

## What is a Package?

* A package is a group of related types
    * Create a namespace
    * Provide an access boundary
    * Act as a unit of distribution

### Declaring Packages

* Each source file identifies the associated package
    * Use package keyword
    * Package declaration must appear before any type declarations
    * ```java
        package com.pluralsight.travel;

        public class Name{
            //source code
        }
      ```
## Packages Create a Namespace

* Package name is part of the type name
    * Convention creates unique package name
        * Follows reverese domain name structure
        * **Example:** `package com.pluralsight.travel;`
        * Type name is qualified by package name

## Determining a Type's Package

* Compiler need to know each type's package
    * Explicitly qualifying each type is impractice
* Java offers several alternatives to explicitly qualifying types
    * Allows use of a type's simple name in code
        * Types in current package to not need to be qualified
        * Types in the java.lang package do not need to be qualified
            * Object, primitive wrapper classes, String, StringBuilder, many more
            * Use type imports

### Type Imports

* type imports guide compiler to map simplenames to qualified names
    * Use **import** keyword
        * Single type import - allows mapping for a single type
        * Preferred way to import types
        * Modern IDEs will add automatically
            * **Example:**
            ``` java
                import com.pluralsight.travel.Flight
                import com.xyzcompany.bar.Beer

                Flight lax175 = new Flight(175;); //whenever we use the class Flight we are using the Flight class as defined inside the package listed in the import statement

                Beer liteBeer = new Beer();
            ```
            
        * Import on demand - allows a mapping for all types in a package
            * Use with caution
            * Exposes code to potential breakage from changes in referenced packages
            * If two declared packages have a type of the same name an error will occur
            * **Example:**
                ```java
                    import com.pluralsight.travel.*;
                    import com.xyzcompany.bar.*;
                ```

## Packages Provide a Unit of Distribution

* Packages provide a predictable software structure which simplifies distribution
* Class files are organized in hierarchical folders reflecting the package name
    * Each part of the package name is a separate folder

## Archive Files

* Package folder structure can be placed into an archive file - more commonly known as **JAR** files
    * Supports compressing content
    * Optionally includes a manifest
        * Provides information regarding archive content
            * List of name-value pairs
            * Commonly used to define startup class contained in the archive file

### Creating Archive Files

* The JDK provides a utility for creating archive files
    * The _jar command-line_ utility
* Capability included with many other tools as well
    * Many of the IDEs such as Intellij IDEA and NetBeans include this capability
    * Build automation systems; commonly known as build manager include the capbility such as Gradle and Maven