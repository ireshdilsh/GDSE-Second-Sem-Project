package com.example.lexorabackend.controller;

import com.example.lexorabackend.dto.AuthDto;
import com.example.lexorabackend.dto.AuthRequestDto;
import com.example.lexorabackend.service.AuthService;
import com.example.lexorabackend.util.APIResponse;
import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "*")
@RequiredArgsConstructor
public class AuthController {

    private final AuthService authService;
    private final Logger logger = LoggerFactory.getLogger(AuthController.class);

    @PostMapping("/login")
    public ResponseEntity<APIResponse> authenticateUser(@RequestBody AuthRequestDto authRequestDto) {
        logger.info("Authentication request received for user: {}", authRequestDto.getEmail());
        AuthDto authDto = authService.authenticate(authRequestDto);
        logger.info("Authentication successful for user: {}", authRequestDto.getEmail());
        return new ResponseEntity<>(new APIResponse(200, "Authentication successful", authDto), HttpStatus.OK);
    }

    @PostMapping("/register")
    public ResponseEntity<APIResponse> registerUser(@RequestBody AuthDto authDto) {
        logger.info("Adding new account");
        AuthDto dto = authService.createAccount(authDto);
        logger.info("Account added");
        return new ResponseEntity<>(new APIResponse(200, "Account created successfully", dto), HttpStatus.CREATED);
    }

    @GetMapping("/get/all/accounts")
    public ResponseEntity<APIResponse> getAllAccounts() {
        logger.info("Getting all accounts");
        List<AuthDto> dtos = authService.getAllAccounts();
        logger.info("All accounts request sent");
        return new ResponseEntity<>(new APIResponse(200, "All accounts request sent successfully", dtos), HttpStatus.OK);
    }
}
