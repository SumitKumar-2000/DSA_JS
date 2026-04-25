//--- var vs let vs const 
//--- scope

// function test(){
//     var a = "hello"
//     let b = "pello"

//     if(true){
//         let a = "another hello"      // shadowing 
//         var b = "another pello"      // Illegal shadowing
//         console.table(a, b);
//     }
// }

// test();


//--- var vs let vs const declearation

// correct
// var a;
// var a;

// incorrect
// let b;
// let b;

// const c;
// const c;

//--- decleration without initialization
// const d;          // not allowed
// d = 3  

// let d             // allowed   
// d = 4

// var d             // allowed
// d = 4


//--- Re-initialization
// const d = 4;         // not - allowed
// d = 3;

// let n = 3            // allowed
// n = 9

// var j = 3           // allowed
// j = 1




// HOISTING - the process of moving variable and function declarations to the top of their containing scope during the compilation phase. This allows variables and functions to be used before they are declared in the code. However, only the declarations are hoisted, not the initializations.

// console.log(a);       // undefined
// var a = 3;

// console.log(b);       // ReferenceError: Cannot access 'b' before initialization
// let b = 4;

// console.log(c);       // ReferenceError: Cannot access 'c' before initialization
// const c = 5;

// Reason - Temporal Dead Zone (TDZ) - the time between the start of the scope and the point where the variable is declared. During this time, the variable cannot be accessed, and any attempt to do so will result in a ReferenceError.