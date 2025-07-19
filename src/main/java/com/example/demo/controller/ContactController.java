package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.dto.ContactDto;
import com.example.demo.entity.Contact;
import com.example.demo.service.ContactService;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("api/v1")
public class ContactController {

    @Autowired
    ContactService service;

    @PostMapping("/contact")
    public ResponseEntity<Contact> fillContactForm(@RequestBody ContactDto dto) {
        return ResponseEntity.status(200).body(service.fillContactForm(dto));
    }

    @GetMapping("/get/all/messages")
    public ResponseEntity<List<Contact>> getAllMessages(){
        return ResponseEntity.status(200).body(service.getAllMessages());
    }
}
