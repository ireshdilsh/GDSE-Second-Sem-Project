package com.example.lexorabackend.controller;

import com.example.lexorabackend.dto.ContactDto;
import com.example.lexorabackend.service.ContactService;
import com.example.lexorabackend.util.APIResponse;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/contacts")
@CrossOrigin(origins = "*")
public class ContactController {

    Logger logger = LoggerFactory.getLogger(ContactController.class);

    @Autowired
    private ContactService contactService;

    @PostMapping("/send/contact/request")
    public ResponseEntity<APIResponse> sendContactRequest(@RequestBody ContactDto contactDto) {
        logger.info("Contact request received");
        ContactDto dto = contactService.sendContactRequest(contactDto);
        logger.info("Contact request sent");
        return new ResponseEntity(new APIResponse(200, "Contact request sent successfully", dto),  HttpStatus.CREATED);
    }

    @GetMapping("/get/all/contacts")
    public ResponseEntity<List<ContactDto>> getAllContacts() {
        logger.info("Fetching all contacts");
        List<ContactDto> contactList = contactService.getAllContacts();
        logger.info("Fetched all contacts");
        return new ResponseEntity(new APIResponse(200, "Fetched all contacts successfully", contactList), HttpStatus.OK);
    }

}
