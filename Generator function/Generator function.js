// Generator functions in JavaScript are a special type of function that can be paused and resumed, 
// allowing you to produce a sequence of values over time. They are useful for handling asynchronous operations, 
// iterating over large data sets, or implementing lazy evaluation.

// Syntax of Generator Functions
// A generator function is defined using the function* syntax. Inside the function, the yield keyword is used to 
// pause the function and return a value.

function* simpleGenerator() {
    yield 1;
    yield 2;
    yield 3;
  }
  
  // Using the generator function
  const generator = simpleGenerator();
  
  console.log(generator.next()); // { value: 1, done: false }
  console.log(generator.next()); // { value: 2, done: false }
  console.log(generator.next()); // { value: 3, done: false }
  console.log(generator.next()); // { value: undefined, done: true }
  

//   Explanation
// Definition: The generator function simpleGenerator is defined using function*.
// Yield: The yield keyword is used to pause the function and return a value.
// Invocation: The generator function is invoked using simpleGenerator(), which returns a generator object.
// Iteration: The generator object's next() method is called to get the next value from the generator.
//  Each call to next() resumes the generator function from where it left off and runs until the next yield.