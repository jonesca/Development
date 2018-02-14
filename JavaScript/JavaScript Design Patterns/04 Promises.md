# Promises

In JavaScript, **everything** happens asynchronously.

How do you know when AJAX, animation, whatever else... is complete?

## Promise & Defer

- Promise and Defer work primarily through a _defer_ object

### Defer

A Deferred object controls operation

- **Progress** raised as deferred runs
- **Done** raised when deferred action completes successfully.  This results in a return of 200
- **Failure** raised when deferred action is unsuccessful