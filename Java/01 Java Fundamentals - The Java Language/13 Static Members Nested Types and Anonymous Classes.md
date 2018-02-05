# Static Members, Nested Types and Anonymous Classes

## Static Members

* Static members are shared class-wide
    * Not associated with and individual instance
* Declared using the keyword **static**
    * Accessible using the class name
* Static Fields
    * A value not associated with a specific instance
    * All instances access the same value
* Static Methods
    * Performs an action not tied to a specific instance
    * Can access static fields only
* Static Import
    * Provides a short hand for accessing static members without even using the class name

## Anonymous Classes

Anonymous classes are declared as part of their creation

* Useful for simple interface implementations or class extensions
* Anonymous classes are inner classes
    * Anonymous instance is associated with the containing class instance
* Create as if you are constructing an instance of the interface or base class
    * Place opening and closing brackets after the interface or base class
    * Place implementation code within the brackets