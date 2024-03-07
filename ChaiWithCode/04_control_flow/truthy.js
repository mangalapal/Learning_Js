// const userEmail = "magala@mail.com"
//const userEmail = ""// this case else block execute
const userEmail = []// this case if block execute

if(userEmail){
    console.log("got user email");
}else {
    console.log("Don't have user email");
}

// falsy value
/*
false, 0, -0, BigInt 0n, "", null, undefined, NaN

*/

// truthy values

// "0", 'false', " ", [], {}, function(){}

if (userEmail.length === 0){  //check arrays
    console.log("Array is empty");
}

//check object

const emptyObj = {}
if(Object.keys(emptyObj).length === 0){
    console.log("Object is empty");
}
// Nulish Coalescing Operator (??): null undefined

let val1;
//val1 = 5 ?? 10 // 5
//val1 = null ?? 10 // 10
//val1 = undefined ?? 11 // 11



console.log(val1);

//terniary Operator
const iceTeaPrice = 100
iceTeaPrice >= 80 ? console.log("less than 80"): console.log("greater than 80");