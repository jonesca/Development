# Objects
An <em class="darkorange">object</em> is a collection of <em class="darkorange">properties</em>, which are describe in the form of <em class="darkorange">key / value</em> pairs.  We can use objects to model "things" using code.  

```javascript
//Store your object in a variable
//An object is defined in a code block
//An objects has a lists of properties that describe it
var myCoffee = {
    flavor: "espresso",
    temperature: "piping hot",
    ounces: 100,
    milk: true
};

//using dot notation we can reference properties in the object
alert(myCoffee.ounces); //alerts the value of the ounces property in the myCoffee object
```

# Methods
When an object has a property with a function as the value, it is referred to as a <em class="darkorange">method</em> of that object.  

We've been using methods all along! For example when we use <em class="darkorange">console.log()</em>, log is a method of the <em class="darkorange">console</em> object.  When we use <em class="darkorange">Math.random()</em>, random() is a method of the <em class="darkorange">Math</em> object.  While it is technically correct to say random and log are functions, when a function is associated only with a specific object using the term method is more specific since it implies associatn with an object, and not a global function.  

```javascript
var myCoffee = {
    flavor: "espresso",
    temperature: "piping hot",
    ounces: 100,
    milk: true,

    //create a method of the object
    reheat: function(){
        if(myCoffee.temperature === "cold"){
            myCoffee.temperature = "piping hot";
            alert("Your coffee has been reheated!");
        }
    }
};
//set the temperature to cold so we can test the method
myCoffee.temperature = "cold"; //dot notation
myCoffee["temperature"] = "warm"; //bracket notation
//call the method to test it
myCoffee.reheat();
```