let car = {
    make: "Toyota",
    model: "Camry",
    year: 2020,
    start: function(){
        return `${this.make} car got started in ${this.year}`;
    }
};
// console.log(car.start())


class Vehicle{
    constructor(make, model){
        this.make = make;
        this.model = model;
    }
    start(){
        return `${this.model} is a car from ${this.make}`;
    }
}
// Inheritance
class Car extends Vehicle{
    drive(){
        return `${this.make} : This is an inheritance example`;
    }
}

let myCar = new Car("Toyota", "Camry");
// console.log(myCar.start());
// console.log(myCar.drive());


let vehicle1 = new Vehicle("Toyota", "Corolla");
// console.log(vehicle1.make);


// Encapsulation
// restrict direct access to the object data

class BankAccount{
    #balance = 0; // cannot be accessed outside the class
    deposit(amount){
        this.#balance += amount;
        return this.#balance;
    }

    getBalance(){
        return `$ ${this.#balance}`;
    }
}

let account = new BankAccount();
// console.log(account.balance); // undefined
// console.log(account.getBalance());


// Abstraction

class CoffeeMachine{
    start(){
        // call DB
        // filter value
        return `Starting the machine`;
    }
    brewCoffee(){
        // complex calculation
        return `Brewing coffee!`;
    }
    pressStartButton(){
        console.log(this.start());
        console.log(this.brewCoffee());
    }
}

let myMachine = new CoffeeMachine();
// myMachine.pressStartButton();


// Polymorphism
// more than one form
class Bird{
    fly(){
        return `Flying...`;
    }
}
class Penguin extends Bird{
    fly(){
        return `Penguins can't fly...`;
    }
}
class Sparrow extends Bird{

}

let bird = new Bird();
let penguin = new Penguin();
let sparrow = new Sparrow();
// console.log(bird.fly());
// console.log(penguin.fly());
// console.log(sparrow.fly());



// static method
class Calculator{
    static add(a, b){
        return a+b;
    }
}
let miniCalc = new Calculator();
// console.log(miniCalc.add()); // TypeError: miniCalc.add is not a function
// console.log(Calculator.add(2,3));


// getters and setters
class Employee{
    #salary;
    constructor(name, salary){
        // constructor doesn't call getters and setters
        if(salary <0){
            console.log(`Please enter a positive salary!`);
        }
        this.name = name;
        this.#salary = salary;
    }
    get salary(){
        return this.#salary;
    }
    set salary(value){
        if(value <0){
            console.log(`Please enter a positive salary!`);
        }
        else{
            this.#salary = value;
        }
    }
}
let emp = new Employee("Allice", 50000)

// if _salary is used in class
console.log(emp.salary); // undefined 
// console.log(emp._salary); // 50000  // Possible, but considered "breaking the rule"


// if #salary is used in class
emp.salary = -30000;
console.log(emp.salary); // 50000

let emp2 = new Employee("Bob", -40000);
console.log(emp2.salary);










