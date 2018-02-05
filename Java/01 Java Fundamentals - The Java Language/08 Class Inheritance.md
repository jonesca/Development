# Class Inheritance

* A class can be declared to inherit (a.k.a derive) from another class using the "extends" keyword
* The derived class has characteristics of the base class
    * Can add it's own specialization
    * <span class="red">Fields hide base class fields with same name</span>
    * Methods override base class methods with same signature

## Object Class

* The Object class is the root of the Java class hierarchy
    * Every class in Java has the characteristics of the Object class
    * Every class inherits directly or indirectly from the Object class
    * Useful for declaring variables, fields and parameters that can reference any class or array instance
    * Defines a number of methods that are inherited by all objects

## Object Class Methods

* **clone**: Create a new object instance that duplicates the current instance
* **hashCode**: Get a hash code for the current instance
* **getClass**: Return type information for the current instance
* **finalize**: Handle special resource cleanup scenarios
* **toString**: Return string of characters representing the current instance
* **equals**: Compare another object to the current instance for equality

## Special Reference: super

* Similar to _this_, **_super_** is an implicit reference to the current object
    * _super_ treats the object as if it is an instance of its base class
    * Useful for accessing base class members that have been overridden

## Using Final

* _final_ prevents the inheritance from the class anymore

```java
public final class Passenger{
    //...other classes are unable to inherit from this class due to the word final.  This class can NOT be extended.  The ordeer of public and final does not matter either one can be listed first.  This also applies to methods within a class.  Mark individual methods or the entire class final but not both.
}
```

## Using Abstract

* _abstract_ is used to require inheritance and/or overriding

```java
public abstract class Pilot{
    public abstract boolean canAccept(Flight f);
    //...once you mark a method as abstract the entire class becomes abstract as well...must mark the class abstract as well.
}
```

## Inheritance and Constructors

* In Java, constructors are NOT inherited; each class is responsible for defining it's own constructors.
* A base class constructor must always be called
    * By default, base class' no-argument constructor is called
    * Can explicitly call a base class constructor using  _super_ followed by parameter list
        * Must be the first line of the constructor