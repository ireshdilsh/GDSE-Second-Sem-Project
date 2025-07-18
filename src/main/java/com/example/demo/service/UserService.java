package com.example.demo.service;

import org.springframework.stereotype.Service;

import com.example.demo.dto.UserDto;
import com.example.demo.entity.User;

@Service
public interface UserService {

    User createUserAccount(UserDto dto);

}
