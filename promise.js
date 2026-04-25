/* Promise - they represents eventual completion or failute of an asynchronous operation,  Promises help manage asynchronous operations more effectively than traditional callback-based approaches, preventing "callback hell." */

// promise ex-1
const promiseOne = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        console.log("some async operation");
        resolve();
    },1000)
})

promiseOne.then(()=>{
    console.log("async task executed");
}).catch((err) => {
    console.log(`error occured: `,err);    
}).finally(()=>{
    console.log("final execution");
})

// promise ex-2
const promiseTwo = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        console.log("some async operation");
        resolve({execution: "complete", status: "success"});
    },1000)
})

promiseTwo.then((res)=>{
    console.log("async task executed");
    console.log("response: ", res);
    return res.status;
}).then((executionRes) => {
    console.log("executionRes: ", executionRes);
}).catch((err) => {
    console.log(`error occured: `,err);    
}).finally(()=>{
    console.log("Finally promise resolved or rejected");
})

// promise ex-3, consuming promize using async await
const promiseThree = new Promise((res, reject ) => {
    let error = true;
    setTimeout(()=>{
        if(!error){
            resolve({message: "executed successully"});
        } else {
            reject({error: "Something went wrong"});
        }
    },2000)
});

async function handlePromiseThree(){
    try {
        const response = await promiseThree
        console.log(response);
        
    } catch (error) {
        console.log(error);
    }
}

handlePromiseThree();