package com.kurbanov.dnd_backend.controller;

import com.kurbanov.dnd_backend.model.User;
import com.kurbanov.dnd_backend.service.UserService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/users")
@CrossOrigin

public class UserController {
    private final UserService userService;
    public UserController(UserService userService) {
        this.userService = userService;
    }
    @PostMapping
    public User createUser(@RequestBody User user) {
        return userService.register(user);
    }
    /*/честно в душе не чаю как сделать login, я не понимаю где должна быть логика, как методы должны вызываться
    до сих пор не понимаю что делают:
    private final UserService userService;
    public UserController(UserService userService) {
        this.userService = userService;
    }

    private final UserService userService;
    public UserController(UserService userService) {
        this.userService = userService;
    }/*/


}
