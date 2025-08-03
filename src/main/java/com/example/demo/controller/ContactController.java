package com.example.demo.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.dto.ContactDto;
import com.example.demo.service.ContactService;
import com.example.demo.utils.APIResponse;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;



@RestController
@RequestMapping("/api/v1")
@CrossOrigin(origins = "*")
public class ContactController {

    private static final Logger logger = LoggerFactory.getLogger(ContactController.class);

    @Autowired
    ContactService service;

    @PostMapping("/save/contact/details")
    public ResponseEntity<APIResponse> postMethod(@RequestBody ContactDto dto) {
        logger.info("Received POST /api/v1/path with data: {}", dto);
        service.postMethod(dto);
        logger.info("Successfully processed contact details save for: {}", dto);
        return new ResponseEntity<>(new APIResponse(200, "success", dto), HttpStatus.CREATED);
    }

    // @GetMapping("/get/all/contact/details")
    // public ResponseEntity<APIResponse> getMethod() {
    //     logger.info("Received GET /api/v1/path");
    //     service.getMethod();
    //     logger.info("Successfully processed get all contact details");
    //     return new ResponseEntity<>(new APIResponse(200, "success", null), HttpStatus.OK);
    // }
    
}
