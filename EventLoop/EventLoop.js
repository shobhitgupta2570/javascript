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