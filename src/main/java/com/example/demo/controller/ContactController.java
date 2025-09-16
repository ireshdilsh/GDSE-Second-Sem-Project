package com.example.demo.controller;

import com.example.demo.dto.ContactDto;
import com.example.demo.service.ContactService;
import com.example.demo.utils.APIResponse;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/api/v1/contact")
public class ContactController {

    @Autowired
    private ContactService contactService;

    Logger logger = LoggerFactory.getLogger(ContactController.class);

    @PostMapping("/send/contact/request")
    public ResponseEntity<APIResponse>sendContactRequest(@RequestBody ContactDto dto){
        return ResponseEntity(new APIResponse(200,"Contact request sent successfully",null), HttpStatus.CREATED);
    }
}
