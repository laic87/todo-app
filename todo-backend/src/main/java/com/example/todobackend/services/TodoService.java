package com.example.todobackend.services;

import com.example.todobackend.models.Todo;

import java.util.List;

public interface TodoService {
    void createTodo(Todo todo);
    Todo getTodo(int id);
    List<Todo> getAllTodos();
    Todo updateTodo(int id, Todo todo);
    Todo deleteTodo(int id);
}