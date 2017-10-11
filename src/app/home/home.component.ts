import {Component, OnInit} from '@angular/core';
import {LoginService} from '../services/login.service';

@Component({
  selector: 'demo-app',
  templateUrl: 'home.component.html'
})
export class HomeComponent {
  constructor(api:LoginService){
    api.getGames().subscribe(response => {
      this.games = response;
      console.log(response);
    });
  }
  public games:any = [];
}
