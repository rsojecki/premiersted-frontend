import { Component, OnInit } from '@angular/core';
import { TransferHttp } from '../../modules/transfer-http/transfer-http';
import { Observable } from 'rxjs/Observable';

@Component({
	selector: 'home-view',
  templateUrl: './adminPanel.component.html'
})
export class HomeView {

  constructor(private http: TransferHttp) {}
  
}
