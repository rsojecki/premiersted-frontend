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
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    CommonModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot([
      {path: '', component: HomeComponent, pathMatch: 'full'},
      {path: 'user/:id', component: UserComponent, pathMatch: 'full'}
    ])
  ],
  declarations: [AppComponent, HomeComponent, UserComponent],
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
