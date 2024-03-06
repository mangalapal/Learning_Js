const user = {
    username : "Mangal Pal",
    price : 999,

    welcomeMessage : function(){
        console.log(`${this.username}! Welcome to my World`);
        //console.log(this);
    }

}
// user.welcomeMessage();
// user.username = "Manish";
// user.welcomeMessage();
//console.log(this);

// function chai(){
//     let username = "mangala"
//     console.log(this.username);//undefined you can not do inside a function
// }
// chai()

// const chai = function (){
//     let username = "mangala"
//     console.log(this.username); this is also same 
// }

// chai()

// const chai =() => {
//     let username = "mangala"
//     console.log(this.username);//undefined
// }

// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2 //explicit return
// }

//const addTwo = (num1, num2) => num1 + num2  //implecit return
// const addTwo = (num1, num2) => (num1 + num2)//second method
// console.log(addTwo(3, 4));

//return object

// const name = (num1, num2) => ({username:"Mangal"}) //this is way of object returning
// console.log(name(3, 4));


// const myArray = [1, 5, 22, 6]
// myArray.forEach()
