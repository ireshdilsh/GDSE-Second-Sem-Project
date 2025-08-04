package com.example.demo.controller;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.dto.UserDto;
import com.example.demo.service.UserService;
import com.example.demo.utils.APIResponse;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.GetMapping;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/api/v1/user")
public class UserController {

    @Qualifier("userServiceImpl")
    @Autowired
    UserService service;

    private static final Logger logger = LoggerFactory.getLogger(UserController.class);

    @PostMapping("/save/user")
    public ResponseEntity<APIResponse> postMethod(@RequestBody UserDto dto) {
        logger.info("Received POST /save/user with data: {}", dto);
        service.postMethod(dto);
        logger.info("Successfully processed user save for: {}", dto);
        return new ResponseEntity<>(new APIResponse(200, "success", dto), HttpStatus.CREATED);
    }

    @GetMapping("/get/all/users")
    public ResponseEntity<APIResponse> getMethod() {
        logger.info("Received GET /get/all/users");
        List<UserDto>dtos = service.getMethod();
        logger.info("Successfully processed get all users {} : " + dtos);
        return new ResponseEntity<>(new APIResponse(200, "success", dtos), HttpStatus.OK);
    }

}
