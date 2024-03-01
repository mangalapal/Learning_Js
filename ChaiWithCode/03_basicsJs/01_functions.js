// function sayMyName (){
//     console.log("M");
//     console.log("A");
//     console.log("N");
//     console.log("G");
//     console.log("L");
//     console.log("A");
// }
// sayMyName();

// function addTwoNumber (num1, num2){
//     console.log(num1 + num2);
// }
// addTwoNumber(2, 5);
// addTwoNumber(2, "5");
// addTwoNumber(2, "a");


// function addTwoNumber (num1, num2){
//     let result = num1 + num2;
//     return result
// }
// const myResult = addTwoNumber(5, 4)
// console.log(`Result of two number is ${myResult}`);

//you can also use like this

// function addTwoNumber (num1, num2){
//     return num1 + num2; 
// }
// const myResult = addTwoNumber(5, 4)
// console.log("result : ", myResult);

// function loginUserMessage (userName){
//     return `${userName}! you are loggedIn`
// }
// console.log(loginUserMessage("Mangala"));

function loginUserMessage (userName){
    if(!userName){
        console.log("Please Enter the user name");
        return
    }
    return `${userName}! you are loggedIn`
}
console.log(loginUserMessage());