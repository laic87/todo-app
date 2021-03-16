package com.example.todobackend.services;

import com.example.todobackend.models.User;
import com.example.todobackend.repositories.UserRepository;
import com.example.todobackend.ultility.PasswordEncryption;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

import static com.example.todobackend.ultility.PasswordEncryption.verifyHash;

@Service
public class AuthServiceImpl implements AuthService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private UserServiceImpl userService;

    @Override
    public boolean login(User userDTO) {
        User userDb = userRepository.findByUsername(userDTO.getUsername());
        if(userDb != null) {
           return (verifyHash(userDTO.getPassword(), userDb.getPassword()));
        }

        return false;
    }

    @Override
    public boolean register(User userDTO) {
        boolean usernameExists = userRepository.existsByUsername(userDTO.getUsername());
        if(!usernameExists) {
            userService.createUser(userDTO);
            return true;
        }
        return false;
    }

    @Override
    public void logout(User user) {

    }
}
