package com.example.todobackend.services;

import com.example.todobackend.models.User;
import com.example.todobackend.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepository userRepository;

    @Override
    public List<User> getAllUsers() {
        return (List<User>) userRepository.findAll();
    }

    @Override
    public User getUser(int id) {
        return userRepository.findById(id).orElse(null);
    }

    @Override
    public void createUser(User user) {
        userRepository.save(user);
    }

    @Override
    public User updateUser(int id, User user) {
        User updateUser = userRepository.findById(id).orElse(null);
        if(updateUser == null) {
            return null;
        }
        updateUser.setUsername(user.getUsername());
        updateUser.setPassword(user.getPassword());
        userRepository.save(updateUser);
        return updateUser;
    }

    @Override
    public User deleteUser(int id) {
        User user = userRepository.findById(id).orElse(null);
        if(user == null) {
            return null;
        }
        userRepository.delete(user);
        return user;
    }
}
