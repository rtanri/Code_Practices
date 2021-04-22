let isCrossTurn = true
let turnTitle = document.querySelector('#your-turn')
let allSquare = document.querySelectorAll('.grid-item')

// named all box
let box1 = document.querySelector('.box1')
let box2 = document.querySelector('.box2')
let box3 = document.querySelector('.box3')
let box4 = document.querySelector('.box4')
let box5 = document.querySelector('.box5')
let box6 = document.querySelector('.box6')
let box7 = document.querySelector('.box7')
let box8 = document.querySelector('.box8')
let box9 = document.querySelector('.box9')


numClicks = 0
let gameSquare = document.querySelector('.grid-container')
// console.log(gameSquare)


window.onload = function () {

        // console.log(allSquare)
        for (let i = 0; i < allSquare.length; i++) {
                allSquare[i].addEventListener("click", setSymbol)
        }
}

function resetGame() {
        for (let i = 0; i < allSquare.length; i++) {
                allSquare[i].innerText = ""
        }
        numClicks = 0
        turnTitle.innerText = "Player 1 turn"
}

let resetButton = document.getElementById('reset-button')
resetButton.addEventListener("click", resetGame)

function setSymbol(event) {
        // console.log(event.target)
        // if event.target has a content inside, just RETURN
        if (event.target.innerText) {
                return
        }
        if (isCrossTurn) {
                isCrossTurn = !isCrossTurn
                event.target.innerText = "X"
                turnTitle.innerText = "Player 2 turn"
                numClicks += 1

        } else {
                isCrossTurn = !isCrossTurn
                event.target.innerText = "O"
                turnTitle.innerText = "Player 1 turn"
                numClicks += 1
        }
        winningCondition()
}

function winningCondition() {
        if (numClicks < 5) {
                return
        }
        // row 1 win
        if (box1.innerText === box2.innerText && box2.innerText === box3.innerText && box1.innerText === box3.innerText && box1.innerText !== "") {
                // console.log("row 1 match")
                if (box1.innerText === "X" && box1.innerText === "X") {
                        console.log("Player 1 Win")
                        turnTitle.innerText = "Player 1 Win!"
                } else {
                        turnTitle.innerText = "Player 2 Win!"

                }
        }
        // row 2 win
        else if (box4.innerText === box5.innerText && box5.innerText === box6.innerText && box4.innerText === box6.innerText && box4.innerText !== "") {
                // console.log("row 1 match")
                if (box4.innerText === "X") {
                        turnTitle.innerText = "Player 1 Win!"
                } else {
                        turnTitle.innerText = "Player 2 Win!"
                }
        }
        // row 3 win
        else if (box7.innerText === box8.innerText && box8.innerText === box9.innerText && box7.innerText === box9.innerText && box7.innerText !== "") {
                // console.log("row 1 match")
                if (box7.innerText === "X") {
                        turnTitle.innerText = "Player 1 Win!"
                } else {
                        turnTitle.innerText = "Player 2 Win!"
                }
        }
        // column 1
        else if (box1.innerText === box4.innerText && box4.innerText === box7.innerText && box1.innerText === box7.innerText && box4.innerText !== "") {
                // console.log("row 1 match")
                if (box1.innerText === "X") {
                        turnTitle.innerText = "Player 1 Win!"
                } else {
                        turnTitle.innerText = "Player 2 Win!"
                }
        }
        // column 2
        else if (box2.innerText === box5.innerText && box5.innerText === box8.innerText && box2.innerText === box8.innerText && box2.innerText !== "") {
                // console.log("row 1 match")
                if (box2.innerText === "X") {
                        turnTitle.innerText = "Player 1 Win!"
                } else {
                        turnTitle.innerText = "Player 2 Win!"
                }
        }
        // column 3
        else if (box3.innerText === box6.innerText && box6.innerText === box9.innerText && box3.innerText === box9.innerText && box3.innerText !== "") {
                // console.log("row 1 match")
                if (box3.innerText === "X") {
                        turnTitle.innerText = "Player 1 Win!"
                } else {
                        turnTitle.innerText = "Player 2 Win!"
                }
        }
        // diagonal 1
        else if (box1.innerText === box5.innerText && box5.innerText === box9.innerText && box1.innerText === box9.innerText && box5.innerText !== "") {
                if (box1.innerText === "X") {
                        turnTitle.innerText = "Player 1 Win!"
                } else {
                        turnTitle.innerText = "Player 2 Win!"
                }
        }
        // diagonal 2
        else if (box3.innerText === box5.innerText && box5.innerText === box7.innerText && box3.innerText === box7.innerText && box7.innerText !== "") {
                if (box3.innerText === "X") {
                        turnTitle.innerText = "Player 1 Win!"
                } else {
                        turnTitle.innerText = "Player 2 Win!"
                }
        }

}