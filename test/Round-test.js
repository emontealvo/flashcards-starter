const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round');
const Turn = require('../src/Turn')

describe('Round', function () {

  it('should be a function', function() {
    const round = new Round();
    expect(Round).to.be.a('function');
  });

  it('should be an instance of Round', function() {
    const round = new Round();
    expect(round).to.be.an.instanceof(Round);
  });

  it('should be initiated with a deck', function() {

    const card1 = new Card (1, "What allows you to define a set of related information using key-value pairs?", ["object", "array", "function"], "object");
    const card2 = new Card (2, "What is a comma-separated list of related values?", ["array", "object", "function"], "array");
    const card3 = new Card (3, "What does the callback function for find() return?", ["boolean", "array", "object"], "boolean")
    const card4 = new Card (4, "Which iteration method returns an array of the same length as the original array?", ["map()", "forEach()", "reduce()"], "map()")
    const deck = new Deck ([card1, card2, card3, card4]);
    const round = new Round(deck);

    expect(round.deckAtHand).to.be.an.instanceof(Deck)
  });

  it('should only be initiated with a valid deck', function() {

    const deck = 'A faded picture of a rooster running wild'
    const round = new Round(deck);

    expect(round.deckAtHand).to.deep.equal({});
  });

  it('should have a current card at play', function() {

    const round = new Round();

    expect(round).to.have.property('cardAtPlay')
  });

  it('should begin with the deck\'s first card', function() {

    const card1 = new Card (1, "What allows you to define a set of related information using key-value pairs?", ["object", "array", "function"], "object");
    const card2 = new Card (2, "What is a comma-separated list of related values?", ["array", "object", "function"], "array");
    const card3 = new Card (3, "What does the callback function for find() return?", ["boolean", "array", "object"], "boolean")
    const card4 = new Card (4, "Which iteration method returns an array of the same length as the original array?", ["map()", "forEach()", "reduce()"], "map()")
    const deck = new Deck ([card1, card2, card3, card4]);
    const round = new Round(deck);

    expect(round.cardAtPlay).to.deep.equal(deck.cardSet[0])
  });

  it('should be an empty object if the deck has no cards', function() {

    const deck = new Deck ();
    const round = new Round(deck);
    
  
    expect(round.cardAtPlay).to.deep.equal({})
  });

  it('should return the current card at play', function() {

    const card1 = new Card (1, "What allows you to define a set of related information using key-value pairs?", ["object", "array", "function"], "object");
    const card2 = new Card (2, "What is a comma-separated list of related values?", ["array", "object", "function"], "array");
    const deck = new Deck ([card1, card2]);
    const round = new Round(deck);

    expect(round.returnCardAtPlay()).to.equal(round.deckAtHand.cardSet[0])
  });

  it('should have the ability to take a turn', function() {

    const round = new Round() 
    
    expect(round.takeTurn).to.be.a('function');
  })

  it('should begin with zero turns taken', function() {

    const round = new Round() 

    expect(round).to.have.property('turnCount', 0);
  })

  it('should be able to store incorrect guesses', function() {

    const round = new Round()

    expect(round.incorrectGuesses).to.deep.equal([])
  })

  describe('takeTurn method', function () {
    
    it('should create a turn instance', function() {

      const round = new Round()

      expect(round.takeTurn()).to.be.an.instanceof(Turn)
    });

    it('should increment the turn count after a turn is take', function() {

      const round = new Round();
      round.takeTurn()

      expect(round.turnCount).to.equal(1)
    });
  
    it('should increment the turn count after each turn is taken', function() {

      const round = new Round();
      round.takeTurn()
      round.takeTurn()
      round.takeTurn()

      expect(round.turnCount).to.equal(3)
    });
  })
  // - [ ] takeTurn: a method that holds a bunch of other methods:
 
  
  // updates turns count,
  // - - [ ] turn count is updated, regardless of wether guess is correct or not
    // First we check that each round has default turn count of 0 
    // Each time a turn instance is created a counter keeping track of the number of turns taken is updated
    // this happens wheter the guess is correct or not, should be no problem if function is seperate from the check function. 
    // I see three test default value, one turn and multiple turns 

  
  // - - [ ] When a guess is made, a new Turn instance is created.
    // test:
    // it should instantiate a new Turn with user guess and the round's current card
    // two sad path test to check for resulting condition if either user guess is undefined or current card is an empty object

  


// gives feedback 
    // - - [ ] Feedback is return; regarding wether the guess is incorrect or correct
       // it should call on the turn class method to evaluate guess and return corresponding feedback
    // this means two test to check for the two different conditions. 

  
  
  // stores ids of incorrect guesses
    // - - [ ] Guess is evaluated/recorded. Incorrect guess will be stored (via the id) in an array of incorrectGuesses 
    // It should store incorrect guesses in an array by their id 
    // first test - check incorrect guesses is an empty array by default
    // second test - that it can record an incorrect guess by the id number inside that array
    // third test - that it can do this with different cards (this test may come after the following test)



  // finally, the next card on deck should become the currentCard
    // - - [ ] The next card becomes current card

    //  this should test that the card changes with each turn taken we can use variables to trace the change
    //  one test would check that the card at play changes
    //  a second test will check that the card is the card that follows on the deckAtHand array 
    



});


// Round Class:


// - [ ] calculatePercentCorrect: a method that calculates and return the percentage of correct guesses
    // it should give back a number...
    // What's the best way to check for the percentCorrect 
    // we have an array with all the incorrect guesses made, so we use this length 
    //  so percent would be ((totalCorrect / totalQuestions) * 100)
    // totalCorrect also means totalQuestions - incorrectGuesses.length 



// - [ ] endRound: method that prints the following to the console: '**Round Over** You answered <>% of the questions correctly!!'
    // My guess is this get's invoked once we have gone through the entire deck of cards.
    // it should take the return value of calculatePercentCorrect and return the above statement 

