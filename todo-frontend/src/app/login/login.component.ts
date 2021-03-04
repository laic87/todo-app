import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { User } from "../user";
import { AuthService } from "../auth.service"; 
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User;
  success: string;
  error: string;

  constructor(
    private auth: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  login(value: any): void {
    let user: User = {
      username: value.username,
      password: value.password
    };

    this.auth.login(user).subscribe((res) => {
      if (res.response == "success")
        this.router.navigate(["/todos"]);
      else {
        this.error = res[0];
      }
    });
  }
}
