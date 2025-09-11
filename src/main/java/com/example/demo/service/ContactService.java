package com.example.demo.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.example.demo.dto.ContactDto;

@Service
public interface ContactService {

    List<ContactDto> getAllContacts();

    ContactDto createContact(ContactDto contactDto);

}
