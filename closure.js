// closure in js
// What is a closure - 

function outerFunction(outerVariable) {
    return function innerFunction(innerVariable) {
        console.log(`Outer: ${outerVariable}, Inner: ${innerVariable}`);
    };
}

const newFunction = outerFunction("Hello");
newFunction("World"); 
// Output: Outer: Hello, Inner: World

// Q1: how many schopes a closure have - local scope, global scope, outer funciton scope
let d = 10;
function sum(a){
    return function(b){
        return function(c){
            return a + b + c + d;
        }
    }
}

sum(10)(20)(30);


// Q2: What is module pattern ?
var Module = (function(){
    function privateMethod(){
        console.log("private")
    }

    return {
        publicMethod: function(){
            console.log("public")
        }
    }
})()

Module.publicMethod();


// Q3: Make the funciton run only once

function likeIt(){
    let count = 0
    return function() {
        if(count > 0){
            console.log("already liked");
        } else {
            console.log("liked the video");
            count++;
        }
    }   
}

const call = likeIt();

call();
call();
call();

// Q4: Implement caching / memozing function

function memoize(fn){
    let store = new Object();
    return function(...args){
        const argsCache = JSON.stringify(args);

        if(!store[argsCache]){
            store[argsCache] = fn(...args);
        }
        return store[argsCache];
    }
}

function clumzySquare(n1, n2){
    for(let i=0;i<1000000;i++){}
    return n1*n2;
}

let res = memoize(clumzySquare);
console.log("cached res: ", res(10,20));

// Module pattern
var module = (()=>{
    function privateFunction(){
        // some action
    }

    return {
        publicMethod: function(){
            // can call privateMethod();
        }
    }
})()

// Q5: Time Optimization

function find(){
    let a = [];
    for(let i=0;i<1000000;i++){
        a[i] = i * i;
    }
    
    return  function(index){
        return a[index];
    }
}

const access = find();
console.log(access(10));
console.log(access(20));



// Q6: block scope and settimeout

for(var i=0;i<5;i++){

    function inner(i){
        setTimeout(()=>{
            console.log(i)
        }, 1000)
    }

    inner(i);
}





