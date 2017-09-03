

matcherController = {

	model: matcherModel,
	view: matcherView,
	selecting: false,

	init: function( size ) {
		this.model.init(size);
		this.view.init();
		this.view.updateGameView();
	},

	selectCard: function( id ) {
		if(this.selecting) return;
		this.selecting = true;
		if( this.model.sameCard(id) ){
			this.selecting = false;
			return;
		}

		this.view.revealCard(id);

		if( this.model.selectedCard ){
			var selectedId = this.model.selectedCard.id;
			var correct = this.model.checkGuess(id);
			this.view.updateGameView();
			var that = this;

			if( correct ){
				setTimeout( function() {
					that.view.setCorrect( id );
					that.view.setCorrect( selectedId );
					that.selecting = false;
				}, 500 );
			} else {
				setTimeout( function() {
					that.view.hideCards();
					that.selecting = false;
				}, 1500 );
			}


		} else {
			this.model.setSelectedCard(id);
			this.selecting = false;
		}
	},

};


