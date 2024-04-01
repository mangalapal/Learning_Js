class User {
    constructor(email, password){
        this.email = email;
        this.password = password
    }

    get email(){
        return this._email.toUpperCase()
    }

    set email(value){
     this._email = value.toUpperCase()
    }

    get password(){
        return `${this._password}maaa`
    }

    set password(value){
        this._password = value
    }
}  

const mangal = new User ("mang@.ai", "123")
console.log(mangal.password);
console.log(mangal.email);