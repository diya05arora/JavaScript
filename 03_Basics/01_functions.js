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

function userMessage(usrename="Sam"){ // if nothing is passed, default name is Sam
    return `${usrename} just logged in!`
}
console.log(userMessage("Happy"));