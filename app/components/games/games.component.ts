
import { Component, OnInit } from '@angular/core'
import { GameService } from '../../services/game.service';
import { Game } from '../../models/game';

export abstract class GamesComponent implements OnInit {
	title: String;
	games: Game[];
	ngOnInit() {
		this.getGames();
	}
	abstract getGames()
}