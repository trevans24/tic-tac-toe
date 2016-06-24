function Game() {
  this.OMoves = [];
  this.XMoves = [];
  this.currentTurn = 'X'
} 

Game.winningCombinations = [[0,1,2],[3,4,5],[6,7,8],
[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];

Game.prototype = {
  addMove: function(box) {
    console.log(this.currentTurn);
    if(this.currentTurn === 'X') {
      this.XMoves.push(box);
      this.currentTurn = 'O'; 
    } else {
      this.OMoves.push(box);
      this.currentTurn = 'X';
    }
  }, 
  checkForWin: function(movesArray){
    var result = false;

    function comboChecker(previousValue, checkValue){
      if (movesArray.indexOf(checkValue) !== -1){
        return previousValue+1;
      } else {
        return previousValue;
      }
    }

    function checkWinning(combination){
      var winCounter = combination.reduce(comboChecker,0);
      if(winCounter === 3) {
        result = true
      } 
    }

    Game.winningCombinations.forEach(checkWinning);

    return result;
  },
  isDraw: function(){
    return this.XMoves.length + this.OMoves.length === 9
  },
  reset: function() {
    this.XMoves = [];
    this.OMoves = [];
    this.currentTurn = 'X';
  }
}

function CellView(number){
  this.id = number;
  var cellDiv = 'td[data-num="'+ number + '"]';
  this.div = document.querySelector(cellDiv);
  this.set = false;
}

CellView.prototype = {
  addMark: function(letter){
      if (this.set) {
        return;
      }
      this.div.innerHTML = letter;
      this.div.setAttribute("class", letter);
      this.set = true;
      theGame.addMove(this.id);
  }
}

window.onload = start;
var boxes = document.getElementsByTagName("td");
var turnText = document.querySelector(".playerTurn");
var winCounter = 0;

var theGame = new Game();
var board = [];

function start(){
  theGame.reset();
  for(var i=0; i < 9; i++){
    board.push(new CellView(i));
  }
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
    console.log(theGame.currentTurn);
    if (theGame.currentTurn === 'O'){
      turnText.innerHTML = "It is X's turn";
      board[boxNum].addMark('O');
      checkForWin(theGame.OMoves, "O");
    }
    else {
      turnText.innerHTML = "It is O's turn";
      board[boxNum].addMark('X');
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
  winCounter=0;
  turnText.innerHTML = "It is X's turn";
  theGame.reset();
}