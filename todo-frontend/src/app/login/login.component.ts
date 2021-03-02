import { Component, OnInit } from '@angular/core';
import { User } from "../user";
import { LoginRegisterService } from "../login-register.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User;

  constructor(private loginRegister: LoginRegisterService) { }

  ngOnInit(): void {
  }

  login(value: any): void {
    let user: User = {
      username: value.username,
      password: value.password
    };
    this.loginRegister.login(user).subscribe(user => this.user = user);
  }

}
