import { Component, OnInit } from '@angular/core';
import { User } from "../user";
import { UserService } from "../user.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(
    private userService: UserService
  ) { }

  user: User;

  ngOnInit(): void {
  }

  
  register(value: any): void {
    let user: User = {
      username: value.username,
      password: value.password
    };
    //this.loginRegister.register(user).subscribe();
    this.userService.save(user);
  }

}
