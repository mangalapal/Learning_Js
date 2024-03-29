//ES

class user {
    constructor(username, email, password){
        this.username = username;
        this.email = email;
        this.password = password
    }
    encryptPassword(){
        return `${this.password}abc`
    }

    changeUsername(){
        return `${this.username.toUpperCase()}`
    }
}

const chai = new user("chai", "chai@gmail.com", "2124")
console.log(chai.encryptPassword());
console.log(chai.changeUsername());

// behind the scene

function user(userName, email, password){
    this.userName = userName;
    this.email = email;
    this.password = password
}

user.prototype.changeUsername = function(){
    return `${this.userName}`
}
user.prototype.encryptPassword = function(){
    return `${this.password}abc`
}

const tea = new user("tea", "tea@gmail.com", "2124")
console.log(tea.encryptPassword());
console.log(tea.changeUsername());
