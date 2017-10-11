import { Component, OnInit } from '@angular/core';
import { TransferHttp } from '../../modules/transfer-http/transfer-http';
import { Observable } from 'rxjs/Observable';

@Component({
	selector: 'home-view',
	template: `<h3>awdawdawd</h3>`
})
export class HomeView {
  public subs: string;

  constructor(private http: TransferHttp) {}

  /*ngOnInit() {
    this.http.get('http://localhost:8000/data').subscribe(res => {
      this.subs = `${res.greeting} ${res.name}`;
    }, err => {
      console.log(err);
    });
  }*/
}
