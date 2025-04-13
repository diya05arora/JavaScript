// let teaCollection = [];
// let tea;
// do{
//     tea = prompt(`Enter your favourite tea (type "stop" to finish): `);
//     if(tea !== "stop"){
//         teaCollection.push(tea);
//     }
// }while(tea !== "stop");
// console.log(teaCollection)

// for (const element of object) {
    
// }
// for (const key in object) {
    
// }
let array = [1,2,3];
array.forEach(element => {
    console.log(element*2);
});

let teaCollection = ["earl grey", "green tea", "chai", "oolong tea"]
let availableTeas = [];
teaCollection.forEach(
    // skipping chai
    // 4 times function calls
    function(tea){
        if(tea === "chai"){
            return;
        }
        availableTeas.push(tea);
    }
)
console.log(availableTeas)