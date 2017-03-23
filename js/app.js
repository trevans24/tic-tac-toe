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
		squareSelected.addClass("fa-firefox"); //change class to current player
		squareSelected.append(playerOne);//change text in box to current players value
		if(checkWin()){ //see if player wins
			alert("Player " + currentPlayer + " Wins!"); //alert player if won
		} else {
		currentPlayer = 2; //move to playerTwo
		}
	} else {
		squareSelected.addClass("fa-chrome"); //change class to current player
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
		if($('.sq1').hasClass("fa-firefox") && $('.sq2').hasClass("fa-firefox") && $('.sq3').hasClass("fa-firefox") || $('.sq4').hasClass("fa-firefox") && $('.sq5').hasClass("fa-firefox")  && $('.sq6').hasClass("fa-firefox") || $('.sq7').hasClass("fa-firefox") && $('.sq8').hasClass("fa-firefox")  && $('.sq9').hasClass("fa-firefox") || $('.sq1').hasClass("fa-firefox") && $('.sq4').hasClass("fa-firefox")  && $('.sq7').hasClass("fa-firefox") || $('.sq2').hasClass("fa-firefox") && $('.sq5').hasClass("fa-firefox")  && $('.sq8').hasClass("fa-firefox") || $('.sq3').hasClass("fa-firefox") && $('.sq6').hasClass("fa-firefox")  && $('.sq9').hasClass("fa-firefox") || $('.sq1').hasClass("fa-firefox") && $('.sq5').hasClass("fa-firefox")  && $('.sq9').hasClass("fa-firefox") || $('.sq3').hasClass("fa-firefox") && $('.sq5').hasClass("fa-firefox")  && $('.sq7').hasClass("fa-firefox")){
			console.log("hello");
			return true;
		} else if ($('.sq1').hasClass("fa-chrome") && $('.sq2').hasClass("fa-chrome") && $('.sq3').hasClass("fa-chrome") || $('.sq4').hasClass("fa-chrome") && $('.sq5').hasClass("fa-chrome")  && $('.sq6').hasClass("fa-chrome") || $('.sq7').hasClass("fa-chrome") && $('.sq8').hasClass("fa-chrome")  && $('.sq9').hasClass("fa-chrome") || $('.sq1').hasClass("fa-chrome") && $('.sq4').hasClass("fa-chrome")  && $('.sq7').hasClass("fa-chrome") || $('.sq2').hasClass("fa-chrome") && $('.sq5').hasClass("fa-chrome")  && $('.sq8').hasClass("fa-chrome") || $('.sq3').hasClass("fa-chrome") && $('.sq6').hasClass("fa-chrome")  && $('.sq9').hasClass("fa-chrome") || $('.sq1').hasClass("fa-chrome") && $('.sq5').hasClass("fa-chrome")  && $('.sq9').hasClass("fa-chrome") || $('.sq3').hasClass("fa-chrome") && $('.sq5').hasClass("fa-chrome")  && $('.sq7').hasClass("fa-chrome")){
			console.log("hello");
			return true;
		} else {
			console.log("hello");
			return false;
		}
	}

	//reset button to clear board

	$('.reset').click(function(){
		location.reload(); // resets board without allowing score keeping
	});
}
);

});