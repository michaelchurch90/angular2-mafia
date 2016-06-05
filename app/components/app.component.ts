
import { Component } from '@angular/core'
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';

import { GameInfoComponent } from './gameInfo/game-info.component';
import { UserDashboardComponent } from './user-dashboard.component';

@Component({
    selector: 'my-app',
    template: `
        <h1>{{title}}</h1>
    <nav>
      <a [routerLink]="['Dashboard']">My Dashboard</a>
    </nav>
    <router-outlet></router-outlet>
    `,
  	directives: [ROUTER_DIRECTIVES],
  	providers: [ROUTER_PROVIDERS]
})
@RouteConfig([
	{
		path: '/dashboard',
		name: 'Dashboard',
		component: UserDashboardComponent,
		useAsDefault: true
	},
	{
		path: '/game-info/:gameId/:userId',
		name: 'GameInfo',
		component: GameInfoComponent
	}
])
export class AppComponent {
	title = 'Mafia';
}
