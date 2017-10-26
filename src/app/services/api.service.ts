import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Http, Response} from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/catch';
import {AuthorizationService} from './authorization.service';

@Injectable()
export class ApiService {
  private apiEndpoint: String = 'https://api.premiersted.schibsted.ga/';

  constructor(private http: Http, private auth: AuthorizationService) {
  }

  public getUsers(): Observable<any> {
    return this.http.get(this.apiEndpoint + 'users', this.createAuthorizationHeader())
      .map((res: Response) => {
        return res.json();
      })
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  public getUser(userId: string): Observable<any> {
    return this.http.get(this.apiEndpoint + 'users/' + userId, this.createAuthorizationHeader())
      .map((res: Response) => {
        return res.json();
      })
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  public getGames(query: string): Observable<any> {
    let searchString: string = '';
    if (query !== null) {
      searchString = '?name=' + query + '&limit=10';
    }
    return this.http.get(this.apiEndpoint + 'games' + searchString, this.createAuthorizationHeader())
      .map((res: Response) => {
        return res.json();
      })
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  public getGame(gameId: string): Observable<any> {
    return this.http.get(this.apiEndpoint + 'games/' + gameId, this.createAuthorizationHeader())
      .map((res: Response) => {
        return res.json();
      })
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  private createAuthorizationHeader(): RequestOptions {
    let headers: Headers = new Headers();
    headers.append('auth-token', this.auth.getToken());
    let requestOptions:RequestOptions = new RequestOptions();
    requestOptions.headers = headers;
    return requestOptions;
  }
}
