//  Dates

// let myDate = new Date();
// console.log(myDate); //2024-02-29T09:09:38.127Z
// console.log(myDate.toString()); //Thu Feb 29 2024 14:39:38 GMT+0530 (India Standard Time)
// console.log(myDate.toISOString());//2024-02-29T09:09:38.127Z 
// console.log(myDate.toDateString());//Thu Feb 29 2024 
// console.log(myDate.toJSON()); //2024-02-29T09:09:38.127Z
// console.log(myDate.toLocaleString()); //29/2/2024, 2:39:38 pm
// console.log(myDate.toLocaleDateString());//29/2/2024 
// console.log(myDate.toTimeString()); //14:39:38 GMT+0530 (India Standard Time)
// console.log(myDate.toUTCString()); //Thu, 29 Feb 2024 09:09:38 GMT
 

//let myCreatedDate = new Date(2023, 0, 23)// 23/1/2023, 12:00:00 am
//let myCreatedDate = new Date(2023, 0, 23, 5, 3)// 23/1/2023, 5:03:00 am
let myCreatedDate = new Date("01-14-2023") //14/1/2023, 12:00:00 am
//let myCreatedDate = new Date("2023-01-14")//14/1/2023, 5:30:00 am
//console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now();
//console.log(myTimeStamp);//1709202010457
// console.log(myCreatedDate.getTime());//1673634600000
// console.log(Math.floor(Date.now()/1000));//1709202246

let newDate = new Date()
//console.log(newDate);
//console.log(newDate.getMonth() + 1);
//console.log(newDate.getDay());

// `${newDate.getDay()} and the time is `//you can write like that;

//you can customise according to your need


console.log(newDate.toLocaleString('default', {
    weekday: "long"
}));
