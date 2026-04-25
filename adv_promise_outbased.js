// Q1
// console.log("start");

// const p1 = new Promise((resolve) => {
//   console.log(1);
//   resolve(2);
//   console.log(3)
// },0);
// p1.then(res => console.log(res));

// console.log("end");

// OP: start, 1, 3, end, 2

// NOTE: if there's no resolve then, p1.then will not execute

// Q2
console.log("start2");

const fn = () =>
  new Promise((resolve, reject) => {
    console.log(4);
    resolve(5);
  });

console.log("middle");

fn().then((res) => console.log(res));

console.log("end2");

// OP: start2, middle, 4, end2, 5

// Q3: what's the output
function job(state) {
  return new Promise((resolve, reject) => {
    if (state) {
      resolve("success");
    } else {
      reject("error");
    }
  });
}

let promise = job(true);

promise
    .then((res) => {
        console.log(data);
        return job(true);
    })
    .then((res) => {
        console.log(data);
        return job(true);
    })
    .then((res) => {
        console.log(data);
        return job(true);
    })
    .then((res) => {
        console.log(data);
        return job(true);
    })
    .then((res) => {
        console.log(data);
        return job(true);
    })
    .then((res) => {
        console.log(data);
        return job(true);
    })
    .then((res) => {
        console.log(data);
        return job(true);
    })
    .then((res) => {
        console.log(data);
        return job(true);
    })

    // promise recursion

    const p1 = Promise.resolve("promisee 1");
    const p2 = Promise.resolve("promisee 2");
    const p3 = Promise.resolve("promisee 3");

    function promiseRecurse(promises){
      if(promises.lenth === 0) return;

      const currPromise = promises.shift();

      currPromise.then(res => console.log("res: ", res)).catch(err => console.log("err: ", err));

      promiseRecurse(promises);
    }

    promiseRecurse([p1,p2,p3])

