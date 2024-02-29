const name = "Mangala"
const repocount = 20

// console.log(name + repoCount + "Value");// its not a goog way of writing code

console.log(`Hello my name is ${name.toUpperCase()} and my repo count is ${repocount}`);//use backtick(template literal)/string interpolation


const gameName = new String ('Mangala pal')//it give output as key value pair

// console.log(gameName[0]);//M
// console.log(gameName[1]);//a
// console.log(gameName[2]);//n
// console.log(gameName[3]);//g
// console.log(gameName[4]);//a
// console.log(gameName[5]);//l
// console.log(gameName[6]);//a

// console.log(gameName.__proto__);//{}
// console.log(gameName.toUpperCase());//MANGALA
// console.log(gameName.charAt(4));//a
// console.log(gameName.indexOf('a'));//1

const newString = gameName.substring(0, 4);
console.log(newString);

const anotherString = gameName.slice(-6, 4);
console.log(anotherString);

const newStringOne = "  mangala   "
console.log(newStringOne);
console.log(newStringOne.trim());//it remove the extra spaces;


const url = "https://mangala.com/mangala%20pal"
console.log(url.replace('%20', '-'));

console.log(url.includes('mangala'));//you can check its present or not if present return 'true' if not 'false'

console.log(gameName.split(' '));//split a string into substring using specified separator and return them as an array

