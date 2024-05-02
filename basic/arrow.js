// this and arrow function

// const user ={
//     username:'saharukh',
//     price:99,
//     welcomeMessage: function(){
//         console.log(`${this.username},welcome to website`);
//         // console.log(this); shows the current values
//     }
// }

// user.welcomeMessage()
// user.username='sam'
// user.welcomeMessage()
// console.log(this);

//let's create a function and see wheather we can use this function inside it or not

// function chai(){
//     let username = 'saharukh'
//     console.log(this.username);
// }

// chai() - undefined after execution

// const chai =()=>{
//     let username = 'saharukh'
//     console.log(this.username);
// }

// chai() - still undefined with arrow function

// const chai =()=>{
//     let username = 'saharukh'
//     console.log(this);
// }

// chai() - {} - only execution


//Arrow function
//1st type
// const addTwo = (num1,num2)=>{
//     return num1 + num2// when we use return it call explicied return
// }

// console.log(addTwo(3,4));

//who to write one link statement
// const addTwo = (num1,num2)=> num1 + num2// we can write it without{} and return with one line
// also implicied return
// console.log(addTwo(3,4));

//to return object we have to add paranthesis ({})
// const addTwo = (num1,num2)=>({username:'saharukh'})
// console.log(addTwo(3,4));

