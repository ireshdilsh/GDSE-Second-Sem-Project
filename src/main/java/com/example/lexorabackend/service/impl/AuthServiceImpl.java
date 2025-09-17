package com.example.lexorabackend.service.impl;

import com.example.lexorabackend.dto.AuthResponse;
import com.example.lexorabackend.dto.LoginRequest;
import com.example.lexorabackend.dto.RegisterRequest;
import com.example.lexorabackend.entity.Auth;
import com.example.lexorabackend.repository.AuthRepository;
import com.example.lexorabackend.security.JwtService;
import com.example.lexorabackend.service.AuthService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AuthServiceImpl implements AuthService {

    private final AuthRepository authRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;
    private final AuthenticationManager authenticationManager;

    @Override
    public AuthResponse register(RegisterRequest request) {
        // Check if user already exists
        if (authRepository.existsByEmail(request.getEmail())) {
            throw new RuntimeException("Email already in use");
        }

        // Create new user
        Auth user = new Auth();
        user.setName(request.getName());
        user.setEmail(request.getEmail());
        user.setPassword(passwordEncoder.encode(request.getPassword()));
        user.setBio(request.getBio());
        user.setWebsite(request.getWebsite());
        user.setTwitterUsername(request.getTwitterUsername());
        user.setRole(Auth.Role.USER.toString());

        // Save user to database
        Auth savedUser = authRepository.save(user);

        // Generate JWT token
        String jwtToken = jwtService.generateToken(
                org.springframework.security.core.userdetails.User.builder()
                        .username(savedUser.getEmail())
                        .password(savedUser.getPassword())
                        .authorities("ROLE_" + savedUser.getRole())
                        .build()
        );

        // Return response
        return AuthResponse.builder()
                .token(jwtToken)
                .name(savedUser.getName())
                .email(savedUser.getEmail())
                .role(savedUser.getRole())
                .build();
    }

    @Override
    public AuthResponse login(LoginRequest request) {
        // Authenticate user
        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        request.getEmail(),
                        request.getPassword()
                )
        );

        if (!authentication.isAuthenticated()) {
            throw new UsernameNotFoundException("Invalid email or password");
        }

        // Find user in database
        Auth user = authRepository.findByEmail(request.getEmail())
                .orElseThrow(() -> new UsernameNotFoundException("User not found"));

        // Generate JWT token
        String jwtToken = jwtService.generateToken(
                org.springframework.security.core.userdetails.User.builder()
                        .username(user.getEmail())
                        .password(user.getPassword())
                        .authorities("ROLE_" + user.getRole())
                        .build()
        );

        // Return response
        return AuthResponse.builder()
                .token(jwtToken)
                .name(user.getName())
                .email(user.getEmail())
                .role(user.getRole())
                .build();
    }
}
