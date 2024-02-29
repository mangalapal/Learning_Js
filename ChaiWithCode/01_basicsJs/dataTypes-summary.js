// Primitive

// 7 type : String, Number, Boolean, Null, undefined, Symbol, BigInt;

// const name = "Mangala"//String

// const score = 100//number
// const scoreValue = 100.3//number

// const isLoggedIn = false//boolean
// const outsideTemp = null// object
// let userEmail;//undefined
// const id = Symbol('123')//it is unique
// const anotherId = Symbol('123')//symbol

// const bignumber = 32654873164879774135n//it is bigInt



// Reference(Non primitive)

// Array, Objects, Functions

// const heros = ["shaktiman", "naagraj", "doga"];
// let myObj = {
//     name : "Mangala",
//     age : 22,
// }

// const myFunction = function(){//function
//     console.log("Hello world");
// }

// console.log(typeof bignumber);//bigInt
// console.log(typeof heros);//Object
// console.log(typeof myObj);//object
// console.log(typeof myFunction);//function
// console.log(typeof id);//symbol
// console.log(typeof outsideTemp);//object
// console.log(typeof isLoggedIn);//boolean


//************************************************************************************* 


// Stack (Primitive), Heap (Non-Primitive)

let = myYoutubename = "manglaPaldotcom"

let anothername = myYoutubename;
anothername = "chaiaurcode"

console.log(myYoutubename);//manglaPaldotcom; (original data can't change in stack memory)
console.log(anothername);//chaiaurcode(you can change only duplicate data)

let userOne = {
    email : "user@google.com",
    upi : "user@ybl"
}

// In heap memory it gives refrence(if you want to change the value it will change the original value)
let userTwo = userOne;


userTwo.email = "mangala@google.com"

console.log(userOne.email);//mangala@google.com
console.log(userTwo.email);//mangala@google.com