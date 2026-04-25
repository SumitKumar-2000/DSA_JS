/* Promise - they represents eventual completion or failute of an asynchronous operation,  Promises help manage asynchronous operations more effectively than traditional callback-based approaches */

// CALLBACKS
// function action1(user, cb){
//     setTimeout(()=>{
//         cb(`action1 user: ${user}`)
//     },1000)
// }

// function action2(user, cb){
//     setTimeout(() => {
//         cb(`action2 user: ${user}`)
//     }, 1000)
// }

// function action3(user, cb){
//     setTimeout(()=>{
//         cb(`aciton3 user: ${user}`)
//     }, 500)
// }

// action1("sk", (res)=>{
//     console.log(res);
//     action2("rk", (res) => {
//         console.log(res)
//         action3("mk",(res)=>{
//             console.log(res);
//         })
//     })
// })

// NOTE: to prevent this pyramid like structure called callback hell we use promises

// creating basic promise
// Promise.resolve("join sk").then(res => console.log(res))

// Implement the above call back hell using promise

// function action1(user){
//     return new Promise((resolve, reject) => {
//         setTimeout(()=>{
//             resolve(`action1 user: ${user}`)
//         },1000)
//     })
// }

// function action2(user){
//     return new Promise((resolve, reject) => {
//         setTimeout(()=>{
//             resolve(`action2 user: ${user}`)
//         },1000)
//     })
// }

// function action3(user){
//     return new Promise((resolve, reject) => {
//         setTimeout(()=>{
//             resolve(`action3 user: ${user}`)
//         },500)
//     })
// }

// the below concept is called promises chaining, as we are chining promises one after another
// action1("sk")
//     .then(res => {
//         console.log(res)
//         return action2("rk");
//     }).then(res => {
//         console.log(res);
//         return action3("mk");
//     }).then(res => {
//         console.log(res);
//     }).catch(err => console.log(err))

/* 
    Promise Combinators
    1. promise.all() - Runs multiple promises in parallel and resolves when all are fulfilled. If any promise rejects, it fails.
    2. promise.race() - Returns the first settled promise (whether resolved or rejected).
    3. promise.allSettled() - Waits for all promises to settle (either fulfilled or rejected) and returns their results.
    4. promise.any() - Returns the first fulfilled promise. If all reject, it throws an AggregateError.
*/

// promise.all()
const p1 = new Promise((resolve) => setTimeout(() => resolve("P1 Done"), 1000));
const p2 = new Promise((resolve) => setTimeout(() => resolve("P2 Done"), 2000));
const p3 = new Promise((resolve) => setTimeout(() => resolve("P3 Done"), 1500));

Promise.all([p1, p2, p3]).then((res) => console.log("promise.all res", res));

// promise.race()
Promise.race([
  new Promise((resolve, reject) =>
    setTimeout(() => reject("Fastest Rejected Promise"), 1000)
  ),
  new Promise((resolve, reject) =>
    setTimeout(() => resolve("Slower Promise"), 2000)
  ),
])
  .then((res) => console.log("promise.race res: ", res))
  .catch((err) => console.log("promise.race err: ", err));

// promise.allSettled()
const allSettledPromises = [
  Promise.resolve("Resolved"),
  Promise.reject("Rejected"),
  new Promise((resolve) => setTimeout(() => resolve("Delayed"), 2000)),
];

Promise.allSettled(allSettledPromises)
  .then((res) => console.log("promise.allSettled res: ", res))
  .catch((err) => console.log("promise.allSettled err: ", err));

// promise.any()
const anyPromises = [
  Promise.reject("Error 1"),
  new Promise((resolve) => setTimeout(() => resolve("First Success"), 2000)),
  new Promise((resolve) => setTimeout(() => resolve("Second Success"), 3000)),
];

Promise.any(anyPromises)
  .then((res) => console.log("promise.any res: ", res))
  .catch((err) => console.error("promise.any err: ", err));


// async await 

const pone = () => new Promise(resolve => setTimeout(() => resolve("Promise 1 Resolved"), 1000));
const ptwo = () => new Promise(resolve => setTimeout(() => resolve("Promise 2 Resolved"), 1500));
const pthree = () => new Promise((_, reject) => setTimeout(() => reject("Promise 3 Rejected"), 2000));

// Async function to handle promises sequentially
async function executePromises() {
    try {
        console.log(await pone());
        console.log(await ptwo());
        console.log(await pthree());
    } catch (error) {
        console.error("Error caught:", error);
    }
}

executePromises();
