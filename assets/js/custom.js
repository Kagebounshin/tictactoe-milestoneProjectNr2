// The fundamentals for this game's structure was obtained from 
// https://javascript.plainenglish.io/the-worlds-most-empowering-tic-tac-toe-javascript-tutorial-a889e4c20883

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

var mark
var player1 = 'X';
var win;
var tie;

//Get the gameboard containers, make them into an array.
var xoContainer = Array.from(document.querySelectorAll('.xo-container'));
var counter = document.getElementById('counter');
var turnMessage = document.getElementById('turn-display');
// For the winning messages
var displayWinner = document.getElementById('displayWinner');

// For the scoreboard
var xWin = document.getElementById('xWin');
var oWin = document.getElementById('oWin');
var xScore = 0;
var oScore = 0;

function startGame() {

    $('.welcome-message').removeClass("showMessage");

    gameboard = [
        '', '', '',
        '', '', '',
        '', '', ''
    ];

    for (let i in xoContainer) {
        xoContainer[i].addEventListener('click', clickHandler, {
            once: true
        });
    }
    countDown()
}

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

// Wich will response to click by user.
function clickHandler(e) {

    index = xoContainer.findIndex((xoContainers) => {
        return xoContainers === e.target;
    });

    gameboard[index] = mark;

    playerMove()
}

function switchTurn() {

    if (mark === 'X') {
        mark = 'O'
    } else {
        mark = 'X'
    }

    win = checkGameWinner()
    gameMsg()
}

// Check for a game winner 
function checkGameWinner() {

    var gameWinner = null;

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