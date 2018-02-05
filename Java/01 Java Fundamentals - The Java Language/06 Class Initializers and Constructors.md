# 06 Class Initializers and Constructors

## Establishing initial state

When an object is created, it is expected to be in a useful state

* Often the default state established by Java is not enough
* The object may need to set values or execute code

### Mechanisms for Establishing Initial State

* Java provides 3 mechanisms for establishing initial state
  * Field initializers
  * Constructors
  * Initialization blocks

## Field Initializers

* Allow you to specify a field's initial value as part of its declaration
    * Can be a simple assignment
    * Can be an equation
    * Can reference other fields
    * Can be a method call

###### Example

```java
public class Earth{
    long circumferenceInMiles = 24901; //simple initialization
    long circumferenceInKilometers = (long)24901 * 1.6d; //equation initialization - must cast the equation to long since the field is long but one of the values is  double
    long circumferenceInKilometers = (long)circumferenceInMiles * 1.6d; //equivalent to the above equation but better because it uses a reference to the first field
    long circumferenceInKilometers = Math.round( circumferenceInMiles * 1.6d ); //call to a built in method to increase the accuracy by forcing a rounding instead of a truncation
}
```

### Field Initial State

A field's initial state is established as part of the object construction

* Fields receive a "zero" value by default.  The "zero" value is whatever the fields empty state may be.
    * byte, short, int, long default is 0
    * float, double default is 0.0
    * char default is '\u0000'
    * boolean default is false
    * Reference types default is null
* Don't have to accept the default values

## Constructors

* Executable code used during object creation to set the initial state
    * Has no return type
    * Every class has at least one constructor
        * If no explicit constructors, Java provides one implicitly that doesn't do anything but provides a constructor.  You will not see this in your code.
        * Once you write one constructor you must write all constructors and the implicitly created constructors are no longer available
    * A class can have multiple constructors
        * Each with a different parameter list (signature)

## Constructor chaining & visibility

### Chaining

* One constructor can call another
    * Use the <em>this</em> keyword followed by parameter list
    * The call to the other constructor must be the first line

### Visibility

* Use access modifiers to control constructor visibility
    * Limits what code can perform specific creations

###### Example

```java
public class Passenger {
    //fields and methods elided for clarity

    public Passenger(){

    }

    public Passenter ( int freebags ) {
        this(freeBags > 1 ? 25.0d : 50:0d); //this chains down to the constructors that sets the perBagFee
        this.freeBags = freeBags;
    }

    public Passenger ( int freeBags, int checkedBags){
        this(freeBags); //chained constructor
        this.checkedBags = checkedBags;
    }

    private Passenger ( double perBagFee ) { //private says this can't be called outside this class
        this.perBagFee = perBagFee;
    }
}
```

## Initialization blocks

* Initialization blocks shared across all constructors
    * Executed as if the code were placed at the start of each constructor
    * Enclose statements in brackets outside of any method or constructor
    * Multiple initialization blocks in a class are run in the order they are encountered from the top. **BE VERY CAREFUL ABOUT DOING THIS** can easily get out of hand

###### Example

```java
public class Flight {
    private int passengers, flightNumber, seats = 150;
    private char flightClass;
    private boolean[] isSeatAvailable;

    { //this is an initialization block that runs at the start of each constructor
        isSeatAvailable = new boolean[seats];
        for(int i = 0; i < seats; i++)
            isSeatAvailable[i] = true;
    }

    public Flight() {}
    public Flight(int flightNumber) {
        this.flightNumber = flightNumber;
    }

    public Flight(char flightClass) {
        this.flightClass = flightClass;
    }
}
```

## Initialization and construction order

* Field Initialization
* Initialization Block
* Constructor

![](InitConstOrder.jpg)