// Abstraction in JavaScript is the concept of hiding the complex implementation details and showing only the necessary features of an object. 
// This helps in reducing programming complexity and effort. JavaScript achieves abstraction through classes and methods that provide 
// a clear and simplified interface.

// Abstraction through Encapsulation and Simplified Interface:

class Car{
    constructor(name,model){
        this.name=name;
        this.model=model;
        this.isEngineOn= false;
        this.speed=0;
    }

    #startEngine(){
        this.isEngineOn = true;
        console.log("Engine Started");
    }

    startcar(){
        if(!this.isEngineOn){
        this.#startEngine()
        }else{
            console.log("car is already started")
    }
    }

    drive(speed) {
        if (this.isEngineOn) {
          this.speed = speed;
          console.log(`Car is driving at ${this.speed} km/h`);
        } else {
          console.log("Start the car first");
        }
      }

    stopcar(){
         if (this.isEngineOn) {
            this.speed = 0;
            this.isEngineOn = false;
            console.log("Car stopped");
          } else {
            console.log("Car is already stopped");
          }
    }
}

const mycar = new Car("Tata","Punch");

mycar.startcar();
mycar.drive(60);
mycar.stopcar();
// mycar.startEngine() can not access .