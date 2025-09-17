package com.example.lexorabackend.controller;

import com.example.lexorabackend.dto.AuthDto;
import com.example.lexorabackend.service.AuthService;
import com.example.lexorabackend.util.APIResponse;
import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/auth")
@CrossOrigin(origins = "*")
@RequiredArgsConstructor
public class AuthController {

    private final AuthService authService;
    private final Logger logger = LoggerFactory.getLogger(AuthController.class);

    @PostMapping("/create/account")
    public ResponseEntity<APIResponse>createAccount(@RequestBody AuthDto authDto){
        logger.info("createAccount");
        AuthDto dto = authService.createAccount(authDto);
        logger.info("Account created successfully");
        return ResponseEntity.ok(new APIResponse(200, "Account created successfully", dto));
    }

    @GetMapping("/get/all")
    public ResponseEntity<APIResponse>getAllAccounts(){
        logger.info("getAllAccounts");
        List<AuthDto>dtos = authService.getAllAccounts();
        logger.info("All accounts fetched successfully");
        return ResponseEntity.ok(new APIResponse(200, "All accounts fetched successfully", dtos));
    }

}
