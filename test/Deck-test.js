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

  it('should begin with a set of cards', function() {

    const card1 = new Card (1, "What allows you to define a set of related information using key-value pairs?", ["object", "array", "function"], "object");
    const card2 = new Card (2, "What is a comma-separated list of related values?", ["array", "object", "function"], "array");
    const card3 = new Card (3, "What does the callback function for find() return?", ["boolean", "array", "object"], "boolean")
    const card4 = new Card (4, "Which iteration method returns an array of the same length as the original array?", ["map()", "forEach()", "reduce()"], "map()")

    const deck = new Deck ([card1, card2, card3, card4]);

    expect(deck.cardSet).to.be.an('array')
    expect(deck.cardSet).to.deep.equal([card1, card2, card3, card4])
  });

  it('should be an empty array if no cards are given', function() {
    const deck = new Deck();
    expect(deck.cardSet).to.deep.equal([])
  })

  it('should only store cards', function() {
    const card1 = new Card (1, "What allows you to define a set of related information using key-value pairs?", ["object", "array", "function"], "object");
    const card2 = "Here was this really funny joke my friend once told me, but now it's gone"
    const card3 = "Jk, there wasn't ever a joke"
    const card4 = new Card (4, "Which iteration method returns an array of the same length as the original array?", ["map()", "forEach()", "reduce()"], "map()")

    const deck = new Deck ([card1, card2, card3, card4]);

    expect(deck.cardSet).to.have.members([card1, card4])
  })

  it('should be able to count set of cards', function() {

    const card1 = new Card (1, "What allows you to define a set of related information using key-value pairs?", ["object", "array", "function"], "object");
    const card2 = new Card (2, "What is a comma-separated list of related values?", ["array", "object", "function"], "array");
    const card3 = new Card (3, "What does the callback function for find() return?", ["boolean", "array", "object"], "boolean")
    const card4 = new Card (4, "Which iteration method returns an array of the same length as the original array?", ["map()", "forEach()", "reduce()"], "map()")

    const deck = new Deck ([card1, card2, card3, card4]);

    expect(deck.countCards()).to.equal(4)
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