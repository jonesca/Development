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