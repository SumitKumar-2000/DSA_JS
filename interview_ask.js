const original = {
  date: new Date(),
  nested: { a: 1 }
};

const copy = structuredClone(original); 

console.log(copy.date instanceof Date);

function deepCopy(obj) {
    if (obj === null || typeof obj !== "object") return obj;

    let copy = Array.isArray(obj) ? [] : {};

    for (let key in obj) {
        // Har key ke liye function ko dobara call karo (Recursion)
        copy[key] = deepCopy(obj[key]);
    }
    return copy;
}

//// -----------------------------------------------
/*
generate the given output for the following input 

OUTPUT:
 {
  HR: {
    Recruiting: {
      employees: ["Bob"],
      avgSalary: 40000
    }
  },
  Finance: {
    Excel: {
      employees: ["David"],
      avgSalary: 60000,
    }
  },
  IT: {
    JS: {
      employees: ["Alice", "Charlie"],
      avgSalary: 60000,
    },
    React: {
      employees: ["Alice", "Eve"],
      avgSalary: 47500
    },
    Node: {
      employees: ["Charlie"],
      avgSalary: 70000
    }
  },
}
*/

// INPUT:
const users = [
  { id: 1, name: "Alice", dept: "IT", salary: 50000, skills: ["JS", "React"] },
  { id: 2, name: "Bob", dept: "HR", salary: 40000, skills: ["Recruiting"] },
  { id: 3, name: "Charlie", dept: "IT", salary: 70000, skills: ["JS", "Node"] },
  { id: 4, name: "David", dept: "Finance", salary: 60000, skills: ["Excel"] },
  { id: 5, name: "Eve", dept: "IT", salary: 45000, skills: ["React"] },
];

function generateReport(users) {
  const result = users.reduce((acc, curr) => {
    const {dept, name, salary, skills} = curr;

    if(!acc[dept]){
      acc[dept] = {};
    }

    skills.forEach(skill => {
        if(!acc[dept][skill]){ 
            acc[dept][skill] = {
                employees: [],
                totalSalary: 0,
                count: 0,
            }
        }

        acc[dept][skill].employees.push(name);
        acc[dept][skill].totalSalary += salary;
        acc[dept][skill].count += 1;
    })

    for(const skill in acc[dept]){
        const averageSalary = Math.floor(acc[dept][skill].totalSalary / acc[dept][skill].count);
        acc[dept][skill].avgSalary = averageSalary;
    }

    return acc;

  }, {});

  return result;
  // Calculate average salary
}

console.log(generateReport(users));


//// -----------------------------------------------

/// -----------------------------------------------

console.log("1"); 

setTimeout(() => {
  console.log("2");
}, 0);

Promise.resolve().then(() => {
  console.log("3");
});

console.log("4");         /// 1, 4, 3, 2



////// -------------------------------------------------

async function test() {
  console.log("A");
  await Promise.resolve();
  console.log("B");
}

console.log("C");
test();
console.log("D");                 /// C, A, D, B



/////// -----------------------------------------------

console.log("Start");

setTimeout(() => {
  console.log("Timeout 1");
}, 0);

Promise.resolve().then(() => {
  console.log("Promise 1");
  setTimeout(() => {
    console.log("Timeout 2");
  }, 0);
});

Promise.resolve().then(() => {
  console.log("Promise 2");
});

console.log("End");

/*
    Start

End

Promise 1

Promise 2

Timeout 1

Timeout 2
*/



/// ----------

// 2. polyfill of call, bind, apply
Function.prototype.myCall = function(context = {}, ...args){
    context = typeof context === "object" ? Object(context) : globalThis;

    context["fn"] = this;
    context.fn(...args);
}

Function.prototype.myApply = function(context = {}, arr){
    context = typeof context === "object" ? Object(context) : globalThis;

    context["fn"] = this;
    context.fn(...arr);
}

Function.prototype.myBind = function(context = {}, ...args){
    context = typeof context === "object" ? Object(context) : globalThis;

    context["fn"] = this;

    return function(...next){
        return context.fn(...args, ...next);
    }
}



////// -----------------------------------------------

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



// ------------------------

var flat = function (arr, n) {
  let result = new Array();

  while(n--){
    for(let i=0;i<arr.length;i++){
        if(Array.isArray(arr[i])){
            result.push(...arr[i]);
        } else {
            result.push(arr[i]);
        }
    }

    arr = result;
    result = [];
  }

  return arr;
};

// -------------------------
import React from "react";

// HOC that adds a loading state
const withLoading = (WrappedComponent) => {
  return ({ isLoading, ...props }) => {
    if (isLoading) {
      return <h2>Loading...</h2>;
    }
    return <WrappedComponent {...props} />;
  };
};

export default withLoading;


/*
What is React Fiber?

React Fiber is a complete reimplementation of React's reconciliation algorithm introduced in React 16. It makes rendering faster, smoother, and more efficient by enabling incremental rendering and better handling of animations, updates, and interruptions.

Key Features of React Fiber:

Interruptible Rendering: React can pause, resume, or discard rendering work, making UI updates smoother.

Concurrent Mode: Improves performance by allowing multiple tasks (e.g., user interactions, animations) to run without blocking the UI.

Prioritization of Updates: Urgent updates (like user input) are handled before non-urgent ones (like animations).

Error Handling: Introduced error boundaries to gracefully handle rendering errors.

Better Support for Animations and Layouts: Helps in rendering smooth UI animations.

*/