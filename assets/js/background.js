var bgButton = document.getElementById('bgButton');
bgButton.addEventListener("click", bgChange);
var bgColors = ['#7fc3ccc4', '#847fccc4', '#cc7f7fc4', '#7fcc81c4', '#c7cc7fc4', '#a9a9a9b3', 'ff0000', 'red'];

var colors = ['#1099ab', '#2c2961', '#b55353', '#1a691c', '#4c5014c4', '#484848', '#710808', 'black'];

function bgChange() {

    var random = Math.floor(Math.random() * bgColors.length);
    var rand = Math.floor(Math.random() * colors.length);
    document.body.style.background = bgColors[random];
    document.body.style.color = colors[rand];
}