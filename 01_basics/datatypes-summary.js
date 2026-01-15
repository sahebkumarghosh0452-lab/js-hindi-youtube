// JavaScript is dynamically typed language 
//The datatypes are categorieses into 2 part on the basis of mempry selection and update 
//  Primitive - call by value 

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3 //no special decimal datatypes 

const isLoggedIn = false
const outsideTemp = null // object is the datatype 
let userEmail; // if not initialized then it is stored as undefined 

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId); // false 

// const bigNumber = 3456543576654356754n - n used to make it big int 



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = { //key value pairs are stores as object 
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3

//**********************************

//Stack (primitive) - copy of the variable , Heap(NP) - reference of the original variable 
let myt = "SAHEB"
let ano = myt 
ano = "Hi"

console.log(myt); //not changed 
console .log(ano);

let obj {
   name : "SAHEB" ,
       new : "Sunanda" , 
}

let obj.name= "SLS" ;
console.log(obj.name) ; 

