package com.example.demo.service;

import com.example.demo.dto.ContactDto;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface ContactService {
    ContactDto sendContactRequest(ContactDto dto);

    List<ContactDto> getAllContactRequests();
}
