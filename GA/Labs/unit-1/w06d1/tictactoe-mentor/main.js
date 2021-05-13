// (optional) determine initial player, X or O
// you can also just hard-code the initial player, for now
let currentPlayer = randomInitPlayer()

let currentMove = 0

// get all ttt cells
let cells = document.querySelectorAll('.cell')

// attach event handler to each cell
for (let i = 0; i < cells.length; i++) {
        cells[i].addEventListener('click', makeMove)
}

function makeMove(event) {
        console.log(`Player ${currentPlayer} now making a move`)

        // get cell clicked
        let clickedCell = event.target

        // validate that user is making a valid move
        if (clickedCell.innerText !== "") {
                alert('Oi, no cheating!')
                return
        }

        currentMove += 1

        // place current player's symbol (X or O) in the clicked cell
        clickedCell.innerText = currentPlayer

        // check win conditions
        let win = checkWinConditions(cells)

        if (win) {
                alert(`Player ${currentPlayer} has won!`)
                resetGame(cells)
                return
        }

        if (currentMove === 9) {
                alert(`Game Draw!`)
                resetGame(cells)
                return
        }

        // change player
        if (currentPlayer === "X") {
                currentPlayer = "O"
        } else {
                currentPlayer = "X"
        }
}

function checkWinConditions(boardCells) {
        // make the 1D array into 2D array
        let boardRows = [
                [boardCells[0].innerText, boardCells[1].innerText, boardCells[2].innerText],
                [boardCells[3].innerText, boardCells[4].innerText, boardCells[5].innerText],
                [boardCells[6].innerText, boardCells[7].innerText, boardCells[8].innerText],
        ]

        // check the rows
        // 0, 0
        // 0, 1
        // 0, 2
        // 1, 0
        // 1, 1
        // 1, 2 ...
        for (let i = 0; i < boardRows.length; i++) {
                if (boardRows[i].every(cellVal => cellVal == 'X') || boardRows[i].every(cellVal => cellVal == 'O')) {
                        return true
                }
        }

        // check the cols
        // row, col
        // 0, 0
        // 1, 0
        // 2, 0
        // 0, 1
        // 1, 1
        // 2, 1
        // 0, 2
        // 1, 2
        // 2, 2

        // let boardRows = [
        //     [boardCells[0].innerText, boardCells[1].innerText, boardCells[2].innerText],
        //     [boardCells[3].innerText, boardCells[4].innerText, boardCells[5].innerText],
        //     [boardCells[6].innerText, boardCells[7].innerText, boardCells[8].innerText],
        // ]
        for (let i = 0; i < boardRows.length; i++) {
                let streak = []

                for (let j = 0; j < boardRows[i].length; j++) {
                        streak.push(boardRows[j][i])
                }

                if (streak.every(cellVal => cellVal == 'X') || streak.every(cellVal => cellVal == 'O')) {
                        return true
                }
        }

        // check diagonals
        // left:
        // 0, 0
        // 1, 1,
        // 2, 2
        // right:
        // 0, 2
        // 1, 1
        // 2, 0
        for (let i = 0; i < boardRows.length; i++) {
                let leftStreak = []
                let rightStreak = []

                for (let j = 0; j < boardRows[i].length; j++) {
                        leftStreak.push(boardRows[j][j])
                }

                for (let j = 0; j < boardRows[i].length; j++) {
                        rightStreak.push(boardRows[j][boardRows[i].length - 1 - j])
                }

                if (leftStreak.every(cellVal => cellVal == 'X') || leftStreak.every(cellVal => cellVal == 'O')) {
                        return true
                }

                if (rightStreak.every(cellVal => cellVal == 'X') || rightStreak.every(cellVal => cellVal == 'O')) {
                        return true
                }
        }

        return false
}

function randomInitPlayer() {
        let randomNum = Math.floor(Math.random() * 2)
        if (randomNum === 0) {
                return 'O'
        }
        return 'X'
}

function resetGame(cells) {
        for (let i = 0; i < cells.length; i++) {
                cells[i].innerText = ''
        }

        currentPlayer = randomInitPlayer()
        currentMove = 0
}