// For loop
// const array = [5, 6, 70, 6, 10]
// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
//     console.log(index);
// }

// for (let i = 0; i < 10; i++) {
//     const element = i;
//     if(element == 5) {
//        console.log("5 is the best number"); 
//     }
//     console.log(element);
    
// }

for(let i = 1; i <= 10; i++){
    //console.log(`Table of: ${i}`);
    for(let j = 1; j <= 10; j++){
        //console.log(`Inner loop value: ${j} and inner loop ${i}`);
       // console.log(i +'*'+ j +' = '+ i*j );
    }
}

// let myArray = ["flash", "Batman", "Superman", "IronMan"];
// for (let index = 0; index < myArray.length; index++) {
//     const element = myArray[index];
//    console.log(element);
// }

// break and continue

// for(let i = 1; i <= 20; i++){
//     if(i == 5){
//         console.log(`Detected 5`);
//         break
//     }
//     console.log(`Value of i is ${i}`); 
// }


for(let i = 1; i <= 20; i++){
    if(i == 5){
        console.log(`Detected 5`);
        continue
    }
    console.log(`Value of i is ${i}`); 
}