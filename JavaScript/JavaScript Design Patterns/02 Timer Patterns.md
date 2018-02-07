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