import {Component, OnInit} from '@angular/core';
import {AuthorizationService} from './services/authorization.service';

@Component({
  selector: 'demo-app',
  templateUrl: 'app.component.html'
})
export class AppComponent implements OnInit {
  constructor(private auth: AuthorizationService) {

  }

  public ngOnInit():void {
    console.log(this.auth.isAuthorized());
  }

  public logIn(): void {
    this.auth.logIn();
  }

  public logOff(): void {
    this.auth.logOff();
  }

  public checkAuth():void {
    console.log(this.auth.isAuthorized());
  }
}
