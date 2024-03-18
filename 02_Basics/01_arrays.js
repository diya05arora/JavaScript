//Arrays
//collection of multiple items of different or same datatyoes in single variable
//js arrays are resizable
// JavaScript array-copy operations create shallow copies. (All standard built-in copy operations with any JavaScript objects create shallow copies, rather than deep copies).

const myArr = [0,1,2,3,4,5];
const myHeroes = ["Shaktiman","naagraj"];
const myArr2 = new Array(1,2,4,7);
// console.log(myArr[0]);

//Array methods

// myArr.push(6,7); //appends elements at end
// console.log(myArr);
// console.log(myArr.pop());

// myArr.unshift(9); //inserts element at start
// console.log(myArr);

// console.log(myArr.shift()); //removes the first element from the array
// console.log(myArr);

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(9));
// console.log(myArr.indexOf(3));

// const newArr = myArr.join("."); // A string used to separate one element of the array from the next in the resulting string. If omitted, the array elements are separated with a comma.
// console.log(newArr);
// console.log(typeof newArr);

// slice, splice
console.log("A", myArr);
const myNewArr1 = myArr.slice(1,3);
console.log(myNewArr1);
console.log("B", myArr);

console.log("A2", myArr);
const myNewArr2 = myArr.splice(1,3); //last number is included and the original array also gets changed
console.log(myNewArr2);
console.log("B2", myArr);

