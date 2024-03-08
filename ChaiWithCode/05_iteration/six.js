//const coding = ["js", "ruby", "java", "python", "cpp"]

// const values = coding.forEach( (item) => {
//     //console.log(item);
//     return item
// })
// console.log(values);// for each doesn't return value


const myNums = [1, 2, 3, 4, 5, 6, 7, 9, 10];

// const newnums = myNums.filter( (num) => num > 4)
// console.log(newnums);

// const newnums = myNums.filter( (num) => {
//     return num > 4       // if you use curlybraces then you need to use return keyword
// })



// const newNums = []

// myNums.forEach( (num) => {
//     if(num > 4){
//         newNums.push(num)
//     }
// })
// console.log(newNums);

const books = [
    {title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004},
    {title: 'Book two', genre: 'Non-Fiction', publish: 1992, edition: 2008},
    {title: 'Book three', genre: 'History', publish: 1999, edition: 2007},
    {title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010},
    {title: 'Book Five', genre: 'Science', publish: 2000, edition: 2014},
    {title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010},
    {title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996},
    {title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016},
    {title: 'Book Nine', genre: 'Geography', publish: 1995, edition: 2008},
    {title: 'Book Ten', genre: 'Mathematics', publish: 1975, edition: 2020},
    
];
//const userBooks = books.filter( (bk) => bk.genre === 'History')
const userBooks = books.filter( (bk) => bk.publish >= 1995 && bk.genre === "History")
console.log(userBooks);
