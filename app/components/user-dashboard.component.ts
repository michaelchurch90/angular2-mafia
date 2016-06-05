import {Component} from '@angular/core'
import {ActiveGamesComponent} from './games/active-games.component'
import {RecentGamesComponent} from './games/recent-games.component'
@Component({
	selector: 'user-dashboard',
	templateUrl: 'app/components/user-dashboard.component.html',
	directives: [ActiveGamesComponent, RecentGamesComponent]
})

export class UserDashboardComponent {
	title = 'User Dashboard';
}