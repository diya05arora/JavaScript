function Person(name, age){
    this.name = name;
    this.age = age;
}

function Car(make, model){
    this.make = make;
    this.model = model;
}

let myCar = new Car("Toyota", "Camry");
let otherCar = new Car("Tata", "Safari");
console.log(myCar); 

otherCar.make = "XYZ";
console.log(otherCar);


function Tea(type){
    this.type = type;
    this.describe = function(){
        return `This is a cup of ${this.type}`;
    }
}
let lemon = new Tea("Lemon Tea");
console.log(lemon.describe());


function Animal(species){
    this.species = species;
}

Animal.prototype.sound = function(){
    return `${this.species} makes a sound`;
}

let dog = new Animal("dog");
console.log(dog.sound());


function Drink(name){
    if(!new.target){
        throw new Error("Drink must be called with new keyword!");
    }
    this.name = name;
}
let tea = new Drink("tea");
let cofferr = Drink("coffee");