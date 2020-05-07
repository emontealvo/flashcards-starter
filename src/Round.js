const Deck = require('../src/Deck');

class Round {
  constructor(deck) {
    this.deckAtHand = (deck instanceof Deck) ? deck : {};
    this.cardAtPlay = (deck instanceof Deck && this.deckAtHand.cardSet[0]) ? this.deckAtHand.cardSet[0] : {};
  }

  returnCardAtPlay() {
    return this.cardAtPlay
  }
}

module.exports = Round;