// array - DYNAMIC IN NATURE IN JAVASCRIPT 

const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4) // prototype under prototype 
// console.log(myArr[1]);

// Array methods

// myArr.push(6)
// myArr.push(7) - add a element at last 
// myArr.pop() - delete value at the last 

// myArr.unshift(9) - add element in start of the array 
// myArr.shift() - remopve first element of the array

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

// const newArr = myArr.join() - convert to string comma separated 

// console.log(myArr);
// console.log( newArr);


// slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3) // it donot convert the array the original array remain same after the operation 

console.log(myn1);
console.log("B ", myArr);


const myn2 = myArr.splice(1, 3) // it alter the original array cut it into valid substring that is givenit includes the range given
console.log("C ", myArr);
console.log(myn2);
