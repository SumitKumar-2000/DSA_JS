// In Js everything is object

const O1 = {
    fname: "sumit",
    lname: "kumar",
    getFullName: function(){
        return `${this.fname} ${this.lname}`
    }
}

// O2 does not have keys of O1 but still keys are accessible from O2 
// in this case O2's __proto__ will be equals to O1
// thus if any property is not available in O2 then it will be searched in the __proto__, and O2's __proto__ is pointing to O1;
const O2 = Object.create(O1);

// using O2's proto actual O1 is manipulated
O2.__proto__.fname = "amit";

console.log(O1)



// ---- prototype & __proto__ ----

// - on string how can we access methods like at, concatinate, split, etc. even it's not an object
// - in actual the below str will be treated as const str = new String("Sumit Kumar"), thus fname will be object of String class
// - all the methods related to the string class will be accessible in the __proto__ of fname
// - i.e. fname.__proto__ will point to String.prototype

const fname = "Sumit Kumar";
console.log(fname.__proto__)
console.log(String.prototype);


// prototype inheritance


const obj1 = {
    val1: 1
} 

const obj2 = {
    val2: 2,
    __proto__: obj1,         // to access values of obj1 from obj2
} 

const obj3 = {
    val3: 3,
    __proto__: obj2,         // to access values of obj2 from obj1
} 

console.log(obj3.val1)       // obj3 will be able to access properties of obj2, obj1 that is what prototype inheritance called

/* For the above scenerio, ob3 will check whether val1 exist in itself no then it will check in it's __proto__ (obj2 in this case), then for val1 obj2 will be check if does not exists then obj2's __proto__ (obj1 in this case) will be checked*/

// NOTE: Every class's __proto__ will lastly be pointing to object prototype 


// ----- understanding of prototype with __proto__ -----

class Student{
    constructor(name){
        this.name = name
    }

    getName(){
        console.log(`Hi I'm ${this.name}`);
    }
}

// Har ek function (constructor) JavaScript me ek special property ke sath aata hai -- prototype:
console.log(Student.prototype);

// new keyword object s1 ke __proto__ ko point krva dega class Student ke prototype ko yani -> s1.__proto__ === Student.prototype
const s1 = new Student("Amit");
const s2 = {name: "Rahul", __proto__: Student.prototype};

console.log(s1, s2)

/* 
    NOTE: prototype base class ke pass hota h, aur __proto__ object ke pass 
    object ka __proto__ point krta h base class ke prototype ko
*/