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
      if (!yielded.done) {
        yielded.value.then(() => handle(gen.next()));
      }
    }
  
    handle(gen.next());
  };
  
  runAsyncTasks(asyncTaskGenerator);
  