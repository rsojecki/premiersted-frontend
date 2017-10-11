import { Component, OnInit } from '@angular/core';
import {LoginService} from '../services/login.service';
import { ActivatedRoute } from '@angular/router';

@Component({
	selector: 'demo-app',
  templateUrl: './user.component.html'
})
export class UserComponent implements OnInit {

  constructor(private route: ActivatedRoute, private github:LoginService) {
  }

  id: string;
  private sub: any;
  public user:any = {};
  public name:String = "";
  public login:String = "";
  public avatarUrl:String = "";

  ngOnInit() {
      this.sub = this.route.params.subscribe(params => {
        this.id = params['id'];
        console.log(this.id);
        this.github.getUser(this.id).subscribe(response => {
          console.log(response);
          this.user = response;
          this.name = response.meta.name;
          this.login = response.meta.login;
          this.avatarUrl = response.meta.avatar_url;
          console.log(response);
        });
    });
  }

  private getUser():void {
    //this.github.getUser()
  }
  
}
