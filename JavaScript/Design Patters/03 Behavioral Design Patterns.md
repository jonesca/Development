# Behavioral Design Patterns
Concerned with the assignment of responsibilities between objects and how they communicate
- Deals with the responsibilities of objects
- Help objects cooperate
- Assigns clear hierarchy
- Can encapsulate requests

## Observer Pattern 
Allows a collection of objects to watch an object and be notified of changes
- Allows for a loosely coupled system
- One object is the focal point
- Group of objects watch for changes

## Mediator Pattern
Controls communication between objects so neither object has to be coupled to the others
- Allows for loosely coupled system
- One object manages all communication
- Many to many relationship

## Command Pattern 
Encapsulates the calling of a method as an object
- Fully decouples the execution from the implementation
- Allows for less fragile implementations
- Support undo operations
- Supports auditing and logging of operations