let currentPlayer = 'X';
let gameOver = false;

function makeMove(cell) {
    if (!cell.textContent && !gameOver) {
        cell.textContent = currentPlayer;
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        checkWinner();
    }
}

function checkWinner() {
    const cells = document.querySelectorAll('.cell');
    const winningCombinations = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
        [0, 4, 8], [2, 4, 6]             // Diagonals
    ];

    for (const combination of winningCombinations) {
        const [a, b, c] = combination;
        if (cells[a].textContent && cells[a].textContent === cells[b].textContent && cells[a].textContent === cells[c].textContent) {
            gameOver = true;
            document.getElementById('winner-message').textContent = `${cells[a].textContent} wins!`;
            break;
        }
    }
    
    if (!gameOver && Array.from(cells).every(cell => cell.textContent)) {
        gameOver = true;
        document.getElementById('winner-message').textContent = "It's a tie!";
    }
}

function resetBoard() {
    const cells = document.querySelectorAll('.cell');
    for (const cell of cells) {
        cell.textContent = '';
    }
    document.getElementById('winner-message').textContent = '';
    currentPlayer = 'X';
    gameOver = false;
}
