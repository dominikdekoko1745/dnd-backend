package com.kurbanov.dnd_backend.controller;

import com.kurbanov.dnd_backend.model.User;
import com.kurbanov.dnd_backend.service.UserService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/users")
@CrossOrigin

public class UserController {
    private final UserService userService;
    public UserController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping("/register")
    public User createUser(@RequestBody User user) {
        return userService.register(user);
    }

    @PostMapping("/login")
    public User loginUser(@RequestBody User loginData) {
        return userService.login(loginData.getUsername(), loginData.getPassword());
        }
    }

<<<<<<< HEAD
=======

>>>>>>> main
