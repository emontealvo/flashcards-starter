const Card = require('../src/Card')

class Turn {
  constructor (userGuess, currentCard) {
    this.userGuess = (typeof userGuess === 'string') ? userGuess : ''
    this.currentCard = (currentCard instanceof Card) ? currentCard : {};
  };

  returnGuess() {
    return (this.userGuess !== '') ? this.userGuess : 'Please, input a guess.';
  };

  returnCard() {
    return (this.currentCard instanceof Card) ? this.currentCard : 'Please, input a card.'
  };

  evaluateGuess() {
    let result = (this.returnGuess() !== this.userGuess) ? this.returnGuess()
     : (this.returnCard() !== this.currentCard) ? this.returnCard()
     : (this.userGuess === this.currentCard.correctAnswer) ? 'Correct!' : 'Incorrect!';
     return result
  };
};

module.exports = Turn;