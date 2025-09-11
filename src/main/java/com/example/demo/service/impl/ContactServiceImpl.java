package com.example.demo.service.impl;

import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import com.example.demo.repository.ContactRepository;
import com.example.demo.service.ContactService;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class ContactServiceImpl implements ContactService {

    private ContactRepository repository;
    private ModelMapper mapper;

    

}
