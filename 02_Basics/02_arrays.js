let marvel_heroes = ["Thor", "Ironman", "Spiderman"];
let dc_heroes = ["Superman", "Flash", "Batman"]

// marvel_heroes.push(dc_heroes); //dc_heroes push as one element at the end. This method modifies the existing array
// console.log(marvel_heroes);
// console.log(dc_heroes);
// console.log(marvel_heroes[3][1]);

// let all_Heroes = marvel_heroes.concat(dc_heroes); // Combines two or more arrays. This method returns a new array without modifying any existing arrays.
// console.log(marvel_heroes);
// console.log(all_Heroes);

// const all_new_heroes = [...marvel_heroes, ...dc_heroes]; //spreads the elements of the array and concatenates all the elements of both the arrays into single 
// console.log(all_new_heroes);

// const all_new_heroes2 = [...marvel_heroes];
// console.log(all_new_heroes2);

// const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];
// const real_another_array = another_array.flat(1); // Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.
// const real_another_array2 = another_array.flat(Infinity);
// console.log(another_array);
// console.log(real_another_array);
// console.log(real_another_array2);

console.log(Array.isArray("hitesh"));
console.log(Array.from("hitesh@123"));
console.log(Array.from({name: "hitesh"})); // returns an empty array    

let score1 = 100;
let score2 = 200;
let score3 = 300;
console.log(Array.of(score1, score2, score3, "Hitesh")); // Returns a new array from a set of elements.
