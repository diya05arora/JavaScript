// PRIMITIIVE DATA TYPES
// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

// Javascript is dynamically typed language, which means that data types of variables are determined by the value they hold at runtime and can change throughout the program as we assign different values to them
// const value = 100;
// const value1 = 100.6;

// const isLoggedIn = false;
// const outsideTemp = null;
// let userEmail;

// const id = Symbol("123")
// const anotherId = Symbol("123")
// console.log(id===anotherId);
// console.log(typeof anotherId) //symbol

// const bigNumber = 3682282903920903887199898n //n for representing bigInt
// console.log(typeof bigNumber);

// NON-PRIMITIVE/ REFERENCE DATA TYPES
// Arrays, Objects, Functions

const heroes = ["Shaktimaan", "Naagraj", "Doga"];
let myObj = {
    name:"Hitesh",
    age:22,
}
console.log(typeof myObj);
const myFunction = function(){
    console.log("Hello World"); 
}
console.log(typeof myFunction);



// Primitive datatypes return type:
// String - string
// Number - number
// Boolean - Boolean
// Null - object(****)
// Undefined - undefined
// BigInt - bigint

// Non-primitive datatypes:
// Array - object
// Function - function(object)
// Object - object