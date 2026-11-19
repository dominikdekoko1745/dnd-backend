package com.kurbanov.dnd_backend.service;

import com.kurbanov.dnd_backend.model.User;
import com.kurbanov.dnd_backend.repository.UserRepository;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserService {
    private final UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public User register(User user) {
        Optional<User> optionalUser = userRepository.findByUsername(user.getUsername());
        if (optionalUser.isPresent()) {
            throw new RuntimeException("Логин с таким именем уже существует");
        } else {return userRepository.save(user);}
    }

    public User login(String username, String password) {
        Optional<User> user = userRepository.findByUsername(username);
        if (user.isEmpty()) {throw new RuntimeException("Вы не ввели логин или пароль");}
        User foundUser = user.get();
        if (foundUser.getPassword().equals(password)) {
            return foundUser;
        } else {throw new RuntimeException("Неверный логин или пароль");}
    }
}

