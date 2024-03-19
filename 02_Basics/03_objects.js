// singleton => constructor

//object literals => not singleton
let score = 100;
const mySymb = Symbol("key1");
const jsUser = {
    name : "Hitesh",
    name:"Diya", //overwriting the value of previous key
    "fullname" : "Hitesh Choudhary",
    "place of living" : "Delhi",
    mySymb : "myKey1", //mySymb is not used as a Symbol data type
    [mySymb] : "myKey1",
    age : 18,
    score : score,
    location : "Jaipur",
    email : "hitesh@google.com",
    isLoggedIn : false,
    lastLogInDays : ["Monday", "Tuesday", "Saturday"]
};
console.log(jsUser.name);
console.log(jsUser["name"]);
//above two methods are used for same purpose

console.log(jsUser.fullname);

// .keyName method is not applicable when the key contains spaces 
// console.log(jsUser.place of living);
// console.log(jsUser."place of living");
// correct method
console.log(jsUser["place of living"]);

console.log(jsUser.score);

//****point to note for interview******
console.log(jsUser.mySymb); //mySymb is not used as a Symbol data type
console.log(jsUser[mySymb]); 

jsUser.email = "hitesh@gmail.com" //editing
console.log(jsUser.email);
// Object.freeze(jsUser); // no changes aloowed after freezing
jsUser.email = "hitesh@chatgpt.com";
console.log(jsUser.email);

console.log(jsUser);

jsUser.greeting = function(){ //adding
    console.log("Hello js user");
};
console.log(jsUser.greeting);
jsUser.greeting();

jsUser.greeting2 = function(){
    console.log(`Hello js user, ${this.name}`);
};
console.log(jsUser.greeting2);
jsUser.greeting2();