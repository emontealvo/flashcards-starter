const Deck = require('../src/Deck');

class Round {
  constructor(deck) {
    this.deckAtHand = (deck instanceof Deck) ? deck : {};
    // this.currentCard = {}
  }
}

module.exports = Round;