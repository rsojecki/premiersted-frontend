import {Component} from '@angular/core';
import {User} from './user';
import {ApiService} from '../services/api.service';
import {ActivatedRoute} from '@angular/router';
import {ContestInterface} from '../interfaces/contest';
import {GameInterface} from '../interfaces/game';

@Component({
  selector: 'demo-app',
  templateUrl: 'user.component.html'
})

export class UserComponent {

  public contests: ContestInterface[];
  public games: GameInterface[];
  public objectKeys: any = Object.keys;

  constructor(private route: ActivatedRoute, private api: ApiService, public user: User) {
    this.route.params.subscribe(params => {
      const userId: string = params['id'];
      api.getUser(userId).subscribe(response => {
        this.user.createFrom(response);
        this.contests = this.fixUserObjectInconsistency(response.contests);
        this.games = response.games;
      });
    });
  }

  private fixUserObjectInconsistency(rawContests: any[]): ContestInterface[] {
    const contests:any[] = rawContests.slice();
    contests.forEach((value) => {
      value.home = {
        user: value.home
      };
      value.visitor = {
        user: value.visitor
      };
    });
    return contests;
  }
}
