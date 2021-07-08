// The fundamentals for this game's structure was obtained from 
// https://javascript.plainenglish.io/the-worlds-most-empowering-tic-tac-toe-javascript-tutorial-a889e4c20883

var player2 = 'O';

var restart = document.querySelectorAll('#restart')

// Adding eventlisteners to the restartbuttons
for (let i = 0; i < restart.length; i++) {
    restart[i].addEventListener('click', restartGame);
}

// Set's the mark on the gameboard
function playerMove() {
    for (let i in xoContainer) {
        xoContainer[i].textContent = gameboard[i]
    }
    switchTurn()
};

function gameMsg() {
    // Display the win/tie messages
    if (win === tie) {
        clearCountDown() // Stops the timer
        $('.tie-message').addClass('showMessage');
    } else if (win === player1) {
        clearCountDown()
        displayWinner.textContent = player1
        $('.winning-message').addClass('showMessage');
        xScore++
        xWin.innerHTML = xScore;
    } else if (win === player2) {
        clearCountDown()
        displayWinner.textContent = player2
        $('.winning-message').addClass("showMessage");
        oScore++
        oWin.innerHTML = oScore;
    } else {
        turnMessage.textContent = mark;
    }
};

// Restarts the game, sets the game back to it's default state
function restartGame() {
    for (let i in xoContainer) {
        xoContainer[i].innerHTML = '';
    }

    seconds = 15;
    win = 0;
    tie = 0;
    mark = player1;
    turnMessage.textContent = mark;

    $('.winning-message').removeClass("showMessage");
    $('.tie-message').removeClass('showMessage');
    $('.gameover-message').removeClass("showMessage");
    $('#counter').css('color', '')

    startGame()
}