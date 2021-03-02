package com.example.todobackend.controllers;

import com.example.todobackend.models.StringResponse;
import com.example.todobackend.models.Todo;
import com.example.todobackend.services.TodoServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class TodoController {

    @Autowired
    private TodoServiceImpl todoServiceImpl;

    @GetMapping(value = "/home", produces = MediaType.APPLICATION_JSON_VALUE)
    public StringResponse home() {
        return new StringResponse("Hello World");
    }

    @GetMapping(value = "/todos")
    public ResponseEntity<List<Todo>> getAllTodos() {
        List<Todo> todos = todoServiceImpl.getAllTodos();
        if(todos == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }

        return new ResponseEntity<>(todos, HttpStatus.OK);
    }

    @GetMapping(value = "/todo/{id}")
    public ResponseEntity<Todo> getTodo(@PathVariable int id) {
        Todo todo = todoServiceImpl.getTodo(id);
        if(todo == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<Todo>(todo, HttpStatus.OK);
    }

    @PostMapping(value = "/todo")
    public void createTodo(@RequestBody Todo todo) {
        todoServiceImpl.createTodo(todo);
    }

    @PutMapping(value = "/todo/{id}")
    public ResponseEntity<Todo> updateTodo(@PathVariable int id, @RequestBody Todo todo) {
        Todo updatedTodo = todoServiceImpl.updateTodo(id, todo);
        if(updatedTodo == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(updatedTodo, HttpStatus.OK);
    }

    @DeleteMapping(value = "/todo/{id}")
    public ResponseEntity<Todo> deleteTodo(@PathVariable int id) {
        Todo todo = todoServiceImpl.deleteTodo(id);
        if(todo == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(todo, HttpStatus.OK);
    }
}