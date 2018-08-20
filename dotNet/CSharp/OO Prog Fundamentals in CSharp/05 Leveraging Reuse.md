#Leveraging Reuse
- Involves extracting commonality
- And building reusable classes / components

##Reasons for Reuse
1. <normal class="highlight">Build it once</normal> 
2. <normal class="highlight">Test it once</normal>
3. <normal class="highlight">Update it once</normal>
4. <normal class="highlight">Enhance it once</normal>

##Techniques for Reuse
- Collaboration
- Inheritance
- Components
- Copy / Paste (not really a good idea)...**DON'T DO IT**
 - Want the code in <b><i>one place</i></b> not copied in multiple places

###Abstract Class
- An abstract class cannot be instantiated meaning you **can't** use the <b class = "blue">new</b> keyword to create and instance of the class.  
- An abstract class is meant to be used as a base class for other classes and never used on it's own

###Concrete Class
- A concrete class is one that **can** be instantiated using the <b class = "blue">new</b> keyword to create and instance of the class.

###Sealed Class
- A sealed class cannot be extended through inheritance meaning that no other class can inherit from it preventing extension and customization

```csharp
public enum EntityStateOption
{
    //this defines the valid values of the EntityState property
    Active,
    Deleted
}

public bool IsNew { get; private set;} //IsNew determines if the object represents a new entity

public bool HasChanges { get; set; } //HasChanges defines whether the entity has been changed

public EntityStateOption EntityState { get; set; } //EntityState indicates whether the item is active or deleted

public bool IsValid //defines whether the data is currently valid. It is read-only so the syntax is a little different
{
    get
    {
        return true;
    }
}

```
