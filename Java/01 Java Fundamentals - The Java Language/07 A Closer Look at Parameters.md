# A Closer Look at Parameters

## Parameter Immutability

* Parameters are passed by making a copy of the value
    * Known as passing "by-value"
    * Changes made to the passed value are not visible outside of the method
    * Changes made to members of passed class instances are visible outside of the method

## Overloading

* A class may have multiple version of its constructor or methods
    * Known as "overloading"
    * Each constructor and method must have a unique signature
        * Signature is made up of 3 parts
            1. Number of parameters
            1. Type of each parameter
            1. Name

## Variable Number of Parameters

* A method can be declared to accept a varying number of parameter values
    * Place an ellipse after parameter type `public void addPassenters(Passenter... list)`
    * Can only the last parameter
    * Method receives values as an array