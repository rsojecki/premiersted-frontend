import { Component } from '@angular/core';
import {LoginService} from '../services/login.service';

@Component({
	selector: 'demo-app',
  templateUrl: './adminPanel.component.html'
})
export class AdminPanel {

  constructor(private github:LoginService) {}

  public listUsers():any {
    this.github.getUsers().subscribe(response => {
      console.log(response);
    });
  }
  
}
