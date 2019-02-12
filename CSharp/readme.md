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

- Static Members are accessed through the class, not through an object

