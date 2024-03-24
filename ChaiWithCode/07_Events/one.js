
// setTimeout(function() {
//     console.log("Mangla");
// }, 2000)

const sayMangala = function(){
    console.log("Mangala");
}

const changeText = function(){
    document.querySelector('h1')
    .innerHTML = "JavaScript Series"
}

const changeMe = setTimeout(changeText, 2000)

document.querySelector('#stop')
.addEventListener('click', function() {
    clearTimeout(changeMe)
    console.log("STOPPED")
})