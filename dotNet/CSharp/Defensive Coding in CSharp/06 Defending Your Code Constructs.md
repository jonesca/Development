#Defending Your Code Constructs
- Declare variables close to the code where they are needed for readability ease
##If Statements
- Use Braces (just use them)
 - If it is a single statement and you don't want to use braces put the code on one line
- Consider using an <b>Else</b> clause wherever it makes sense
- Think in the positive; for example, if something vs. if <i>not</i> something
- Consider refactoring nested if statements into seperate methods to create cleaner code that is easier to test

#Switch Statements
- provide an expression to evaluate and set of cases to execute based on the value of that expression  

##Example:
```csharp
switch (this.PaymentType)
{
    case 1:
        //process credit card
        break;
    
    case 2:
        //process PayPal
        break;
    
    default:
        throw new ArgumentException();
}
```
- Put the cases in logical sequence with most used or likely case first
- <b><font color="burntorange">Default Case</font></b> to execute if there is no match to the other case statements
- The code in each case should perform a single action.  
 - If the code is too complex the case should call a method that performs the complex action

#Enums
- <font color="burntorange">enum</font> is a type of data that allows each member to be described in words
- Use whenever you have a discreet and disjoined set of values you wanted to express in words

##Guidelines
- Use <i>enum</i> rather than magic numbers.  Magic numbers don't describe the intent without smelly comments
- Define an enum directly in a namespace so all classes in a namespace can use the enum... NOT nested in a class
- <font color="burntorange">IsDefined</font> determines if a value exists in a specified enum; however, it is recommended to NOT use IsDefined because it is expensive on performance
- Rather use <font color="burntorange">TryParse</font> to convert the string representation of the name or numeric value to it's equivelent enumerated value.  The return value of a 
TryParse method is a boolean indicating success or failure

##Example

```csharp
public enum PaymentTypeOption //this should be in its own namespace
{
    CreditCard = 1,
    PayPal = 2
}

//don't use IsDefined
// if (!Enum.IsDefined(typeof(PaymentType), this PaymentType))
// {
//     throw new InvalidEnumArgumentException("Payment type", (int)this.PaymentType, typeof(PaymentType));
// }

PaymentType paymentTypeOption;
if (!Enum.TryParse(this.PaymentType.ToString(), out paymentTypeOption))
{
    throw new InvalidEnumArgumentException("Payment type", (int)this.PaymentType, typeof(PaymentType));
}

switch ((PaymentTypeOption)this.PaymentType) //need to cast the expression to PaymentTypeOption so it is evaluated as an enum type and not an integer
{
    case PaymentTypeOption.CreditCard:
        //process credit card
        break;
    
    case PaymentTypeOption.PayPal:
        //process paypal
        break;
    
    default:
        throw new ArgumentException();
}
```

#Casting
- Casting is the process of changing information from one type to another

##Guidelines
- <i>Cast Carefully</i>
- If there is a reasonable chance the cast may fail either now or in the future check the value first
- One way to check the value is to use the <font color="burntorange">as / if</font> operators
 - Using the <i>as</i> keyword is called a <i>safe cast</i>.  If the cast fails the code assigns a null value which can then be checked for using if statements