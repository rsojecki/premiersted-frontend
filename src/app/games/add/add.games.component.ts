import {Component} from '@angular/core';
import {ApiService} from '../../services/api.service';
import {addGameInterface} from '../../interfaces/game';

@Component({
  selector: 'demo-app',
  templateUrl: 'add.games.component.html'
})
export class AddGamesComponent {
  public newGame:addGameInterface;
  places = [
    'Gdańsk',
    'Kraków'
  ];
  constructor(private api:ApiService) {
  }
  public send():void {
    this.api.addGame(this.newGame);
  }
}
