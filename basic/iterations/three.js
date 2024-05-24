//forin loop in object

//  const myObject ={
//     js:'javascript',
//     cpp:'c++',
//     rb:'ruby',
//     swift:'swift by apple'
//  }

//  for (const key in myObject) {
//     console.log(`${key} shortcut for ${myObject[key]}`);
//  }

 //forin in array

//  const pro =['js','java','cpp','py']

//  for (const key in pro) {
//     console.log(pro[key]);
//  }

// const map = new Map()
// map.set('IN',"India")
// map.set('USA',"uNITED")
// map.set('NE',"nEPAL")

// // console.log(map);

// for (const key in map) {
//     console.log(key);
// }// forin loop doesn't work in map


const coding=['js','rb','css','html']

// coding.forEach(function (val){//with normal function
//     console.log(val);
// })

// coding.forEach((val)=>{ // with arrow function
//     console.log(val);
// })

// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)


//forEach function contains parameters like item, index,arr to access each and everything in the program

// coding.forEach(
//     (item,index,arr)=>{
//         console.log(item,index,arr);
//     }
// )// it will show the number of items , index of each item and number of arrays in each list


//let's create a array and create objects inside it and access the value inside the objects


const myCoding=[
    {
        languageName : 'javascript',
        languageFileName :'js'
    },
    {
        languageName : 'java',
        languageFileName :'j'
    },
    {
        languageName : 'python',
        languageFileName :'py'
    },
    {
        languageName : 'ruby',
        languageFileName :'rb'
    }
]

myCoding.forEach(
    (item)=>{
        console.log(item.languageName);
    }
)// that's how we are acessing value inside an object which is inside an array