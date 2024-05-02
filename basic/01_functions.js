// function addTwoNumbers(num1,num2){
//    // console.log(num1+num2)1 way
//    // let result=num1+num2 2nd way
//    // return result 2nd way

//    // return num1+num2 3rd way
// }

// addTwoNumbers(2,3)1 way
// const result=addTwoNumbers(2,3)  2nd way
// console.log(result);  2nd way


// const result=addTwoNumbers(2,3)  3rd way
// console.log("Result : ",result)  3rd way

// function loginUserMessage(username){
//    return `yes${username} is a chutiya`
// }
// console.log(loginUserMessage('Shreyas'))


//now which if else condition if there is no value
// function loginUserMessage(username){
//    if(!username){
//       console.log("Please enter a username");
//       return

//    }
//    return `yes ${username} is a chutiya`
//  }
// console.log(loginUserMessage('Shreyas'))

//Function with objects and array
// function calculateCartPrice(...num1){//rest operator
//    return num1
// }
// console.log(calculateCartPrice(200,400,500,2000));

// how to send object into the function or how to call the object into the function
//object user

const user={
   username : "saharukh",
   price: 199
}

function handleObject(anyobject){
   console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);//using backticks calling the key from the object and with parameter
}

// handleObject(user)//calling the function 

// we can create the object inside the function callling

// handleObject({
//    username:"sam",
//    price:399
// })//now this value is going to be print as this is the updated one.

//same as object we can use the array as well

// const myNewArray= [200,400,100,600]

// function returnSecondValue(getArray){
//    return getArray[1]
// }

// console.log(returnSecondValue(myNewArray));1st way to call the value to get printed

// console.log(returnSecondValue([200,400,600,1000]));2nd way to call all the value without creating any array we can directly pass the value in the argument 

