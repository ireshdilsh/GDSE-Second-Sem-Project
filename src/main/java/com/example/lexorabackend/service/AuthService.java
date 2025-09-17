package com.example.lexorabackend.service;

import com.example.lexorabackend.dto.AuthDto;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface AuthService {

    AuthDto createAccount(AuthDto authDto);

    List<AuthDto> getAllAccounts();
}
