import {Component, Input} from '@angular/core';
import {GameInterface} from '../../interfaces/game';
import {ApiService} from '../../services/api.service';

@Component({
  selector: 'game-ingress',
  templateUrl: 'ingress.game.component.html'
})
export class IngressGameComponent {
  @Input() public game: GameInterface;
}
