// ncapsulation is the concept of wrapping data and methods that operate on the data within a single unit. This is typically achieved by using classes and making properties private using the # syntax (introduced in ECMAScript 2021):

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