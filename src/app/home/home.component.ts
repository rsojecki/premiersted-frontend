import {Component} from '@angular/core';
import {ApiService} from '../services/api.service';

@Component({
  selector: 'demo-app',
  templateUrl: 'home.component.html'
})
export class HomeComponent {
  constructor(api:ApiService) {
    api.getGames(null).subscribe( response => {
      console.log(response);
    });
  }
}
