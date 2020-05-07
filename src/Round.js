const Deck = require('../src/Deck');

class Round {
  constructor(deck) {
    this.deckAtHand = (deck instanceof Deck) ? deck : {};
    this.currentCard = (deck instanceof Deck && deck.cardSet[0]) ? deck.cardSet[0] : {};
  }

  returnCurrentCard() {
    return this.currentCard
  }
}

module.exports = Round;