package com.example.demo.service.impl;

import java.time.LocalDate;
import java.util.List;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.dto.ContactDto;
import com.example.demo.entity.Contact;
import com.example.demo.repository.ContactRepository;
import com.example.demo.service.ContactService;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@Service
public class ContactServiceImpl implements ContactService {

    @Autowired
    ContactRepository repository;
    
    private final ModelMapper mapper;

    private Logger logger = LoggerFactory.getLogger(ContactServiceImpl.class);
    @Override
    public List<ContactDto> getAllContacts() {
        logger.info("Fetching all contacts");
        List<ContactDto> contacts = repository.findAll().stream()
                .map(entity -> mapper.map(entity, ContactDto.class))
                .collect(Collectors.toList());
        logger.info("Fetched {} contacts", contacts.size());

        return contacts;
    }
    @Override
    public ContactDto createContact(ContactDto contactDto) {
        logger.info("Creating contact: {}", contactDto.getName());
        Contact entity = mapper.map(contactDto, Contact.class);
        entity.setDate(LocalDate.now());
        Contact saved = repository.save(entity);
        logger.info("Contact created with ID: {}", saved.getId());
        return mapper.map(saved, ContactDto.class);
    }

    

}
