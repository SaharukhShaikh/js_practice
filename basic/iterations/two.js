//for of

// const arr = [1,2,3,4,5]

// for (const num of arr) { //num is the variable name and arr is the object where all the values are stored
//     console.log(num);
// }


// const greetings = "Hello World"
// for (const greet of greetings) {
//     console.log(`Each char is ${greet}`);
// }

//map

//its like object but it stores only unique value

const map = new Map()
map.set('IN',"India")
map.set('USA',"uNITED")
map.set('NE',"nEPAL")

// console.log(map);

for (const [key,value] of map) {
    // console.log(key,':-',value);
    
}// for forof lop only is itertable

// const myObject ={ //myObject is not iterable
//     'game1':'sam',
//     'game2':'dhoni ka fan'
// }

// for (const [key,values] of myObject) {
//     console.log(`Values are ${key,value}`);
// }


