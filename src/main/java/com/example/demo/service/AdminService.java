package com.example.demo.service;

import org.springframework.stereotype.Service;

import com.example.demo.dto.AdminDto;
import com.example.demo.entity.Admin;

@Service
public interface AdminService {

    Admin addNewUser(AdminDto dto);
    
}
