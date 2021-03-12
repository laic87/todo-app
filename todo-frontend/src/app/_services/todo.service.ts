import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { catchError, map, tap } from "rxjs/operators";

import { Todo } from "../model/todo";

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private baseUrl = "http://localhost:8080";

  constructor(private http: HttpClient) { 
    
  }

  getTodos(): Observable<Todo[]> {
    let headers = new HttpHeaders({ 'Access-Control-Allow-Origin': '*','content-type': 'application/json'})
    return this.http.get<Todo[]>(this.baseUrl + "/todos", {"headers": headers})
      .pipe(
        catchError(this.handleError<Todo[]>("getTodos", []))
      );
  }

  getTodo(id: number): Observable<Todo> {
    return this.http.get<Todo>(this.baseUrl + `/todo/${id}`)
      .pipe(
        catchError(this.handleError<Todo>("getTodo"))
      );
  }

  createTodo(todo: Todo): Observable<Todo> {
    return this.http.post<Todo>(this.baseUrl + "/todo", todo)
      .pipe(
        catchError(this.handleError("add todo", todo))
      );
  }

  updateTodo(id: number, todo: Todo): Observable<Todo> {
    return this.http.put<Todo>(this.baseUrl + `/todo/${id}`, todo);
  }

  deleteTodo(id: number): Observable<Todo> {
    return this.http.delete<Todo>(this.baseUrl + `/todo/${id}`)
      .pipe(
        catchError(this.handleError<Todo>("getTodo"))
      );
  }


    /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }


}
