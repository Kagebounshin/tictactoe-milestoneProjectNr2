var bgButton = document.getElementById('bgButton');
bgButton.addEventListener("click", bgChange);
var bgColors = ['#585353', '#7bc36e', 'red', '#7fc3ccc4', '#963385', '#cc7f7fc4', '#e4e300c4', 'black'];

var colors = ['#585353', '#7bc36e', 'red', '#7fc3ccc4', '#963385', '#cc7f7fc4', '#e4e300c4', 'black'];

function bgChange() {

    var random = Math.floor(Math.random() * bgColors.length);
    var rand = Math.floor(Math.random() * colors.length);
    document.body.style.background = bgColors[random];
    document.body.style.color = colors[rand];
}