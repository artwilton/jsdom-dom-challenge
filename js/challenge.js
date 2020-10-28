const counter = document.getElementById("counter")
const minus = document.getElementById("minus")
const plus = document.getElementById("plus")
const heart = document.getElementById("heart")
const pause = document.getElementById("pause")

const submitForm = document.getElementById("comment-form")

let likeCounter = 0

function disableBtn() {  
    allButtonsExceptPause = document.querySelectorAll("button:not(#pause)")
    allButtonsExceptPause.forEach(button => {
        button.disabled = true;
    });
}

function enableBtn() {
    allButtonsExceptPause = document.querySelectorAll("button:not(#pause)")
    allButtonsExceptPause.forEach(button => {
        button.disabled = false;
    });
} 

const likeUl = document.querySelector(".likes")

function liker() {
    
    likeCounter++
    const latestLi = likeUl.children[likeUl.children.length - 1]
    const newLi = document.createElement('li')
    newLi.innerText = `${counter.innerText} has ${likeCounter} likes!`
    
    if (!!latestLi === false) {
        likeUl.append(newLi)
    } else if (!!latestLi.textContent.startsWith(counter.innerText)) {
        latestLi.textContent = newLi.textContent
    } else {
        likeUl.append(newLi)
    } 
       
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
        if (pause.innerText === "pause") {
            clearInterval(startingInterval)
            disableBtn()
            pause.innerText = "resume"
        } else if (pause.innerText === "resume") {
            setInterval(startingInterval)
            enableBtn()
            pause.innerText = "pause"
            startingInterval = setInterval(function() {
                incrementCounter();
                likeCounter = 0
                }, 1000);
        }
    }
})

submitForm.addEventListener('submit', function(event) {
    event.preventDefault()
    const comment = document.createElement('p')
    comment.innerText = event.target.comment.value
    console.log(comment)
    document.querySelector('.comments').append(comment)
})

let startingInterval = setInterval(function() {
    incrementCounter();
    likeCounter = 0
    }, 1000);