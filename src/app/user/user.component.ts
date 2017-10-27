import {Component} from '@angular/core';
import {User} from './user';
import {ApiService} from '../services/api.service';
import {ActivatedRoute} from '@angular/router';
import {ContestInterface} from '../interfaces/contest';
import {GameInterface} from '../interfaces/game';
import {DomSanitizer, SafeStyle} from '@angular/platform-browser';
import {ResultInterface} from '../interfaces/result';

@Component({
  selector: 'demo-app',
  templateUrl: 'user.component.html'
})
export class UserComponent {

  public contests:ContestInterface[];
  public games:GameInterface[];

  constructor(private route: ActivatedRoute, private api: ApiService, public user:User, private sanitizer: DomSanitizer) {
    this.route.params.subscribe(params => {
      const userId:string = params['id'];
      api.getUser(userId).subscribe(response => {
        this.user.createFrom(response);
        this.contests = response.contests.sort(function() {
          return .5 - Math.random();
        });
        this.games = response.games;
        console.log(this.games);
        console.log(this.contests);
      });
    });
  }
  public objectKeys = Object.keys;
  public sanitazeUrl(url:string):SafeStyle {
    return this.sanitizer.bypassSecurityTrustStyle('url("' + url + '")');
  }
  public postResult(gameId:string, contestId:string):void {
    const result:ResultInterface = {
      home: 1,
      visitor:0
    };
    const data = {
      status: "PLAYED",
      comment: "Kurka wodna, chyba działa!",
      result: result
    };
    this.api.postResult(gameId,contestId,data).subscribe(response => {
      console.log(response);
    });
    console.log('posted');
  }
  public goTo(location: string): void {
    window.location.hash = location;
  }
}
