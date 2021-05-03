//TODO 
// Win by having three in a row, horizontally, vertically or diagonally. 
// If No winner, it's a tie.
// Start Timer on first click.  once: true should work. 
// The Game is finished, make it possible to reset the gameboard.

// Winning Options

var winningTypes = [
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
//get the gameboard containers, make them into an array. 
var xoContainer = Array.from(document.querySelectorAll('.xo-container'));
var counter = document.getElementById('counter');
var turnMessage = document.getElementById('turn-display')
// For the winning messages
var displayWinner = document.getElementById('displayWinner')
var displayLooser = document.getElementById('displayLooser')
var restart = document.getElementById('restart').addEventListener('click', restart);



function game() {
    gameboard = [
        '', '', '',
        '', '', '',
        '', '', ''
    ];
    // https://dev.to/cilly_boloe/addeventlistener-once-js-bits-565d 
    // for only adding the eventlistener once. 
    // add 'click' to the all the xo-containers.  
    xoContainer.forEach(container => {
        container.addEventListener('click', clickHandler, {
            once: true
        });
    })
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

    let index = event.target;

    for (i = 0; i < index; i++) {
        return index;
    }

    gameboard[index] = turnOrder;

    if (turnOrder === player1) {
        turnOrder = player2
    } else {
        turnOrder = player1
    };
};

game()