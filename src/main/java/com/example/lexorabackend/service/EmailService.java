package com.example.lexorabackend.service;

import org.springframework.stereotype.Service;

@Service
public interface EmailService {
    void sendRegistrationSuccessEmail(String email, String name);
}
