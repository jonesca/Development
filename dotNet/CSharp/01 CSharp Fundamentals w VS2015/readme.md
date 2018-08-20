# C# Fundamentals

```csharp
// create a file named hello.cs
using System; //can do this to specify the namespace or include the name space in the command line as shown in a comment below

public class program //this is the main class
{
    static void Main() //this is a method on the class.  When this program is called it will automatically look for a Main class to execute
    {
        // System.Console.WriteLine("Hello, World!");
        Console.WriteLine("Hello, World!");
        Console.WriteLine(DateTime.Now.DayOfWeek);
        // Namespace of System
        // Class of Console
        // Method of WriteLine
    }
}

// to run this program run C:\windows\Microsoft.Net\Framework\v...\csc hello.cs to compile the code to an executable that may be run
```

## Classes Versus Variables

- A class is a blueprint for creating objects
- A class can also be used to type a variable
  - A variable can refer to any object of the same type

### Example

```csharp
// Use the new keyword with a class to create new object of that type in memory
// This line of code creates a new GradeBook object and holds on to that object in the variable book
GradeBook book = new GradeBook();
book = new GradeBook(); //this would create a new GradeBook oject and point the variable book at the new object; the original GradeBook object is no longer able to be referenced
```

## Reference Types

- Classes are reference types
- Variable hold a pointer value

## Access Modifiers

- **public**: makes visible to other areas of the program
- **private**: keeps hidden from other areas of the program; this is the default behavior if an access modifier is not specified
- **static**: Use static members of a class without creating an instance
- **internal**: Use only in the same assembly

```csharp
public static float MinimumGrade = 0;
public static float MaximumGrade = 100;
```

## Assemblies

- Assemblies are .exe or .dll files
  - Contain metadata about all types inside
- Global Assembly Cache (GAC)
  - A central location to store assemblies for a machine (C:\Windows\Assembly)

## Creating Value Types

### struct

- _struct_ definitions create value types
  - Should represent a single value
  - Should be small

```csharp
public struct DateTime
{
  //...
}
```

### enum

- An _enum_ creates a value type
  - A set of named constants
  - Underlying data tyhpe is int by default
    - Default is to start at 0; assign 1 to the first value and the enum will automatically assign subsequent items the next int. So, in the the example Salaried = 2, Executive = 3, Hourly = 4. Alternatively, you can override the default value assignments

```csharp
public enum PayrollType
{
  Contractor = 1,
  Salaried,
  Executive,
  Hourly
}

//.... then rather than using magic numbers ....

if(employee.Role == PayrollType.Hourly)
{
  // ...
}
```

## Method Parameters

- Parameters pass "by value"
  - Reference types pass a copy of the reference
  - Value types pass a copy of the value

## Arrays

- Manage a collection of variables
  - Fixed size (lists are not fixed)
  - Always 0 indexed

```csharp
const int numberOfStudents = 4;
int[] scores = new int[numberOfStudents]

int totalScore = 0;
foreach(int score in scores)
{
  totalScore += score;
}

double averageScore = (double)totalScore / scores.Length;
```

## Methods

- Methods define behavior
- Every method has a return type
  - **void** if no value returned
- Every method has zero or more parameters
  - Use _params_ keyword to accept a variable number of parameters
- Every method has a signature
  - Name of method + parameters

## Fields

- Fields are variables of a class

## Properties

- A property can define a get and/or set accessor
  - Often used to expose and control fields

## Events

- Allows a class to send notifications to other classes or objects
  - Publisher raises the event
  - One or more subscribers process the event

## Delegates

- I need a variable that references a method
- A Delegate is a type that references methods

```csharp
public delegate void Writer(string message);
// create a delegate called Writer
```

## Control Flow

### Branching

- This is achieved using the if else if statements
- Also the ternary operator

```csharp
// Example ternary operator
string pass = age > 20 ? "pass" : "nopass";
// if the statement is true the left side of the colon is returned; otherwise, the right side is returned
```

### Switching

- Restricted to integers, characters, strings, and enums
  - Case labels are constants
  - Default label is optional

```csharp
// EXAMPLE
switch(name) {
  case "Cody":
    ServeSoda();
    break:
  case "JuLaine":
    ServeCoffee();
    ServeDrink();
    break;
  default:
    ServeMilk();
    break;
}
```

### Iterating (loops)

#### foreach 

```csharp
int[] ages = {2, 21, 40, 72, 100}
foreach (int value in ages)
{
  Console.WriteLine(Value);
}
```

#### for 

```csharp
for(int 1=0; i<age; i++)
{
  Console.WriteLine(i);
}
```

#### while

```csharp
while(age > 0)
{
  age -= 1;
  Console.WriteLine(age);
}
```

#### do while

```csharp
do
{
  age++;
  Console.WriteLine(age);
} while (age < 100);
```

### Jumping

#### break

- **break;** can be used in other loops as well to break out of the loop when a condition is met

#### continue

- **continue;** does not jump out of the loop; however, it skips the rest of the loop and begins the next iteration of the loop

#### goto

- **go to skip;** moves execution to the section of code with the _skip:_ label and jump over code inbetween

#### return

- return a value or return in a void method will jump out of the loop and out of the method

#### throw

- Use **throw** to raise and exception
  - Exceptions provide type safe and structured error handling in .NET

```csharp
// EXAMPLE
// However, exceptions should be reserved for EXCEPTIONAL circumstances
if (age == 21)
{
  throw new ArgumentException("21 is not a legal value");
}
```

### Handling Exceptions

- Handle exceptions using a try block
  - Runtime will search for the closes matching catch statement

```csharp
try
{
  ComputeStatistics();
}
catch(DivideByZeroException ex)
{
  ConsoleWriteLine(ex.Message);
  ConsoleWriteLine(ex.StackTrace);
}
```

### Chaining Catch Blocks

- Place most specific type in the first catch clause
- Catching a System.Exception catches everything
  - ...except for a few "special" exceptions
  - start with specific exceptions first

### Finally

- **finally** clause adds finalization code
  - Executes even when control jumps out of scope. Runs whether or not there is an exception

```csharp
FileStream file = new FileStream("file.txt", FileMode.Open)
try
{

}
finally
{
  file.Close();
}
```

## Pillars of Object Oriented Programming (OOP)

### Encapsulation

### Inheritance

### Polymorphism