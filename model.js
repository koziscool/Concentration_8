

matcherModel = {
	
	totalCards: 0,
	matchedCards: 0,
	numGuesses: 0,
	gameStateText: "You haven't won yet, keep going.",
	cardValues: [ "A", "B", "C", "D", "E", "F", "G", "H" ],
	cards: [],
	currentId: 1,

	init: function( size ) {
		this.size = size || this.size;

		var numPairs = Math.pow( this.size, 2 ) / 2;
		for( var i = 0; i < numPairs ; i++ ) {
			var value = this.cardValues[ Math.floor( Math.random() * this.cardValues.length ) ];
			this.cards.push( new this.Card( this.getId(), value ) );
			this.cards.push( new this.Card( this.getId(), value ) );
			this.totalCards += 2;
		}
		this.shuffle();
	},

	shuffle: function(  ) {
		var currentIndex = this.cards.length, rand, temp;

		while( currentIndex > 0 ) {
			rand = Math.floor( Math.random() * currentIndex );
			currentIndex--;
			temp = this.cards[currentIndex];
			this.cards[currentIndex] = this.cards[rand];
			this.cards[rand] = temp;
		}
	},

	getId: function(  ) {
		var id = this.currentId;
		this.currentId++;
		return id;
	},

	Card: function( id, value ) {
		this.id = id;
		this.value = value;
	},

};


