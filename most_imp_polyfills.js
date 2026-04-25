//1. map, filter, reduce polyfill

Array.prototype.myMap = function (cb) {
  const temp = [];

  for (let i = 0; this.length; i++) {
    temp.push(cb(this[i]));
  }

  return temp;
};

Array.prototype.myFilter = function (cb) {
  const temp = [];

  for (let i = 0; this.length; i++) {
    if (cb(this[i])) {
      temp.push(this[i]);
    }
  }

  return temp;
};

Array.prototype.myReduce = function (cb, initialVal) {
  let accumulator = initialVal
  
  for (let i = 0; i< this.length; i++) {
    accumulator = accumulator ? cb(accumulator, this[i], i, this) : this[i];
  }

  return accumulator;
};

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

const sum = (a,b) => console.log(a*b);

// 3. Once
const once = function(func){
    let res;
    
    return function(...args){
        if(func) {
            res = func(...args);
            func = null;
        }

        return res;
    }
}

const result = once(sum);


// 4. Once



