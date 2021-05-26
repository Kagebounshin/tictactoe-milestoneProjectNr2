var bgButton = document.getElementById('bgButton');
bgButton.addEventListener("click", bgChange);
var bgColors = ['#7fc3ccc4', '#25876f', '#3451c6', '#d45b64', '#ba50f7', '#fc9819', '#ffbd89', '#25876f'];

function bgChange() {
    var random = Math.floor(Math.random() * bgColors.length);
    document.body.style.background = bgColors[random];
}