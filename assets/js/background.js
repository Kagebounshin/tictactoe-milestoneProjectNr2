var bgButton = document.getElementById('bgButton');
bgButton.addEventListener("click", bgChange);
var bgColors = ['#7fc3ccc4', '#847fccc4', '#cc7f7fc4', '#7fcc81c4', '#c7cc7fc4', '#a9a9a9b3', 'ff0000', 'red'];

function bgChange() {
    var random = Math.floor(Math.random() * bgColors.length);
    document.body.style.background = bgColors[random];
}