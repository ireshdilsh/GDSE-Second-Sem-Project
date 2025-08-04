package com.example.demo.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.dto.BlogDto;
import com.example.demo.service.BlogService;
import com.example.demo.utils.APIResponse;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;


@RestController
@RequestMapping("/api/v1/blog")
@CrossOrigin(origins = "*")
public class BlogController {

    private static final Logger logger = LoggerFactory.getLogger(BlogController.class); 

    @Autowired
    BlogService service;

    @PostMapping("/post/new/blog")
    public ResponseEntity<APIResponse> postMethod(@RequestBody BlogDto dto) {
        logger.info("Received request to create a new blog with title: {}", dto);
        service.postMethod(dto);
        logger.info("Blog created successfully with title: {}", dto.getTitle());
        return new ResponseEntity<>(new APIResponse(200, "Blog created successfully", dto),HttpStatus.CREATED);
    }
    

}
