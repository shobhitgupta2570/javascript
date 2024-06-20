// ncapsulation is the concept of wrapping data and methods that operate on the data within a single unit.
//  This is typically achieved by using classes and making properties private using the # syntax (introduced in ECMAScript 2021):

class Person{
    #name
    #age

    constructor(name,age){
        this.#name = name;
        this.#age = age;
    }

    displayInfo(){
        console.log(`${this.#name} has ${this.#age}`)
    }
}

const person1 = new Person("Shobhit",23);
person1.displayInfo();
// console.log(person1.#name);

// if we try to access #name property then it cannot be accessed and hence will throw error.
//  data can only be accessed through methods not directly .
// Encapsulation provides several benefits:

// Data Protection: It protects an object’s state by preventing unauthorized parties from modifying it.
// Simplified Interface: It provides a simplified interface to interact with the object's data.
// Maintainability: It makes the code more maintainable by centralizing the data management logic within the class.