package com.example.demo.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.example.demo.dto.ContactDto;
import com.example.demo.entity.Contact;

@Service
public interface ContactService {

    Contact fillContactForm(ContactDto dto);

    List<Contact> getAllMessages();

}
