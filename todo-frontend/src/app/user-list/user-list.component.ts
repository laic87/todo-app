import { Component, OnInit } from '@angular/core';
import { User } from "../model/user";
import { UserService } from "../_services/user.service";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: User[];

  constructor(private userSerivce: UserService) { }

  ngOnInit(): void {
    this.userSerivce.findAll().subscribe(data => this.users = data);
  }
}