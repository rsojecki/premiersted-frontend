import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Component, Inject} from '@angular/core';
import {addGameInterface} from '../../interfaces/game';
import {ApiService} from '../../services/api.service';
import {UserGithubInterface} from '../../interfaces/user';

@Component({
  selector: 'post-result-dialog',
  templateUrl: 'add.game.component.html',
})
export class AddGameComponent {

  public places:string[] = ['Gdańsk', 'Kraków'];
  public users:UserGithubInterface[];

  constructor(public dialogRef: MatDialogRef<AddGameComponent>,
              @Inject(MAT_DIALOG_DATA) public resultSummary: addGameInterface, private api:ApiService) {
    console.log(this.resultSummary);
    this.api.getUsers().subscribe(response => {
      this.resultSummary.players = response;
    });
  }

  public onNoClick(): void {
    this.dialogRef.close();
  }

  public validateData(): boolean {
    console.log( this.users);
    return true;
  }
}
