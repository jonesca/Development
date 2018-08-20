Classes hold most of the code for an application

Classes contain:
- Signature
- Fields
- Properties
- Constructors
- Methods

These items make up the <i>Class Members</i> of the class
#Building a Class
```csharp
namespace Acme.Biz
{
	/// <summary>
	/// Manages products carried in inventory.
	/// </summary>
	public class products 
	//SIGNATURE 
	//including class keyword
	//Class name (Product, Order, OrderItem, etc...) Pascal cased
	//Accessibility Modifier; default is internal.  public makes the class available to all code in the application
	//XML document comments <summary> section
	{
		private int productId;
		private string productName;
		//these are fields.  They are variables of a class and hold the data being worked within the class.  They are private so no outside influence can get or set the variables
		
		public int productId
		{
			get { return productId; }
			set { productId = value; }
		}
		public string productName
		{
			get { return productName; } //returns the value from the productName field
			set { productName = value; } //sets the value of the productName field
		}
		//PROPERTIES
		//Getter and Setter functions
		//Guard access to the fields
		
		public decimal CalculateQuantityOnHand()
		{
			var quantity = 0;
			//... calculate the number in inventory
			return quantity;
		}
		//METHODS
		//Functions containing the logic for a class
		//Defined the behavior and operations appropriate for the class
	}
}
```

##Class Best Practicies
###DO:
- Class Naming
 - Define a meaningful name
 - Use a noun
 - Use PascalCasing
- Add XML document comments
- Use properties to encapsulate fields
- Use methods for logic and operation
- Ensure the class has a vell-defined purpose. Document the purpose in the XML comments; all of the code in the class should be focused on that purpose
- Create one class per code file
- Add properties above the methods



###AVOID
- Class Naming
 - Abbreviations
 - Prefixes
 - Underscores
- Large classes

#Defining Constructors
- Special method in a class that is automatically executed when and instance of the class is created
- Must be named the same name as the class
- A constructor with no parameters is call a default constructor
- Constructors are not required; csharp will define and execute a default constructor implicitly if we don't define one
```csharp
public class Product
{
	public Product()
	{
		
	}
	//This is a parameterized constructor
	//Defines parameters to initialize the instance
	//Having two methods with the same name and different parameters is called "Overloading"
	//Use "this to invoke another constructor; as shown this is called "Constructor chaining".  The parameterized constructor calls the default constructor first then performs its work
	//Constructor chaining can help minimize repeated code
	public Product(string productName) : this()
	{
		productName = productName;
	}
}
```

##Constructor Best Practices
###DO
- Consider providing a default constructor
- Consider providing a parameterized constructor
 - Initialize the minimum properties for a valid object
- Name the parameters the same name as the related properties

###AVOID
- Performing too much work

#Namespaces
- Automatically added around every class
- Same name as the project
 - Provide a unique address
 - Organize classes into a logical hierarchy
 
##Namespace Best Practices
###DO:
- Follow:
 - <company>.<technology>.<feature>
 - Acme.Wpf.Pm
 - Microsoft.Office.Interop.PowerPoint
- Use PascalCasing
  
###AVOID:
- Using System
 - System.Windows.Media.Imaging
- Using a class name
 - Namespace: Acme.Biz.Product
 - Class: Acme.Biz.Product.Product
   
#Static Classes
- static keyword in the signature
- Only static members
- Can not instantiate a static class with the new keyword
 - use the class name instead
- Provides a container for utility features 

##Static Classes Best Practices
###DO:
- Use sparingly and only as supporting classes for an application
- Use for common code library compenents when needed

###AVOID:
- Using as a miscellaneous bucket - every class should have a purpose

#Singleton
- A class that <b>provides only one instance</b>.  This is different from a static class in that static classes don't provide any instances
- Private constructor(s)
- Static property provides the one instance
- Instance accessed with <b>User.Instance</b>

```csharp
public class User
{
	Private static User instance;
	Private User(){} //private constructor
	Public static User instance //Static property provides the one instance
	{
		get
		{
			if (isntance == null)
			{
				Instance = new User();
			}
			return instance;
		}
	}
}
```

##Advantages of a Singleton vs. Static Class
- A singleton has an instance
 - Can be passed to other code as needed
- A singleton can have child objects
 - Example: User instance has a set of roles associated with it
- A singleton supports object-oriented programming features
 - It can implement an interface
 - It can be inherited from