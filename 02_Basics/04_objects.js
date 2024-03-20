const tinderUser = new Object(); // singleton object
// const tinderUser = {}; //non-singleton object
// console.log(tinderUser);
tinderUser.id = "123abc";
tinderUser.name = "Sammy";
tinderUser.isLoggedIn = false;
// console.log(tinderUser);
const regularUser = {
    email : "some@gmail.com",
    fullName : {
        userFullName : {
            firstName : "Hitesh",
            lastName : "Choudhary"
        }
    }
}
// console.log(regularUser.fullName);
// console.log(regularUser.fullName.userFullName.firstName);
// console.log(regularUser.fullName.userFullName["lastName"]);


const obj1 = {1:"a", 2:"b"};
const obj2 = {2:"c", 3:"d"};
// const obj3 = {...obj1, ...obj2}; //combines both objects by spreading elements
// const obj4 = {obj1, obj2}; //nested object created
// console.log(obj3);
// console.log(obj4);

// const obj5 = Object.assign(obj1, obj2);
// console.log(obj5);
// console.log(obj1); //obj1 as target gets changed
// console.log(obj1==obj5);

// const obj6 = Object.assign({}, obj1, obj2); // {} is an optional parameter which guarantees that all the elements are added  {}=> source and obj1, obj2=> sources
// console.log(obj6);
// console.log(obj1); //obj1 doesn't get changed
// console.log(obj6==obj1);

const users = [
    {
        id : 1,
        email : "h@gmail.com"
    },
    {
        id : 1,
        email : "h@gmail.com"
    },
    {
        id : 1,
        email : "h@gmail.com"
    }
]

// console.log(users[0].email);
// console.log(tinderUser);

// console.log(Object.keys(tinderUser)); //returns an array of keys
// console.log(typeof Object.keys(tinderUser));
// console.log(Object.values(tinderUser)); //returns an array of values
// console.log(typeof Object.values(tinderUser));
// console.log(Object.entries(tinderUser)); // array of arrays
// console.log(tinderUser.hasOwnProperty("isLoggedIn"));


// *********************DESTRUCTURING OF OBJECT***************************
const course = {
    courseName : "JSinHINDI",
    price : 999,
    courseInstructor : "Hitesh"
}

const {courseInstructor:Instructor} = course
console.log(Instructor); //now we can write simply without writing complete
//  course.courseInstructor
//this is called de structuring


//API
// {
//     "name" : "Hitesh",
//     "courseName" : "JS in Hindi",
//     "price" : "free"
// }

// [
//     {},
//     {},
//     {}
// ]
