import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable, of, throwError } from "rxjs";
import { map, catchError } from 'rxjs/operators';

import { User } from "./user";


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  baseUrl = "http://localhost:8080";

  constructor(private http: HttpClient) { }

  public login(user: User): Observable<any> {
    return this.http.post<any>(this.baseUrl + "/login", user).pipe(
      catchError(err => of(["failed"]))
    );
  }

  register(user: User): void {
    this.http.post<User>(this.baseUrl + "/register", user);
  }

  public logout(): void {

  }






}
