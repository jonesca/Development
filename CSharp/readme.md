# C# From Scratch

## Booleans

```csharp
bool myFirstBoolean = 2 + 3 == 5;
bool mySecondBoolean = 2 + 3 > 5;
bool oneIsTrue = myFirstBoolean || mySecondBoolean;
Console.WriteLine("oneIsTrue evaluates {0} because one expression is true", oneIsTrue);  //The value of the variable will be substituted in the curly brackets at run time
bool reverseMyFirstBoolean = !myFirstBoolean;
Console.WriteLine("myFirstBoolean is {0} but reverseMyFirstBoolean is {1}", myFirstBoolean, reverseMyFirstBoolean);  //The values of the variables will be substitued in the curly brackets respectively
```

## Program Flow

## Types

### Two Kinds of Types

- Built in types: _int, double, string_
- User-defined types: _Employee, Account, Fish..._ virtually anything

### A **Class** defines a Type

- Define the class / type Employee

```csharp
public class Employee {
    //...
}
```

- An instance of a class is called and **object**
- Instantiating an Object:

```csharp
Employee joe = new Employee();
// "new Employee" creates the object or instance of the class
// The new instance of the class or object is then assigned to the object variable "job"
```

- Classes have _Fields, Properties and Methods_

### Methods

- **Methods** are a chunk of code that does something (modifies an object, calculates a value, etc...)
- Methods can take in information to work with (**parameters**)
- Methods can return a value

```csharp
//CalculateSum is the method
//firstValue and secondValue are the parameters
//"return" is the value returned
public class Employee{
  public int CalculateSum(int firstValue, int secondValue){
    return firstValue + secondValue;
  }
}
```

### Properties

- Virtually EVERY Type has Properties
- Properties are by nature, public
- In the "real world" think of a type, for example car
- That type (car) has properties such as top speed, 4 doors, color, etc...)

#### Defining Properties

```csharp
public class Car{
  public int NumberOfDoors{get; set;}
  public double TopSpeed {get; set;}
  public string Color {get; set;}
}
```

### Fields

- Fields are just like properties, only private to the class and can only be accessed by methods of the class to assist methods or to store values

```csharp
public class Car {
  private int vehicleIdentitificationNumber;
}
```

## Capitalization

### camelCase vs PascalCase

- **camelCase** begins with a lowercase letter and is used by fields, variables, parameters, etc...
- **PascalCase** begins with an uppercase letter and is used by Classes, Constants, Properties

## Properties

1. Full

```csharp
//Full properties have a backing variable
private string name; //backing variable with lower case name

//property name with uppercase Name
public string Name{
  get { return name; } //getter returns the backing variable
  set { name = value; } //setter sets the backing variable to whatever is passed in
}
```

2. Automatic

The code above is so common there is a short hand that is equivelent:

```csharp
public string Name { get; set; }
```

3. Read Only (Get)

```csharp
public string Name { get; }
```

4. Read Only with Initialization

```csharp
public string Name { get; } = "Cody Jones";
```

## Method Overloading

- Two methods with the same name; however, they must differ in the number of parameters and/or type of parameters

## Constructors

- Constructors Create Your Object and Initialize it to it's starting state
- Constructors have...
  - No return value (not even null)
  - Same name as the class
  - Zero or more parameters
- If an explicit constructor is created a default constructor is not automatically created; it might be desirable to create a default constructor which is one having no parameters

```csharp
public class Worker{
  
  //explicit constructor
  public Worker (int age, string name){
    Age = age;
    Name = name;
  }

  //default constructor
  public Worker(){}
}
```

## Static Members

- Static Members are accessed through the class, not through an object.

## Programming with Objects

### Inheritance

- _Inheritance_ means that classes may derive from existing classes
- _Derive_ is to specialize the "parent" class
- **Example**: If we start with an **Animal** class we can derive from that a **Dog** and a **Cat** class.  We can similarly derive variations on the Dog and Cat class; such as, different breeds.
- The parent class should be generalization of the derived class containing the shared characteristics of the classes derived from it.
- Inheritance creates an "_is-a_" relationship
- Indicate a derived class using the colon to reference the base class

```C#
Class Book {
  //...
}

Class Fiction : Book {
  //...Fiction is-a type of book
}

Class NonFiction : Book {
  //...NonFiction is-a type of book
}
```

### Polymorphism

- **Polymorphism**: Taking many forms
- Implemented using _Method Overriding_ which is modifying a method in the derived class.  The method is created in the parent class and modified in the derived class.
- Implemented using _virtual_ and _override_ methods

