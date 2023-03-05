import {Component} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {UserService} from "../../services/user.service";
import {User} from "../../models/User";

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent {
  user: User

  constructor(private activatedRoute: ActivatedRoute,
              private userService: UserService) {

    this.activatedRoute.data.subscribe(value => this.user = value['data'])
  }
}
