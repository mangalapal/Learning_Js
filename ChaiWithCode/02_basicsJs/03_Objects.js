// Singleton
//Object.create  (it is constructer object)

//object literal
 const mysym = Symbol("key1")
const JsUser = {
    name : "Mangala",
    "full name" : "Mangala Pal",//if key declare like this then you access the value using ["keyName"]
    [mysym]: "mykey1",//you should declare symbol like this
    age : 18,
    location : "Jaunpur",
    email : "mangalapal@gmail.com",
    isLoggedIn : false,
    lastLoginDays : ["Monday", "Saturday"]
}

// console.log(JsUser.email);//you can access like this
// console.log(JsUser["email"]);//and you can access like this also
// console.log(JsUser["full name"]);
// console.log(JsUser[mysym]);//you can access symbol in object like this

//If you want to change the value of object

JsUser.email = "mangla@google.com"
//Object.freeze(JsUser)//it lock the object you can not modified the value
JsUser.email = "mangala@microsoft.com"//this value does nat propagate
//console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello Mangala pal")
}

JsUser.greeting1 = function(){
    console.log(`Hello ${this.name}`)
}

console.log(JsUser.greeting());
console.log(JsUser.greeting1());
