// q1: this inside normal function
let user1 = {
    name: "sk",
    age: 4,
    childObj: {
        newName: "rk",
        getValues(){
            console.log(`newName: ${this.newName} and name: ${this.name}`)
        }
    }
}

user1.childObj.getValues()


// q2: this inside arrow funciton
let user2 = {
    name: "pk",
    age: 24,
    getValues: () => {
        console.log(`age is ${this.age}`);
    }
}

user2.getValues()

// q3: accessing this inside arrow function
let user3 = {
    name: "rk",
    age: 13,
    getValues(){
        const nestedArrowFunc = () => console.log(this.name);
        nestedArrowFunc();
    }
}

user3.getValues();

// q4: what's the output
const User = {
    firstName: "Upper name",
    getName(){
        let firstName = "Inner name";
        console.log(this.firstName);
        
    }
}

User.getName();

//q5: what's the result 
function makeUser(){
    return {
        name: "John",
        ref: this
    }
} 

let user = makeUser();

console.log(user.ref.name) // undefined as 


// q6: what is the output ?
const anotheruser2 = {
    name: "sk",
    logMessage(){
        console.log(this.name);   
    }
}

setTimeout(anotheruser2.logMessage, 1000);  // as the logMessage will be treated as a callback and that will be treated as a new entity 

// sol provided below, this will fix the issue because the anonyous func will be seperated as new entity and logMessage will remain part of anotheruser2
setTimeout(()=>{
    anotheruser2.logMessage();
}, 1000)


// Q7: calculation
// this is also called object chaining
let calculator = {
    read(){
        this.a = 1;
        this.b = 2;
    },

    sum(){
        return this.a + this.b;
    },

    multiply(){
        return this.a * this.b;
    }
}

calculator.read();
console.log(calculator.sum());
console.log(calculator.multiply());


// Q8: what will be the output
let lengthh = 4;
function callback(){
    console.log("length: ",  this.lengthh);
}

const object = {
    length: 5,
    method(fn){
        fn();
    }
}

object.method(callback);

// Q9: Implement this code
// const result = calc.add(10).multiply(2).add(5).subtract(20);

const calc = {
    total: 0,
    add(n){
        this.total += n;
        return this;
    },
    multiply(n){
        this.total *= n;
        return this;
    },
    subtract(n){
        this.total -= n;
        return this;
    },
}

const result = calc.add(10).multiply(5).subtract(10); 
console.log("result: ", result.total);

