package com.example.todobackend.services;

import com.example.todobackend.models.User;

public interface AuthService {
    void login(User User);
    void register(User user);
    void logout(User user);
}
