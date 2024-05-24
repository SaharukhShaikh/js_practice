// const mySym= Symbol("asd")

// const JsUser={
//     name:"saharukh",
//     "full name":"saharukh shaikh",
//     email:"cr7.saharukh@gmail.com",
//     [mySym]:"mynama"

// }

// // JsUser.email="saharukhshaikh460@gmail.com"

// // console.log(JsUser["full name"]);
// Object.freeze(JsUser)//to freeze all the element in a object
// JsUser.email="saharukhshaikh460@gmail.com"
// console.log(JsUser);


//Two types of object singleton and non-singleton object
//singleton object

// const anyUser= new Object()

//non-singleton object
// const anyUser = {}
// console.log(anyUser);

// const regularUser={
//     fullname:{
//         userfullname:{
//             firstname:"saharukh",
//             lastname:"shaikh"
//         }
//     }
// }
// // multiple objects
// console.log(regularUser.fullname?.userfullname.firstname);

//how to assign the object in a new array

// const obj1={1:"a",2:"b"}
// const obj2={3:"a",4:"b"}
// const obj3=Object.assign({},obj1,obj2)
// console.log(obj3);


//another way to add objects or spread objects using spread operator

// const obj1={1:"a",2:"b"}
// const obj2={3:"a",4:"b"}
// const obj3={...obj1,...obj2}
// console.log(obj3);


//how to create multiple user and multiple add and how to access it

// const tinderUser ={
//     id:1,
//     name:"saharukh",
//     isLoggedIn:true
// }
// // console.log(tinderUser);
// const users=[
//     {
//         id:2,
//         email:"we@gmail.com"
//     },
//     {
//         id:2,
//         email:"we@gmail.com"
//     },
//     {
//         id:2,
//         email:"we@gmail.com"
//     },
//     {
//         id:2,
//         email:"we@gmail.com"
//     }
// ]

// console.log(Object.values(tinderUser));
// console.log(Object.keys(tinderUser));
// console.log(Object.entries(tinderUser)); - to check number of entries added

// console.log(tinderUser.hasOwnProperty("isLoggedIn"));
//to check weather the object is present or not


//object de-structure

// const course = {
//     coursename:"js",
//     price:"999",
//     courseInstructor:"hitesh"
// }

// const {courseInstructor:instructor}= course
// //here we have choose to change the name of the key in the course as it was too long that's how we destructure any element in js and {} brackets also indicate that we are trying to destructure the objects
// console.log(instructor);

