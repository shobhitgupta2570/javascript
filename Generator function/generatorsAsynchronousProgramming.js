function* asyncTaskGenerator() {
    console.log("Starting task...");
    yield new Promise((resolve) => setTimeout(resolve, 1000));
    console.log("Task completed after 1 second");
  
    yield new Promise((resolve) => setTimeout(resolve, 2000));
    console.log("Task completed after 2 more seconds");
  
    return "All tasks done";
  }
  
  const runAsyncTasks = (generator) => {
    const gen = generator();
  
    function handle(yielded) {
      console.log(yielded)
      if (!yielded.done) {
        console.log(yielded.value)
        yielded.value.then(() => handle(gen.next()));
      }
    }
  
    handle(gen.next());
  };
  
  runAsyncTasks(asyncTaskGenerator);

//   Here is a visual representation of the state changes and execution flow:

// plaintext
// Copy code
// 1. runAsyncTasks(asyncTaskGenerator)
// 2. gen = asyncTaskGenerator()
// 3. handle(gen.next())

//    [Initial call to handle]
//    - gen.next() -> { value: Promise, done: false }
//    - Wait for Promise to resolve (1 second)

// 4. [After 1 second]
//    - gen.next() resumes
//    - Print: "Task completed after 1 second"
//    - gen.next() -> { value: Promise, done: false }
//    - Wait for Promise to resolve (2 seconds)

// 5. [After 2 seconds]
//    - gen.next() resumes
//    - Print: "Task completed after 2 more seconds"
//    - gen.next() -> { value: "All tasks done", done: true }
//    - Generator is done
  

// Generators can simplify asynchronous programming by allowing you to write
//  asynchronous code in a synchronous style, which is easier to read and maintain.