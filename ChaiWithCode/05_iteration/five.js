const coding = ["js", "ruby", "cpp", "java", "python"]

// coding.forEach( function (value){
//     console.log(value);
// } )

// coding.forEach( (item) => {
//     console.log(item);
// })


// function printme(item){
//     console.log(item);
// }
// coding.forEach(printme)

// coding.forEach( (item, index, arr) => {
//     console.log(item, index, arr);
// })

const myCoding = [
    {
        languageName: "JavaScript",
        languageFileName: "js" 
    },
    {
        languageName: "Python",
        languageFileName: "py" 
    },
    {
        languageName: "Java",
        languageFileName: "java" 
    },
    {
        languageName: "Cpp",
        languageFileName: "CP" 
    }
]

myCoding.forEach( (item) => {
    console.log(item.languageName);
})