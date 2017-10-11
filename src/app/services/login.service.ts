import {Injectable} from '@angular/core';
@Injectable()
export class LoginService {

  public logIn(): any {
    const w = window.open('http://10.168.20.144:7000/_github', 'Github Login');
    const send = () => {
      w.postMessage('ready?', '*');
      if (!w.closed) {
        setTimeout(send, 150);
      }
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
}
