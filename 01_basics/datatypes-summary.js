// Primitive

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId);

const bigNumber = 2532395734032790572n


// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name:"Rishav",
    age: 20,
}

const myFunction = function(){
    console.log("Hello World");
}

console.log(typeof id);



//******************************* */

// Stack (Primitive), Heap (Non-Primitive)

let myYoutubeName = "rishavdhiman"

let anothername = myYoutubeName
anothername = "rishucode"

console.log(myYoutubeName);
console.log(anothername);