let sm1 = Symbol();
let sm2 = Symbol();
console.log(sm1);
console.log(sm2);
console.log(sm1==sm2);

let sm3 = Symbol();
let sm4 = sm3;
console.log(sm4 == sm3);

let sm5 = Symbol("hitesh");
let sm6 = Symbol("hitesh");
console.log(sm5);
console.log(sm5 == sm6);