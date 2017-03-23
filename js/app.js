console.log("running");

$(function(){
var clicks = 1;

var $playerOne = "x";
var $playerTwo = "o";

function playerOneClick(){
$('td').click(function(){
	$(this).append($playerOne);
	});
}

function playerTwoClick(){
$('td').click(function(){
	$(this).append($playerTwo);
	});
}

if (clicks % 2 !== 0){
	playerOneClick();
} else {
	playerTwoClick();
}


});
