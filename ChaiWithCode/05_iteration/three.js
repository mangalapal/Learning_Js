// for of loop
// it is array specific loop

// const arr = [1, 2, 3, 4, 5]
  
// for (const num of arr) {
//     console.log(num)
// }

// const greetings = "Hello world"
// for(const greet of greetings){
//     if(greet == " ")// for removing space
//     continue
//     console.log(`Each char is ${greet}`);
    
// }

// Maps********

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")
//console.log(map);

for (const key of map) {
    //console.log(key);
}
// if you want to print seperate value
for (const [key, value] of map) {
    //console.log(key, ':-', value); /*IN :- India 
                                     // USA :- United States of America
                                       //Fr :- France 
}

const myObeject = {
    'game': 'NFS',
    'game2': 'Spiderman'
}

// for(const [key, value] of myObeject){
//     console.log(key, ':', value);//TypeError: myObeject is not iterable
// }
