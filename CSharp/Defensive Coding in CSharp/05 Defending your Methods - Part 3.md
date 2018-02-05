#Defending your Methods - Part 3
##Returning Predictable Results

Can return multiple values when checking / validating in a method.  For Example:

```csharp
public bool ValidateEmail(out string message)
{
    var valid = true;
    
    if (string.IsNullorWhiteSpace(this.EmailAddress))
    {
        valid = false;
        message = "Email address is Null";
    }
    
    If (valid)
    {
        var IsValidFormat = true;
        //code here to validate email format 
        if (!IsValidFormat)
        {
            valid = false;
            message = "Email address is not in a correct format";
        }
    }
    
    if (valid)
    {
        var isRealDomain = true;
        //code here to comfirm the domain exists
        if(!isRealDomain)
        {
            valid = false;
            message = "Email address does not include a valid domain";
        }
    }
    
    return valid;
}

//when calling the validation method
string message;  //declare the message variable
var isValid = customer.ValidateEmail(out message); //out is better in this case than ref because it doesn't require initialization
```

- Use <b><font color="burntorange">Tuple</font></b> instead of <i>ref</i> or <i>out</i>

###Example
```csharp
public Tuple<bool,string> ValidateEmail()
{
    Tuple(bool, string> result = Tuple.Create(true, "");
    
    if (string.IsNullorWhiteSpace(this.EmailAddress))
    {
        result = Tuple.Create(false, "Email address is Null");
    }
    
    if (result.Item1==true)
    {
        {
        var IsValidFormat = true;
        //code here to validate email format 
        if (!IsValidFormat)
        {
            result = Tuple.Create(false, "Email address is not in a correct format";
        }
    }
    
    if (result.Item1==true)
    {
        var isRealDomain = true;
        //code here to comfirm the domain exists
        if(!isRealDomain)
        {
            result = Tuple.Create(false, "Email address does not include a valid domain";
        }
    }
    
    return result;
}

//to call the Tuple
var result = customer.ValidateEmail();
if (result.Item1==true)
{
    //code...
}
```

- Tuple is clumsy -- a better way is to return <b><font color="burntorange">objects</font></b>