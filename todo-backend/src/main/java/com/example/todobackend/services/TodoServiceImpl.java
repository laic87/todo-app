package com.example.todobackend.services;

import com.example.todobackend.models.Todo;
import com.example.todobackend.repositories.TodoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TodoServiceImpl implements TodoService {

    @Autowired
    private TodoRepository todoRepository;

    @Override
    public void createTodo(Todo todo) {
        todoRepository.save(todo);
    }

    @Override
    public Todo getTodo(int id) {
        return todoRepository.findById(id).orElse(null);
    }

    @Override
    public List<Todo> getAllTodos() {
        return (List<Todo>) todoRepository.findAll();
    }

    @Override
    public Todo updateTodo(int id, Todo todo) {
        Todo updateTodo = todoRepository.findById(id).orElse(null);
        if(updateTodo == null) {
            return null;
        }
        updateTodo.setTitle(todo.getTitle());
        updateTodo.setCreatedAt(todo.getCreatedAt());
        updateTodo.setCompleted(todo.isCompleted());
        todoRepository.save(updateTodo);
        return updateTodo;
    }

    @Override
    public Todo deleteTodo(int id) {
        Todo todo = todoRepository.findById(id).orElse(null);
        if(todo == null) {
            return null;
        }
        todoRepository.delete(todo);
        return todo;
    }
}
