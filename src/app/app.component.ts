import {Component, OnInit} from '@angular/core';
import {LoginService} from './services/login.service';

@Component({
  selector: 'demo-app',
  templateUrl: 'app.component.html'
})
export class AppComponent implements OnInit {
  constructor(private github: LoginService) {
  }

  ngOnInit() {
    this.checkLogIn();
    window.addEventListener('message', (event) => {
      if (event.data.jwt) {
        console.log(event.data.jwt);
        this.github.setToken(event.data.jwt);
        this.checkLogIn();
      }
    });
  }

  public logged: boolean = true;

  public logIn(): void {
    this.github.logIn();
  }

  public logOff(): void {
    this.github.logOff();
    this.logged = false;
  }

  private checkLogIn(): void {
    this.logged = this.github.isLogged();
  }
}
