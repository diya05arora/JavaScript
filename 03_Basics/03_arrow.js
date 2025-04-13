const user = {
    username : "Hitesh",
    price : 999,
    
    welcomeMessage : function(){
        console.log(`${this.username}, Welcome to website!`)
        console.log(this);
    }   
}
// user.welcomeMessage; 
// user.welcomeMessage();
// user.username = "Sam";
// user.welcomeMessage();

// console.log(this);

// function chai(){
//     let username =  "hitesh";
//     console.log(this.username); //undefined
// }
// chai();

const chai = function(){
    let username =  "hitesh";
    console.log(this);
    console.log(this.username); //undefined
}
chai();

// const chai = () => {
//     let username =  "hitesh";
//     console.log(this); // {}
//     console.log(this.username); //undefined
// }
// chai();

// ************************** Arrow Function *****************************************

// BASIC(EXPLICIT) ARROW FUNCTION
// const addTwo = (num1, num2) => {
//     return num1 + num2;
// }

// IMPLICIT RETURN 
// const addTwo = (num1, num2) =>  (num1 + num2);
// console.log(addTwo(3,4));

//to implicitly return object
const addTwo = (num1, num2) =>  ({username:"Hitesh", price:num1+num2}); //() must be present
console.log(addTwo(3,4));

// const myArr = [2, 5, 3, 7, 8];
// myArr.forEach