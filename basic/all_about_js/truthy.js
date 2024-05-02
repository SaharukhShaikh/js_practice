//truthy values -[],{},"0",'false',"",function(){}
//falsy values in '',"" will be truthy value

//falsy values - false,0,-0,BigInt 0n,"",null,undefined,NaN

//false == 0 - true
//false =='' -  true
//0=='' - true

// const emptyObj ={}
// if(Object.keys(emptyObj).length===0){
//     console.log('object is empty');
// }// this will check the number of values in the object {} using the object key


//nullish coalescing operator(??):null undefined
// let val1;
// // val1=5??10
// // val1= null??9
// val1= -0 ?? 15 ??10
// console.log(val1);//this ?? value will take the first meaningful value in the output


//Terniary operator

//condition ? true :false
//here we can check more then one condition with the help of terniary operator ?
// const iceTeaPrice =100
// iceTeaPrice>=80 ? console.log('less than 80') : console.log('more than 80');