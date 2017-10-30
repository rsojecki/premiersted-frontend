import {Component, Input} from '@angular/core';
import {GameInterface} from '../../interfaces/game';

@Component({
  selector: 'game-ingress',
  templateUrl: 'ingress.game.component.html'
})
export class IngressGameComponent {
  @Input() public game: GameInterface;
  constructor() {
    console.log(this.game);
  }
  public isOpen():boolean {
    return this.game.status === 'OPEN';
  }
}
