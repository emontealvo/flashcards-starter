const Deck = require('../src/Deck');
const Turn = require('../src/Turn');

class Round {
  constructor(deck) {
    this.deckAtHand = (deck instanceof Deck) ? deck : {};
    this.cardAtPlay = (deck instanceof Deck && this.deckAtHand.cardSet[0]) ? this.deckAtHand.cardSet[0] : {};
    this.turnCount = 0;
    this.incorrectGuesses = [];
  }

  returnCardAtPlay() {
    return this.cardAtPlay;
  }

  takeTurn(guess) {
    if (this.deckAtHand instanceof Deck) {
      let result = this.evaluateUserGuess(guess);
      this.storeIncorrectGuesses(result);
      this.updateCardAtPlay();
      return result;
    }
  }

  evaluateUserGuess(guess) {
    let turn = new Turn(guess, this.cardAtPlay);
    return turn.evaluateGuess();
  }

  storeIncorrectGuesses(result) {
    if (result === 'Incorrect!') {
      this.incorrectGuesses.push(this.cardAtPlay.id);
    }
  }

  updateCardAtPlay() {
    this.turnCount++;
    this.cardAtPlay = this.deckAtHand.cardSet[this.turnCount];
  }
}

module.exports = Round;