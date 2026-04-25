// Q1: iteration on an object
const obj = {
  name: "Roadside Coder",
  age: 24,
  isTotallyAwsome: true,
};

for (key in obj) {
  console.log(`${key}: ${obj[key]}`);
}

// Q2: output of the following code

const a = {};
const b = { key: "b" };
const c = { key: "c" };

a[b] = 21;
a[c] = 22;

console.log(a[b]); // 22 will be the output, as object as key will be like "[object object]"

// Q3: Json.Stringify
const setting = {
  username: "ab",
  level: 2,
  health: 100,
};

console.log(JSON.stringify(setting, ["username", "level"]));

// Q4: functions inside object

const shape = {
  radius: 10,
  diameter() {
    return this.radius * 2;
  },
  perimeter: () => {
    2 * Math.PI * this.radius;
  },
};

console.log(shape.diameter());
console.log(shape.perimeter());

// Q5: Object referencing
const x = { greeting: "hi there" };
let y;
y = x;

y.greeting = "hello";
console.log(x.greeting);

// Q6: objectreferencing

// console.log({a: 1} === {a: 1}); // will always returns false since js compares by reference;
// console.log({a: 1} == {a: 1}); // will always returns false since js compares by reference;

// q7: what's the output

const value = { number: 10 };
const multiply = (x = { ...value }) => {
  console.log((x.number *= 2));
};

multiply();
multiply();
multiply(value);
multiply(value);

const testObj = {
  name: "sk",
  age: 2,
  getValues: function () {
    const func = () => {
      console.log(this.name);
    };
    func();
  },
};

testObj.getValues();