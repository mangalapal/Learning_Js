//const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "12235ab"
tinderUser.name = "Anand"
tinderUser.isLoggedIn = false

//console.log(tinderUser);//{ id: '12235ab', name: 'Anand', isLoggedIn: false }

const regularUser =  {
    email : "someone@gmail.com",
    fullName : {
        userfullName : {
            firstName : "Mangala",
            lastName : "Pal"

        }
    }
        
}

console.log(regularUser.fullName.userfullName);//if fullname not exist then use ?;

// how to combine object

const obj1 = {
    1: "a",
    2: "b",
}

const obj2 = {3: "c", 4:"d"}
//How to join two object
//const obj3 = Object.assign({}, obj1, obj2)
const obj3 = {...obj1, ...obj2}
console.log(obj3);

//Array of object
const users = [
    {
        id : 1,
        email: "m@gmail.com"
    }
]

//users[1].email
//console.log(tinderUser);

// console.log(Object.keys(tinderUser));//return keys
// console.log(Object.values(tinderUser));//return values
// console.log(Object.entries(tinderUser));//return key value pair in a array

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));//this method is used for knowing property is present or not

//Destructuring of object

const course =  {
    coursename : "JavaScript",
    price : "999",
    courseInstructor : "Hitesh Chaudhary"
}

//course.courseInstructor

// const {courseInstructor} = course
// console.log(courseInstructor);  =>Hitesh Chaudhary

const {courseInstructor : instructor} = course//this is object destructuring
console.log(instructor);//Hitesh Chaudhary
