package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.dto.AdminDto;
import com.example.demo.entity.Admin;
import com.example.demo.service.AdminService;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.GetMapping;

@RestController
@CrossOrigin(origins = "*")
public class AdminController {

    @Autowired
    AdminService adminService;

    @PostMapping("/add/new/admin")
    public Admin addNewUser(@RequestBody AdminDto dto) {
        return adminService.addNewUser(dto);
    }

    @GetMapping("/get/all/admin")
    public ResponseEntity<List<Admin>> getAllAdmins() {
        return ResponseEntity.status(200).body(adminService.getAllAdmins());
    }
}
