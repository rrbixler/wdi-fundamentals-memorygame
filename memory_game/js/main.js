console.log("Up and running!");


var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];

cardsInPlay.push('cards[cardId]');

//*var cardOne = cards[0];
//cardsInPlay.push('cardOne');
//console.log("User flipped " + cardOne);

//var cardTwo = cards[2];
//cardsInPlay.push('cardTwo');
//console.log("User flipped" + cardTwo);

var checkForMatch = function(){
	if (cardsInPlay[0] === cardsInPlay[1]) {
  		console.log("You found a match!");
	} else {
  		console.log("Sorry, try again.");
	}
}

var flipCard = function(cardId){
	
	console.log("User flipped" + cards[cardId])

	if (cardsInPlay[0] === cardsInPlay[1]){
		alert("You found a match!");
	} else {
		alert("Sorry, try again.");
	}
}

flipCard(0);
flipCard(2);


