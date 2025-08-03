package com.example.demo.service.impl;

import org.modelmapper.ModelMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.controller.ContactController;
import com.example.demo.dto.ContactDto;
import com.example.demo.entity.Contact;
import com.example.demo.repository.ContactRepository;
import com.example.demo.service.ContactService;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class ContactServiceImpl implements ContactService{
    
    private static final Logger logger = LoggerFactory.getLogger(ContactController.class);
    private final ModelMapper modelMapper;

    @Autowired
    ContactRepository contactRepository;

    @Override
    public void postMethod(ContactDto dto) {
        logger.info("Processing contact details in service: {}", dto);
        contactRepository.save(modelMapper.map(dto, Contact.class));
        logger.info("Contact details Saved In DB: {}", dto);
    }

}
