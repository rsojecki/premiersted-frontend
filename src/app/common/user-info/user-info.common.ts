import { Component } from '@angular/core';
import {LoginService} from '../../services/login.service';

@Component({
  selector: 'user-info',
  templateUrl: './user-info.common.html'

})
export class UserInfoComponent {
  constructor(private github:LoginService){
    if (github.isLogged()) {
      const data = github.getUserData();
      console.log(data);
      this.name = data.meta.name;
      this.id = data.id;
      this.avatarUrl = data.meta.avatar_url;
      this.show = true;
    } else {
      this.show = false;
    }
  }

  public show:boolean = false;
  public name:string;
  public id:string = '';
  public avatarUrl:string;
}