package com.example.demo.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.dto.AdminDto;
import com.example.demo.entity.Admin;
import com.example.demo.repository.AdminRepository;
import com.example.demo.service.AdminService;

@Service
public class AdminServiceImpl implements AdminService {

    @Autowired
    AdminRepository adminRepository;

    @Override
    public List<Admin> getAllAdmins() {
        return adminRepository.findAll();
    }

    @Override
    public Admin addNewUser(AdminDto dto) {
        Admin admin = new Admin();

        admin.setId(dto.getId());
        admin.setEmail(dto.getEmail());
        admin.setPassword(dto.getPassword());

        return adminRepository.save(admin);
    }

}
