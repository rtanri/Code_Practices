// (optional) determine initial player, X or O
// you can also just hard-code the initial player, for now
let currentPlayer = randomInitPlayer()

// get all ttt cells
let cells = document.querySelectorAll('.cell')

// attach event handler to each cell
for (let i = 0; i < cells.length; i++) {
        cells[i].addEventListener('click', makeMove)
}

function makeMove(event) {
        console.log(`Player ${currentPlayer} now making a move`)
}

function randomInitPlayer() {
        let randomNum = Math.floor(Math.random() * 2)
        if (randomNum === 0) {
                return 'O'
        }
        return 'X'
}