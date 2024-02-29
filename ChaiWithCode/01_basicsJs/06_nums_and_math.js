// const score = 400
// console.log(score);


// const balance = new Number(100);
// console.log(balance);


// console.log(balance.toString().length);//now it change into strings and you can find its length and whatever you want to do with string you can do.
// console.log(balance.toFixed(2));//100.00 

// const otherNumber = 123.8695

// console.log(otherNumber.toPrecision(3));// it gives precise value and return string; it gives 124(roundoff value)

// const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN'));//en-IN (It change according to indian standard system)output(10,00,000)


//******************************** Maths ********************************

// console.log(Math);
// console.log(Math.abs(-4));//it give absolute value (only positive value return)  (4)
// console.log(Math.round(4.05));//return value before decimal(4)
// console.log(Math.ceil(4.02));//it always return high value(ex: 5)
// console.log(Math.floor(4.09));//it always return min value (value before decimal) ..4
// console.log(Math.min(25, 26, 5, 1, 6));//it return min value(1)
// console.log(Math.max(655, 55, 98, 333));//it return maximum value(655)

console.log(Math.random());//it return random value in between 0 to 1
console.log((Math.random() * 10) + 1);//then it give the value between 1 to 9
console.log(Math.floor(Math.random()*10) + 1);//it gives roundof value

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)//you can set value min to max
