import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./components/home/home.component";
import {LoginComponent} from "./components/login/login.component";
import {CarsComponent} from "./components/cars/cars.component";


const appRoute: Routes = [
  {path: '', component: HomeComponent, children: [
      {path: '', redirectTo: 'login', pathMatch: 'full'},
      {path: 'login', component: LoginComponent},
      {path: 'cars', component:CarsComponent},
      {path: 'admin', loadChildren: () => import('./components/admin/admin.module').then(value => value.AdminModule)}
    ]
  }
]
@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(appRoute)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
