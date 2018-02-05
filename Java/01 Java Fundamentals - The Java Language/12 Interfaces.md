# Interfaces

## What is an Interface?

In Java an interface is a type that defines a contract.  The key difference between a class and an interface is that interfaces do not provide any implementation.  Interfaces simply provide the contract.

Classes implement interfaces; the interfaces expresses that the class conforms to the contract.

* Interfaces don't limit the aspects of the class' implementation
* Some interfaces require additional type information using a concept known as generics
* Classes are free to implement multiple interfaces

## Declaring an Interface

* Declaring an interface is similar to declaring a class
    * Using the **interface** keyword
* Supports a subset of the features available to classes
    * Interfaces can have _methods_
        * When we provide methods to interfaces we simply list the name, paramters and return type
        * implicitly public
    * Interfaces can have _constants_
        * Typed named value
        * considered implicitly public, final, static
    * Interfaces can be extended
        * An interface can extend another interface
        * Implementing extended interfaces implies implementation of base