package com.example.todobackend.repositories;

import com.example.todobackend.models.Todo;
import org.springframework.data.repository.CrudRepository;

public interface TodoRepository extends CrudRepository<Todo, Integer> {

}
