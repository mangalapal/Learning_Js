//Scope

// if (true){
//     let a = 10
//     const b = 20
//     var c = 30
// }
// console.log(a);
// console.log(b);
// console.log(c);
// let a = 300
// if (true){
//          let a = 10
//          const b = 20
//          var c = 30
//          console.log("Inner :", a);//inner : 10
//  }
//  console.log(a);//300
 
//nested scope.......

function one (){
    const username = "Mangla"

    function two (){
        const website = "youtube"
        //console.log(username);
    }
    // console.log(website); //not allowed

    two()
}

one();

if(true) {
    const username = "Mangla Pal"
    if(username === "Mangla Pal"){
        const website = "Youtube"
        //console.log(username + website);
    }
    //console.log(website);//not allow give error

}
//console.log(username);//error

//****************interesting************** 

addone(5)//its normal function, it execute 
function addone(num){
    return num +1
}


addtwo(5)//it is function expression, it gives you error
const addtwo = function(num){
    return num + 2
}