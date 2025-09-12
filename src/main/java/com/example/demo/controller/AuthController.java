package com.example.demo.controller;

import com.example.demo.dto.auth.AuthResponse;
import com.example.demo.dto.auth.LoginRequest;
import com.example.demo.dto.auth.SignupRequest;
import com.example.demo.entity.User;
import com.example.demo.repository.UserRepository;
import com.example.demo.security.JwtUtil;
import com.example.demo.utils.APIResponse;
import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/api/v1/auth")
@RequiredArgsConstructor
@CrossOrigin(origins = "*")
public class AuthController {

    private static final Logger logger = LoggerFactory.getLogger(AuthController.class);
    
    private final AuthenticationManager authenticationManager;
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtUtil jwtUtil;

    @PostMapping("/signup")
    public ResponseEntity<APIResponse> registerUser(@Valid @RequestBody SignupRequest signupRequest) {
        logger.info("User registration attempt for username: {}", signupRequest.getUsername());
        
        if (userRepository.existsByUsername(signupRequest.getUsername())) {
            APIResponse response = new APIResponse(400, "Username is already taken!", null);
            return ResponseEntity.badRequest().body(response);
        }

        if (userRepository.existsByEmail(signupRequest.getEmail())) {
            APIResponse response = new APIResponse(400, "Email is already in use!", null);
            return ResponseEntity.badRequest().body(response);
        }

        // Create new user account
        User user = new User();
        user.setUsername(signupRequest.getUsername());
        user.setEmail(signupRequest.getEmail());
        user.setPassword(passwordEncoder.encode(signupRequest.getPassword()));
        user.setFirstName(signupRequest.getFirstName());
        user.setLastName(signupRequest.getLastName());
        user.setBio(signupRequest.getBio());
        
        // Set role
        if ("ADMIN".equals(signupRequest.getRole())) {
            user.setRole(User.UserRole.ADMIN);
        } else {
            user.setRole(User.UserRole.USER);
        }

        User savedUser = userRepository.save(user);
        
        logger.info("User registered successfully with ID: {}", savedUser.getId());
        
        AuthResponse authResponse = new AuthResponse(
            null, // No token on signup
            savedUser.getId(),
            savedUser.getUsername(),
            savedUser.getEmail(),
            savedUser.getFirstName(),
            savedUser.getLastName(),
            savedUser.getRole().name()
        );
        
        APIResponse response = new APIResponse(201, "User registered successfully", authResponse);
        return ResponseEntity.status(HttpStatus.CREATED).body(response);
    }

    @PostMapping("/signin")
    public ResponseEntity<APIResponse> authenticateUser(@Valid @RequestBody LoginRequest loginRequest) {
        logger.info("User login attempt for: {}", loginRequest.getUsernameOrEmail());
        
        try {
            Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                    loginRequest.getUsernameOrEmail(),
                    loginRequest.getPassword()
                )
            );

            SecurityContextHolder.getContext().setAuthentication(authentication);
            String jwt = jwtUtil.generateJwtToken(authentication);

            User user = (User) authentication.getPrincipal();
            
            AuthResponse authResponse = new AuthResponse(
                jwt,
                user.getId(),
                user.getUsername(),
                user.getEmail(),
                user.getFirstName(),
                user.getLastName(),
                user.getRole().name()
            );
            
            logger.info("User logged in successfully: {}", user.getUsername());
            
            APIResponse response = new APIResponse(200, "User signed in successfully", authResponse);
            return ResponseEntity.ok(response);
            
        } catch (Exception e) {
            logger.error("Authentication failed for user: {}", loginRequest.getUsernameOrEmail());
            APIResponse response = new APIResponse(401, "Invalid username/email or password", null);
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(response);
        }
    }

    @PostMapping("/refresh")
    public ResponseEntity<APIResponse> refreshToken(@RequestHeader("Authorization") String token) {
        try {
            if (token != null && token.startsWith("Bearer ")) {
                String jwt = token.substring(7);
                if (jwtUtil.validateJwtToken(jwt)) {
                    String username = jwtUtil.getUsernameFromJwtToken(jwt);
                    String newToken = jwtUtil.generateTokenFromUsername(username);
                    
                    User user = userRepository.findByUsername(username)
                        .orElseThrow(() -> new RuntimeException("User not found"));
                    
                    AuthResponse authResponse = new AuthResponse(
                        newToken,
                        user.getId(),
                        user.getUsername(),
                        user.getEmail(),
                        user.getFirstName(),
                        user.getLastName(),
                        user.getRole().name()
                    );
                    
                    APIResponse response = new APIResponse(200, "Token refreshed successfully", authResponse);
                    return ResponseEntity.ok(response);
                }
            }
            
            APIResponse response = new APIResponse(401, "Invalid token", null);
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(response);
            
        } catch (Exception e) {
            logger.error("Token refresh failed: {}", e.getMessage());
            APIResponse response = new APIResponse(401, "Token refresh failed", null);
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(response);
        }
    }

    @GetMapping("/me")
    public ResponseEntity<APIResponse> getCurrentUser(Authentication authentication) {
        if (authentication == null || !authentication.isAuthenticated()) {
            APIResponse response = new APIResponse(401, "User not authenticated", null);
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(response);
        }
        
        User user = (User) authentication.getPrincipal();
        
        AuthResponse userInfo = new AuthResponse(
            null, // Don't return token in user info
            user.getId(),
            user.getUsername(),
            user.getEmail(),
            user.getFirstName(),
            user.getLastName(),
            user.getRole().name()
        );
        
        APIResponse response = new APIResponse(200, "User info retrieved successfully", userInfo);
        return ResponseEntity.ok(response);
    }
}