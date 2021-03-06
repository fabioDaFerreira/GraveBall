import { startGame, stopGame, continueGame, gameWon, gameLost, setControlsDescription, setGameSelected } from './actions';

export default class GameStatus {
	constructor(Kit) {
		this.store = Kit.store;
	}

	startGame() {
		this.store.dispatch(startGame());
	}

	stopGame() {
		this.store.dispatch(stopGame());
	}

	continueGame() {
		this.store.dispatch(continueGame());
	}

	gameWon() {
		this.store.dispatch(gameWon());
	}

	gameLost() {
		this.store.dispatch(gameLost());
	}

	setGameSelected(name) {
		this.store.dispatch(setGameSelected(name));
	}

	/**
 * Set description of controls that must be used in game.
 * @param {object} description - - Properties must be {string} controls and its values descriptions
 */
	setControlsDescription(description) {
		this.store.dispatch(setControlsDescription(description));
	}
}

