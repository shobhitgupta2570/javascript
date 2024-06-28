function* fibonacciGenerator() {
    let [prev, curr] = [0, 1];
    while (true) {
      yield curr;
      [prev, curr] = [curr, prev + curr];
    }
  }
  
  // Using the generator function
  const fibGen = fibonacciGenerator();
  
  console.log(fibGen.next().value); // 1
  console.log(fibGen.next().value); // 1
  console.log(fibGen.next().value); // 2
  console.log(fibGen.next().value); // 3
  console.log(fibGen.next().value); // 5
  console.log(fibGen.next().value); // 8