```C#
Class Book {
  public virtual double Discount();
}

Class Fiction : Book {
  public override double Discount{
    base.Discount();  // chained up to the parent (base) class if we need the behavior of the base class to build on
    //other work here
  }
}
```

- Derived and base classes are said to be and can be treated ploymorphically; meaning, the derived class varies the behavior of the base class

### Encapsulation

- **Encapsulation** is the _CRITICAL_ idea that each class has a single responsibility
- Most of the internals of the class are private, with a few will-defined properties and methods that are public

## Bugs and Exceptions

- **Bugs** are programming errors
- **Exceptions** are problems at run time; possibly unavoidable
- Users will enter bogus data; it is important for your program to handle errant data
- Things go wrong:
  - Networks go down
  - Disks fail
  - Run out of memory
  - Objects are null
- Your goal is to recover and avoid crashing when "things go wrong"

### What is an exception

- An object
- System.Exception is the base of all exceptions
- Custom Exceptions
- May contain other exceptions

### call stack

- the list of methods that called methods that called other methods
  - Exceptions unwind the call stack until they find a "handler"
- If no handlers are found the program will crash

### Handling Exceptions

- Exceptions are handled with a try/catch block

#### Example:

```C#
a = b;
//...
int c = b / (a - b); //KA-BOOM
Console.WriteLine($"c == {c}");
//Divide by Zero: CRASH!!!

//Same program with a Try/Catch block to handle the error

a = b;
//...
try {
  int c = b / (a - b);
  Console.WriteLine($"c == {c}");
}
} catch {
  Console.WriteLine("oops! Attempt to divide by Zero!")
}

//If you need code to run regardless you add a "finally" statement

```

## Collections

### Arrays

```c#
//declare an array
Int[] someNumbersArray = new int[7];
Person[] peopleArray = new Person[7];
```

- Must declare size
  - Too large; waste space
  - Too small; run out of room
- Easy to run past the end of the array and crash your program

### Lists

- Lists are used much more often now  
`List<T>` pronounced list of  where T stands for a type

```c#
List<Person> people = new List<Person>();
//List of TYPE Person declared it "people" and instantiate that list by declaring a new List of Persion

Person john = new Person() { Name = "John"}; //make a person 'john', instantiate john
people.Add(john);
//add john to the list
```

### Dictionary

`Dictionary<K,T>`

- Dictionary of K and T where K is the key to the dictionary item and T is the type

## Promises, Interfaces and Abstract Classes

- An Interface is a contract.  An interface describes what a class must do to implement that interface; the class then does everything required by the interface.

## Advanced Statements

### Ternary Operator

- Shorthand for if/else statement
- Test and return first term if true, second if false

```c#
int bigger = x > y ? x : y;
// Test if x is greater than y.  If true, assign x to bigger.  If false, assign y to bigger
```

### Null Conditional

- Used with collections and classes
- The operator is ?. (Question Mark, dot [period])

```c#
List<string> authors = null;
int? count = authors?.Count;
string message = count == null ? "count is null" : "count is not null";
Console.WriteLine(message);
//List of strings named authors that is null
//A nullable integer for count
//We examine authors.  If it is null we return null otherwise we return the count
//Then using the ternary operator we check to see if count is null.  If it is we assign the first string if it isn't we return the second string
```

### Null Coalescing

- Operator is written as 2 question marks (??)
- If the left hand operand is **NOT** null, return it; otherwise, return the right hand operator

```c#
List<string> authors = null;
Int? howMany = authors?.Count ?? 0;
Console.WriteLine("Null coalescing. howMany = " + howMany);

authors = new List<string>(){
  "hello",
  "world"
};

howMany = authors?.Count ?? 0;
Console.WriteLine("Null coalescing. howMany = " + howMany);
```

## Asynchronous CSharp

### Threads

- The main thread is typically a User Interface thread
- Without asynchronous programming, starting a long operation can freeze the main thread
- With asynchronous programming the long thread can continue while the main thread is unaffected

#### await

- The keyword _await_ is used to say wait for this to finish then continue
- if await is used _async_ must be used as well

```c#
public async void Work(){
  await SlowTask();
}
```

## Delegates and Events

- A _delegate_ is just a reference to a method

## LINQ

### Lambda Expressions

```c#
public int Multiply(intx, int y){
  return x * y;

// using a lambda expression we can say the same thing much more concisely

(x, y) => (x * y);
}