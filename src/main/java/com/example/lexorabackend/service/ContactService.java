package com.example.lexorabackend.service;

import com.example.lexorabackend.dto.ContactDto;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface ContactService {
    ContactDto sendContactRequest(ContactDto contactDto);

    List<ContactDto> getAllContacts();
}
