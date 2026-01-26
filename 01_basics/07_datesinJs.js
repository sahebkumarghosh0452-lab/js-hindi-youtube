// Dates - OBJECT 

let myDate = new Date()
// console.log(myDate.toString()); - to make it understandable 
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate); - OBJECT
// console.log(mydate.toLocaldatestring); (to Json,to isosstring)

// let myCreatedDate = new Date(2023, 0, 23) // Y/M/D/H/Min/Sec - month strats with 0 
// let myCreatedDate = new Date(2023, 0, 23, 5, 3)
// let myCreatedDate = new Date("2023-01-14")
let myCreatedDate = new Date("01-14-2023")
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

// `${newDate.getDay()} and the time `

newDate.toLocaleString('default', { // customiz it at its max extend 
    weekday: "long",
    
})

