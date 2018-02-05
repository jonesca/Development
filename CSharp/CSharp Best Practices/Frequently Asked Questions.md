#These questions are frequently asked in job interviews for C\# programmers

##Defining Proper Classes
1. Why is the <b>layered archictecture</b> important?
 - Logical components are easier to create, change, extend, and maintain
 - Code is easiere to reuse
2. What is a <b>class</b>?
 - A template for the objects created at runtime
 - Specifies the data and operations for each entity (or thing) in the application
3. What are the benefits of <b>unit testing</b>?
 - Higher quality code, faster and easier debugging, and they are repeatable over the life of the application

#Building Good Classes
1. What is the difference between a property and a method?
 - <i>Properties</i> are the gate-keepers, prividing access to the data
 - <i>Methods</i> are the operations
2. What is a <i>contstructor</i>
 - A method executed when an instance is create4d from a class
3. What is the purpose of a <i>namespace</i>?
 - Organize classes into a logical hierarchy
 - Prevent class name collisions
4. What is a <i>static class</i>?
 - A class that cannot be instantiated
 - It is best for use with common code libraries
5. What is a <i>singleton</i>?
 - A class that provides a single instance of itself
6. What is the difference between a static class and a singleton?
 - A <i>static class</i> cannot be instantiated
 - A <i>singleton</i> can instantiate itself and provide that instance

#Accessing and Using Classes
1. What is the difference between an object and a class?
 - A <i>class</i> is a template that specifies the data and operations for an entity
 - An <i>object</i> is an instance of that class created at runtime using the new keyword
2. What is <i>lazy loading</i> and when would you use it?
 - Instantiating related objects when they are needed and not before
 - This often involves creating the instance in the property getter for the related object
 
#Defining Fields Appropriately
1. Explaing the <b>data encapsulation principle</b>
 - An object's data shold be accessible only to the object
 - Backing fields containing the object data should be marked as private
2. What is a <b>backing field</b>?
 - A variable in a class used to retain each object's data
3. When should you use a <b>backing field</b>?
 - For every data field retained for an object
4. When should a <b>constant</b> be used?
 - When defining a field with a simple data type that will never change
5. When should you use a <b>read-only field</b>?
 - When defining a field that is initialized from a file, table, or code but shojld not thn be hanged anywhere else in the appication
6. What is the difference between a <b>constant</b> and a <b>read-only</b> field?
 - A <b>constant</b>
  - Is static
  - Assigned on the declaration
  - Assigned to an expression that is fully evaluated at compile time
 - A <b>read-only field</b>
  - Can be static or non-static
  - Assigned in the declaration or in a constructor
  - Assigned to any valid expression
  
#Creating Good Properties
1. What is the primary purpose f a <b>property</b>?
 - To guard access to the fields of the class
 - Optionally provide a location for logic
2. What are <b>auto-implemented</b> properties?
 - Short cut syntax for defining an implicit backing field with its associated property getter and setter
3. When <b>should</b> you use an auto-implemented property?
 - When creating simple properties for a class
4. When <b>shouldn't</b> you use an auto-implemented property?
 - If the property requires any code in the getter or setter
 
 #Creating Good Methods
 1. What is the primary purpose of a method?
  - To implement the logic required for specific behavior or functionality in a class
 2. What is the difference between a parameter and an argument?
  - A <b>parameter</b> is part of the method signature
  - An <b>argument</b> is part of the method call
 3. What is method overloading?
  - Methods with the same name and purpose but different signatures
 4. What is method chaining?
  - One method overload calls another overload to prevent repeated code
 5. When is it best to use method overloading vs. method overriding?
  - Use overloading when one method requires multiple signatures
  - Use overriding when replacing a method defined higher up the object hierarchy
 6. What is an expression-bodied method?
  - A syntax shortcut for single statement methods that return a value
  
 #Specifying Clear Method Parameters
 1. What is the difference between a parameter and an argument?
  - A <i>parameter</i> is part of the method signature
  - An <i>argument</i> is part of the method call
 2. What is a <i>named argument</i> and when should it be used?
  - A named argument uses the parameter name when calling the method
  - Used to clarify the purpose of an argument and define arguments without conderen for their position in the paramter list
 3. How is an <i>optional parameter</i> defined?
  - By specifying a default value
 4. What is the difference between passing an argument by value vs. by reference?
  - When passed <i>by value</i> (which is the default), the value of the argument is passed to the method
  - When passed <i>by reference</i> (using ref or out), the variable is effectively passed to the method
  - Because of this, passing by reference enables the method to change the value of the parameter and have that change reflected in the calling code
 5. What is the difference between ref and out?
  - A <i>ref</i> parameter requires that the argument be initialized be3fore it is passed.
   - The method can modify the value for the ref parameter
  - An <i>out</i> parameter musts be declared, but not initialized before it is passed
   - The method **must** provide a value for the out parameter
  
  #Handling Strings
  1. What does it mean to say that C# strings are <font color="burntorange">immutable</font>?
   - It means that strings cannot be modified once they are created
  2. Is a string a value type or a reference type?
   - A string is a <font color="burntorange">reference</font> type
   - That acts like a <font color="burntorange">value</font> type
  3. What is the best way to check for <font color="burntorange">null</font> strings
   - It depends
   - Using *String.IsNullOrWhiteSpace* is great when checking nulls for a code block
   - Using the new C#6 null-conditional operator is great for code statements
  4. What are the benefits to using <font color="burntorange">StringBuilder</font>?
   - The .NET StringBuilder class is mutable, meaning that it can be readily changed
   - Using StringBuilder is therefore more efficient when appending lots of strings