import {Component} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {UserService} from "../../services";
import {IUser} from "../../interfaces";

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent {
  user: IUser

  constructor(private activatedRoute: ActivatedRoute,
              private userService: UserService) {

    this.activatedRoute.data.subscribe(value => this.user = value['data'])
  }
}
