// console.log(2>1);
// console.log(2>=1);
// console.log(2<1);
// console.log(2==1);
// console.log(2!=1);

console.log("2" > 1); //unpredictable results
console.log("02" > 1);
// AVOID SUCH COMPARISONS    
// "== and comparison operators like >=, >, <, <= work differently"
// for comparison operators null is coverted to 0 that's why null>=0 is true whereas null==0 is false
// console.log(null>0); // false
// console.log(null<0);
// console.log(null==0); // false
// console.log(null>=0); // true
// undefined gives false in all the above cases

// === strict check
console.log("2"==2);
console.log("2"===2); // compares data type also