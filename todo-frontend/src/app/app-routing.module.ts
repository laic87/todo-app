import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { TodoListComponent } from "./todo-list/todo-list.component";
import { CreateTodoComponent } from "./create-todo/create-todo.component";
import { TodoDetailComponent } from "./todo-detail/todo-detail.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { LogoutComponent } from './logout/logout.component';

const routes: Routes = [
  { path: "", redirectTo: "login", pathMatch: "full"},
  { path: "login", component: LoginComponent},
  { path: "register", component: RegisterComponent },
  { path: "todos", component: TodoListComponent },
  { path: "create", component: CreateTodoComponent },
  { path: "todo/:id", component: TodoDetailComponent },
  { path: "logout", component: LogoutComponent},
  { path: "404", component: PageNotFoundComponent },
  { path: "**", redirectTo: "404"},
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
