// Hoisting

// console.log(getname);

// var x = 10;
// function getname(){
//     console.log("Mangla pal")
// }

// getname();
// console.log(x);

// in this case arrow function behaves like a variable
// var getname =  () => {
//     console.log("Mangla pal")
// }

// in this case also function behave like a variable
// var function2 = function getname () {
//     console.log("Mangla pal")
// }

// functions................

// var x = 1;
// a();
// b();
// console.log(x);
// function a () {
//     var x = 10;
//     console.log(x);
// }

// function b () {
//     var x = 100;
//     console.log(x);
// }

// Scope....
// lexical Environments...

// function a () {

//     function c (){
//         function d (){
//             console.log(b);
//         }
//         d();
//     }
//     c();
// }
//  let b = 10;
// a();

// Scope...........

{
  // Its Scope
  // It is also known as Compound Statement
}

// Block Scope
// What all variables and funnctions we can access inside this block
// {
//     var a = 10;
//     let b = 20;
//     const c = 30;
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }
// console.log(a);
// console.log(b);
// console.log(c);

// Closure..........
// A function bind togather with its lexical environment

// function x(){

//     const a = 10;

//     function y(){
//         console.log(a);
//    }
//    return y;
// }
// x();

// const z = x();
// console.log(z);
// // z();

// Set TimeOut..........

// function a (){
//     const x = 10;
//     setTimeout(function (){
//         console.log("Mangala Pal")
//     },5000);
//     return console.log(x);
// }
// a();

// function x(){
//     for(let i = 1; i <= 5; i++){
//         setTimeout(function (){
//             console.log(i)
//         },i * 1000)
//     }
// }
// x();

// Callback Function...............
// When you pass function to another function is callback function
// setTimeout(function (){
//     console.log("timer");
// },5000);

// function x(y){
//     console.log("x");
//     y();
// }
// x(function y(){
//     console.log("y");

// });

// function attachEventlistner() {
//   let count = 0;
//   document.getElementById("clickMe")
//   .addEventListener("click", function xyz() {
//     console.log("button clicked", ++count);
//   });
// }
// attachEventlistner();


// Functon Constructor
const sum = new Function('a', 'b', 'return a + b');

console.log(sum(2, 6));