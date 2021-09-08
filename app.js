// var randomNumber1 = Math.floor(Math.random() * 6) + 1;
// console.log(randomNumber1);

var randomNumber1 = Math.floor(Math.random() * 6) + 1;
// console.log(randomNumber1);
var randomDiceImage = "dice" + randomNumber1 + ".png";
var randomImageSource = "images/" + randomDiceImage;
document.getElementById("img1").src = randomImageSource;



var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomDiceImage2 = "dice" + randomNumber2 + ".png";
var randomImageSource2 = "images/" + randomDiceImage2;
// var randomImageSource2 = "images/dice" + randomNumber2
document.getElementById("img2").src = randomImageSource2;

if (randomImageSource === randomImageSource2) {
    document.querySelector("h1").innerHTML = "Draw!";
} else if (randomImageSource > randomImageSource2) {
    document.querySelector("h1").innerHTML = "Player1 Won!";
} else {
    document.querySelector("h1").innerHTML = "Player2 Won!";
}