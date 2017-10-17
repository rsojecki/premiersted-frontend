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

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot([
      {path: '', component: HomeComponent, pathMatch: 'full'}
    ])
  ],
  declarations: [AppComponent, HomeComponent],
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
