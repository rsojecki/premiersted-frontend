import {Component, Input} from '@angular/core';
import {GameInterface} from '../../interfaces/game';

@Component({
  selector: 'game',
  templateUrl: 'games.listElement.component.html'
})
export class GamesListElementComponent {
  @Input() public game: GameInterface;
  constructor() {
    console.log(this.game);
  }
  public isOpen():boolean {
    return this.game.status === 'OPEN';
  }
}
