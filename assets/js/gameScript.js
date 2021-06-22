// The fundamentals for this game's structure was obtained from 
// https://javascript.plainenglish.io/the-worlds-most-empowering-tic-tac-toe-javascript-tutorial-a889e4c20883
// A very good tutorial on how to get down the basic of a Tic-Tac-Toe game


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
var mark = player1;
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

// For the winning messages
var displayWinner = document.getElementById('displayWinner');

// For the scoreboard
var xWin = document.getElementById('xWin');
var oWin = document.getElementById('oWin');
var xScore = 0;
var oScore = 0;


function startGame() {

    gameboard = [
        '', '', '',
        '', '', '',
        '', '', ''
    ];

    for (let i = 0; i < xoContainer.length; i++) {

        xoContainer[i].addEventListener('click', clickHandler, true);

    }

}



// Wich will response to click by user.
function clickHandler(event) {

    index = xoContainer.findIndex((xoContainers) => {
        return xoContainers === event.target;
    });

    gameboard[index] = player1;


    playerMove()

}

// Set's the mark on the gameboard
function playerMove() {


    for (let i = 0; i < xoContainer.length; i++) {
        if (xoContainer[i].textContent === '') {
            xoContainer[i].textContent = gameboard[i];
        }
    }




    switchTurn()
    computerMove()

};

function switchTurn() {
    if (mark === player1) {
        mark = cpu

    } else {
        mark = player1;
    }

    win = checkGameWinner()
    gameMsg()
}


function computerMove() {
    var random;

    random = Math.ceil(Math.random() * gameboard.length) - 1;

    for (let i = 0; i < gameboard.length; i++) {
        if (xoContainer[i].textContent === '') {
            gameboard[random] = cpu

        } else if (random === 'X') {
            return null
        }
    }


    console.log(gameboard)
}




// Check for a winner 
function checkGameWinner() {


    let gameWinner = null;

    for (let i = 0; i < winOpts.length; i++) {
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
        $('.tie-message').addClass('show');
    } else if (win === 'X') {
        displayWinner.textContent = 'You';
        $('.winning-message').addClass('show');
        xScore++
        xWin.innerHTML = xScore;
    } else if (win === 'O') {
        displayWinner.textContent = 'CPU';
        $('.winning-message').addClass("show");
        oScore++
        oWin.innerHTML = oScore;
    }
};

// Restarts the game, sets the game back to it's default state
function restartGame() {
    win = 0;
    tie = 0;
    mark = player1;
    $('.winning-message').removeClass("show");
    $('.tie-message').removeClass('show');
    $('.gameover-message').removeClass("show");
    for (let i = 0; i < xoContainer.length; i++) {
        xoContainer[i].textContent = '';
    }

    startGame()
}
startGame()