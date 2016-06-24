function Game() {
  this.OMoves = [];
  this.XMoves = [];
} 

Game.winningCombinations = [[0,1,2],[3,4,5],[6,7,8],
[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];

Game.prototype = {
  addMove: function(player, box) {
    if(player === 'X') {
      this.XMoves.push(box)
    } else {
      this.OMoves.push(box)
    }
  }, 
  reset: function() {
    this.XMoves = [];
    this.OMoves = [];
  }
}

window.onload = start;
var boxes = document.getElementsByTagName("td");
var turnText = document.querySelector(".playerTurn");
var counter = 1;
var winCounter = 0;
var OMoves = [];
var XMoves = [];

var winningCombinations = [[0,1,2],[3,4,5],[6,7,8],
[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];

var theGame = new Game();

function start(){
  theGame.reset();
  addXandOListener();
  addResetListener();
}

function addXandOListener(){
  for (var i = boxes.length - 1; i >= 0; i--) {
    boxes[i].addEventListener("click", addXorO);
  }
}

function addXorO(event){
  if (event.target.innerHTML.length === 0){
    var boxNum = parseInt(event.target.getAttribute("data-num"))
    if (counter % 2 === 0) {
      OMoves.push(boxNum);
      event.target.innerHTML = "O";
      event.target.setAttribute("class","O");
      turnText.innerHTML = "It is X's turn";
      counter++;
      theGame.addMove("O", boxNum)
      console.log(theGame.OMoves);
      checkForWin(OMoves, "O");
    }
    else {
      XMoves.push(boxNum);
      event.target.innerHTML = "X";
      event.target.setAttribute("class","X");
      turnText.innerHTML = "It is O's turn";
      counter++;
      theGame.addMove("X", boxNum);
      console.log(theGame.XMoves);
      checkForWin(XMoves, "X");
    }
  // if the counter is greater than or equal to 10, the game is a draw!
  if (counter >= 10){
    turnText.innerHTML = "Game Over!";
    var conf = confirm("It's a draw, do you want to play again?");
    if(conf){
      resetBoard();
    }
  }
 }
}

function addResetListener(){
  var resetButton = document.getElementById("reset");
  resetButton.addEventListener("click", resetBoard);
}

function checkForWin(movesArray, name){
  // loop over the first array of winning combinations
  for (i = 0; i < winningCombinations.length; i++) {
    // reset the winCounter each time!
    winCounter = 0;
    // loop over each individual array
    for (var j = 0; j < winningCombinations[i].length; j++) {
      // if the number in winning combo array is === a number in moves array, add to winCounter
      if(movesArray.indexOf(winningCombinations[i][j]) !== -1){
        winCounter++;
      }
      // if winCounter === 3 that means all 3 moves are winning combos and game is over!
      if(winCounter === 3){
        alert("Game over, " + name + " wins!");
        resetBoard();
      }
    }
  }
}

function resetBoard(){
  for (var i = boxes.length - 1; i >= 0; i--) {
    boxes[i].innerHTML="";
    boxes[i].setAttribute("class","clear");
  }
  OMoves = [];
  XMoves = [];
  winCounter=0;
  counter = 1;
  turnText.innerHTML = "It is X's turn";
  theGame.reset();
} 