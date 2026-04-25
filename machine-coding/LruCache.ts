class LRUCache {
    private capacity : number;
    private cache : Map<number, number>;

    constructor(capacity: number) {
        this.capacity = capacity;
        this.cache = new Map();
    }

    get(key: number): number {
        if(!this.cache.has(key)) return -1;

        const currPicked : number = this.cache.get(key)!;
        this.cache.delete(key);
        this.cache.set(key, currPicked);

        return currPicked;
    }

    put(key: number, value: number): void {
        if(this.cache.has(key)){
            this.cache.delete(key);
        }

        this.cache.set(key, value);

        if(this.cache.size > this.capacity){
            const keyArr = [...this.cache.keys()];
            const leastUsed = keyArr[0];

            this.cache.delete(leastUsed);
        }
    }
}


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