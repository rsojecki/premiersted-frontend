import {ChangeDetectorRef, Component, Input} from '@angular/core';
import {ContestInterface} from '../interfaces/contest';
import {DomSanitizer, SafeStyle} from '@angular/platform-browser';
import {AuthorizationService} from '../services/authorization.service';
import {PostResultDialogContestComponent} from './postResultDialog/postResultDialog.contest.component';
import {MatDialog} from '@angular/material';
import {ResultSummaryInterface} from '../interfaces/result';
import {isUndefined} from 'util';
import {ApiService} from '../services/api.service';

@Component({
  selector: 'contest',
  templateUrl: 'contest.component.html'
})
export class ResultContestComponent {

  @Input() public contest: ContestInterface;
  @Input() public gameId: string;

  constructor(private sanitizer: DomSanitizer, private dialog: MatDialog, private auth: AuthorizationService, private api: ApiService, private changeDetector: ChangeDetectorRef) {
    console.log(this.contest);
  }

  public sanitazeUrl(url: string): SafeStyle {
    return this.sanitizer.bypassSecurityTrustStyle('url("' + url + '")');
  }

  public goTo(location: string): void {
    window.location.hash = location;
  }

  public isPlayed(): boolean {
    return this.contest.status === 'PLAYED';
  }

  public isAuthorized(): boolean {
    return (this.auth.getId() === this.contest.home.user.id) || (this.auth.getId() === this.contest.visitor.user.id);
  }

  public openDialog(): void {
    let dialogRef:any = this.dialog.open(PostResultDialogContestComponent, {
      width: '300px',
      data: {
        result: {},
        comment: null,
        homeName: this.contest.home.user.name,
        visitorName: this.contest.visitor.user.name
      }
    });

    dialogRef.afterClosed().subscribe(resultSummary => {
      if (!isUndefined(resultSummary)) {
        this.postResult(resultSummary);
      }
    });
  }

  private postResult(data: ResultSummaryInterface): void {
    delete data['homeName'];
    delete data['visitorName'];
    data.status = 'PLAYED';
    this.api.postResult(this.gameId, this.contest.id, data).subscribe(response => {
      //window.location.reload();
      // TODO Do poprawy, dane nie odświerzają się w <user-ingress>
      this.contest.result = data.result;
      this.changeDetector.detectChanges();
      console.log(response);
    });
  }
}
