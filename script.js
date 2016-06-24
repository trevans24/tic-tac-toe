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
  checkForWin: function(movesArray){
    var result = false
    console.log("movesArray ") 
    console.log(movesArray);

    function comboChecker(previousValue, checkValue){
      console.log("comboChecker " + checkValue + " " +previousValue); 
      console.log("found? " + movesArray.indexOf(checkValue))
      if (movesArray.indexOf(checkValue) !== -1){
        console.log("Found!")
        return previousValue+1;
      } else {
        console.log()
        return previousValue;
      }
    }

    function checkWinning(combination){
      console.log(combination);
      var winCounter = combination.reduce(comboChecker,0);
      console.log("winCounter " + winCounter);
      if(winCounter === 3) {
        result = true
      } 
    }

    Game.winningCombinations.forEach(checkWinning);

    console.log("end result " + result);
    return result;
  },
  isDraw: function(){
    return this.XMoves.length + this.OMoves.length === 9
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
      checkForWin(theGame.OMoves, "O");
    }
    else {
      XMoves.push(boxNum);
      event.target.innerHTML = "X";
      event.target.setAttribute("class","X");
      turnText.innerHTML = "It is O's turn";
      counter++;
      theGame.addMove("X", boxNum);
      checkForWin(theGame.XMoves, "X");
    }
  if (theGame.isDraw()){
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
  console.log("Check for win " + JSON.stringify(movesArray));
  console.log("The Game checkforWin " + theGame.checkForWin(movesArray));
  if (theGame.checkForWin(movesArray)){
    alert("Game over, " + name + " wins!");
    resetBoard();
  };
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