package com.example.demo.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.example.demo.dto.UserDto;
import com.example.demo.entity.User;

@Service
public interface UserService {

    User createUserAccount(UserDto dto);

    List<User> getAllUsers();

}
