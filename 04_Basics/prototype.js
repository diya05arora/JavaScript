// initally js was prototype oriented language
// still it is, but it also masked as object oriented langauge.
// (refer image)

let computer = {
    cpu: 12,
};
let lenovo = {
    screen: "HD",
    __proto__ : computer
};
let tomHardware = {};

console.log("computer ",computer.__proto__); // see on console
console.log("lenovo ", lenovo.__proto__);


let genericCar = {
    tyres: 4
}

let tesla = {
    driver: "AI"
}

Object.setPrototypeOf(tesla, genericCar);
console.log(tesla);
console.log(tesla.tyres);
console.log("Tesla: ", tesla.__proto__);
// or
console.log("Tesla: ", Object.getPrototypeOf(tesla)); // better way

if(tesla.hasOwnProperty('driver')){
    console.log("Yes");
    
}
if(tesla.hasOwnProperty('tyres')){
    console.log("Yes");
}
else{
    console.log("No");  
}

// prototype chain
Array.prototype.hitesh = function(){
    return `Custom method ${this}`;
}

let arr = [1,2,3];
console.log(arr.hitesh());