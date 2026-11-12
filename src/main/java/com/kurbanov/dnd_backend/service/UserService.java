package com.kurbanov.dnd_backend.service;

import com.kurbanov.dnd_backend.model.User;
import com.kurbanov.dnd_backend.repository.UserRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {
    private final UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public User register(User user) {
        return userRepository.save(user);
    }

}
