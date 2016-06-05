import { Component, OnInit } from '@angular/core'
import { GameService } from '../../services/game.service';
import { Game } from '../../models/game';
import { GamesComponent } from './games.component'

@Component({
    selector: 'recent-games',
    templateUrl: 'app/components/games/games.component.html',
	providers: [GameService]
})

export class RecentGamesComponent extends GamesComponent implements OnInit {
	title = "Recent Games"
	constructor(private gameService: GameService) {
		super()
	}

	getGames() {
		this.gameService.getRecentGames().then(games => this.games = games);
	}
}