import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { User } from "../model/user";
import { AuthService } from "../_services/auth.service"; 

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

    this.auth.login(user).subscribe(
      response => {
        if(response.response === "success") {
          this.router.navigate(["/todos"]);
        } else {
          this.error = response[0];
          console.log("hej!");
        }
      }
    )
  }
}
