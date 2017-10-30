import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {AuthorizationService} from './services/authorization.service';
import {Router} from '@angular/router';

@Component({
  selector: 'demo-app',
  templateUrl: 'app.component.html',
  encapsulation: ViewEncapsulation.None,
  preserveWhitespaces: false
})
export class AppComponent implements OnInit {
  constructor(private auth: AuthorizationService, private router:Router) {

  }

  public ngOnInit():void {
    if (!this.auth.isAuthorized()) {
      this.router.navigate(['']);
    }
  }

  public logIn(): void {
    this.auth.logIn();
  }

  public getId(): string {
    return this.auth.getId();
  }

  public logOff(): void {
    this.auth.logOff();
  }

  public checkAuth():boolean {
    return this.auth.isAuthorized();
  }
}
