import {Injectable} from '@angular/core';
import 'rxjs/add/operator/catch';
import {User} from '../user/user';

@Injectable()
export class AuthorizationService {

  private apiEndpoint: string = 'https://api.premiersted.schibsted.ga/';
  private jwtToken: string;

  constructor(private ActiveUser:User) {
    if (this.getTokenFromLocalStorage()) {
      this.jwtToken = this.getTokenFromLocalStorage();
      this.ActiveUser.createFrom(this.decodeJwtToken());
    }
  }

  public logIn():void {
    this.openLoginWindow();
    window.addEventListener('message', (event) => {
      if (event.data.jwt) {
        this.setUserData(event.data.jwt);
      }
    });
  }

  public logOff():void {
    this.removeUserData();
  }

  public isAuthorized():boolean {
    return !!this.jwtToken;
  }

  public getId():string {
    return this.ActiveUser.getId();
  }

  public getUser():User {
    return this.ActiveUser;
  }

  public getToken():string {
    return this.jwtToken;
  }

  private openLoginWindow():void {
    const w:Window = window.open(this.apiEndpoint + '_github', 'Github Login');
    function send():void {
      w.postMessage('ready?', '*');
      if (!w.closed) {
        setTimeout(send, 150);
      }
    }
    send();
  }

  private decodeJwtToken(): any {
    const token:string = this.jwtToken;
    if (token) {
      const base64Url:string = token.split('.')[1];
      const base64:string = base64Url.replace('-', '+').replace('_', '/');
      console.log(JSON.parse(window.atob(base64)));
      return JSON.parse(window.atob(base64));
    }
    return {};
  }

  private getTokenFromLocalStorage(): string {
    return localStorage.getItem('premiersted');
  }

  private setUserData(token:string): void {
    this.jwtToken = token;
    this.ActiveUser.createFrom(this.decodeJwtToken());
    localStorage.setItem('premiersted', token);
  }

  private removeUserData(): void {
    this.jwtToken = '';
    localStorage.removeItem('premiersted');
  }
}
