//Primitive 

// 7types : String, number, boolean, null, undefined, symbol, BigInt


//Reference(Non- primitive)

//Array, objects, functions

// const id = Symbol('123')
// const anotherId = Symbol('123')

// console.log(id === anotherId) 

// // this is not equal bcz evrytime symbol will give different data
// console.log(typeof id)

// const number = 3
// const anotherNumber = String(number)
// console.log(anotherNumber)
// console.log(typeof anotherNumb er)

//stack(Primitive), Heap(non- primitive)

// let myYoutubename="sahruh"
// let anotherName = myYoutubename
// anotherName = "chaichai"
// console.log(myYoutubename)

// console.log(anotherName)

// in stack we are changing the value of the copy not in the original value
// but in heap we are changing the reference value means the original value


//heap
let userOne={
    name : "saha",
    age: 33
}

let userTwo = userOne

userTwo.name ="saharukh"
// console.log(userOne.name);
// console.log(userTwo.name);

//here we are directly changing the orginal value.

// const name="saharukh"
// const repoCount = 40

// console.log(`Hello, i am ${name} and my repo count is ${repoCount}`);

//String in js
const brandName = new String(" Saharukh")

// console.log(brandName.__proto__);
// console.log(brandName.toLocaleUpperCase());
// console.log(brandName.charAt(3));
// console.log(brandName.indexOf('k'));
// console.log(brandName.substring(0,5));
// console.log(brandName.slice(-8,2));
// console.log(brandName.trim());
// const url="https://www.youtube.com/watch?v=InvSEpJUXu4&ab_channel=SheryiansCodingSchool"
// console.log(url.replace('?v=InvSEpJUXu4&ab_channel=','-with-'));
// console.log(url.includes('watch'));

// const score=400
// console.log(score);
// const balance = new Number(100)
// console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(2));

// const new_num=123.75
// console.log(new_num.toPrecision(3));

//Maths Library

// console.log(Math.abs(-5));
// console.log(Math.round(5.6));
// console.log(Math.ceil(5.2));
// console.log(Math.random());
// console.log(Math.random()*10);

