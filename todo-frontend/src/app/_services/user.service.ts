import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { User } from "../model/user";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userUrl: string;

  constructor(private http: HttpClient) { 
    this.userUrl = "localhost:8080";
  }

  public findAll(): Observable<User[]> {
    return this.http.get<User[]>(this.userUrl + "/users");
  }

  public findUser(id: number): Observable<User> {
    return this.http.get<User>(this.userUrl + `/user/${id}`);
  }

  public save(user: User): void {
    this.http.post<User>(this.userUrl + "/user", user);
  }

  public updateUser(id: number, user: User): Observable<User> {
    return this.http.put<User>(this.userUrl + `/user/${id}`, user);
  }

  public deleteUser(id: number): void {
    this.http.delete(this.userUrl + `/user/${id}`);
  }
}
