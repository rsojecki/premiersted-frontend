import {NgModule} from '@angular/core';
import {
  MatAutocompleteModule,
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatDialogModule,
  MatExpansionModule,
  MatFormFieldModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule
} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CommonModule} from '@angular/common';
import {HttpModule} from '@angular/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {UserComponent} from './user/user.component';
import {GamesComponent} from './games/games.component';
import {DetailsGamesComponent} from './games/details/details.games.component';
import {AppComponent} from './app.component';
import {ResultContestComponent} from './contest/contest.component';
import {UserIngressComponent} from './user/ingress/ingress.user.component';
import {TableDetailsGamesComponent} from './games/details/table/table.details.games.component';
import {PostResultDialogContestComponent} from './contest/postResultDialog/postResultDialog.contest.component';
import {ApiService} from './services/api.service';
import {AuthorizationService} from './services/authorization.service';
import {User} from './user/user';
import {Meta} from './user/meta';
import {JoinGameDialogGamesComponent} from './games/joinDialog/joinDialog.games.component';
import {UsersComponent} from './users/users.component';
import {AddGameComponent} from './games/add/add.game.component';
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
    MatSelectModule,
    MatGridListModule,
    MatTableModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSliderModule,
    MatAutocompleteModule,
    FormsModule,
    ReactiveFormsModule,
    MatSlideToggleModule,
    RouterModule.forRoot([
      {path: '', component: HomeComponent, pathMatch: 'full'},
      {path: 'user/:id', component: UserComponent, pathMatch: 'full'},
      {path: 'users', component: UsersComponent, pathMatch: 'full'},
      {path: 'games', component: GamesComponent, pathMatch: 'full'},
      {path: 'games/:id', component: DetailsGamesComponent, pathMatch: 'full'}
    ])
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    UserComponent,
    UsersComponent,
    GamesComponent,
    ResultContestComponent,
    DetailsGamesComponent,
    UserIngressComponent,
    TableDetailsGamesComponent,
    PostResultDialogContestComponent,
    JoinGameDialogGamesComponent,
    AddGameComponent
  ],
  bootstrap: [AppComponent, PostResultDialogContestComponent, JoinGameDialogGamesComponent, AddGameComponent],
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
