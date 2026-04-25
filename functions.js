// Functions in Js

// Q1: what is functino decleration?
function square(num) {
  return num * num;
}

/* 
Q2: what is function expresssion?
    const sum = function(num){
        return num + num;
    } 
    after equals it's called annonymus funciton
*/

/*
Q3: what are first class function
first-class functions mean that functions are treated like variables—they can be assigned to variables, passed as arguments, and returned from other functions, enabling higher-order functions and functional programming
*/

// Q4: IFFE - immediately invoked function expression
(function (x) {
  return (function (y) {
    console.log(x); // 3
  })(2);
})(3);

// Q5: Funciton Scope
// The following variables are defined in the global scope
const num1 = 20;
const num2 = 3;
const name = "Chamakh";

function multiply() {
  return num1 * num2;
}

console.log(multiply()); // 60

function getScore() {
  const num1 = 2;
  const num2 = 3;

  function add() {
    return `${name} scored ${num1 + num2}`;
  }

  return add();
}

console.log(getScore()); // "Chamakh scored 5"

/* Q6: function scope - o/p based quesiton
    for (var i = 0; i < 5; i++) {
        setTimeout(() => {
            console.log(i);
        }, 1000);
    }


    in case of var output will be 5,5,5,5,5, since var has a global scope
*/


/* Q7: function scope - o/p based quesiton
    for (let i = 0; i < 5; i++) {
        setTimeout(() => {
            console.log(i);
        }, 1000);
    }

    in case of var output will be 1,2,3,4,5 since let has a block scope
*/

// Q8: function hoisting - o/p based question
var x = 21;
var fun = function(){
    console.log(x);
    var x = 20;
}

fun();


// Q9: params vs arguments
function multiply(...nums){ // parameters - rest operator
    return nums[0] * nums[1];
}

const vals = [2,3];

multiply(...vals)  // arguments - spread operator

/* 
    Q10: callback functions
    A callback function is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action. 

    function greeting(){
        alert("hello " + name);
    }

    function processUserInput(callback){
        var name = prompt("please enter your name: ");
        callback(name);
    }

    processUserInput(greeting)
*/



/* 
Q11: difference between arrow and normal function
refer this - https://chatgpt.com/share/67db203b-6ed0-8002-b7f2-feff449a74da

    Feature	                   Normal Function	                Arrow Function

    this	                   Own this (depends on call)	    Inherits this from parent scope
    arguments	               Available	                    Not available
    Implicit Return	           Requires return	Can             use implicit return
    Constructor (new)	       Can be used as constructor	    Cannot be used as constructor
    bind(), call(), apply()	   Can change `this`	            Cannot change `this`
*/