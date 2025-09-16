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

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/api/v1/contact")
public class ContactController {

    @Autowired
    private ContactService contactService;

    Logger logger = LoggerFactory.getLogger(ContactController.class);

    @PostMapping("/send/contact/request")
    public ResponseEntity<APIResponse>sendContactRequest(@RequestBody ContactDto dto){
        logger.info("Contact request received: {}", dto);
        ContactDto contactDto = contactService.sendContactRequest(dto);
        logger.info("Contact request processed successfully: {}", contactDto);
        return new ResponseEntity(new APIResponse(200,"Contact request sent successfully",contactDto), HttpStatus.CREATED);
    }

    @GetMapping("/get/all/contact/requests")
    public ResponseEntity<List<ContactDto>> getAllContactRequests(){
        List<ContactDto> contactDtos = contactService.getAllContactRequests();
        return new ResponseEntity(new APIResponse(200,"All contact requests fetched successfully",contactDtos), HttpStatus.OK);
    }
}
