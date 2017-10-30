import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Component, Inject} from '@angular/core';
import {ResultInterface, ResultSummaryInterface} from '../../interfaces/result';
import forbiddenWords from './forbidenWords';
@Component({
  selector: 'post-result-dialog',
  templateUrl: 'postResultDialog.contest.component.html',
})
export class PostResultDialogContestComponent {

  constructor(public dialogRef: MatDialogRef<PostResultDialogContestComponent>,
              @Inject(MAT_DIALOG_DATA) public resultSummary: ResultSummaryInterface) {
  }

  public onNoClick(): void {
    this.dialogRef.close();
  }

  public validateData(): boolean {
    const result:ResultInterface = this.resultSummary.result;
    return result.home !== null
      && result.visitor !== null
      && result.home <= 20
      && result.visitor <= 20
      && result.home >= 0
      && result.visitor >= 0
      && this.checkCommentSection(this.resultSummary.comment);
  }

  private checkCommentSection(comment: string):boolean {
    if (comment) {
      const substrings:string[] = forbiddenWords;
      let length:number = substrings.length;
      while (length--) {
        if (comment.indexOf(substrings[length]) !== -1) {
          return false;
        }
      }
    }
    return true;
  }
}
