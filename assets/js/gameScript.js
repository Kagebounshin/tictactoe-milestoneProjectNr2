//TODO 
// Make so you can input your name as player1 or player2
// Making your mark on the gameboard, and if you done your mark, you cant change or mark over it. 
// Taketur ns, X, O ,X etc...
// Win by having three in a row, horizontally, vertically or diagonally. 
// If No winner, it's a tie.
// The Game is finished, make it possible to reset the gameboard.

// The players. 
var player1 = 'X';
var player2 = 'O';
//get the gameboard containers, make them into an array. 
var xo = Array.from(document.querySelectorAll('.xo-container'));
document.getElementById('restart').addEventListener('click', game);

// Countdown Timer
var seconds = 20;
var counter;


// add click to the xo-containers 
// https://dev.to/cilly_boloe/addeventlistener-once-js-bits-565d 
// for only adding the eventlistener once. 

xo.forEach(container => {
    container.addEventListener('click', clickHandler, {
        once: true
    }); // you can only click on one element once per game. 
})


// countdown timer, wich starts when a player has made it's first move!
function countDown() {
    setInterval(function () {
        if (seconds <= 0) {
            clearInterval(seconds = 0);
        }
        document.getElementById('counter').innerHTML = seconds;
        seconds -= 1;
    }, 1000);
}

function clickHandler(event) {
    countDown()
}




// The gameboard, 9 empty strings, to fill with X's & O's.
function game() {

    var gameboard = ['', '', '', '', '', '', '', '', ''];
    console.log('You clicked restart')
}