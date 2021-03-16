import { Component, OnInit, SystemJsNgModuleLoader } from '@angular/core';
import { Router } from "@angular/router";
import { User } from "../model/user";
import { AuthService } from "../_services/auth.service";
import { TokenStorageService } from "../_services/token-storage.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: any = {
    username: null,
    passwword: null
  };

  user: User;
  isLoggdIn = false;
  isLoginFailed = false;
  errorMessage = "";

  constructor(
    private auth: AuthService,
    private router: Router,
    private tokenStorage: TokenStorageService
  ) { }

  ngOnInit(): void {
  }

  login(value: any): void {
    let user: User = {
      username: value.username,
      password: value.password
    };

    let name = user.username;
    this.auth.login(user).subscribe(
      response => {
        if(response.response == "success") {
          this.tokenStorage.saveToken(name);
          this.router.navigate(["/todos"]);
        }
      },
      error => {
        this.errorMessage = error.error.response;
      }
    )
  }
}
