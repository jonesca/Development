#Backing Fields
Most common types of fields we use.  Backing fields are variables in a class that holds the data for each object we instantiate from that class.
It is a key best practice to use <b>Data Encapsulation</b> or <b>Information Hiding</b> 
 - an objects data should only be available to that object
 - Fields are private 
 - Data is only accessible outside the class through property getters and setters

All backing fields have:
- Optional accessibility modifier (private / public)
- Data type (sting, int, etc... or custom created types)
- Fieldname in camelCase
- Example: `private string productName;`

##Best Practices
###DO:
- Define a meaningful name
- Use camelCasing
- Keep fields private
- Use properties to provide access to the fields

###AVOID
- Use single character names
- Use abbreviated names
- Initialize the field to it's default value
- 
#Nullable Types
A nullable type is a value type like int, decimal, datetime, etc... 
- Allows definition of a value or null 
- Specified with a "?" suffix on the type
- Dinstinguishes "not set" from the default value

##Nullable Type Best Practices
###DO:
- Use on simple types to distinguish "not set" and "default value"
- Use properties of the type such as <b>HasValue</b> and <b>Value</b> as needed

###AVOID:
- Using them if not necessary

#Constants
Represents information hard coded into the application
- Defined in a class
- Holds a hard-coded value that does not change; for example:
 - `public const double Pi = 3.14;`
 - `public const int Red = 0xFF0000;`
 - `public const double InchesPerMeter = 39.37;`
- Must be assigned to an expression that can be fully evaluated at compile time
 - think of a constant as a "compile-time" constant value
- Compiled into every location that references it
- Are static
- Can only be Numbers (int, double), Boolean, or Strings
-Must be initialized to value

##Constant Best Practices
###DO:
- Define a field name
- Use PascalCasing

###AVOID:
- Single character name
- Abbreviations
- All upper case
- Do not use constants for fields that could change over time

#Read-only Fields
Read only field represent data whose value is set and never changed for the lifetime of the object
- Variable held in a class
- Holds a value that is initialized and then not changed
- Must be initialized
 - In the declaration
 - Or in the constructor
- Think of a read-only field as a "runtime" constant value

##Read-Only Field Best Practices
###DO:
- Define a meaningful name
- Use PascalCasing
- Use for runtime constants
- Use <i>static</i> if the constant vaue is valid for al intances

###AVOID:
- Using abbreviations
- Using single character names