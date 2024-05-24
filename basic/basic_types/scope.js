  //don't use var as we can acess any var value from 
//   anywhere in the function which is not correct 
// as pe the js rules and regulation
//   var c = 30// we can acess this value from anywhere which is not correct that whu we have to avoid using 2=

// let a =100
//   if (true)  {
//     let a =10
//     const b= 20
//     var c= 300
//   }

//   console.log(a);//we should acess any value out of the scope and avoid using var value.
// var value can create confusion while we call the variable in the terminal


//Hosting in js

// if (true){
//   const username = 'saharukh'
//   if(username==='saharukh'){
//     const website='whtsapp'
//     console.log(username +' '+ website);
//   }
//   // console.log(website); 1 error bcz it's out of scope
// }

// console.log(username); 2 nd error bcz it's also out of scope



// Interesting code

// function addone(num){
//   return num +2
  
// }
// console.log(addone(4)); One way to declare a function and we can call the value even before the just we need to put console.log(addone(4)) above the function that how we can call them even after declaring a function and it will work

//2nd way

// const second= function(num){
//   return num +2
  
// }
// console.log(second(2));
//second way to declare a function with an expression but here we can't call the argument or the value before the function this is call hoisting in js



