// Variable.........
// It is a like container which store a information/ Value, It also called Variable "Declaration".
const accountId = 124515;
let accountEmail = "mangala@gmail.com";
var accountPassword = "12345678";
accountCity = "jaunpur";
let accountState;

// accountId = 2; 
// It is not allowed you will get error because you can not assign on const variable.


accountEmail = "Palmangala@gmail.com";
accountPassword = "2475651145";
accountCity = "Varanshi"

// If you want to print all variable you can do...
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])

/*
 Prefer not to use var 
 Because of issue in block scope and functional scope
*/