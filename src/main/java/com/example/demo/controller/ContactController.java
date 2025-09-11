package com.example.demo.controller;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.dto.ContactDto;
import com.example.demo.service.ContactService;
import com.example.demo.utils.APIResponse;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;



@RestController
@RequestMapping("/api/v1/contacts")
@CrossOrigin(origins = "*")
public class ContactController {

    @Autowired
    ContactService service;

    private final Logger logger = LoggerFactory.getLogger(ContactController.class);

    @GetMapping("/get/all")
    public ResponseEntity<APIResponse> getMethodName() {
        logger.info("GET request received");
        List<ContactDto> dtos = service.getAllContacts();
        APIResponse response = new APIResponse(200, "Contacts retrieved successfully", dtos);
        return ResponseEntity.ok(response);
    }

    @PostMapping("/request")
    public ResponseEntity<APIResponse> postMethodName(@RequestBody ContactDto contactDto) {
        logger.info("POST request received with data: {}", contactDto);
        ContactDto created = service.createContact(contactDto);
        APIResponse response = new APIResponse(201, "Contact created successfully", created);
        logger.info("Contact created successfully with ID: {}", created.getId());
        return ResponseEntity.status(201).body(response);
    }
    
    
}
