package com.example.lexorabackend.service;

import com.example.lexorabackend.dto.AuthDto;
import com.example.lexorabackend.dto.AuthRequestDto;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface AuthService {

    AuthDto createAccount(AuthDto authDto);

    List<AuthDto> getAllAccounts();

    AuthDto authenticate(AuthRequestDto authRequestDto);

    AuthDto deleteAuthorAccount(Long id);

    AuthDto updateAuthAccount(Long id, AuthDto authDto);

}

