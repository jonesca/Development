# Controlling App Execution and Environment

## Command-line Arguments

**Can pass info to app on command line**
* Target of app processing
    * Input/output files, URLs, etc.
* Behavior options

**Arguments passed as a String array**
* Received by app's main function
* Each argument is a separate element
    * Separated by OS's whitespace
    * Honor's OS's value quoting

## System Properties

**Java provides info about environment**

* Accessed with System.getProperty

**Information Includes**

* User Information
* Java installation information
* OS configuration information

**Each value accessed via a string name**

* [List of commonly used properties](http://bit.ly/javasystemprops)
    * Get the logged in user name: `String userName = System.getProperty("user.name");`
    * Get the logged in users home path: `String userName = System.getProperty("user.home");`
    * Get the system architecture: `String userName = System.getProperty("os.arch");`
    * Get the vendor of the version of java: `String userName = System.getProperty("java.vendor");`

## Environment Variables

**Most OS's support environment variables**

* Provide configuration information
* Many variables are set by OS
* Can provide app-specific variables

**Apps can access environment variables**

* Access all with System.getenv()
    * Returns *Map<String, String>* as a listing of all available environment variables
* Access one with System.getenv(name)
    * Returns the value of the a specific variable