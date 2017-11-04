import {Component, Input} from '@angular/core';
import {addPlayerInterface, GameInterface} from '../../interfaces/game';
import {isUndefined} from 'util';
import {MatDialog} from '@angular/material';
import {JoinGameDialogGamesComponent} from '../joinDialog/joinDialog.games.component';
import {ApiService} from '../../services/api.service';
import {ClubInterface} from '../../interfaces/club';
import {AuthorizationService} from '../../services/authorization.service';

@Component({
  selector: 'game-ingress',
  templateUrl: 'ingress.game.component.html'
})
export class IngressGameComponent {
  @Input() public game: GameInterface;

  constructor(private dialog: MatDialog, private api:ApiService, private auth: AuthorizationService) {
    console.log(this.game);
  }

  public isOpen(): boolean {
    return this.game.status === 'OPEN';
  }

  public openDialog(): void {
    let dialogRef: any = this.dialog.open(JoinGameDialogGamesComponent, {
      width: '300px',
      data: {}
    });

    dialogRef.afterClosed().subscribe((result:ClubInterface) => {
      if (!isUndefined(result)) {
        console.log(result);
        const send:addPlayerInterface = {
          uid: this.auth.getId(),
          club: result.id
        }
        this.api.addPlayerToGame(this.game.id, send).subscribe(response => {
          console.log(response);
        })
      }
    });
  }
}
