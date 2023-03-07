import {Component, Input, OnInit} from '@angular/core';
import {DataTransferService, UserService} from "../../services";
import {IUser} from "../../interfaces";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  age: number;
  users: IUser[] = [];

  constructor(private userService: UserService, private transferService: DataTransferService) {
  }

  ngOnInit() {
    this.userService.getUsers().subscribe(value => this.users = value)

    // this.age = this.transferService.getAgeSnapShot()
    this.transferService.getAgeData().subscribe(value => this.age = value)
  }
}
