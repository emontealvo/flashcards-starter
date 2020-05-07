const Card = require('../src/Card')

class Deck {
  constructor(cardSet) {
    this.cardSet = (cardSet) ? cardSet.filter(card => (card instanceof Card)): []; 
  };
  
  countCards() {
    return this.cardSet.length
  }

};

module.exports = Deck;