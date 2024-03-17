// const score = 400;
// console.log(score);

//explicitly defining the type
// const balance = new Number(100);
// console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(2)); //2 decimal points precision value

// const otherNum = 23.8966;
// console.log(otherNum.toPrecision(4));
// console.log(otherNum.toPrecision(1));

// const hundreds = 1000000;
// console.log(hundreds.toLocaleString("en-IN"));

// console.log(Number.MAX_VALUE);
// console.log(Number.MAX_SAFE_INTEGER);
// console.log(Number.POSITIVE_INFINITY);


// *************************************MATHS*********************************************************
// console.log(Math);
// console.log(Math.abs(-4.9));
// console.log(Math.round(4.3));
// console.log(Math.round(5.5));
// console.log(Math.round(4.8));
// console.log(Math.ceil(4.8));
// console.log(Math.floor(4.8));
// console.log(Math.min(4,7.6,8.1,0.9));
console.log(Math.random()); //between 0 and 1
console.log(Math.floor(Math.random()*10) + 1); 

const min = 10;
const max = 20;

console.log(Math.floor((Math.random() * (max - min + 1))) + min ) //between min and max