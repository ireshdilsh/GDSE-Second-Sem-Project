package com.example.demo.controller;

import com.example.demo.dto.UserDto;
import com.example.demo.service.UserService;
import com.example.demo.utils.APIResponse;
import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@RestController
@RequestMapping("/api/v1/users")
@RequiredArgsConstructor
@CrossOrigin(origins = "*")
public class UserController {
    private final UserService userService;
    private static final Logger logger = LoggerFactory.getLogger(UserController.class);

    @PostMapping("/create/account")
    public ResponseEntity<APIResponse> createUser(@RequestBody UserDto userDto) {
        logger.info("Creating user: {}", userDto.getUsername());
        UserDto created = userService.createUser(userDto);
        APIResponse response = new APIResponse(201, "User created successfully", created);
        logger.info("User created successfully with ID: {}", created.getId());
        return new ResponseEntity<>(response, HttpStatus.CREATED);
    }

    @GetMapping("get/user/{id}")
    public ResponseEntity<APIResponse> getUserById(@PathVariable Long id) {
        logger.info("Fetching user by ID: {}", id);
        UserDto user = userService.getUserById(id);
        APIResponse response = new APIResponse(200, "User retrieved successfully", user);
        return ResponseEntity.ok(response);
    }

    @GetMapping("/username/{username}")
    public ResponseEntity<APIResponse> getUserByUsername(@PathVariable String username) {
        logger.info("Fetching user by username: {}", username);
        UserDto user = userService.getUserByUsername(username);
        APIResponse response = new APIResponse(200, "User retrieved successfully", user);
        return ResponseEntity.ok(response);
    }

    @GetMapping("/email/{email}")
    public ResponseEntity<APIResponse> getUserByEmail(@PathVariable String email) {
        logger.info("Fetching user by email: {}", email);
        UserDto user = userService.getUserByEmail(email);
        APIResponse response = new APIResponse(200, "User retrieved successfully", user);
        return ResponseEntity.ok(response);
    }

    @GetMapping("/all")
    public ResponseEntity<APIResponse> getAllUsers() {
        logger.info("Fetching all users");
        List<UserDto> users = userService.getAllUsers();
        APIResponse response = new APIResponse(200, "Users retrieved successfully", users);
        logger.info("Retrieved {} users", users.size());
        return ResponseEntity.ok(response);
    }

    @PutMapping("/update/user/{id}")
    public ResponseEntity<APIResponse> updateUser(@PathVariable Long id, @RequestBody UserDto userDto) {
        logger.info("Updating user with ID: {}", id);
        UserDto updated = userService.updateUser(id, userDto);
        APIResponse response = new APIResponse(200, "User updated successfully", updated);
        logger.info("User updated successfully with ID: {}", id);
        return ResponseEntity.ok(response);
    }

    @PutMapping("/update/user/{id}/profile")
    public ResponseEntity<APIResponse> updateUserProfile(
            @PathVariable Long id,
            @RequestPart("user") UserDto userDto,
            @RequestPart(value = "profileImage", required = false) MultipartFile profileImage) {
        logger.info("Updating user profile with ID: {}", id);
        UserDto updated = userService.updateUserProfile(id, userDto, profileImage);
        APIResponse response = new APIResponse(200, "User profile updated successfully", updated);
        logger.info("User profile updated successfully with ID: {}", id);
        return ResponseEntity.ok(response);
    }

    @DeleteMapping("/delete/user/{id}")
    public ResponseEntity<APIResponse> deleteUser(@PathVariable Long id) {
        logger.info("Deleting user with ID: {}", id);
        userService.deleteUser(id);
        APIResponse response = new APIResponse(200, "User deleted successfully", null);
        logger.info("User deleted successfully with ID: {}", id);
        return ResponseEntity.ok(response);
    }

    @GetMapping("/exists/username/{username}")
    public ResponseEntity<APIResponse> existsByUsername(@PathVariable String username) {
        logger.info("Checking username availability: {}", username);
        boolean exists = userService.existsByUsername(username);
        APIResponse response = new APIResponse(200, "Username availability checked", exists);
        return ResponseEntity.ok(response);
    }

    @GetMapping("/exists/email/{email}")
    public ResponseEntity<APIResponse> existsByEmail(@PathVariable String email) {
        logger.info("Checking email availability: {}", email);
        boolean exists = userService.existsByEmail(email);
        APIResponse response = new APIResponse(200, "Email availability checked", exists);
        return ResponseEntity.ok(response);
    }
}
