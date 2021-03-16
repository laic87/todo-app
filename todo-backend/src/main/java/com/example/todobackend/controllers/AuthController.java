package com.example.todobackend.controllers;

import com.example.todobackend.models.StringResponse;
import com.example.todobackend.models.User;
import com.example.todobackend.services.AuthServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping(path = "api/auth")
public class AuthController {

    @Autowired
    private AuthServiceImpl authServiceImpl;

    @PostMapping(value = "/login", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<StringResponse> login(@RequestBody User user) {
        boolean result = authServiceImpl.login(user);
        if(result) {
            var test = new StringResponse("success");
            return new ResponseEntity<>(test, HttpStatus.OK);
        }
        var test = new StringResponse("failed");
        return new ResponseEntity<>(test, HttpStatus.UNAUTHORIZED);

    }

    @PostMapping(value = "/register", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<StringResponse> register(@RequestBody User user) {
        boolean result = authServiceImpl.register(user);
        if(result) {
            var test = new StringResponse("success");
            return new ResponseEntity<>(test, HttpStatus.OK);
        }
        var test = new StringResponse("username already taken!");
        return new ResponseEntity<>(test, HttpStatus.FORBIDDEN);
    }
}
