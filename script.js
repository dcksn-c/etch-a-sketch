boardSize(16);
let color = "black";
let click = false;

document.querySelector(".board").addEventListener("click", function(event) {
    let element = event.target;
    if (element.tagName != "BUTTON") {
        click = !click;
        let message = document.querySelector(".message");
        if (click) {
            message.innerHTML = "Pen down, start drawing!";
        }
        else {
            message.innerHTML = "Pen up, you've stopped drawing.";
        }
    }
})

let sizeBtn = document.querySelector(".sizebtn");
sizeBtn.addEventListener("click", function() {
    getSize();
});

function boardSize(size) {
    // to create grid
    let board = document.querySelector(".board");
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    // to create divs in the grid
    let divNum = size * size;
    for (let i = 0; i < divNum; i++) {
        let div = document.createElement("div");
        div.addEventListener("mouseover", divColor);
        board.insertAdjacentElement("beforeend", div);
    }
}

let black = document.querySelector(".black");
let random = document.querySelector(".random");
let opacity = document.querySelector(".opacity");
let reset = document.querySelector(".reset");
black.addEventListener("click", function() {
    color = "black";
})
random.addEventListener("click", function() {
    color = "random";
})
opacity.addEventListener("click", function() {
    color = "opacity";
})
reset.addEventListener("click", function() {
    resetBoard();
})

function resetBoard() {
    let divs = document.querySelectorAll("div");
    divs.forEach((div) => div.style.backgroundColor = "white")
}

function divColor() {
    if (click) {
        if (color == "black") {
            this.style.backgroundColor = "black";}
        else if (color == "random") {
            this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
        }
        else if (color == "opacity") {
            let currentOpacity = Number(this.style.opacity)
            this.style.backgroundColor = "black";
            this.style.opacity = currentOpacity + 0.1
            }
        }
}

function getSize() {
    let input = prompt("How big do you like your board?");
    let message = document.querySelector(".message");
    if (input == "" || input < 1 || input > 100) {
        message.innerHTML = "Please insert a number from 1~100.";}
    else {
        message.innerHTML = "Alright! Click on the board to start drawing!";
        boardSize(input);
    }
}