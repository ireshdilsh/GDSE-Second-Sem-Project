package com.example.lexorabackend.service.impl;

import com.example.lexorabackend.dto.AuthDto;
import com.example.lexorabackend.entity.Auth;
import com.example.lexorabackend.repository.AuthRepository;
import com.example.lexorabackend.service.AuthService;
import com.example.lexorabackend.util.APIResponse;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class AuthServiceImpl implements AuthService {

    private final ModelMapper modelMapper;

    @Autowired
    private AuthRepository authRepository;

    Logger logger = LoggerFactory.getLogger(AuthServiceImpl.class);

    @Override
    public AuthDto createAccount(AuthDto authDto) {
        logger.info("createAccount");
        return modelMapper.map(authRepository.save(modelMapper.map(authDto, Auth.class)), AuthDto.class);
    }

    @Override
    public List<AuthDto> getAllAccounts() {
        logger.info("getAllAccounts");
        List<Auth> accounts = authRepository.findAll();

        if (accounts.isEmpty()) {
            logger.info("No accounts found");
            throw new RuntimeException("No accounts found");
        }
        return authRepository.findAll().stream().map(account -> modelMapper.map(account, AuthDto.class)).toList();
    }
}
