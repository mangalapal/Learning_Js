// reduce method ()
const myNums = [1, 2, 3];

// const newNum = myNums.reduce( function (accu, currval){
//     console.log(`acc: ${accu} and currval: ${currval}`);
//     return accu + currval;
// }, 0)
// console.log(newNum);

// const newNum = myNums.reduce( (acc, currval) => acc + currval, 0)
// console.log(newNum);

const shoppingCart = [
    {
        itemName: "java",
        price: 6000
    },
    {
        itemName: "Python",
        price: 4999
    },
    {
        itemName: "DevOps",
        price: 6999
    },
    {
        itemName: "Data science course",
        price: 10999
    },
]
const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)
console.log(priceToPay);