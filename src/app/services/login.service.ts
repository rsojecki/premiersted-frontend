import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Http, Response} from '@angular/http';
import { Headers } from '@angular/http';
import 'rxjs/add/operator/catch';
@Injectable()
export class LoginService {

  constructor(private http: Http) {
    if(this.isLogged()){
      this.user = this.getTokenData();
    }
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
      location.reload();
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
    location.reload();
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

  public getUserData(): any {
    console.log(this.user);
    return this.user;
  }

  public getTokenData(): any {
    const token = this.getToken();
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace('-', '+').replace('_', '/');
    return JSON.parse(window.atob(base64));
  }

  private createAuthorizationHeader(headers: Headers) {
    //headers.append('auth-token', this.getToken());
  }

  public getUsers(): Observable<any> {
    let headers = new Headers();
    this.createAuthorizationHeader(headers);
    return this.http.get('https://api.premiersted.schibsted.ga/users')
      .map((res: Response) => {
        return res.json();
      })
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  public getUser(userId:string): Observable<any> {
    let headers = new Headers();
    this.createAuthorizationHeader(headers);
    return this.http.get('http://7428da61.eu.ngrok.io/users/' + userId)
      .map((res: Response) => {
        return res.json();
      })
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  public setUser(user:any): Observable<any> {
    let headers = new Headers();
    this.createAuthorizationHeader(headers);
    return this.http.post('https://api.premiersted.schibsted.ga/users', user)
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  public getGames(): Observable<any> {
    let headers = new Headers();
    this.createAuthorizationHeader(headers);
    return this.http.get('http://7428da61.eu.ngrok.io/games')
      .map((res: Response) => {
        return res.json();
      })
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }
  public getGame(gameId:string): Observable<any> {
    let headers = new Headers();
    this.createAuthorizationHeader(headers);
    return this.http.get('http://7428da61.eu.ngrok.io/games/' + gameId)
      .map((res: Response) => {
        return res.json();
      })
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  private user: any = {};
}
