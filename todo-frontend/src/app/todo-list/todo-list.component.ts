import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { Todo } from "../todo";
import { TodoService } from "../todo.service";

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  todos: Todo[];
  todo: Todo;
  complete = false;

  constructor(
    private router: Router,
    private todoService: TodoService
  ) { }

  ngOnInit(): void {
    this.getTodos();
  }

  getTodos(): void {
    this.todoService.getTodos().subscribe(todos => this.todos = todos);
  }

  editTodo(id: number): void {
    //this.router.navigateByUrl(`/todo/${id}`)
    this.router.navigate([`/todo/${id}`]);
  } 

  deleteTodo(id: number): void {
    this.todoService.deleteTodo(id).subscribe(
      (todo) =>{
        console.log(todo);
        this.ngOnInit();
      }),
      err => {
        console.log("Error");
      }
  }
  
}
