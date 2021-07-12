// This code was inspired from https://www.w3resource.com/javascript-exercises/javascript-math-exercise-40.php

var bgButton = document.getElementById('bgButton');
bgButton.addEventListener("click", bgChange);
var bgColors = ['#7fc3ccc4', '#25876f', '#3451c6', '#d45b64', '#ba50f7', '#fc9819', '#ffbd89'];

function bgChange() {
    var random = Math.floor(Math.random() * bgColors.length);
    document.body.style.background = bgColors[random];
}