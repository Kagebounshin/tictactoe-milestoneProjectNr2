// The fundamentals for this game's structure was obtained from 
// https://javascript.plainenglish.io/the-worlds-most-empowering-tic-tac-toe-javascript-tutorial-a889e4c20883
// A very good tutorial on how to get down the basic of a Tic-Tac-Toe game

window.onload = function () {
    $('.welcome-message').addClass('showMessage');
};

// Winning Options

var winOpts = [
    [0, 1, 2],
    [0, 4, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [3, 4, 5],
    [6, 7, 8],
    [2, 4, 6]
];

var player1 = 'X';
var player2 = 'O';
var mark = player1;
var seconds = 15;
var win;
var tie;
//Get the gameboard containers, make them into an array.
var xoContainer = Array.from(document.querySelectorAll('.xo-container'));
var counter = document.getElementById('counter');
var turnMessage = document.getElementById('turn-display');
// For the winning messages
var displayWinner = document.getElementById('displayWinner');
var restart = document.querySelectorAll('#restart')

// Adding eventlisteners to the restartbuttons
for (let i = 0; i < restart.length; i++) {
    restart[i].addEventListener('click', restartGame);
}

// For the scoreboard
var xWin = document.getElementById('xWin');
var oWin = document.getElementById('oWin');
var xScore = 0;
var oScore = 0;

function startGame() {
    $('.welcome-message').removeClass("showMessage");
    // Adding eventlistener to the gameboard divs
    // https://dev.to/cilly_boloe/addeventlistener-once-js-bits-565d
    // for only adding the click event once.

    for (let i in xoContainer) {
        xoContainer[i].addEventListener('click', clickHandler, {
            once: true
        });

    }
    gameboard = [
        '', '', '',
        '', '', '',
        '', '', ''
    ];

    countDown()
}
// Countdown timer
function countDown() {
    counter = setInterval(function () {
        if (seconds <= 0) {
            clearCountDown()
            $('.gameover-message').addClass("showMessage");
        }
        if (seconds < 4) {
            $('#counter').css('color', 'red')
        }
        document.getElementById('counter').innerHTML = seconds;
        seconds -= 1;
    }, 1000);
}

function clearCountDown() {
    clearInterval(counter);
}
// Clickhandler
// Wich will response to click by user, take turns between the players.
function clickHandler(event) {
    let index = xoContainer.findIndex((xoContainers) => {
        return xoContainers === event.target
    });
    gameboard[index] = mark;

    switchTurn()
};

function switchTurn() {

    if (mark === player1) {
        mark = player2

    } else {
        mark = player1
    }

    win = checkGameWinner()
    playerMark()
}

function checkGameWinner() {

    let gameWinner = null;

    for (let i in winOpts) {
        let opt = winOpts[i];
        if (gameboard[opt[0]] && gameboard[opt[0]] === gameboard[opt[1]] && gameboard[opt[0]] === gameboard[opt[2]]) {
            gameWinner = gameboard[opt[0]];
        }
    }

    if (gameWinner) {
        return gameWinner;
    } else if (gameboard.includes('')) {

        return null;
    } else {
        return tie;
    }
}
// Set's the mark on the gameboard
function playerMark() {

    for (let i in xoContainer) {
        xoContainer[i].textContent = gameboard[i]
    }
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
        xoContainer[i].textContent = '';
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