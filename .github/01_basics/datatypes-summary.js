// primitive data types 
// # 7 types String, number, boolean,null,undefined,Symbol,BigInt

// reference type (non primitive)
// array , objects , functions

const heros = ["Shaktiman", "Nagraj", "Doga"]
let myObj = {
    name: "Shriraj",
    age: 23,

}


// javascript is a dynamically typed language

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 1264678976589



//functions

const myFunction = function(){
    console.log("Hello World");
}

console.log(typeof  myFunction);

console.log(typeof  heros);