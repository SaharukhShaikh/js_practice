//Immediately invoked function expression(iife)

//sometime function got effected or polluted by the global scope so to save from this effect we rap the whole function into a ()

// (function chai(){
//     console.log(`mai asa ku hu`);
// })()//it just like how to call a function like chai()
//this is a normal function and it's called a iife function


//now arrow function in iife

// (()=>{
//     console.log('firse agaya mai');
// })() without giving any name  to the function so its normal call efe.

// with arrow function pass a parameter

((name)=>{
    console.log(`saharukh kuch bhi ${name}`);
})('kuu')

// that's how we pass the value without writing any function name 