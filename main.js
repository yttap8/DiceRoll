//Creates aray of images
var randomImage = new Array();
randomImage [0] = "img/Dice1.png";
randomImage [1] = "img/Dice2.png";
randomImage [2] = "img/Dice3.png";
randomImage [3] = "img/Dice4.png";
randomImage [4] = "img/Dice5.png";
randomImage [5] = "img/Dice6.png";

//Picks random number 0-5 for players 1 and 2
function randomNumber(num){
  return Math.floor(Math.random()*num);
}

//Different functions for dice sides
function roll4(){
  roll(4);
}
function roll5(){
  roll(5);
}
function roll6(){
  roll(6);
}

//Displays array image corresponding to random number for each players
//Displays message depending on values of players 1 and 2
function roll(num){
    var playerOne = randomNumber(num);
    var playerTwo = randomNumber(num);
    document.getElementById("p1").src = randomImage[playerOne]
    document.getElementById("p2").src = randomImage[playerTwo]
    if (playerOne > playerTwo){
      document.getElementById("message").innerHTML = "Player 1 Wins!"
    } else if (playerOne < playerTwo){
      document.getElementById("message").innerHTML = "Player 2 Wins!"
    } else{
      document.getElementById("message").innerHTML = "It's a tie."
    }
}
