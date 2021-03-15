import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from 'rxjs/operators';

import { User } from "../model/user";

import { BASE_URL } from "../app-constants";

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  public login(user: User): Observable<any> {
    return this.http.post<any>(BASE_URL + "/login", user, httpOptions);
  }

  register(user: User): Observable<User> {
    let headers = new HttpHeaders({ 'Access-Control-Allow-Origin': '*','content-type': 'application/json'})
    return this.http.post<User>(BASE_URL + "/register", user, {"headers": headers});
  }

  public logout(): void {

  }
  
  getUserDetails(): any { 
    return localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null; 
  } 
 
  setDataInLocalStorage(variableName, data): void { 
    localStorage.setItem(variableName, data); 
  } 

  getToken(): any { 
    return localStorage.getItem('token'); 
  } 

  clearStorage(): void { 
    localStorage.clear(); 
  } 
}
