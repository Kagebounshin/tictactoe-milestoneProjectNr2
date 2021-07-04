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
var cpu = 'O';
var mark;
var win;
var tie;
var gameboard;

//Get the gameboard containers, make them into an array.
var xoContainer = Array.from(document.querySelectorAll('.xo-container'));

// Choosing all the restart buttons,
// and adding eventlisteners
var restart = document.querySelectorAll('#restart')
for (let i = 0; i < restart.length; i++) {
    restart[i].addEventListener('click', restartGame);
}
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


// Set's the mark on the gameboard
function playerMove() {

    gameboard.forEach(function (mark, index) {
        xoContainer[index].innerHTML = mark


    });
    switchTurn()

    // The  delay timer for the computerMove was obtained from this tutorial,
    // with some modifications  https://www.youtube.com/watch?v=sNO5awLw9h0
    let delayTime = ((Math.random() * 1000) + 200).toFixed();
    setTimeout(function () {
        if (win != 'X') {
            computerMove()
        }
    }, delayTime)

};

function computerMove() {
    // This randomly generated computerMove function was inspired from this tutorial, 
    // with some modifications https://www.youtube.com/watch?v=sNO5awLw9h0
    mark = cpu
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
    }

    xoContainer[random].style.pointerEvents = "none";

    switchTurn()

}

function switchTurn() {

    if (mark === player1) {
        mark = cpu

    } else {
        mark = player1
    }
    win = checkGameWinner()
    gameMsg()
}

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

function gameMsg() {
    // Display the win/tie messages
    if (win === tie) {
        clearCountDown() // Stops the timer
        $('.tie-message').addClass('showMessage');
    } else if (win === 'X') {
        clearCountDown()
        displayWinner.textContent = 'You';
        $('.winning-message').addClass('showMessage');
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
    seconds = 10;
    mark = player1
    win = 0;
    tie = 0;

    for (let i in xoContainer) {
        xoContainer[i].style.pointerEvents = ''
        xoContainer[i].innerHTML = '';
    }
    $('.winning-message').removeClass("showMessage");
    $('.tie-message').removeClass('showMessage');
    $('.gameover-message').removeClass("showMessage");
    $('#counter').css('color', '')

    startGame()
}