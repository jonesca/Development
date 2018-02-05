# Exceptions and Error Handling

* Exceptions provide a non-intrusive way to signal errors
    * **try/catch/finally** provides a structured way to handle exceptions
* The **try** block contains the "normal" code to execute
    * The block executes to completion unless an exception is thrown
* The **catch** block contains the error handling code
    * The block executes only if matching exception is thrown
* The **finally** block contains cleanup code if needed
    * Runs in all cases following try or catch block