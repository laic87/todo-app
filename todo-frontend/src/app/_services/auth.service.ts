import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from 'rxjs/operators';

import { User } from "../model/user";

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl = "http://localhost:8080";

  constructor(private http: HttpClient) { }

  public login(user: User): Observable<any> {
    return this.http.post<any>(this.baseUrl + "/login", user, httpOptions);
  }

  register(user: User): Observable<User> {
    let headers = new HttpHeaders({ 'Access-Control-Allow-Origin': '*','content-type': 'application/json'})
    return this.http.post<User>(this.baseUrl + "/register", user, {"headers": headers});
  }

  public logout(): void {

  }
}
