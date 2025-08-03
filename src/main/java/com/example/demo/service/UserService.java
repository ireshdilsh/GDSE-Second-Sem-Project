package com.example.demo.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.example.demo.dto.UserDto;

@Service
public interface UserService {

    void postMethod(UserDto dto);

    List<UserDto> getMethod();

}
