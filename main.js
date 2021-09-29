//Creates aray of images
var randomImage = new Array();
randomImage [0] = "img/Dice1.png";
randomImage [1] = "img/Dice2.png";
randomImage [2] = "img/Dice3.png";
randomImage [3] = "img/Dice4.png";
randomImage [4] = "img/Dice5.png";
randomImage [5] = "img/Dice6.png";

//Picks random number 0-5
function randomNumber(){
  return Math.floor(Math.random()*6);
}

//Displays array image corresponding to random number
function getRandomImage(){
  document.getElementById("roll").src = randomImage[randomNumber()]
}

function displaySeveral (num){
  for (var i = 0, i<num, i++){

  }
}
