const Deck = require('../src/Deck');

class Round {
  constructor(deck) {
    this.deckAtHand = (deck instanceof Deck) ? deck : {};
    this.currentCard = (deck instanceof Deck && deck.cardSet !== []) ? deck.cardSet[0] : {};
  }
}

module.exports = Round;