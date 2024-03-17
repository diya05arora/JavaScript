//Dates
let myDate = new Date();
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toLocaleString());
console.log(typeof myDate);

// let myCreatedDate = new Date(2023, 0, 23)
// let myCreatedDate = new Date(2023, 0, 23, 5, 3)
// let myCreatedDate = new Date("01-02-2023")

// console.log(myCreatedDate.toDateString());

// let myTimeStamp = Date.now();
// console.log(myTimeStamp); //time in milli seonds from 1 jan 1970
// console.log(myCreatedDate.getTime());
// console.log(Date.now());
// console.log(Math.floor(Date.now()/1000)) //converting ms to sec

let newDate = new Date();
console.log(newDate.getMonth());
console.log(newDate.getDay());
console.log(newDate.getMilliseconds());
console.log(newDate.toLocaleString('en-IN', {
    timeZone: "UTC",
    // weekday: "long",
    dateStyle: "full"
}));
//happy to complete 13th lecture!