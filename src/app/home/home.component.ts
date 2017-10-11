import {Component, OnInit} from '@angular/core';
import {LoginService} from '../services/login.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'demo-app',
  templateUrl: 'home.component.html'
})
export class HomeComponent {
  constructor(private api:LoginService){
    this.api.getGames(null).subscribe(response => {
      this.games = response;
      console.log(response);
    });
  }
  public games:any[] = [];
  public formInput:string = '';
  public searchResultOfGames:any[] = this.games;

  public search(newValue:string):void {
    this.api.getGames(newValue).subscribe(response => {
      this.games = response;
      console.log(response);
    });
  }
}
