const Deck = require('../src/Deck');
const Turn = require('../src/Turn')

class Round {
  constructor(deck) {
    this.deckAtHand = (deck instanceof Deck) ? deck : {};
    this.cardAtPlay = (deck instanceof Deck && this.deckAtHand.cardSet[0]) ? this.deckAtHand.cardSet[0] : {};
    this.turnCount = 0;
    this.incorrectGuesses = [];
  }

  returnCardAtPlay() {
    return this.cardAtPlay
  }

  takeTurn() {
    let turn = new Turn();
    this.turnCount++
    if(this.deckAtHand instanceof Deck) {
      this.updateCardAtPlay();
    }
    return turn
  }

  updateCardAtPlay() {
    this.cardAtPlay = this.deckAtHand.cardSet[this.turnCount]
  }
}

module.exports = Round;