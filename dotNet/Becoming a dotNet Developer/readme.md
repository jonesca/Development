# Becoming a .NET Developer

## The Four Basic Concepts of Programming

### Variables

Variables are for storing values

- Boolean (T or F; On or Off)
- Integer for storing whole numbers
- Double for storing fractions. The name comes from the fact that it consists of 2 integers one before the comma and one after
- String to store text information

### Commands

Commands are for performing operations

- Setting / Clearing
- Mathematical operations
- Calling other parts of the program

### Control Structures

Control Structures make up the program flow

- Control the flow
  - _Selection_ for example if-then-else structure
  - _Iteration_ for example for and do while loops
- Programs are a routine.  Within the routine there may be _sub-routines_ that the main routine calls, performs a function and returns to the main routine
- Sub-routines generally take parameters from the main routine.  A sub-routine may be of type **_void_** meaning no values are returned to the main routine or they may return a value to the main routine for further processing

### Data structures 

Data structures consist of variables grouped together to describe something

- Example: Player (name, life count)
- First _Define_ the structure
- Second create an _Instance_ of the structure

## Object Oriented Programming

- Everything is an object
- An object may have sub-routines (or methods).  For example: the object might be _Player_
  - Player1.Name where Name is the property
  - A method might be **_Join game_**

### Object Graphs

Example:

- Car object
  - The car object has 4 Wheel object.  Each wheel object is a seperate instanceof the Wheel structure
  - Each Wheel object has a number of Bolt objects which are each a seperate instance of the bolt data structure

## Classes

- A Class is basically a template for creating objects. Each of the objects in the Car example (above) would have been created from a class. A class is where we define the object templates.  Classes have properies, methods and constructors.
- **_Constructor_** is a special sub-routine defined in the class. The contructor handles what happens when a class is created, such as, initiating values to properties or create instances of objects in the object graph for the class

#### Interfaces

- Description of a class without code implementation
  - Cannot create instances directly from interfaces; rather from a class implementing the interface
  - The interface might state any object of this kind would have a method called _start_. The code for the method is left to the class implementing the interface.

#### Inheritance

- Create a class that inherits properties and methods from another class
  - Example: we might have a class of _super_ car that inherits the properties and objects of car.  However, the new class has a new property for _rocket engine_.
- **Single inheritance** is when we are only allowed to inherit from one class at a time
- **Multiple inheritance** allows for inheriting from several class at the same time.  For example: a _human_ inherits properties from their mother and their father. In class inheritance an inherited class inherits **ALL** the properties not just some as in biological inheritance. We only use single inheritance in C#. The relationship between inherited class is referred to as _parent child_ relationship
- **Base Class** is the class inherited from
- **Sub Class** is the inherited class or derived class

## Collections

**Collections** are basically containers of objects that are similar, having the same type or being inherited from the same type

- **Lists** is a collection of ordered objects and we care about which order the objects are in
- **Arrays** are the same thing except we don't care about the order