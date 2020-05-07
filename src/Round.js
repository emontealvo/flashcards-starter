const Deck = require('../src/Deck');
const Turn = require('../src/Turn')

class Round {
  constructor(deck) {
    this.deckAtHand = (deck instanceof Deck) ? deck : {};
    this.cardAtPlay = (deck instanceof Deck && this.deckAtHand.cardSet[0]) ? this.deckAtHand.cardSet[0] : {};
    this.turnCount = 0;
  }

  returnCardAtPlay() {
    return this.cardAtPlay
  }

  takeTurn() {
  
  }
}

module.exports = Round;