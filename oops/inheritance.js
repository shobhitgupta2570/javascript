class Person {
    constructor(name,age){
      this.name = name;
      this.age = age;
    }
    displayInfo(){
      console.log(`${this.name}'s age is ${this.age}`)
    }
  }
  
  const Person1 = new Person("Shobhit",23);
  
  Person1.displayInfo();

  class Student extends Person {
    constructor(name, age, grade) {
      super(name, age); // Call the constructor of the parent class
      this.grade = grade;
    }
  
    // Method to display student details
    displayInfo() {
      super.displayInfo(); // Call the parent class method
      console.log(`Grade: ${this.grade}`);
    }
  }
  
  // Creating an instance of the Student class
  const student1 = new Student("Alice", 20, "A");
  student1.displayInfo(); 
  // Output:
  // Name: Alice, Age: 20
  // Grade: A
  