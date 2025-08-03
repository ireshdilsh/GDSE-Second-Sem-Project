package com.example.demo.service;

import org.springframework.stereotype.Service;

import com.example.demo.dto.ContactDto;

@Service
public interface ContactService {

    void postMethod(ContactDto dto);

}
