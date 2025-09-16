package com.example.demo.service.impl;

import com.example.demo.dto.ContactDto;
import com.example.demo.entity.Contact;
import com.example.demo.exception.ResourceNotFoundException;
import com.example.demo.repository.ContactRepository;
import com.example.demo.service.ContactService;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ContactServiceImpl implements ContactService {

    @Autowired
    private ContactRepository repository;

    private final ModelMapper mapper;

    Logger logger = LoggerFactory.getLogger(ContactServiceImpl.class);

    @Override
    public ContactDto sendContactRequest(ContactDto dto) {
        logger.info("send contact request");
        return mapper.map(repository.save(mapper.map(dto, Contact.class)), ContactDto.class);
    }

    @Override
    public List<ContactDto> getAllContactRequests() {
        logger.info("get all contact requests");
        List<Contact> dtos = repository.findAll();//.stream().map(contact -> mapper.map(contact, ContactDto.class)).toList();
        if (dtos.isEmpty()){
            logger.warn("No contact requests found");
            throw new ResourceNotFoundException("No contact requests found");
        }
        return repository.findAll().stream().map(contact -> mapper.map(contact, ContactDto.class)).toList();
    }
}
