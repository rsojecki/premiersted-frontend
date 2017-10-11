import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { APP_BASE_HREF, CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeView } from './home/home-view.component';
import { TransferHttpModule } from '../modules/transfer-http/transfer-http.module';
import { LeagueTileComponent } from './common/league-tile/league-tile.common';
import {LoginService} from './services/login.service';


@NgModule({
	imports: [
    CommonModule,
    HttpModule,
    TransferHttpModule,
    RouterModule.forRoot([
      { path: '', component: HomeView, pathMatch: 'full'},
      //{ path: 'user', component: UserView, pathMatch: 'full'},
      { path: 'lazy', loadChildren: './+lazy/lazy.module#LazyModule'}
    ])
	],
	declarations: [ AppComponent, HomeView, LeagueTileComponent ],
  exports: [ AppComponent ],
  providers: [
    LoginService
  ]
})
export class AppModule {}
