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