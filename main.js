function getRandomImage(){
  var randomImage = new Array();
  randomImage [0] = "img/Dice1.png";
  randomImage [1] = "img/Dice2.png";
  randomImage [2] = "img/Dice3.png";
  randomImage [3] = "img/Dice4.png";
  randomImage [4] = "img/Dice5.png";
  randomImage [5] = "img/Dice6.png";
  var number = Math.floor(Math.random()*6);
  return document.getElementById("roll").src = randomImage[number]
}
