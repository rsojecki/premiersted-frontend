import {Injectable} from '@angular/core';
@Injectable()
export class LoginService {

  constructor(){
    this.user = this.getTokenData();
  }

  public logIn(): any {
    const w = window.open('https://api.premiersted.schibsted.ga/_github', 'Github Login');
    const send = () => {
      w.postMessage('ready?', '*');
      if (!w.closed) {
        setTimeout(send, 150);
      }
      this.user = this.getTokenData();
      console.log(this.user);
    };
    send();
  }

  public setToken(token): void {
    localStorage.setItem('premiersted', token);
    console.log(localStorage.getItem('premiersted'));
  }

  public getToken(): any {
    return localStorage.getItem('premiersted');
  }

  public logOff(): void {
    console.log(this.getTokenData());
    this.user = {};
    localStorage.removeItem('premiersted');
  }

  public isLogged(): boolean {
    console.log('checked');
    if (localStorage.getItem('premiersted') === null) {
      console.log('no checked');
      return false
    } else {
      console.log('yes checked');
      return true;
    }
  }

  public getUserData():any {
    console.log(this.user)
    return this.user;
  }

  public getTokenData():any {
    const token = this.getToken();
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace('-', '+').replace('_', '/');
    return JSON.parse(window.atob(base64));
  }

  private user:any = {};
}
