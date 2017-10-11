import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpModule} from '@angular/http';
import {RouterModule} from '@angular/router';
import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {TransferHttpModule} from '../modules/transfer-http/transfer-http.module';
import {LeagueTileComponent} from './common/league-tile/league-tile.common';
import {LoginService} from './services/login.service';
import {UserInfoComponent} from './common/user-info/user-info.common';
import {AdminPanel} from './adminPanel/adminPanel.component';
import {UsersComponent} from './users/users.component';
import {UserComponent} from './user/user.component';
import {GameComponent} from './game/game.component';

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    TransferHttpModule,
    RouterModule.forRoot([
      {path: '', component: HomeComponent, pathMatch: 'full'},
      {path: 'admin', component: AdminPanel, pathMatch: 'full'},
      {path: 'users', component: UsersComponent, pathMatch: 'full'},
      {path: 'user/:id', component: UserComponent, pathMatch: 'full'},
      {path: 'game/:id', component: GameComponent, pathMatch: 'full'},
      {path: 'lazy', loadChildren: './+lazy/lazy.module#LazyModule'}
    ])
  ],
  declarations: [AppComponent, HomeComponent, UsersComponent, UserComponent, GameComponent, LeagueTileComponent, UserInfoComponent, AdminPanel],
  exports: [AppComponent],
  providers: [
    LoginService
  ]
})
export class AppModule {
}
