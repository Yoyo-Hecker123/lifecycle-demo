package com.fullstackdemo.Fullstack_Backend.repository;

import com.fullstackdemo.Fullstack_Backend.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
    User findByUsername(String username);
}
