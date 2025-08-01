package com.example.demo.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
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


@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/api/v1")
public class UserController {

    @Autowired
    UserService service;

    private static final Logger logger = LoggerFactory.getLogger(UserController.class);

    @PostMapping("/save/user")
    public ResponseEntity<APIResponse> postMethod(@RequestBody UserDto dto) {
        service.postMethod(dto);
        logger.info("goto values service " + dto);
        return new ResponseEntity<>(new APIResponse(200, "success",dto), HttpStatus.CREATED);
    }
    
}
