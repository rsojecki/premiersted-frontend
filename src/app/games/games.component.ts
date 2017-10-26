import {Component} from '@angular/core';
import {ApiService} from '../services/api.service';
import {GameInterface} from '../interfaces/game';

@Component({
  selector: 'demo-app',
  templateUrl: 'games.component.html'
})
export class GamesComponent {

  public games:GameInterface[];

  constructor(api:ApiService) {
    api.getGames(null).subscribe( response => {
      this.games = response;
      console.log(this.games);
    });
  }
}
