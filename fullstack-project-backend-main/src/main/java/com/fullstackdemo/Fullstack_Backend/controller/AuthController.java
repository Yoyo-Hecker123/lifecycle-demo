package com.fullstackdemo.Fullstack_Backend.controller;

import com.fullstackdemo.Fullstack_Backend.dto.AuthRequest;
import com.fullstackdemo.Fullstack_Backend.model.User;
import com.fullstackdemo.Fullstack_Backend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/auth")
@CrossOrigin("http://localhost:3000")
public class AuthController {

    @Autowired
    private UserRepository userRepository;

    @PostMapping("/register")
    public String register(@RequestBody User newUser) {
        if(userRepository.findByUsername(newUser.getUsername()) != null){
            return "Username already exists!";
        }
        userRepository.save(newUser);
        return "User registered successfully!";
    }

    @PostMapping("/login")
    public String login(@RequestBody AuthRequest request) {
        User user = userRepository.findByUsername(request.getUsername());
        if(user == null) return "User not found!";
        if(!user.getPassword().equals(request.getPassword())) return "Invalid password!";
        return "Login successful!";
    }
}
