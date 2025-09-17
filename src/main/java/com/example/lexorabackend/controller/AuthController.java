package com.example.lexorabackend.controller;

import com.example.lexorabackend.dto.AuthResponse;
import com.example.lexorabackend.dto.LoginRequest;
import com.example.lexorabackend.dto.RegisterRequest;
import com.example.lexorabackend.service.AuthService;
import com.example.lexorabackend.util.APIResponse;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "*")
@RequiredArgsConstructor
public class AuthController {

    private final AuthService authService;
    private final Logger logger = LoggerFactory.getLogger(AuthController.class);

    @PostMapping("/login")
    public ResponseEntity<APIResponse<AuthResponse>> login(@Valid @RequestBody LoginRequest loginRequest) {
        try {
            AuthResponse authResponse = authService.login(loginRequest);
            return ResponseEntity.ok(
                APIResponse.<AuthResponse>builder()
                    .status("success")
                    .message("Login successful")
                    .data(authResponse)
                    .build()
            );
        } catch (Exception e) {
            logger.error("Login failed: ", e);
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
                .body(APIResponse.<AuthResponse>builder()
                    .status("error")
                    .message(e.getMessage())
                    .build()
                );
        }
    }

    @PostMapping("/register")
    public ResponseEntity<APIResponse<AuthResponse>> register(@Valid @RequestBody RegisterRequest registerRequest) {
        try {
            AuthResponse authResponse = authService.register(registerRequest);
            return ResponseEntity.status(HttpStatus.CREATED)
                .body(APIResponse.<AuthResponse>builder()
                    .status("success")
                    .message("Registration successful")
                    .data(authResponse)
                    .build()
                );
        } catch (Exception e) {
            logger.error("Registration failed: ", e);
            return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                .body(APIResponse.<AuthResponse>builder()
                    .status("error")
                    .message(e.getMessage())
                    .build()
                );
        }
    }

    @GetMapping("/profile")
    public ResponseEntity<APIResponse<String>> getProfile() {
        return ResponseEntity.ok(
            APIResponse.<String>builder()
                .status("success")
                .message("Profile endpoint - requires authentication")
                .data("This is a protected endpoint")
                .build()
        );
    }
}
