import {Component} from '@angular/core';
import {GameInterface} from '../../interfaces/game';
import {ApiService} from '../../services/api.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'demo-app',
  templateUrl: 'details.games.component.html'
})
export class DetailsGamesComponent {
  public game: GameInterface;
  public objectKeys: any = Object.keys;

  constructor(private api: ApiService, private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      const gameId: string = params['id'];
      api.getGame(gameId).subscribe(response => {
        this.game = response;
        for (let i of this.objectKeys(this.game.schedule)) {
          this.game.schedule[i].home = this.game.competitors[this.game.schedule[i].home];
          this.game.schedule[i].visitor = this.game.competitors[this.game.schedule[i].visitor];
        }
      });
    });
  }
}
