const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round');

describe('Round', function () {

  it('should be a function', function() {
    const round = new Round();
    expect(Round).to.be.a('function');
  });

  it('should be an instance of Round', function() {
    const round = new Round();
    expect(round).to.be.an.instanceof(Round);
  });

  // - [ ] currentCard should be the first Card in the Deck at the start of the Round
            // I should take the first card instance within our cardSet inside the Deck class and set it to it's own property
            // of currentCatd 
            // This can still be broken down further...as it's making many assumptions
            // first each round should include a deck of cards 
            // this means to check for a deck property and have the deck be an instance of the Deck class 
            // check for sad paths there (when deck is not an instance of Deck class what happens?) 
           
            // (separate test) it's value is an instanceOf Card 


  it('should be initiated with a deck', function() {

    const card1 = new Card (1, "What allows you to define a set of related information using key-value pairs?", ["object", "array", "function"], "object");
    const card2 = new Card (2, "What is a comma-separated list of related values?", ["array", "object", "function"], "array");
    const card3 = new Card (3, "What does the callback function for find() return?", ["boolean", "array", "object"], "boolean")
    const card4 = new Card (4, "Which iteration method returns an array of the same length as the original array?", ["map()", "forEach()", "reduce()"], "map()")
    const deck = new Deck ([card1, card2, card3, card4]);
    const round = new Round(deck);

    expect(round.deckAtHand).to.deep.equal(deck)
  });

  it('should only be initiated with a valid deck', function() {

    const deck = 'A faded picture of a rooster running wild'
    const round = new Round(deck);

    expect(round.deckAtHand).to.deep.equal({});
  });

   // then we must assert that that there is a currentCard property and 
    // so what's our current card default value is the first card of our deck 
    // we should check for the currentCard to be an instance of our Card class


  it('should have a current card at play', function() {

    const round = new Round();

    expect(round).to.have.property('currentCard', {})
  });

  it('should begin with the deck\'s first card', function() {

    const card1 = new Card (1, "What allows you to define a set of related information using key-value pairs?", ["object", "array", "function"], "object");
    const card2 = new Card (2, "What is a comma-separated list of related values?", ["array", "object", "function"], "array");
    const card3 = new Card (3, "What does the callback function for find() return?", ["boolean", "array", "object"], "boolean")
    const card4 = new Card (4, "Which iteration method returns an array of the same length as the original array?", ["map()", "forEach()", "reduce()"], "map()")
    const deck = new Deck ([card1, card2, card3, card4]);
    const round = new Round(deck);

    expect(round.currentCard).to.equal(deck.cardSet[0])
  });

  it('should only begin with if the deck has cards', function() {

    const deck = new Deck ();
    const round = new Round(deck);
  
    expect(round.currentCard).to.deep.equal({})
  });

});


// Round Class:


// - [ ] returnCurrentCard: a methods that return the current card being played
        // Simple enough a method that return the currentCard at play, it may require to evenutally take the Turn class method of returnClass to 
        // change the curentCard as the user goes through the deck

// - [ ] takeTurn: a method that updates turns count, evaluates guesses, gives feedback and stores ids of incorrect guesses:
    // The sublist is the biggest hint to a scoped function, so we'll look at each step individually 
    // this method is just a gateway to call a bunch of other scoped fucnitons

// - - [ ] When a guess is made, a new Turn instance is created.
    // Each turn will instantiate a new Turn that will include the user's guess. 
    // our turn instantiation alrady includes a test to check if user's guess is correct

// - - [ ] turn count is updated, regardless of wether guess is correct or not
    // Each time a turn instance is created a counter keeoing track of the number of turns taken is updated
    // this happens wheter the guess is correct or not, should be no problem if function is seperate from the check function. 

// - - [ ] The next card becomes current card
    // After a turn is taken, the following card becomes the currewnt Card. does that mena that you do not guess on a card until 
    //  you find the correct answer but rather after each turn you move to a new card, regardless of correct answer or not. 
    // (and come back to that card later after all cards have had an attempted guess.) this would be an added functionality

// - - [ ] Guess is evaluated/recorded. Incorrect guess will be stored (via the id) in an array of incorrectGuesses 
    // Again, this hints to the fact that there are no multiple guesses on a card until all cards have had a go
    // So, if the turn method that evaluates a user's guess return false (i.e "Incorrect!") the guess is recorded inside an array associated with thst card's id 
    // Should that card now create a property with an array of all incorrect Guesses? We will see... 

// - - [ ] Feedback is return; regarding wether the guess is incorrect or correct
    // This means to actually log the results of our turn.evaluateGuess method 


// - [ ] calculatePercentCorrect: a method that calculates and return the percentage of correct guesses
    // it should give back a number...
    // What's the best way to check for the percentCorrect 
    // we have an array with all the incorrect guesses made, so we use this length 
    //  so percent would be ((totalCorrect / totalQuestions) * 100)
    // totalCorrect also means totalQuestions - incorrectGuesses.length 



// - [ ] endRound: method that prints the following to the console: '**Round Over** You answered <>% of the questions correctly!!'
    // My guess is this get's invoked once we have gone through the entire deck of cards.
    // it should take the return value of calculatePercentCorrect and return the above statement 

