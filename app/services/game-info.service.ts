import {Injectable} from '@angular/core'
import {GAME_INFOS} from '../mock/mock-game-info'

@Injectable()
export class GameInfoService {
	getGameInfo(gameId, userId) {
		var filteredInfos = GAME_INFOS.filter(function(gameInfo) {
			console.log(gameInfo);
			return gameInfo.gameId == gameId && gameInfo.userId == userId;
		});
		return Promise.resolve(filteredInfos[0]);
	}
}

