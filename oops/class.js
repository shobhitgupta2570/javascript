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