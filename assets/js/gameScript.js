//TODO
// Win by having three in a row, horizontally, vertically or diagonally.
// If No winner, it's a tie.
// Start Timer on first click.  once: true should work.
// The Game is finished, make it possible to reset the gameboard.

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
var turnOrder = player1;
var seconds = 20;
var win;
var tie;
//get the gameboard containers, make them into an array.
var xoContainer = Array.from(document.querySelectorAll('.xo-container'));
var counter = document.getElementById('counter');
var turnMessage = document.getElementById('turn-display')
// For the winning messages
var displayWinner = document.getElementById('displayWinner')
var displayLooser = document.getElementById('displayLooser')
var restart = document.getElementById('restart').addEventListener('click', restart);



function startGame() {
    gameboard = [
        '', '', '',
        '', '', '',
        '', '', ''
    ];
    // Adding eventlistener to the gameboard divs
    // https://dev.to/cilly_boloe/addeventlistener-once-js-bits-565d
    // for only adding the click event once.
    for (let i = 0; i < xoContainer.length; i++) {
        xoContainer[i].addEventListener('click', clickHandler, {
            once: true
        });
    }
    countDown()
}


// countdown timer
function countDown() {
    counter = setInterval(function () {
        if (seconds <= 0) {
            clearCountDown()
            // $('.gameover-message').addClass("show");
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

    let index = xoContainer.findIndex((containers) => {
        return containers === event.target
    });

    gameboard[index] = turnOrder;

    if (turnOrder === player1) {
        turnOrder = player2
    } else {
        turnOrder = player1
    }
    turnMessage.textContent = turnOrder;
    win = checkGameWinner()
    makeMark()
};

function checkGameWinner() {
    let winner = null;

    for (let i = 0; i < winOpts.length; i++) {
        let opt = winOpts[i];
        if (gameboard[opt[0]] && gameboard[opt[0]] === gameboard[opt[1]] && gameboard[opt[0]] === gameboard[opt[2]]) {

            winner = gameboard[opt[0]];
        }

    }
    if (winner) {
        return console.log(winner);
    }
}

function makeMark() {
    // sets the mark on the gameboar

    for (let i = 0; i < xoContainer.length; i++) {
        xoContainer[i].textContent = gameboard[i]
    }
};

startGame()