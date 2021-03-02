import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { User } from "./user";

@Injectable({
  providedIn: 'root'
})
export class LoginRegisterService {

  constructor(private http: HttpClient) { }

  baseUrl = "http://localhost:8080";

  login(user: User): Observable<User> {
    return this.http.post<User>(this.baseUrl  + "/login", user);
  }

  register(user: User): Observable<User> { 
    return this.http.post<User>(this.baseUrl + "/register", user);
  }
}
