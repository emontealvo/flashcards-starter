const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card')
const Deck = require('../src/Deck')

describe('Deck', function() {

  it('should be a function', function() {
    const deck = new Deck();
    expect(Deck).to.be.a('function');
  });

  it('should be an instance of Deck', function() {
    const deck = new Deck();
    expect(deck).to.be.an.instanceof(Deck);
  });


});




// - [ ] Should be initialized with an array of Card object
      // this will be parameter and default value combo. No need to put it 
      // the actual script since the test file does that for us. 

// - [ ] Have an accompanying test file.
      // It's where we are at, so hell yea!
// - [ ] Should known how many cards are in the Deck
    // this will be a method in it's own right deck.countCards() it will count the
    // card inside the deck