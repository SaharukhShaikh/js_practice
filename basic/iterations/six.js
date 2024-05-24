//reduce function

const myNums = [1,2,3]

//normal function
// const myTotal = myNums.reduce(function(acc,curval){
//     console.log(`acc ${acc} and curval: ${curval}`);
//     return acc + curval
// },0)
// console.log(myTotal);

//with arrow function
const myTotal = myNums.reduce((acc,curval)=>{
    console.log(`acc ${acc} and curval: ${curval}`);
    return acc + curval
},0)
console.log(myTotal);