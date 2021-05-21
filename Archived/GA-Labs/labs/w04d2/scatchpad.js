// Using classes, generate a deck of cards, stored in an array
// cards are objects and should have a value, a face, a suit, a boolean of whether they are faceUp etc.
// there are 13 cards per suit, values should match what they are in BlackJack (or another game),
// - Ace, by default is equal to 11, - cards 2-10 share the same face and value - Jack, Queen and King have a value of 10
// Figure out how to shuffle the array and console.log the top card (Hint: google it)
// Figure out how to compare the top and bottom card and console.log both cards and a message that says which card is bigger (or a tie)

class Card {
    value = 0
    cardName = ""
    suit = ""

    constructor(value, cardName, suit) {
        this.value = value
        this.cardName = cardName
        this.suit = suit
    }
}

let faceValueMap = {
    0: {
        value: 2,
        face: "2"
    },
    1: {
        value: 3,
        face: "3"
    },
    2: {
        value: 4,
        face: "4"
    },
    3: {
        value: 5,
        face: "5"
    },
    4: {
        value: 6,
        face: "6"
    },
    5: {
        value: 7,
        face: "7"
    },
    6: {
        value: 8,
        face: "8"
    },
    7: {
        value: 9,
        face: "9"
    },
    8: {
        value: 10,
        face: "10"
    },
    9: {
        value: 11,
        face: "Ace"
    },
    10: {
        value: 10,
        face: "Jack"
    },
    11: {
        value: 10,
        face: "Queen"
    },
    12: {
        value: 10,
        face: "King"
    },
}

let suit = {
    0: "Diamond",
    1: "Club",
    2: "Heart",
    3: "Spade",
}

function shuffle(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
}

let deckOfCards = []

for (let i = 0; i < 13; i++) {
    for (let j = 0; j < 4; j++) {
        let currentCardValue = faceValueMap[i].value
        let currentCardFace = faceValueMap[i].face
        let currentSuit = suit[j]
        let currentCard = new Card(currentCardValue, currentCardFace, currentSuit)
        deckOfCards.push(currentCard)
    }
}

// current top of card
console.log(deckOfCards[0])

// shuffle, then print new top of card
deckOfCards = shuffle(deckOfCards)
console.log(deckOfCards[0])

function compareTopBottom(cards) {
    let topCard = cards[0]
    let bottomCard = cards[cards.length - 1]
    
    console.log(topCard)
    console.log(bottomCard)

    if (topCard.value === bottomCard.value) {
        console.log("It's a tie")
    }

    let biggerCard = topCard

    if (bottomCard.value > biggerCard.value) {
        biggerCard = bottomCard
    }

    console.log("Bigger Card: ", biggerCard)
}

compareTopBottom(deckOfCards)

