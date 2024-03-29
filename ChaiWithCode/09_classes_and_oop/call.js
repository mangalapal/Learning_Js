function setUserName(userName){
    this.userName = userName
}

function createUser(userName, email, password){
    setUserName.call(this, userName)

    this.email = email
    this.password = password

}

const chai = new createUser("Mangala", "mainish@google.com", 1245)
console.log(chai);