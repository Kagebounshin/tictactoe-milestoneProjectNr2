var bgButton = document.getElementById('bgButton');
bgButton.addEventListener("click", bgChange);
var bgColors = ['#585353', '#7bc36e', 'red', '#7fc3ccc4', '#963385'];

function bgChange() {

    var random = Math.floor(Math.random() * bgColors.length);
    document.body.style.background = bgColors[random];
}