import {Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {User} from '../user';
import {ApiService} from '../../services/api.service';

@Component({
  selector: 'demo-app',
  templateUrl: 'user.edit.component.html'
})
export class UserEditComponent {

  constructor(private route: ActivatedRoute, private api: ApiService, public user:User) {
    this.route.params.subscribe(params => {
      const userId:string = params['id'];
      api.getUser(userId).subscribe(response => {
        this.user.createFrom(response);
      });
    });
  }
}
