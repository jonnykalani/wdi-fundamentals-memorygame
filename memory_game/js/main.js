
var cards = ['queen','queen','king','king'];
var cardsInPlay = [];

var checkForMatch = function(){
	if (cardsInPlay.length === 2 && cardsInPlay[0] === cardsInPlay[1]){
	alert("you found a match!");
}
else {
	alert("Sorry, try again.");
}
};

var flipCard = function(cardId){
	
cardsInPlay.push(cards[cardId])
console.log("User flipped "+cards[cardId]);
};

flipCard(0);
flipCard(2);
