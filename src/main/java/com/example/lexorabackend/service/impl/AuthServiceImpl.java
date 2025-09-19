package com.example.lexorabackend.service.impl;

import com.example.lexorabackend.dto.AuthDto;
import com.example.lexorabackend.dto.AuthRequestDto;
import com.example.lexorabackend.entity.Auth;
import com.example.lexorabackend.repository.AuthRepository;
import com.example.lexorabackend.security.jwt.JwtUtil;
import com.example.lexorabackend.service.AuthService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class AuthServiceImpl implements AuthService {

    @Autowired
    private AuthRepository authRepository;

    @Autowired
    private ModelMapper modelMapper;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private JwtUtil jwtUtil;

    @Autowired
    private AuthenticationManager authenticationManager;

    @Override
    public AuthDto createAccount(AuthDto authDto) {
        // Check if user already exists
        if (authRepository.findByEmail(authDto.getEmail()).isPresent()) {
            throw new RuntimeException("User with this email already exists");
        }

        // Convert DTO to entity
        Auth auth = modelMapper.map(authDto, Auth.class);

        // Encode the password
        auth.setPassword(passwordEncoder.encode(auth.getPassword()));

        // Save the user
        Auth savedAuth = authRepository.save(auth);

        // Generate JWT token
        String token = jwtUtil.generateToken(savedAuth.getEmail());

        // Map entity to DTO
        AuthDto responseDto = modelMapper.map(savedAuth, AuthDto.class);
        responseDto.setToken(token);
        responseDto.setPassword(null); // Don't return the password

        return responseDto;
    }

    @Override
    public List<AuthDto> getAllAccounts() {
        List<Auth> authors = authRepository.findAll();
        return authors.stream()
                .map(auth -> {
                    AuthDto dto = modelMapper.map(auth, AuthDto.class);
                    dto.setPassword(null); // Don't return the password
                    return dto;
                })
                .collect(Collectors.toList());
    }

    @Override
    public AuthDto authenticate(AuthRequestDto authRequestDto) {
        // Authenticate the user
        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        authRequestDto.getEmail(),
                        authRequestDto.getPassword()
                )
        );

        SecurityContextHolder.getContext().setAuthentication(authentication);

        // Retrieve the authenticated user
        Auth auth = authRepository.findByEmail(authRequestDto.getEmail())
                .orElseThrow(() -> new UsernameNotFoundException("User not found with email: " + authRequestDto.getEmail()));

        // Generate JWT token
        String token = jwtUtil.generateToken(auth.getEmail());

        // Map entity to DTO
        AuthDto responseDto = modelMapper.map(auth, AuthDto.class);
        responseDto.setToken(token);
        responseDto.setPassword(null);
//        new add
        responseDto.setRole(auth.getRole());

        return responseDto;
    }

    @Override
    public AuthDto deleteAuthorAccount(Long id) {
        Auth auth = authRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("User not found with id: " + id));
        authRepository.delete(auth);
        AuthDto responseDto = modelMapper.map(auth, AuthDto.class);
        responseDto.setPassword(null); // Don't return the password
        return responseDto;
    }

    @Override
    public AuthDto updateAuthAccount(Long id, AuthDto authDto) {
        Auth auth = authRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("User not found with id: " + id));

        if (auth != null){
            Auth newAuth = modelMapper.map(authDto, Auth.class);

            auth.setName(newAuth.getName());
            auth.setBio(newAuth.getBio());
            auth.setWebsite(newAuth.getWebsite());
            auth.setTwitterUsername(newAuth.getTwitterUsername());

            AuthDto dto = modelMapper.map(authRepository.save(auth), AuthDto.class);
            return dto;
        }
        return null;
    }
}

