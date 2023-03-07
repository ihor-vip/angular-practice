import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./components/home/home.component";


const appRoute: Routes = [
  {path: '', component: HomeComponent, children: [
      {path: 'users', loadChildren: () => import('./modules/user/user.module').then(value => value.UserModule)}
    ]}
]
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoute)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
