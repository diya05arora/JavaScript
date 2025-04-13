// STACK (Primitive) => we get copy
let myYouTubeName = "hiteshchoudharydotcom";
let anothername = myYouTubeName;
anothername = "chaiaurcode"
console.log(myYouTubeName); //value of myYouTubeName has not changed
console.log(anothername);

// HEAP (Non=Primitive) => we get reference
let userOne = {
    email : "abc@gmail.com",
    upi : "user@ybl"
}
let userTwo = userOne;
userTwo.email = "hitesh@gmail.com"
console.log(userOne.email); //userOne has also changed
console.log(userTwo.email);

let one = new Number(1);
let two = one;
two = 3;
console.log(one); // 1
console.log(two); // 3