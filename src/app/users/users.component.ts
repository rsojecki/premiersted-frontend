import {Component} from '@angular/core';
import {ApiService} from '../services/api.service';
import {UserGithubInterface} from '../interfaces/user';

@Component({
  selector: 'demo-app',
  templateUrl: 'users.component.html'
})

export class UsersComponent {

  public users: UserGithubInterface[];

  constructor(private api: ApiService) {
    api.getUsers().subscribe(response => {
      console.log(response);
      this.users = response;
    });
  }
}
