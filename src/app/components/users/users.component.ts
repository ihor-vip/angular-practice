import {Component, Input, OnInit} from '@angular/core';
import {UserService} from "../../services";
import {IUser} from "../../interfaces";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit{
  users: IUser[] = [];

  constructor(private userService: UserService) {
  }

  ngOnInit() {
      this.userService.getUsers().subscribe(value => this.users = value)
    }
}
