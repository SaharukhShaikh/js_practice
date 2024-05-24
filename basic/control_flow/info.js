//global excution or global environment

//js code divide into two phase memory creation phase and execution phase

//in mcp only variable are storing
// firstly in mcp we store the var and store undefined in it

let var1=10
let var2=5
function addNum(num1,num2){
    let total = num1+num2
    return total
}
let result1= addNum(val1,val2)
let result2=addNum(18,2)

//execution phase
// here we call the value and for function like addNum a new execution context will be created and here a new variable environment will be created and a execution thread will be created to excute the values

//global execution phase will be created once but for each function inside it memory phase and excution phase will be created everytime and the main value of the function will return to the global execution context.

//from above example

//memory phase on the first phase
//val1- undefined
//val2-undefined
//addnum- defination
//result1-undefined
//result2-undefined


//execution phase
//val1-10
//val2-5
//addNum - this a func now for this function again a new envionment will be created and it will be deleted afterwards once the execution is done

//call stack

//call stack follow lifo context means last in first out


function one(){
    console.log('one');//second
}
function two(){
    console.log('two');//fourth
}
function three(){
    console.log('three');
}

one()//this will run first
two()//third
three()

//first in the windows we will go to the source then we are going to create a new snippets where we can check the call stack one by one.