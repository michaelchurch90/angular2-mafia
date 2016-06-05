
import { Component } from '@angular/core'
import { Router } from '@angular/router-deprecated';

import { GameService } from '../../services/game.service';
import { GamesComponent } from './games.component'

@Component({
    selector: 'active-games',
    templateUrl: 'app/components/games/games.component.html',
	providers: [GameService],
	directives: [ActiveGamesComponent]
})

export class ActiveGamesComponent extends GamesComponent {
	title = "Current Games";
	constructor(
		private gameService: GameService,
		private router: Router
		) { super() }

	getGames() {
		this.gameService.getGames().then(games => this.games = games);
	}

	viewDetails(game) {
		this.router.navigate(['GameInfo', {gameId: game.id, userId: "user1"}]);
	}
}