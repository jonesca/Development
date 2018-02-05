LINQ - <i>Language Integrated Query</i>  

##Comprehension Query Syntax
```csharp
var queery = from r in _db.Restaurants
	where r.Country == "USA"
	orderby r.Name
	select r; //big difference between LINQ and SQL is the select goes at the end
```

###Extension Method Syntax
A second way to express the same query using Extension Methods  
```csharp
var query = _db.Restaurants	
	.Where(r => r.Country == "USA")
	.OrderBy(r => r.Name) //through this part the two queryies produce the exact same results
	.Skip(10) //skip the first n results
	.Take(10); //take or accept the next n results
```

[101 LINQ Samples](http://code.msdn.microsoft.com/101-LINQ-Samples-3fb9811b)  
[LINQPAD](http://www.linqpad.net)  
Pluralsight courses devoted to LINQ by Scott Allen  

[AutomMapper](http://automapper.org)  
