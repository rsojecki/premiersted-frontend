import {Component, Input} from '@angular/core';
import {ContestInterface} from '../interfaces/contest';
import {DomSanitizer, SafeStyle} from '@angular/platform-browser';
import {ResultInterface} from '../interfaces/result';
import {ApiService} from '../services/api.service';
import {AuthorizationService} from '../services/authorization.service';

@Component({
  selector: 'contest',
  templateUrl: 'contest.component.html'
})
export class ResultContestComponent {
  @Input() public contest: ContestInterface;
  @Input() public gameId: string;
  constructor(private sanitizer: DomSanitizer, private api: ApiService, private auth: AuthorizationService) {}
  public sanitazeUrl(url:string):SafeStyle {
    return this.sanitizer.bypassSecurityTrustStyle('url("' + url + '")');
  }
  public goTo(location: string): void {
    window.location.hash = location;
  }
  public isPlayed():boolean {
    return this.contest.status === 'PLAYED';
  }
  public isAuthorized():boolean {
    return (this.auth.getId() === this.contest.home.id) || (this.auth.getId() === this.contest.visitor.id);
  }
  public postResult(contestId:string):void {
    if (this.gameId) {
      /* TODO
      const result:ResultInterface = {
        home: 5,
        visitor:1
      };
      const data = {
        status: "PLAYED",
        comment: "Kurka wodna, chyba działa edycja!",
        result: result
      };
      this.api.postResult(this.gameId,contestId,data).subscribe(response => {
        console.log(response);
      });
      console.log('posted');
      */
    }
  }
}
