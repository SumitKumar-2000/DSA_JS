let myDate = new Date();

console.log("type of date: ", typeof myDate);

console.log("toString: ", myDate.toString());
console.log("toISOString: ", myDate.toISOString());
console.log("toLocaleString: ", myDate.toLocaleString());
console.log("toLocaleDateString: ", myDate.toLocaleDateString());

let myCreatedDate1 = new Date(2023, 0, 22);    // year month day
console.log("my created date: ", myCreatedDate1.toDateString());

let myCreatedDate2 = new Date("2023-01-14");    // year month day
console.log("my created date: ", myCreatedDate2.toDateString());
console.log("my created date timestamp: ", myCreatedDate2.getTime());

let myTimeStamp = Date.now();
console.log("myTimeStamp: ", myTimeStamp);

