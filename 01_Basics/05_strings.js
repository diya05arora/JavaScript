const name = "Hitesh";
const repoCount = 50;
// console.log(name , repoCount , "Value"); //old method

//String interpolation
console.log(`Hello my name is ${name.toUpperCase()} and my repo count is ${repoCount}`); //better syntax

const gameName = new String("Hitesh-hc-com"); //one more way to declare strings
// console.log(gameName[0]);
console.log(gameName.__proto__); // prototype
// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName)
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('t'));

const newString = gameName.substring(0,4); //end value not included
console.log(newString);

const anotherString = gameName.slice(-5, 17); // end value not included
console.log(anotherString);

const newString1 = "    hitesh\n     " //trim removes \n too
console.log(newString1);
const newString2 = newString1.trim();
console.log(newString2);

const url = "https://hitesh.com/hitesh%20choudhary"
console.log(url.replace("%20", "-"));

console.log(url.includes("hitesh"));
console.log(url.includes("Hitesh"));

console.log(gameName.split("-"));
console.log(gameName.split(""))

console.log(gameName.charCodeAt(2))
console.log(gameName.blink())
console.log(gameName.endsWith("com")) // true
console.log(gameName.endsWith("co")) // false



// deep copy is created
// let name = "Diya";
// let name1 = name;
// name1 = "Happy";
// console.log(name);
// console.log(name1);