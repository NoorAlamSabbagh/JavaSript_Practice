//IIFE:JavaScript Immediately Invoked Function Expressions (IIFEs) are functions that runs as soon as it is defined
// that are executed when they are initialized. 
// An IIFE (pronounced “iffy”) can be initialized or defined to achieve a certain purpose.
// global scope pollution

// (function alam(){
//     console.log(`Noor Alam`);
// })();

((name)=>{
    console.log(`Noor Alam  ${name}`);
})("Rajesh")