const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// array uske andar koi bhi data le leta hai no exceptions iis their in taking the data 

// marvel_heros.push(dc_heros)

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const allHeros = marvel_heros.concat(dc_heros) - concate add two arrays add them to third new arrays 
// console.log(allHeros);

const all_new_heros = [...marvel_heros, ...dc_heros] // this method is used mostly as it help in adding numerous no of arrays

// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity) // it spred the data into depth levels it can spred it to infinite level where every elements is converted to single elements in array 
console.log(real_another_array);



console.log(Array.isArray("Hitesh"))
console.log(Array.from("Hitesh")) // convert the giventype to arrays 
console.log(Array.from({name: "hitesh"})) // interesting - it make key pair of the elemnts given 

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));
