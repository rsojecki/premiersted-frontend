import {UserInterface} from '../../interfaces/user';
import {Component, Input} from '@angular/core';
import {DomSanitizer, SafeStyle} from '@angular/platform-browser';
import {ClubInterface} from '../../interfaces/club';
@Component({
  selector: 'user-ingress',
  templateUrl: 'ingress.user.component.html'
})
export class UserIngressComponent {
  @Input() public user: UserInterface;
  @Input() public club: ClubInterface;

  constructor(private sanitizer: DomSanitizer) {
  }

  public sanitazeUrl(url: string): SafeStyle {
    return this.sanitizer.bypassSecurityTrustStyle('url("' + url + '")');
  }
}
