var c = 300; 
// global scope
let a = 500;
const b = 100;
if (true){ //block scope
    let a = 10;
    const b = 20;
    var c = 30; 
    // console.log("INNER:", a);
}

// console.log(a);
// console.log(b);
// console.log(c);

function one(){
    const username = "Hitesh";
    function two(){
        const website = "Youtube";
        // console.log(username);
    }
    // console.log(website); // error 
    two();
}
one();

if (true) {
    const username = "Hitesh";
    if(username==="Hitesh"){
        const website =" Youtube";
        // console.log(username + website);
    }
    // console.log(website) // error
}
// console.log(username); // error

// ++++++++++++++++++++++++++++ Interesting +++++++++++++++++++++++++++++++++++
console.log(addOne(5)); //no error

function addOne(num){
    return num+1;
}

console.log(addTwo(5)); //error

const addTwo = function(num){ //addTwo is sometimes called as expression
    return num+2;
} 