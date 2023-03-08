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
import {AppRoutingModule} from "./app-routing.module";
import { TestComponent } from './components/test/test.component';
import { HeaderComponent } from './components/header/header.component';
import { CarsComponent } from './components/cars/cars.component';
import { CarComponent } from './components/cars/car/car.component';
import { LoginComponent } from './components/login/login.component';

registerLocaleData(localeUK, 'uk')



@NgModule({
  declarations: [
    AppComponent,
    IncrementPipe,
    BoldAndColorDirective,
    HomeComponent,
    TestComponent,
    HeaderComponent,
    CarsComponent,
    CarComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
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
