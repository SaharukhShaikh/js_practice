//for loop
//command + d for selecting multiple duplicates

// for (let i = 0; i < 10; i++) {
//     const element = i;
//     if (element == 5) {
//         console.log('5 is the best number');
//     }
//     else{
//         console.log('time pass');
//     }
//     console.log(element);
// }

// console.log(element);

// for (let i = 1; i <= 10; i++) {
//     console.log(`outer loop:${i}`);
//     for (let j = 1; j <=10; j++) {
//         // console.log(`Inner loop ${j} and inner lop ${i}`);
//         console.log(i+'*'+j+'='+i*j);
//     }
    
// }

// let myArray = ["flash","batman","superman"]
// console.log(myArray.length);
// for (let index = 0; index < myArray.length; index++) {
//     const element = myArray[index];
//     console.log(element);
// }

//BREAK AND CONTINUE

for (let index = 0; index <=20; index++) {
    if (index ==5) {
        console.log(`Detected 5`);
        continue
    
    }
    console.log(`Value of i is ${index}`);
}