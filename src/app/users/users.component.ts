import { Component } from '@angular/core';
import {LoginService} from '../services/login.service';

@Component({
	selector: 'demo-app',
  templateUrl: './users.component.html'
})
export class UsersComponent {

  constructor(private github:LoginService) {
    this.listUsers();
  }

  public users:any = [];

  public listUsers():any {
    this.github.getUsers().subscribe(response => {
      this.users = response;
      console.log(response);
    });
  }
  public goToUser(id:string){

  }
  
}
