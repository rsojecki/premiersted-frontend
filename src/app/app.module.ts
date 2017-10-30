import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpModule} from '@angular/http';
import {RouterModule} from '@angular/router';
import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {ApiService} from './services/api.service';
import {FormsModule} from '@angular/forms';
import {AuthorizationService} from './services/authorization.service';
import {Meta} from './user/meta';
import {User} from './user/user';
import {UserComponent} from './user/user.component';
import {
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatSidenavModule, MatTableModule,
  MatTabsModule,
  MatToolbarModule
} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {GamesComponent} from './games/games.component';
import {ResultContestComponent} from './contest/contest.component';
import {DetailsGamesComponent} from './games/details/details.games.component';
import {IngressGameComponent} from './games/ingress/ingress.game.component';
import {UserIngressComponent} from './user/ingress/ingress.user.component';
import {TableDetailsGamesComponent} from './games/details/table/table.details.games.component';

@NgModule({
  imports: [
    MatToolbarModule,
    MatCardModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatTabsModule,
    MatExpansionModule,
    CommonModule,
    HttpModule,
    MatIconModule,
    MatSidenavModule,
    MatGridListModule,
    MatTableModule,
    FormsModule,
    RouterModule.forRoot([
      {path: '', component: HomeComponent, pathMatch: 'full'},
      {path: 'user/:id', component: UserComponent, pathMatch: 'full'},
      {path: 'games', component: GamesComponent, pathMatch: 'full'},
      {path: 'games/:id', component: DetailsGamesComponent, pathMatch: 'full'}
    ])
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    UserComponent,
    GamesComponent,
    IngressGameComponent,
    ResultContestComponent,
    DetailsGamesComponent,
    UserIngressComponent,
    TableDetailsGamesComponent
  ],
  exports: [AppComponent],
  providers: [
    ApiService,
    AuthorizationService,
    User,
    Meta
  ]
})
export class AppModule {
}
