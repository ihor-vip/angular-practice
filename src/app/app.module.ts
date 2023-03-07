import {LOCALE_ID, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";
import {RouterModule, Routes} from "@angular/router";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {registerLocaleData} from '@angular/common'
import localeUK from '@angular/common/locales/uk'

import {AppComponent} from './app.component';
import { IncrementPipe } from './pipes';
import { BoldAndColorDirective } from './directives';
import { HomeComponent } from './components/home/home.component';
import {UserModule} from "./modules/user/user.module";
import {UsersComponent} from "./modules/user/components/users/users.component";

registerLocaleData(localeUK, 'uk')

const appRoute: Routes = [
  {path: '', component: HomeComponent, children: [
      {path: 'users', loadChildren: () => import('./modules/user/user.module').then(value => value.UserModule)}
    ]}
]

@NgModule({
  declarations: [
    AppComponent,
    IncrementPipe,
    BoldAndColorDirective,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoute),
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    {provide: LOCALE_ID, useValue:'uk'},
    IncrementPipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
