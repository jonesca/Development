#Asserts Errors and Exceptions
To Expect the unexpected shows a thoroughly modern intellect -Oscar Wilde  

#Asserts
- provide issue notification to the developer when building and testing code
- <b>Assertions</b> are warnings to the developer; they complain LOUDLY at runtime  
    `Debug.Assert(customerRepository!=null, "Missing customer repository instance");`
- Debug.Asserts only run in the testing phase when in <i>Debug</i> mode

#Errors
- anticipated errors and exceptions (in this context) such as user entry errors, missing data in a DB, etc...

##Invalid User Entry Options
- Use and appropriate control
- Use built in data validation
- Write a validation method
 - <i>Display message to the user</i>
- Validate with guard clauses
 - <i>display message to the user</i>
- Proceed with a good default value

##Invalid or Missing Data Options
- Validate incoming data
- Proceed without the value
- Proceed with a good default value
- Display a message to the user

##Code Construct Issue Options
- Proceed with a default operation
- Ignore the issue if possible to complete the user request
- Log it and display a message to the user

##System Issue Options
- Try again
- Proceed with and alternate / default operation
- Ignore the issue depending on the situation
-  Log it and display a message to the user

#Exceptions
- unexpected issue and unhandled exceptions such as an Internet dropped connection, unexpected DB error, etc...

##Anticipated Exception Handling
- <b>DON'T</b> use the global exception handler for anticipated exceptions
- Handle anticipated exceptions locally in time and space
 - Locally in Time means handling the exception as soon as it is thrown
 - Locall in Space means handling the exeption close to where the error occurs
- Do something with exceptions that are caught.  Never catch and just eat an error.
 - Don't catch an exception unless you plan to do something about it
- Catch specific exceptions
- Log to collect important information about the error
- Don't try to catch all exceptions; only catch those we are anticipating and let the global exception handler deal with the others
- <i>Thow</i> the exception to propagate the exception