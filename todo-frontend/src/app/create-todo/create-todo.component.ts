import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { Todo } from "../todo";
import { TodoService } from "../todo.service";

@Component({
  selector: 'app-create-todo',
  templateUrl: './create-todo.component.html',
  styleUrls: ['./create-todo.component.css']
})
export class CreateTodoComponent implements OnInit {

  constructor(
    private router: Router, 
    private todoService: TodoService
  ) { }

  todos: Todo[] = [];
  todo: Todo;
  title = "";

  ngOnInit(): void {
  }

  createTodo(): void {
    if(this.title) {
      let createdTodo: Todo = {
        title: this.title,
        completed: false,
        createdAt: new Date()
      };

      this.todoService.createTodo(createdTodo).subscribe(todo => this.todo = todo);
      this.title = null;
      //this.router.navigateByUrl("/todos");
      this.router.navigate(['/todos']);
    }
  }
}
