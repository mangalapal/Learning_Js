// in javascript event are sequentially executed 

// document.getElementById('flower').onclick = function () {
//     alert("flower clicked")
// }


//attachEvent()
//jQuery - on


// type, timestamp, defaultPrevented
// target, toElement, srcElement, currentTarget,
// clientX, clientY, screenX, screenY
// altket, ctrkey, shiftkey, keyCode


// document.getElementById('images').addEventListener('click', function (event){
//    console.log("clicked inside the ul");
// }, false)

// // event propagation (event bubbling, event capturing)

// document.getElementById('flower').addEventListener('click', function(event){
//     console.log("flower clicked");
//     // if you want to stop bubbling use
//     event.stopPropagation();
// },false)


// document.getElementById('google').addEventListener('click', function (event){
//     console.log('google clicked');
//     event.preventDefault();
//     event.stopPropagation()
// })

document.querySelector('#images')
.addEventListener('click', function (event){
    console.log(event.target.tagName);
    if(event.target.tagName === 'IMG'){
        console.log(event.target.id);
        let removeIt = event.target.parentNode
    removeIt.remove()
    }
    
})