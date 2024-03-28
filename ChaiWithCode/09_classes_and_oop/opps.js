// Object literal
// const user = {
//     userName: "Mangala",
//     loginCount: 8,
//     signedIn: true,

//     getUserDetails: function (){
//         //console.log("got user")
//         //console.log(`usernsme: ${this.userName}`)
//         //console.log(this);
//     }

// }

//console.log(user.userName);
//console.log(user.getUserDetails());

//constructor.................

function user(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    return this
}

const userOne = new user("Mangala", 12, true)
const user2 = new user("Mangala", 12, false)

console.log(userOne);
console.log(user2);


