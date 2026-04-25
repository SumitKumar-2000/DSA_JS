const arr = [1,2,3,4,5,6,7,8];
console.log("arr: ", arr);

const sliceArr = arr.slice(1,3);            /// doesn't make changes to original array
console.log("sliceArr: ", sliceArr);
console.log("arr: ", arr);

const spliceArr = arr.splice(1,3);           /// make changes to original array
console.log("spliceArr: ", spliceArr);
console.log("arr: ", arr);


const depthArray = [1,2,3,[4,5,6,[7,8,9]]];

const flattenArray = depthArray.flat(1);
const infiniteFlattenArray = depthArray.flat(Infinity);
console.log("flattenArray: ",flattenArray);
console.log("infiniteFlattenArray: ",infiniteFlattenArray);


console.log(Array.from("array"));