// The fundamentals for this game's structure was obtained from 
// https://javascript.plainenglish.io/the-worlds-most-empowering-tic-tac-toe-javascript-tutorial-a889e4c20883

var gameboard;

// Choosing all the restart buttons,
// and adding eventlisteners
var restart = document.querySelectorAll('#restart')
for (let i = 0; i < restart.length; i++) {
    restart[i].addEventListener('click', restartGame);
}


// Set's the mark on the gameboard
function playerMove() {
    gameboard.forEach(function (mark, index) {
        xoContainer[index].innerHTML = mark
    });
    switchTurn()
    // Aslong as player haven't won, make computer mark
    if (win != 'X') {
        computerMove()
    }
};

function computerMove() {
    // This randomly generated computerMove function was inspired from this tutorial, 
    // with some modifications https://www.youtube.com/watch?v=sNO5awLw9h0
    var arr = [];
    for (let i in xoContainer) {
        if (xoContainer[i].innerHTML === '') {
            arr.push(i)
        }
    }

    let random = arr[Math.floor(Math.random() * arr.length)];
    if (arr.length > 0) {
        xoContainer[random].innerHTML = mark;
        gameboard.splice(random, 1, mark)
        xoContainer[random].style.pointerEvents = "none";
    }
    switchTurn()
}

function gameMsg() {
    // Display the win/tie messages
    if (win === tie) {
        clearCountDown() // Stops the timer
        $('.tie-message').addClass('showMessage');
    } else if (win === 'X') {
        clearCountDown()
        displayWinner.textContent = 'You';
        $('.winning-message').addClass('showMessage');
        // Increases the score by one
        xScore++
        xWin.innerHTML = xScore;
    } else if (win === 'O') {
        clearCountDown()
        displayWinner.textContent = 'CPU';
        $('.winning-message').addClass('showMessage');
        oScore++
        oWin.innerHTML = oScore;
    } else {
        turnMessage.textContent = mark;
    }
};

// Restarts the game, sets the game back to it's default state
function restartGame() {
    for (let i in xoContainer) {
        xoContainer[i].style.pointerEvents = ''
        xoContainer[i].innerHTML = '';
    }

    seconds = 10;
    win = 0;
    tie = 0;
    mark = player1
    turnMessage.textContent = mark;

    $('.winning-message').removeClass("showMessage");
    $('.tie-message').removeClass('showMessage');
    $('.gameover-message').removeClass("showMessage");
    $('#counter').css('color', '')

    startGame()
}