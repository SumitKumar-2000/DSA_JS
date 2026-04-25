//Q1 return arguments length;
// var argumentsLength = function(...args) {
//     return args;
// };

// console.log(argumentsLength({}, null, "3"))

// Q2 function composition
// The function composition of [f(x), g(x), h(x)] is fn(x) = f(g(h(x))).
var compose = function(functions) {
    
    return function(x) {
        let result = functions.reduceRight((acc, fn)=> fn(acc), x);   

        return result;
    }
};

const fn = compose([x => x + 1, x => 2 * x])
 console.log(fn(4));


//Q3 counter 2:
var createCounter = function(init) {
    let ans = init;

    return {
        increment: function(){
            ans += 1;
            return ans;
        },
        decrement: function(){
            ans -= 1;
            return ans;
        },
        reset: function(){
            ans = init;
            return ans;
        }
    }
}; 

const counter = createCounter(5)

console.log(counter.increment());
console.log(counter.reset());
console.log(counter.decrement());
