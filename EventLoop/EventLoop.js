// The event loop is a fundamental concept in JavaScript, particularly important for understanding how JavaScript handles asynchronous operations.
// It enables non-blocking I/O operations, allowing JavaScript to perform other tasks while waiting for external
//  operations (such as I/O, timers, or network requests) to complete.

// How the Event Loop Works


// Call Stack:

// This is where JavaScript keeps track of what function is currently being executed and what functions are called from within that function.
// The call stack operates on a last-in, first-out (LIFO) principle.

// Web APIs:

// These are provided by the browser (or the environment in the case of Node.js) and include features like setTimeout, DOM events, HTTP requests, etc.
// When such an API function is called, it’s handed off to the browser, allowing JavaScript to continue executing other code.

// Callback Queue (or Task Queue):

// When an asynchronous operation completes (e.g., a timer finishes or an HTTP request gets a response), its callback is 
// placed in the callback queue.

// Event Loop:

// The event loop continuously checks the call stack to see if it is empty.
// If the call stack is empty, it looks at the callback queue to see if there are any pending callbacks.
// If there are pending callbacks, it pushes the first callback in the queue to the call stack for execution.

// example

console.log("Start");

setTimeout(() => {
  console.log("Timeout callback");
}, 2000);

console.log("End");