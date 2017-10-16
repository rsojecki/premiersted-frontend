import { Component, OnInit } from '@angular/core';
import {LoginService} from '../services/login.service';
import { ActivatedRoute } from '@angular/router';

@Component({
	selector: 'demo-app',
  templateUrl: './game.component.html'
})
export class GameComponent implements OnInit {

  constructor(private route: ActivatedRoute, private github:LoginService) {
  }

  id: string;
  private sub: any;
  public game:any = {};

  ngOnInit() {
      this.sub = this.route.params.subscribe(params => {
        this.id = params['id'];
        console.log(this.id);
        this.github.getGame(this.id).subscribe(response => {
          console.log(response);
          this.game = response;
        });
    });
  }

  private getUser():void {
    //this.github.getUser()
  }
  
}
