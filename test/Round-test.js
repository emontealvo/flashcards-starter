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

    expect(round.cardAtPlay).to.deep.equal(round.deckAtHand.cardSet[0])
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
    
    it('should increment the turn count after a turn is take', function() {

      const card1 = new Card (1, "What allows you to define a set of related information using key-value pairs?", ["object", "array", "function"], "object");
      const card2 = new Card (2, "What is a comma-separated list of related values?", ["array", "object", "function"], "array");
      const card3 = new Card (3, "What does the callback function for find() return?", ["boolean", "array", "object"], "boolean")
      const card4 = new Card (4, "Which iteration method returns an array of the same length as the original array?", ["map()", "forEach()", "reduce()"], "map()")
      const deck = new Deck ([card1, card2, card3, card4]);
      const round = new Round(deck);

      round.takeTurn();

      expect(round.turnCount).to.equal(1)
    });
  
    it('should increment the turn count after each turn is taken', function() {

      const card1 = new Card (1, "What allows you to define a set of related information using key-value pairs?", ["object", "array", "function"], "object");
      const card2 = new Card (2, "What is a comma-separated list of related values?", ["array", "object", "function"], "array");
      const card3 = new Card (3, "What does the callback function for find() return?", ["boolean", "array", "object"], "boolean")
      const card4 = new Card (4, "Which iteration method returns an array of the same length as the original array?", ["map()", "forEach()", "reduce()"], "map()")
      const deck = new Deck ([card1, card2, card3, card4]);
      const round = new Round(deck);

      round.takeTurn();
      round.takeTurn();
      round.takeTurn();

      expect(round.turnCount).to.equal(3)
    });

    it('should change cards after a turn is taken', function() {

      const card1 = new Card (1, "What allows you to define a set of related information using key-value pairs?", ["object", "array", "function"], "object");
      const card2 = new Card (2, "What is a comma-separated list of related values?", ["array", "object", "function"], "array");
      const card3 = new Card (3, "What does the callback function for find() return?", ["boolean", "array", "object"], "boolean")
      const card4 = new Card (4, "Which iteration method returns an array of the same length as the original array?", ["map()", "forEach()", "reduce()"], "map()")
      const deck = new Deck ([card1, card2, card3, card4]);
      const round = new Round(deck);

      round.takeTurn()

      expect(round.cardAtPlay).not.to.equal(round.deckAtHand.cardSet[0])
    });

    it('should change to the second card after the first turn is taken', function() {

      const card1 = new Card (1, "What allows you to define a set of related information using key-value pairs?", ["object", "array", "function"], "object");
      const card2 = new Card (2, "What is a comma-separated list of related values?", ["array", "object", "function"], "array");
      const card3 = new Card (3, "What does the callback function for find() return?", ["boolean", "array", "object"], "boolean")
      const card4 = new Card (4, "Which iteration method returns an array of the same length as the original array?", ["map()", "forEach()", "reduce()"], "map()")
      const deck = new Deck ([card1, card2, card3, card4]);
      const round = new Round(deck);

      round.takeTurn();

      expect(round.cardAtPlay).to.equal(round.deckAtHand.cardSet[1])
    });

    it('should change cards in consecutive order', function() {

      const card1 = new Card (1, "What allows you to define a set of related information using key-value pairs?", ["object", "array", "function"], "object");
      const card2 = new Card (2, "What is a comma-separated list of related values?", ["array", "object", "function"], "array");
      const card3 = new Card (3, "What does the callback function for find() return?", ["boolean", "array", "object"], "boolean")
      const card4 = new Card (4, "Which iteration method returns an array of the same length as the original array?", ["map()", "forEach()", "reduce()"], "map()")
      const deck = new Deck ([card1, card2, card3, card4]);
      const round = new Round(deck);

      round.takeTurn()
      round.takeTurn()
      round.takeTurn()

      expect(round.cardAtPlay).to.equal(round.deckAtHand.cardSet[3])
    });

    it('should require a guess', function() {

      const card1 = new Card (1, "What allows you to define a set of related information using key-value pairs?", ["object", "array", "function"], "object");
      const card2 = new Card (2, "What is a comma-separated list of related values?", ["array", "object", "function"], "array");
      const card3 = new Card (3, "What does the callback function for find() return?", ["boolean", "array", "object"], "boolean")
      const card4 = new Card (4, "Which iteration method returns an array of the same length as the original array?", ["map()", "forEach()", "reduce()"], "map()")
      const deck = new Deck ([card1, card2, card3, card4]);
      const round = new Round(deck);

      expect(round.takeTurn()).to.equal('Please, input a guess.')
    });

    it('should require cards to be present', function() {

      const deck = new Deck ();
      const round = new Round(deck);

      expect(round.takeTurn('array')).to.be.equal('Please, input a card.')
    });

    it('should evaluate if guess is correct', function() {

      const card1 = new Card (1, "What allows you to define a set of related information using key-value pairs?", ["object", "array", "function"], "object");
      const card2 = new Card (2, "What is a comma-separated list of related values?", ["array", "object", "function"], "array");
      const card3 = new Card (3, "What does the callback function for find() return?", ["boolean", "array", "object"], "boolean")
      const card4 = new Card (4, "Which iteration method returns an array of the same length as the original array?", ["map()", "forEach()", "reduce()"], "map()")
      const deck = new Deck ([card1, card2, card3, card4]);
      const round = new Round(deck);

      expect(round.takeTurn('object')).to.be.equal('Correct!')
    })

    it('should evaluate if guess is incorrect', function() {

      const card1 = new Card (1, "What allows you to define a set of related information using key-value pairs?", ["object", "array", "function"], "object");
      const card2 = new Card (2, "What is a comma-separated list of related values?", ["array", "object", "function"], "array");
      const card3 = new Card (3, "What does the callback function for find() return?", ["boolean", "array", "object"], "boolean")
      const card4 = new Card (4, "Which iteration method returns an array of the same length as the original array?", ["map()", "forEach()", "reduce()"], "map()")
      const deck = new Deck ([card1, card2, card3, card4]);
      const round = new Round(deck);

      expect(round.takeTurn('array')).to.be.equal('Incorrect!')
    })

    it('should keep track of incorrect answers by their id number', function() {

      const card1 = new Card (1, "What allows you to define a set of related information using key-value pairs?", ["object", "array", "function"], "object");
      const card2 = new Card (2, "What is a comma-separated list of related values?", ["array", "object", "function"], "array");
      const card3 = new Card (3, "What does the callback function for find() return?", ["boolean", "array", "object"], "boolean")
      const card4 = new Card (4, "Which iteration method returns an array of the same length as the original array?", ["map()", "forEach()", "reduce()"], "map()")
      const deck = new Deck ([card1, card2, card3, card4]);
      const round = new Round(deck);

      round.takeTurn('array')

      expect(round.incorrectGuesses).to.include(1);
    })

    it('should only keep track of incorrect answer', function() {

      const card1 = new Card (1, "What allows you to define a set of related information using key-value pairs?", ["object", "array", "function"], "object");
      const card2 = new Card (2, "What is a comma-separated list of related values?", ["array", "object", "function"], "array");
      const card3 = new Card (3, "What does the callback function for find() return?", ["boolean", "array", "object"], "boolean")
      const card4 = new Card (4, "Which iteration method returns an array of the same length as the original array?", ["map()", "forEach()", "reduce()"], "map()")
      const deck = new Deck ([card1, card2, card3, card4]);
      const round = new Round(deck);

      round.takeTurn('object')
      round.takeTurn('object')

      expect(round.incorrectGuesses.length).to.equal(1);
    })

    it('should store multiple incorrect answers', function() {

      const card1 = new Card (1, "What allows you to define a set of related information using key-value pairs?", ["object", "array", "function"], "object");
      const card2 = new Card (2, "What is a comma-separated list of related values?", ["array", "object", "function"], "array");
      const card3 = new Card (3, "What does the callback function for find() return?", ["boolean", "array", "object"], "boolean")
      const card4 = new Card (4, "Which iteration method returns an array of the same length as the original array?", ["map()", "forEach()", "reduce()"], "map()")
      const deck = new Deck ([card1, card2, card3, card4]);
      const round = new Round(deck);

      round.takeTurn('object')
      round.takeTurn('object')
      round.takeTurn('object')

      expect(round.incorrectGuesses).to.deep.equal([2, 3]);
    })
  });
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

