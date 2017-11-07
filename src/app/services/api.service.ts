import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Http, Response} from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/catch';
import {AuthorizationService} from './authorization.service';
import {addGameInterface, addPlayerInterface} from '../interfaces/game';

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

  public addGame(data:addGameInterface): Observable<any> {
    return this.http.post(this.apiEndpoint + 'games' , data, this.createAuthorizationHeader())
      .map((res: Response) => {
        return res.json();
      })
      .catch((error: any) => Observable.throw('Server error'));
  }

  public postResult(game:string, contest:string, result:any): Observable<any> {
    return this.http.post(this.apiEndpoint + 'games/' + game + '/schedule/' + contest + '?force=1' , result, this.createAuthorizationHeader())
      .map((res: Response) => {
        return res.json();
      })
      .catch((error: any) => Observable.throw('Server error'));
  }

  public fuzzySearchClubs(query:string): Observable<any> {
    return this.http.get(this.apiEndpoint + 'clubs?search=' + query, this.createAuthorizationHeader())
      .map((res: Response) => {
        return res.json();
      })
      .catch((error: any) => Observable.throw('Server error'));
  }

  public addPlayerToGame(game:string, data:addPlayerInterface): Observable<any> {
    return this.http.post(this.apiEndpoint + 'games/' + game + '/competitors', data, this.createAuthorizationHeader())
      .map((res: Response) => {
        return res.json();
      })
      .catch((error: any) => Observable.throw('Server error'));
  }

  public removePlayerFromGame(game:string, userId:string): Observable<any> {
    const test:RequestOptions =this.createAuthorizationHeader();
    test.body =  {uid:userId};
    return this.http.delete(this.apiEndpoint + 'games/' + game + '/competitors', test)
      .map((res: Response) => {
        return res.json();
      })
      .catch((error: any) => Observable.throw('Server error'));
  }

  private createAuthorizationHeader(): RequestOptions {
    let headers: Headers = new Headers();
    headers.append('auth-token', this.auth.getToken());
    let requestOptions:RequestOptions = new RequestOptions();
    requestOptions.headers = headers;
    return requestOptions;
  }
}
