import {Injectable} from '@angular/core';

import {GAMES, RECENT_GAMES} from '../mock/mock-games';

@Injectable()
export class GameService {
	getGames() {
		return Promise.resolve(GAMES);
	}

	getRecentGames() {
		return Promise.resolve(RECENT_GAMES);
	}

	getGameById(gameId: String) {

		var game = GAMES.filter(function(game) {
			return game.id == gameId;
		});
		return Promise.resolve(game[0])
	}
}