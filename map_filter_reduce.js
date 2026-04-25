// reduce mthod
const arr = [1,2,3,4,5,6];

const res = arr.reduce((acc, curr, i, arr)=>{
    return acc + curr
},0)

console.log("res: ", res);


// pollyfill of map
Array.prototype.myMap = function(cb){
    let temp = new Array();

    for(let i=0;i<this.length;i++){
       temp.push(cb(this[i], i, this));
    }

    return temp;
}

const maparr = arr.myMap((a, i)=>a * i)
console.log(maparr);

// pollyfill of filter
Array.prototype.myFilter = function(cb){
    let temp = new Array();

    for(let i=0;i<this.length;i++){
        if(cb(this[i], i, arr)){
            temp.push(this[i]);
        }
    }

    return temp;
}

const filterarr = arr.myFilter((a, i) => i > 3);
console.log(filterarr);


// pollyfill of reduce
Array.prototype.myReduce = function(cb, initialValue){
    let accumulator;
    accumulator = initialValue;

    for(let i=0;i<this.length;i++){
        accumulator = accumulator ? cb(accumulator, this[i], i, this) : this[i];
    }

    return accumulator;
}


const reducearr = arr.myReduce((acc, curr)=>{
    return acc + curr;
}, 0)


/* 
    question 1: map vs foreach 
    ans -  
        1. map gonna return the new array and will not modify the original array whereas in case of foreach original array going to modify.
        2. map can be chained with other functions like filter whereas forEach can't
*/

// question 2: Return names of students only in caps
let students = [
    {name: "sk", rollno: 23, sub: "comp"},
    {name: "rk", rollno: 24, sub: "hindi"},
    {name: "tk", rollno: 25, sub: "eng"},
    {name: "uk", rollno: 26, sub: "math"},
]

let stuResponse = students.map(stu => stu.name.toUpperCase());

// question 3: Return total marks for students with marks greater than 60 after 20 marks have been added to those who scored less than 60
let subjects = [
    {name: "math", rollno: 23, marks: 30},
    {name: "hindi", rollno: 24, marks: 40},
    {name: "english", rollno: 25, marks: 50},
    {name: "sst", rollno: 26, marks: 60},
]

const ans3 = subjects.map((stu, i) => {
    if(stu.marks < 40){
        stu.marks += 20
    }

    return stu
}).reduce((acc, curr) => acc + curr.marks, 0)
console.log("ans3: ",ans3);
