// Call, Bind and Apply (Explict Binding)
// Question 1 - call, bind and apply use ?

const obj1 = {name: "sk"};

function sayHello(age, profession){
    return `Hello, ${this.name} is ${age} | ${profession}`
}

console.log("Call method: ",sayHello.call(obj1, 24, "doctor"));

// Question 2 - Apply (works same as call, but arguments are passed in an array)
console.log("Apply method: ",sayHello.apply(obj1,[24, "engineer"]));

// instead of calling function like call & apply, bind returns another function that can be called later 
const bindFunc = sayHello.bind(obj1);
console.log("Bind method 1: ", bindFunc(25, "teacher"));
console.log("Bind method 2: ", bindFunc(26, "advocate"));


// Question 2 - what's the output

const person1 = { name: "rk" };
function sayHi(age){
    return `${this.name} is ${age}`
}

console.log(sayHi.call(person1, 34));
console.log(sayHi.bind(person1, 32));

// Question 3 - call with functin inside object
var person2 = {
    name: "mk",
    age: 20,
    getAge: function(){
        return this.age;
    }
}

var person3 = {age: 24};
console.log(person2.getAge.call(person3));

// Q4 - what will be the output
let status = "status1";

setTimeout(()=>{
    const status = "status2";
    const data = {
        status: "status3",
        getStatus(){
            return this.status;
        }
    };

    console.log("1. without call",data.getStatus())               // status3
    console.log("1. with call",data.getStatus.call(this))         // status1 - Since the setTimeout function is an arrow function, it inherits this from the surrounding scope.
},0)

setTimeout(function(){
    const status = "status3";
    const data = {
        status: "status4",
        getStatus(){
            return this.status;
        }
    };

    console.log("2. without call",data.getStatus())               // status3
    console.log("2. with call",data.getStatus.call(this))         // status1 - Since the setTimeout function is an arrow function, it inherits this from the surrounding scope.
},0)

// Q5 - call printAnimals such that it prints all animals in object

const animals = [
    {species: "Lion", name: "king"},
    {species: "Whale", name: "queen"},
]

function printAnimals(i){
    this.print = function(){
        console.log(`# ${i} ${this.species} : ${this.name}`);
    }
    this.print();
}

for(const [index, item] of animals.entries()){
    printAnimals.call(item, index);
}

// Q6 - append an array to another array without using spread or append method
const arr1 = [1,2,3];
const arr2 = ["a","b"];

arr1.push.apply(arr1, arr2);

// Q7 bound chaining, bind chaining doesn't work
function f(){
    console.log(this.name);
}

f = f.bind({name: "sk"}).bind({name: "rk"});
f();

// Q8 - explict binding with arrow function
const age = 10;
var User1 = {
    name: "Piyush",
    age: 20,
    getAgeArrow: () => console.log(this),
    getAge: function(){
        console.log(this);
    },   
}

var User2 = {age: 28};

User1.getAge.call(User2); // 28
User1.getAgeArrow.call(User2); // arrow function will always points to global object


// Q9 - Apped an array to another array without using loop
const array = ["a","b"];
const elements = [1,2];

array.push.apply(array, elements);

// Q10 - Find min/max number in an array
const numbers = [5,6,2,3,7];

// numbers.max.apply(numbers)

// Q11 - Output
function f(){
    console.log(this)         // f will bind to the window obj, if any object would've been there then f would've bind to that object
}

let user = {
    g: f.bind(null)
}

user.g();

// Q12 - Output
function checkPassword(success, failed){
    // console.log('success: ', success, 'failed: ', failed)
    const password = 'sumit';
    if(password === 'sumit') success();
    else failed();
}

const man = {
    name: "Sumit",
    loginSuccess: function(){
        console.log(`${this.name} logged in successfully!`)
    },
    loginFailed: function(){
        console.log(`${this.name} failed to log in!`)
    }
}

checkPassword(man.loginSuccess.bind(man), man.loginFailed.bind(man));

// Q13 - Output
function checkPassword(success, failed){
    const password = 'sumit';
    if(password === 'sumit') success();
    else failed();
}

const man2 = {
    name: "Sumit",
    login: function(result){
        console.log(this.name + (result ? ' login successful' : ' login failed'))
    }
}

checkPassword(man2.login.bind(man2, true), man2.login.bind(man2, false));

// Q14 - Output
var agee = 10;

var person = {
    name: 'sk',
    getAgeArrow: () => console.log(this.agee),
    getAge: function(){
        console.log(this.agee);
    },
}

var person2 = {agee: 24};
person.getAge.call(person2);
person.getAgeArrow.call(person2);


// Q9 - pollyfill for call | apply | bind
Function.prototype.myCall = function(context = {}, ...args){
    if(typeof this !== "function"){
        throw new Error(`${this} is not a function`)
    }

    context = (context === null || context === undefined) ? globalThis : Object(context);

    context.fn = this;
    context.fn(...args);
}

Function.prototype.myApply = function(context = {}, arr = []){
    if(typeof this !== "function"){
        throw new Error(`${this} is not a function`)
    }

    context = (context === null || context === undefined) ? globalThis : Object(context);

    context.fn = this;
    context.fn(...arr);
}

Function.prototype.myBind = function(context = {}, ...args){
    if(typeof this !== "function"){
        throw new Error(`${this} is not a function`)
    }

    context.fn = this;
    return function(...newArgs){
        return context.fn(...args, ...newArgs);
    }
}

