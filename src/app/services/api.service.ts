import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/catch';

@Injectable()
export class ApiService {
  private apiEndpoint: String = 'https://api.premiersted.schibsted.ga/';

  constructor(private http: Http) {
  }

  public getUsers(): Observable<any> {
    return this.http.get(this.apiEndpoint + 'users')
      .map((res: Response) => {
        return res.json();
      })
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  public getUser(userId: string): Observable<any> {
    return this.http.get(this.apiEndpoint + 'users/' + userId)
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
    return this.http.get(this.apiEndpoint + 'games' + searchString)
      .map((res: Response) => {
        return res.json();
      })
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  public getGame(gameId: string): Observable<any> {
    return this.http.get(this.apiEndpoint + 'games/' + gameId)
      .map((res: Response) => {
        return res.json();
      })
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }
}
