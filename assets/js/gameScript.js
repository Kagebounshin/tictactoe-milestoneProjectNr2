//TODO 
// Making your mark on the gameboard, and if you done your mark, you cant change or mark over it. 
// Taketur ns, X, O ,X etc...
// Win by having three in a row, horizontally, vertically or diagonally. 
// If No winner, it's a tie.
// The Game is finished, make it possible to reset the gameboard.

// Winning Types

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


// The players. 
var player1 = 'X';
var player2 = 'O';
var turnOrder;
var seconds = 20;
//get the gameboard containers, make them into an array. 
var turnMessage = document.getElementById('turn')
var xo = Array.from(document.querySelectorAll('.xo-container'));
document.getElementById('restart').addEventListener('click', game);
// document.getElementById('turn').innerHTML = "It's " + isTurn + "'s turn!";
// Countdown Timer



// https://dev.to/cilly_boloe/addeventlistener-once-js-bits-565d 
// for only adding the eventlistener once. 

// add 'click' to the xo-containers.  
xo.forEach(container => {
    container.addEventListener('click', clickHandler, {
        once: true
    }); // you can only click on one element once per game. 
})


// countdown timer
function countDown() {
    setInterval(function () {
        if (seconds <= 0) {
            clearCountDown()
            $('.gameover').addClass("show");
            console.log("GAME OVER");
        }
        document.getElementById('counter').innerHTML = seconds;
        seconds -= 1;
    }, 1000);
}


function clearCountDown() {
    clearInterval(seconds === 0);
}


// Clickhandler
// Wich will response to click by user, take turns between the players.  

function clickHandler(event) {

    let index;
    // loop through the array
    for (i = 0; i < index; i++) {
        return index;
    }

    gameboard[index] = turnOrder;

    if (turnOrder === player1) {
        turnOrder = player2
        $(this).text(player2)
        turnMessage.innerHTML = "It's " + player1 + "'s turn!";

    } else {
        turnOrder = player1
        $(this).text(player1)
        turnMessage.innerHTML = "It's " + player2 + "'s turn!";
    };
    // Works
};

// The gameboard, 9 empty strings, to fill with X's & O's.
function game() {
    gameboard = [
        '', '', '',
        '', '', '',
        '', '', ''
    ];

    countDown()
}

game()

console.log('hello')