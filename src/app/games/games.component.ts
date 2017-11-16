import {Component} from '@angular/core';
import {ApiService} from '../services/api.service';
import {addGameInterface, GameInterface} from '../interfaces/game';
import {isUndefined} from 'util';
import {AddGameComponent} from './add/add.game.component';
import {MatDialog} from '@angular/material';
import {AuthorizationService} from '../services/authorization.service';

@Component({
  selector: 'demo-app',
  templateUrl: 'games.component.html'
})
export class GamesComponent {

  public games:GameInterface[];

  constructor(private api:ApiService, private dialog: MatDialog, private auth:AuthorizationService) {
    this.api.getGames(null).subscribe( response => {
      console.log(response);
      this.games = response;
    });
  }

  public isAdmin():boolean {
    return this.auth.isAdmin();
  }

  public delete(gameId:string):void {
    this.api.removeGame(gameId).subscribe(response =>{
      this.games = response;
    })
  }

  public makeSchedule(gameId:string):void{
    this.api.makeSchedule(gameId).subscribe(response =>{
      console.log(response);
    })
  }

  public openDialog(): void {
    let dialogRef:any = this.dialog.open(AddGameComponent, {
      width: '300px',
      data: {
        name: '',
        location: ''
      }
    });

    dialogRef.afterClosed().subscribe((resultSummary:addGameInterface) => {
      if (!isUndefined(resultSummary)) {
        console.log(resultSummary);
        this.api.addGame(resultSummary).subscribe(response => {
          this.games.unshift(response);
        })
      }
    });
  }
}
