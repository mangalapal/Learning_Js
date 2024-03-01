// array

const myArr = [0, 1, 2, 3, 4, 5]
const myHeros = ["Shaktiman", "Naagraj"]

const myArr2 = new Array(1, 2, 3, 4, 5)
//console.log(myArr2[2]);

// const vegetables = ["Cucumber", "Potato"]
// const fruits = ["Pomegranate", "Pineapple"]
// vegetables.push(...fruits) (using spread syntax)
// console.log(vegetables);



// Array method.........

// myArr.push(6)//add value in array last and return new length of an array
// console.log(myArr);

// myArr.pop()//remove last value of an array
// console.log(myArr);

// myArr.unshift(9)//add value in starting array
// console.log(myArr);

// myArr.shift()//remove the starting value of array 
// console.log(myArr);

// console.log(myArr.includes(9));//it will value present in the array or not
// console.log(myArr.indexOf(3));//gives us index of array

// const newArr = myArr.join()

// console.log(myArr);//[ 1, 2, 3, 4, 5 ]
// console.log(newArr);//1,2,3,4,5
// console.log(typeof newArr);//string


//.......slice, splice

console.log("A", myArr);

const mynew1 = myArr.slice(1, 3)//return the slice of array

console.log(mynew1);//[1, 2]
console.log("B", myArr);

const mynew2 = myArr.splice(1, 3)//it mutate the original array and return new array
console.log("C", myArr);//[0, 4, 5]
console.log(mynew2);//[1, 2, 3]
