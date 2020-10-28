const counter = document.getElementById("counter")
const minus = document.getElementById("minus")
const plus = document.getElementById("plus")
const heart = document.getElementById("heart")
const pause = document.getElementById("pause")
let likeCounter = 0

function liker() {
    const likeUl = document.querySelector(".likes")
    const newLi = document.createElement('li')
    likeCounter++
    newLi.innerText = `${counter.innerText} has ${likeCounter} likes!`
    likeUl.append(newLi)

    
    // if (newLi.startsWith(counter.innerText)) {

    // }
    //
}

function incrementCounter() {
    counter.innerText = parseInt(counter.innerText) + 1
}

function decrementCounter() {
    counter.innerText = parseInt(counter.innerText) - 1
}

document.body.addEventListener('click', function(event) {
    console.log(event)
     
    if (event.target.matches("#plus")) {
        incrementCounter()
    } else if (event.target.matches("#minus")) {
        decrementCounter()
    } else if (event.target.matches("#heart")) {
        liker()
    } else if (event.target.matches("#pause")) {
        // do something
    }
})

setInterval(function() {
    incrementCounter();
    likeCounter = 0
    }, 1000);