import {Component} from '@angular/core';
import {addPlayerInterface, GameInterface} from '../../interfaces/game';
import {ApiService} from '../../services/api.service';
import {ActivatedRoute} from '@angular/router';
import {AuthorizationService} from '../../services/authorization.service';
import {MatDialog} from '@angular/material';
import {JoinGameDialogGamesComponent} from '../joinDialog/joinDialog.games.component';
import {ClubInterface} from '../../interfaces/club';
import {isUndefined} from 'util';

@Component({
  selector: 'demo-app',
  templateUrl: 'details.games.component.html'
})
export class DetailsGamesComponent {
  public game: GameInterface;
  public objectKeys: any = Object.keys;

  constructor(private api: ApiService, private route: ActivatedRoute, private dialog: MatDialog, private auth: AuthorizationService) {
    this.getGame();
    console.log(this.game);
  }
  public isOpen(): boolean {
    return this.game.status === 'OPEN';
  }

  public removePlayerFromGame():void {
    if (this.game.status==='OPEN')
    this.api.removePlayerFromGame(this.game.id, this.auth.getId()).subscribe(response => {
      console.log(response);
      this.generateData(response);
    });
  }

  public isSigned(): boolean {
    return this.game.competitors[this.auth.getId()]!==undefined;
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
        };
        this.api.addPlayerToGame(this.game.id, send).subscribe(response => {
          this.getGame();
          console.log(response);
        })
      }
    });
  }
  private getGame():void{
    this.route.params.subscribe(params => {
      const gameId: string = params['id'];
      this.api.getGame(gameId).subscribe(response => {
        this.generateData(response);
      });
    });

  }

  private generateData(response):void {
    this.game = response;
    for (let i of this.objectKeys(this.game.schedule)) {
      this.game.schedule[i].home = this.game.competitors[this.game.schedule[i].home];
      this.game.schedule[i].visitor = this.game.competitors[this.game.schedule[i].visitor];
    }
  }
}
