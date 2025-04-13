// function sayMyName(){
//     console.log("H");
//     console.log("I");
//     console.log("T");
//     console.log("E");
//     console.log("S");
//     console.log("H");
// } 
// sayMyName // refrence
// sayMyName() // execution

// function addTwoNumbers(number1, number2){ //number1 and number2 are parameters
//     console.log(number1+number2);
// }
// function addTwoNumbers(number1, number2){ //number1 and number2 are parameters
//     return number1+number2;
// }
// addTwoNumbers(); //NaN
// addTwoNumbers(2,3);  //2 and 3 are arguments
// addTwoNumbers(2,"3");
// addTwoNumbers(2,"a");
// addTwoNumbers(2,null);

// const result = addTwoNumbers(3,5);
// console.log("Result:", result);

// function loginUserMessage(usrename){
//     if(usrename === undefined){ // or if(!usrename){
//         return("Please enter a username");
//         return "";
//     }
//     return `${usrename} just logged in!`
// }
// console.log(loginUserMessage("Hitesh"));
// console.log(loginUserMessage()); //undefined

// function userMessage(usrename="Sam"){ // if nothing is passed, default name is Sam
//     return `${usrename} just logged in!`
// }
// console.log(userMessage("Happy"));


// function calculateCartPrice(val1, val2, ...num1){
//     let sum = 0;
//     console.log(val1);
//     console.log(val2);
//     for (let i = 0; i<num1.length; i++){
//         sum+=num1[i];
//     }
//     return sum;
// }
// console.log(calculateCartPrice(200));
// console.log(calculateCartPrice(200, 400, 500, 2000));

// const user = {
//     userName : "Hitesh",
//     price : 199
// }
// function handleObject(anyObject){
//     console.log(`Userame is ${anyObject.userName} and price is ${anyObject.price}`);
// }
// // handleObject(user);
// handleObject({
//     userName: "Sam",
//     price: 200
// })

// const myNewArr = [200, 400, 100, 600]
// function returnSecondValue(getArray){
//     return getArray[1];
// }
// console.log(returnSecondValue(myNewArr));

let a = 4;
function createTeaMaker(name) {
    let score = 100;
    console.log(a);
    return function (teaType) {
      return `Making ${teaType} ${name} ${score} ${a}`;
    };
}
let teaMaker = createTeaMaker("Diya");
console.log(teaMaker("chai"));

// A closure is a feature in JavaScript where an inner function has access to the following:
// Its own scope (variables defined within it)
// The outer function's scope (like name and score in your example)
// The global scope



let x = 3/2;
console.log(x);
