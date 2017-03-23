console.log("running");

$(function(){
//define players
var playerOne = "X";
var playerTwo = "O";


var currentPlayer = 1; //defined currentPlayer so that it could be used in click function to change players

//click function to select board place & change cell to X or O
$('td').click(function(event){//what should be clicked
	console.log('hi'); //test
	$(this).attr('class'); //what is this when clicked on
	console.log($(this).attr('class'));//test
	var squareSelected = $(this);//defining what this is in a var for easier use

	$(this).off('click');//stop multiple clicks on area


	//make current player change between x and o

	if(currentPlayer === 1){
		squareSelected.addClass("X"); //change class to current player
		squareSelected.append(playerOne);//change text in box to current players value
		if(checkWin()){ //see if player wins
			alert("Player " + currentPlayer + " Wins!"); //alert player if won
		} else {
		currentPlayer = 2; //move to playerTwo
		}
	} else {
		squareSelected.addClass("O"); //change class to current player
		squareSelected.append(playerTwo);//change text in box to current players value
		if(checkWin()){ //check if player wins
			alert("Player " + currentPlayer + " Wins!"); //alert player if won
		} else {
		currentPlayer = 1; //move back to playerOne
		}
	}

	//make function to check if player has won
	//winning combinations are: 123, 456, 789, 147, 258, 369, 159, 357

	function checkWin() {
		console.log("hello");
		if($('.sq1').hasClass("X") && $('.sq2').hasClass("X") && $('.sq3').hasClass("X") || $('.sq4').hasClass("X") && $('.sq5').hasClass("X")  && $('.sq6').hasClass("X") || $('.sq7').hasClass("X") && $('.sq8').hasClass("X")  && $('.sq9').hasClass("X") || $('.sq1').hasClass("X") && $('.sq4').hasClass("X")  && $('.sq7').hasClass("X") || $('.sq2').hasClass("X") && $('.sq5').hasClass("X")  && $('.sq8').hasClass("X") || $('.sq3').hasClass("X") && $('.sq6').hasClass("X")  && $('.sq9').hasClass("X") || $('.sq1').hasClass("X") && $('.sq5').hasClass("X")  && $('.sq9').hasClass("X") || $('.sq3').hasClass("X") && $('.sq5').hasClass("X")  && $('.sq7').hasClass("X")){
			console.log("hello");
			return true;
		} else if ($('.sq1').hasClass("O") && $('.sq2').hasClass("O") && $('.sq3').hasClass("O") || $('.sq4').hasClass("O") && $('.sq5').hasClass("O")  && $('.sq6').hasClass("O") || $('.sq7').hasClass("O") && $('.sq8').hasClass("O")  && $('.sq9').hasClass("O") || $('.sq1').hasClass("O") && $('.sq4').hasClass("O")  && $('.sq7').hasClass("O") || $('.sq2').hasClass("O") && $('.sq5').hasClass("O")  && $('.sq8').hasClass("O") || $('.sq3').hasClass("O") && $('.sq6').hasClass("O")  && $('.sq9').hasClass("O") || $('.sq1').hasClass("O") && $('.sq5').hasClass("O")  && $('.sq9').hasClass("O") || $('.sq3').hasClass("O") && $('.sq5').hasClass("O")  && $('.sq7').hasClass("O")){
			console.log("hello");
			return true;
		} else {
			console.log("hello");
			return false;
		}
	}

	//reset button to clear board

	$('.reset').click(function(){
		location.reload();
	});
}
);

});