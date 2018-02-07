# Timer Patterns

## JavaScript Timers

- Both options include 2 parameters: a function to be invoked and period of delay for when the function is to be acted upon.
- Minimum delay is 4ms; anything less will be bumped to 4ms
- Timers won't start until the outer most function is finished

### setTimeout

- `setTimeout(function () { ... }, 0);`
- Executes the function once after the delay period has expired

### setInterval

- `setInterval(function () { ... }, 0);`
- Executes continuously with the specified delay between each execution

#### Asynchronous Execution Pattern

- Use setTimeout to break a long running function into smaller chunks so the browser does not appear to be "not responding"
  - This is most commonly used with lower powered devices such as mobile phones or older, slower browsers

#### Recursive setTimeout Pattern

- Executes code over a continuous period of time
- Most commonly use when querying a data source
  - AJAX long polling

## Asynchronous Module Definitions

- **Node.js** is a server implementation of JavaScript
- **ComnmonJS** is an attempt to standardize common JavaScript patterns