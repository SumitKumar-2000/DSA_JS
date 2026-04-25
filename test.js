// "use strict"

// ques 1
function abc(){
    console.log(abc.xys);
}

abc();    // undefined
abc.xys = 100;
abc.xys = 200;
abc();    // 200

// ques 2
const arr1 = [1,2,3,4,5];
arr1[100] = 500;

console.log(arr1);

// ques 3
console.log(typeof typeof 100);

// ques 4
const arr2 = [..."sumit"]
console.log(arr2);

// ques 5
console.log(parseInt('10+2'))          // 10
console.log(parseInt('744F9M'))        // 7 
console.log(parseInt('M7F'))           // NaN 

// ques 6
console.log(isNaN("90asdf"))           // true
console.log(isNaN("90"))               // false 
console.log(isNaN(90))                 // false

// ques 7
console.log([-1,0,1,2,3].map(num => {                 // [-2, 0, undefined, undefined, undefined]
    if(num > 0) return;
    return num * 2;
}))

// ques 8
function func1(){
    return ;
}

console.log(func1())        // undefined


// ques 9
{
    function func2(){
        console.log("func2")
    }
}

func2();            // this will work if i'll remove use strict


if([1,2,3].length < 4){
    function func3(){
        console.log("func3")
    }
}

func3();           // this will work if i'll remove use strict

if([1,2,3].length > 4){
    function func4(){
        console.log("func2")
    }
}

// func4();           


// ques 10

function func5(a, b){
    "use strict"        // if use strict will be removed then variable a, b will have high priority
    a = 100;
    b = 200;

    return arguments[0] + arguments[1];
}

console.log(func5(10,20))


console.log('Start -----');

process.nextTick(() => console.log('process.nextTick'));

Promise.resolve().then(() => console.log('Promise'));

setTimeout(() => console.log('setTimeout'), 0);

setImmediate(() => console.log('setImmediate'));

console.log('End -----');