package com.example.lexorabackend.service.impl;

import com.example.lexorabackend.dto.ContactDto;
import com.example.lexorabackend.entity.Contact;
import com.example.lexorabackend.repository.ContactRepository;
import com.example.lexorabackend.service.ContactService;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.crossstore.ChangeSetPersister;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ContactServiceImpl implements ContactService {

    private final ModelMapper modelMapper;

    @Autowired
    private ContactRepository contactRepository;

    Logger log = LoggerFactory.getLogger(ContactServiceImpl.class);

    @Override
    public ContactDto sendContactRequest(ContactDto contactDto) {
        log.info("Inside sendContactRequest of ContactServiceImpl");
        return modelMapper.map(contactRepository.save(modelMapper.map(contactDto, Contact.class)), ContactDto.class);
    }

    @Override
    public List<ContactDto> getAllContacts() {
        log.info("Inside getAllContacts of ContactServiceImpl");
        List<Contact> contactList = contactRepository.findAll();

        if (contactList.isEmpty()) {
            try {
                log.warn("No contacts found in the database");
                throw new ClassNotFoundException("No contacts found in the database");
            } catch (ClassNotFoundException e) {
                throw new RuntimeException(e);
            }
        }
        return contactList.stream().map(contact -> modelMapper.map(contact, ContactDto.class)).toList();
    }
}
