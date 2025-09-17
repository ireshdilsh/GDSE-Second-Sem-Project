package com.example.lexorabackend.service;

import com.example.lexorabackend.dto.AuthResponse;
import com.example.lexorabackend.dto.LoginRequest;
import com.example.lexorabackend.dto.RegisterRequest;
import org.springframework.stereotype.Service;

@Service
public interface AuthService {
    AuthResponse register(RegisterRequest request);
    AuthResponse login(LoginRequest request);
}
