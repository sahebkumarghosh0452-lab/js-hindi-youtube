const name = "hitesh"
const repoCount = 50

// console.log(name + repoCount + " Value"); - old way  

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`); // It is used mostly and mandatory for used 

const gameName = new String('hitesh-hc-com')
// 


// console.log(gameName[0]);
// console.log(gameName.__proto__); - gives the output that what keyvalue pair exist in the string 


// console.log(gameName.length);
// console.log(gameName.toUpperCase()); - original string ki value change nahi hui 
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 4) // -ve value returns the string in reverse value till the index guven reached
console.log(anotherString);

const newStringOne = "   hitesh    "
console.log(newStringOne);
console.log(newStringOne.trim()); // removes the empty spaces in the string (trimstart) and (trim end) . It removes whitespaces and newline character also 

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-')) // replaves the sign that were not understood by the browser 

console.log(url.includes('sundar')) // Checks whether the sub - string is present in the given string  

console.log(gameName.split('-')); // it split the strings into array for the use case of 
