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

// function loginUserMessage (userName){
//     if(!userName){
//         console.log("Please Enter the user name");
//         return
//     }
//     return `${userName}! you are loggedIn`
// }
// console.log(loginUserMessage());

 function calculateCartPrice (val1, val2, ...num1){        //spread operator (...)
    return num1
 }
//  console.log(calculateCartPrice(200, 400, 500));//[200, 400, 500]
//  console.log(calculateCartPrice(200, 400, 500, 2000));// 500, 2000


const user = {
    username : "mangla Pal",
    price: 199
}
function handleObjct(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}
//handleObjct(user);
handleObjct({
    username : "Anand Pal",
    price : 599
});

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[3]
}
//console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 100, 600]));
