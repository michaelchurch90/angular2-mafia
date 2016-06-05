import {Component, OnInit} from '@angular/core';
import { RouteParams } from '@angular/router-deprecated';
import {GameService} from '../../services/game.service'
import {GameInfoService} from '../../services/game-info.service';
import {Game} from '../../models/game'
import {GameInfo} from '../../models/game-info'
import {TownActionComponent} from './actions/town-action.component'
import {MafiaActionComponent} from './actions/mafia-action.component'
import {DayActionComponent} from './actions/day-action.component'
import {CopActionComponent} from './actions/cop-action.component'
import {MedicActionComponent} from './actions/medic-action.component'


@Component({
	selector: 'game-info',
	templateUrl: 'app/components/gameInfo/game-info.component.html',
	providers: [GameInfoService, GameService],
	directives: [DayActionComponent, TownActionComponent, MafiaActionComponent, CopActionComponent, MedicActionComponent]
})

export class GameInfoComponent implements OnInit{
	game: Game
	gameInfo: GameInfo
	constructor(
		private routeParams: RouteParams,
		private gameInfoService: GameInfoService,
		private gameService: GameService
		) {}

	ngOnInit() {
		let gameId = this.routeParams.get('gameId');
		let userId = this.routeParams.get('userId');

		this.gameInfoService.getGameInfo(gameId, userId).then(gameInfo => this.gameInfo = gameInfo);
		this.gameService.getGameById(gameId).then(game => this.game = game);
	}


}