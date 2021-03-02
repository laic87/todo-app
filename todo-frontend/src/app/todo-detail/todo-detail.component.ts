import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { Location } from "@angular/common";

import { Todo } from "../todo";
import { TodoService } from "../todo.service";
 
@Component({
  selector: 'app-todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrls: ['./todo-detail.component.css']
})
export class TodoDetailComponent implements OnInit {

  todo: Todo;

  constructor(
    private todoService: TodoService,
    private route: ActivatedRoute,
    private location: Location,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getTodo();
  }

  getTodo(): void {
    const id = +this.route.snapshot.paramMap.get("id");
    this.todoService.getTodo(id)
      .subscribe(todo => this.todo = todo);
  }

  updateTodo(todo: Todo): void {
    const id = +this.route.snapshot.paramMap.get("id");
    let trueOrFalse = this.testing(todo.completed);
    todo.completed = trueOrFalse,
    todo.createdAt = new Date();
    this.todoService.updateTodo(id, todo).subscribe(todo => this.todo = todo);
    //this.router.navigateByUrl("/todos")
    this.router.navigate(['/todos']);
  }

  testing(value: boolean): boolean {
    let swap = !value;
    return swap;
  }
}
