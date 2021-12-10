class Deck {
    constructor() {
        this.deck = [];

        /* First we define our card suits and ranks */
        const suits = ['Hearts', 'Spades', 'Clubs', 'Diamonds'];
        const values = [2, 3 , 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King', 'Ace'];
    
        /* Build the deck: 1 Card for each Suit/Rank combination
            Also, assign a value to each card so even Face Cards have numeric value */
        for(let a=0;a<suits.length;a++){
			for(let b=0;b<values.length;b++){
				this.deck.push(new Card(suits[a],values[b],b+2));
			}
		}
    }

    shuffle(){
        /* This method will randomize the array, i.e. shuffle the deck and return the shuffled deck.
            Code inspired by https://bost.ocks.org/mike/shuffle/
        */
        const { deck } = this;
        let m = deck.length, i;

        while (m) {
            i = Math.floor(Math.random() * m--);
            
            [deck[m], deck[i]] = [deck[i], deck[m]];
        }
    
        return this;
    }
    
    deal(){
        /* Removes 1 Card from the Deck and returns it
        */
        return this.deck.pop();
    }
}

class Card {
    constructor(suit, rank, value){
        this.suit = suit;
        this.rank = rank;
        this.value = value;
    }
}

class Player {
    constructor(){
        this.score = 0;
        this.hand = [];
    }
}

// Create a new Deck of Cards
const deck1 = new Deck();

// Shuffle the Deck
deck1.shuffle();

// Create 2 Players
const player1 = new Player();
const player2 = new Player();

// Deal 26 Cards to each Player
for(let i = 0; i < 52; i++){
    if(i % 2 == 0) {
        player2.hand.push(deck1.deal());
    } else {
        player1.hand.push(deck1.deal());
    }
}

// Compare each Player's Hand 1 Card at a Time
for(let i = 0; i < player1.hand.length; i++) {
    if(player1.hand[i].value == player2.hand[i].value){
        // The cards are the same value, so no points
        console.log(`Player 1 has ${player1.hand[i].rank} of ${player1.hand[i].suit} | Player 2 has ${player2.hand[i].rank} of ${player2.hand[i].suit} -- No Points Awarded. `);
        continue;
    }
    if(player1.hand[i].value > player2.hand[i].value){
        // Player 1 Card is higher value, so Player 1 gets a point
        player1.score++;
        console.log(`Player 1 has ${player1.hand[i].rank} of ${player1.hand[i].suit} | Player 2 has ${player2.hand[i].rank} of ${player2.hand[i].suit} -- Player 1 gets 1 point! `);
    }else {
        // Player 2 Card is higher value, so Player 2 gets a point
        console.log(`Player 1 has ${player1.hand[i].rank} of ${player1.hand[i].suit} | Player 2 has ${player2.hand[i].rank} of ${player2.hand[i].suit} -- Player 2 gets 1 point! `);
        player2.score++;
    }
}

// Display the final score and result
console.log(`FINAL SCORE: Player 1: ${player1.score} vs. Player 2: ${player2.score}`);
if(player1.score == player2.score){
    console.log(`Tie!`);
} else {
    if(player1.score > player2.score){
        console.log(`Player 1 wins!`);
    }else{
        console.log(`Player 2 wins!`);
    }
}

