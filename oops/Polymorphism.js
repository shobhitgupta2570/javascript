// Polymorphism allows methods to do different things based on the object it is acting upon.

class Person{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }

    displayInfo(){
        console.log(`${this.name} has ${this.age}`)
    }
}

class Students extends Person{
    constructor(name,age,grade){
        super(name,age);
        this.grade = grade;
    }
    displayInfo(){
        super.displayInfo()
        console.log(`${this.name} has ${this.age} got ${this.grade}`)
    }
}

const people=[
new Person("Shobhit",23),
new Students("Jagdish",24,"A"),
new Person("Nitish",25)
]

people.forEach((i)=>{
    i.displayInfo();
})