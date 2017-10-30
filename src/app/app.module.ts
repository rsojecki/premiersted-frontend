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
  MatButtonModule, MatCardModule, MatCheckboxModule, MatExpansionModule, MatGridListModule, MatIconModule,
  MatSidenavModule,
  MatTabsModule,
  MatToolbarModule
} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {UserEditComponent} from './user/edit/user.edit.component';
import {GamesComponent} from './games/games.component';

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
    FormsModule,
    RouterModule.forRoot([
      {path: '', component: HomeComponent, pathMatch: 'full'},
      {path: 'user/:id', component: UserComponent, pathMatch: 'full'},
      {path: 'user/edit/:id', component: UserEditComponent, pathMatch: 'full'},
      {path: 'games', component: GamesComponent, pathMatch: 'full'}
    ])
  ],
  declarations: [AppComponent, HomeComponent, UserComponent, UserEditComponent, GamesComponent],
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
