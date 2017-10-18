import {Component} from '@angular/core';
import {User} from './user';
import {ApiService} from '../services/api.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'demo-app',
  templateUrl: 'user.component.html'
})
export class UserComponent {

  public user: User;

  constructor(private route: ActivatedRoute, private api: ApiService, private UserData:User) {
    this.route.params.subscribe(params => {
      const userId:string = params['id'];
      api.getUser(userId).subscribe(response => {
        this.user = this.UserData.createFrom(response);
      });
    });
  }
}
