// Q1: Infinite currying

function add(a){
    return function (b){
        if(b) return add(a + b);
        return a;
    }
}

console.log(add(1)(2)(3)(4)());


// Q2: Partial Currying

function Sum(a){
    return function(b,c){
        return a + b + c;
    }
}

console.log(Sum(1)(2,3));

// Manipulate DOM
// function UpdateElementText(id){
//     return function(content){
//         document.querySelector(`#`+id).textContent = content;
//     }
// }

// const updateHeader = UpdateElementText("heading");
// updateHeader("heading")



// Q3: Currying Implementation - curry()
// convert f(a, b, c) into f(a)(b)(c)

function curry(func){
    return function curriedFunc(...args){
        if(args.length >= func.length){
            return func(...args)
        } else {
            return function(...next){
                return curriedFunc(...args, next);
            }
        }
    }
}

const sum = (a,b,c) => a + b + c;

const totalSum = curry(sum);

console.log(totalSum(1)(2)(3))
