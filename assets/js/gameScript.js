console.log('hello');

//TODO 
// Make the gamboard 
// Two players, 'X' and 'O'
// Making your mark on the gameboard, and if you done your mark, you cant change or mark over it. 
// Take turns, X, O ,X etc...
// Win by having three in a row, horizontally, vertically or diagonally. 
// If No winner, it's a tie.
// The Game is finished, make it possible to reset the gameboard.
// Make the two player enter their names.
// 
// The players. 
var player1 = 'X';
var player2 = 'O';
//get the gameboard containers, make them into an array. 
var xo = Array.from(document.querySelectorAll('.xo-container'));
console.log(xo);
//add click to the gameboard, 
var clicked = document.getElementById('gameboard').addEventListener('click', turnHandler);

function turnHandler(event) {
    $('.xo-container').css('background-color', 'red');
}

// The gameboard, 9 empty strings, to fill with X's & O's. 
function game() {

    var gameboard = ['X', '', '', '', 'X', 'O', '', '', 'X'];
}

game()