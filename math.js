// ++++++++++++++++++++++ MATH +++++++++++++++++++++++++
console.log(Math);

console.log("Math.abs: ",Math.abs(-4));
console.log("Math.round: ",Math.round(4.2));
console.log("Math.round: ",Math.round(4.6));
console.log("Math.ceil: ",Math.ceil(4.2));
console.log("Math.floor: ",Math.floor(4.9));
console.log("Math.random: ",Math.random());             // gives value between 0 and 1;
console.log("Math.random: ",(Math.random() * 10) + 1);   // gives value between 1 and 9;

// getting number between certain range
const min = 10, max = 20;
console.log("Number between certain range: ",(Math.random() * (max - min + 1)) + min);



// **************************  NUMBER ++++++++++++++++++++++++++++++++++++++
const num = 10;
const strictNum = new Number(20.567);
const hundredsNum = 100000;

console.log("toFixed: ", strictNum.toFixed(2));
console.log("toExponential: ", strictNum.toExponential());
console.log("toLocaleString: ", hundredsNum.toLocaleString());
console.log("toLocaleString: ", hundredsNum.toLocaleString('en-IN'));