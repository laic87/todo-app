import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../_services/auth.service';
import { User } from "../model/user";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user: User;
  errorMessage: string;
  isSuccessful = false;
  isSignUpFailed = false;

  constructor(
    private auth: AuthService,
    private router: Router
  ) { }


  ngOnInit(): void {
  }

  register(value: any): void {
    console.log(value);
    let user: User = {
      username: value.username,
      password: value.password
    };
    this.auth.register(user).subscribe(
      response => {
        console.log(response);
        this.user = response;
        this.isSuccessful = true;
        this.isSignUpFailed = false;
        this.router.navigate(["/todos"]);
      },
      error => {
        console.log(error);
        this.errorMessage = error.error.response;
      }
    )
  }

}
