package com.example.demo.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.dto.ContactDto;
import com.example.demo.entity.Contact;
import com.example.demo.repository.ContactRepository;
import com.example.demo.service.ContactService;

@Service
public class ContactServiceImpl implements ContactService {

    @Autowired
    ContactRepository repository;

    @Override
    public Contact fillContactForm(ContactDto dto) {
        Contact contact = new Contact();

        contact.setId(dto.getId());
        contact.setName(dto.getName());
        contact.setEmail(dto.getEmail());
        contact.setSubject(dto.getSubject());
        contact.setMessage(dto.getMessage());

        return repository.save(contact);
    }

    @Override
    public List<Contact> getAllMessages() {
        return repository.findAll();
    }
}
