// let myName = "Mangala   "
// let mylastName = "Pal   "

// console.log(myName.truelength);

let myHero = ["thor", "spiderman"]

let heroPower = {
    thor:"hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.mangala = function(){
    console.log(`mangala is present all objects`);
}

Array.prototype.heyMangla = function(){
    console.log("mangla says hello");
}
// heroPower.mangala()
//.myHero.mangala()

// myHero.heyMangla()
// heroPower.heyMangla()//you can't access object if you make prototype for arrar

// Inheritance.......

const user = {
    name: "chai",
    email: "manis@google.com"
}

const teacher = {
    makeVideo: true
}

const teachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'js assignment',
    fulltime: true,
    __proto__:teachingSupport
}

teacher.__proto__ = user;

// modern Syntax .....

Object.setPrototypeOf(teachingSupport, teacher)

let anotherName = "chaiAurCode    ";

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`the true length is: ${this.trim().length}`);
}

anotherName.trueLength()
"mangla".trueLength()
"iceTea".trueLength()
