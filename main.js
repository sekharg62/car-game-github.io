var yellowCar = document.getElementById("yellowcar");

var redCar = document.getElementById("redcar");
var result = document.getElementById("result");
const score = document.getElementById("score");
const highScore = document.getElementById("highscore");
let buttonLeft = document.getElementById("buttonLeft");
let buttonRight = document.getElementById("buttonRight");
var count = 0;
var high = 0;
var button = document.getElementById("movement");

//yello car movr
yellowCar.addEventListener("animationiteration", function () {
    var randomValue = ((Math.floor(Math.random() * 6) * 65))

    yellowCar.style.left = randomValue + "px";
    count++;


})

   

//red car movr
     var moveLeftButton = document.getElementById("moveLeftButton");
        var moveRightButton = document.getElementById("moveRightButton");

        moveLeftButton.onclick = function () {
            var carLEFT = parseInt(window.getComputedStyle(redCar).getPropertyValue("left"));
            if (carLEFT > 0) {
                redCar.style.left = (carLEFT - 65) + "px";
            }
        };

        moveRightButton.onclick = function () {
            var carRIGHT = parseInt(window.getComputedStyle(redCar).getPropertyValue("left"));
            if (carRIGHT < 325) {
                redCar.style.left = (carRIGHT + 65) + "px";
            }
        };

setInterval(function Gameover() {
    var yellowCarTop = parseInt(window.getComputedStyle(yellowCar).getPropertyValue("top"))
    var yellowCarLeft = parseInt(window.getComputedStyle(yellowCar).getPropertyValue("left"))

    var redCarLeft = parseInt(window.getComputedStyle(redCar).getPropertyValue("left"))

    if ((yellowCarLeft == redCarLeft) && (yellowCarTop > 290)) {
        result.style.display = "block";
        game.style.display = "none";
        button.style.display = "none";

        score.innerHTML = `Score : ${count}`;
        if (high < count) {

            localStorage.setItem('value', count);
            var h = parseInt(localStorage.getItem("value"))
            high = h;


        }
        console.log("high :", high)
        console.log("point :", count)
        highScore.innerHTML = `High Score :${high}`;

        count = 0

    }
})