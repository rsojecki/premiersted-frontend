import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {AuthorizationService} from './services/authorization.service';

@Component({
  selector: 'demo-app',
  templateUrl: 'app.component.html',
  encapsulation: ViewEncapsulation.None,
  preserveWhitespaces: false
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

  public checkAuth():boolean {
    return this.auth.isAuthorized();
  }
}
