package com.example.todobackend.services;

import com.example.todobackend.models.User;

import java.util.List;

public interface UserService {
    List<User> getAllUsers();
    User getUser(int id);
    void createUser(User user);
    User updateUser(int id, User user);
    User deleteUser(int id);

}
