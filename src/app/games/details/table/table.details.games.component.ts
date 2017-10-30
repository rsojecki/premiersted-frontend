import {Component, Input, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {DataSource} from '@angular/cdk/collections';
import 'rxjs/add/observable/of';
import {GameInterface} from '../../../interfaces/game';
import {LinkInterface} from '../../../interfaces/contest';

@Component({
  selector: 'table-details',
  templateUrl: 'table.details.games.component.html'
})

export class TableDetailsGamesComponent implements OnInit {
  @Input() public game: GameInterface;
  public displayedColumns:string[] = ['position', 'id', 'played', 'wins', 'loses', 'draws', 'scored', 'lost', 'balance', 'points'];
  public dataSource:ExampleDataSource = new ExampleDataSource();

  public ngOnInit(): void {
    data = this.game.table;
  }

  public getLinkById(id:string): LinkInterface {
    return this.game.competitors[id];
  }
}

export interface Element {
  balance: number;
  draws: number;
  id: string;
  loses: number;
  lost: number;
  played: number;
  points: number;
  position: number;
  scored: number;
  wins: number;
}

let data: Element[] = [];

export class ExampleDataSource extends DataSource<any> {

  public connect(): Observable<Element[]> {
    return Observable.of(data);
  }

  public disconnect():void {}
}
