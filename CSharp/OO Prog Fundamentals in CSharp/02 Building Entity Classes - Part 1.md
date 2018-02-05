#Building Entity Classes - Part 1
##Layering the application
1. <b>User Interface</b>
 - Forms or pages displayed to the user
 - Logic to control the user interface elements
 - <b>EXE</b>
2. <b>Business Logic</b>
 - Logic to perform the business operations
 - <b>DLL</b>
3. <b>Data Access</b>
 - Logic to retrieve data from the database
 - Logic to save data to the database
 - <b>DLL</b>
4. <b>Common</b>
 - Common code through out the application and possibly other applications.  For example, logging.
 - <b>DLL</b>
 
##Building the Business Logic Layer Component
Classes are types
If you don't need any logic within the getter or setter use auto-implemented properties

###Snippets
- Short cuts for typing C# syntax
- Right click in VS and choose insert snippet then choose the snippet needed
- The highlighted areas are call replaceables
- You can also type the name of the snippet shown in the snippets and press tab twice to quickly insert the type of snippet wanted
 - For example, *prop* tab tab inserts the code `public int MyProperty { get; set; }`
 

