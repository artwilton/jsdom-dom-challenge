const counter = document.getElementById("counter")
const minus = document.getElementById("minus")
const plus = document.getElementById("plus")
const heart = document.getElementById("heart")
const pause = document.getElementById("pause")

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
        // do something
    } else if (event.target.matches("#pause")) {
        // do something
    }
})

// setInterval(function() {
//     incrementCounter();
//     }, 3000);