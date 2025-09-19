package com.example.lexorabackend.service.impl;

import com.example.lexorabackend.service.EmailService;
import lombok.RequiredArgsConstructor;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class EmailServiceImpl implements EmailService {

    private final JavaMailSender mailSender;

    public void sendRegistrationSuccessEmail(String to, String name) {
        String subject = "Welcome to Lexora";
        String body = "Hi " + name + ",\n\nYour registration was successful!\n\nRegards,\nTeam";

        SimpleMailMessage message = new SimpleMailMessage();
        message.setTo(to);
        message.setSubject(subject);
        message.setText(body);
        mailSender.send(message);
    }
}
