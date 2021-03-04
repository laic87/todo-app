package com.example.todobackend.services;

import com.example.todobackend.models.User;
import com.example.todobackend.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AuthServiceImpl implements AuthService {

    @Autowired
    private UserRepository userRepository;

    @Override
    public boolean login(User user) {
        User userDb = userRepository.findByUsername(user.getUsername());
        if(userDb != null) {
            if(user.getPassword().equals(userDb.getPassword())) {
                return true;
            }
        }

        return false;
    }

    @Override
    public void register(User user) {

    }

    @Override
    public void logout(User user) {

    }
}
