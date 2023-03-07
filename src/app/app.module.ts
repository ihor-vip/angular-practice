import {LOCALE_ID, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule, Routes} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";
import {registerLocaleData} from '@angular/common'
import localeUK from '@angular/common/locales/uk'

import {AppComponent} from './app.component';
import {UserComponent} from './components/user/user.component';
import {UsersComponent} from './components/users/users.component';
import {PostsComponent} from './components/posts/posts.component';
import {CommentsComponent} from './components/comments/comments.component';
import {UserDetailsComponent} from './components/user-details/user-details.component';
import {HomeComponent} from './components/home/home.component';
import {UserResolveService} from "./services";
import {TestGuard} from "./guards/test.guard";
import { FormsComponent } from './components/forms/forms.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { TestComponent } from './components/test/test.component';

registerLocaleData(localeUK, 'uk')

const appRoute: Routes = [
  {path: '', redirectTo: 'posts', pathMatch: 'full'},
  {
    path: '', component: HomeComponent, children: [
      {
        // path: 'users', component: UsersComponent, canActivate: [TestGuard], canDeactivate: [TestGuard], children: [
        path: 'users', component: UsersComponent, canActivateChild: [TestGuard], canDeactivate: [TestGuard], children: [
          {
            path: ':id', component: UserDetailsComponent,
            resolve: {data: UserResolveService}
          },
        ]
      },
      {path: 'posts', component: PostsComponent},
      {path: 'comments', component: CommentsComponent},
    ]
  },
]

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    UsersComponent,
    PostsComponent,
    CommentsComponent,
    UserDetailsComponent,
    HomeComponent,
    FormsComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoute),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    {provide: LOCALE_ID, useValue:'uk'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
