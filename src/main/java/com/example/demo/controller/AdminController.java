package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.service.AdminService;

@RestController
@CrossOrigin(origins = "*")
public class AdminController {
 
    @Autowired 
    AdminService adminService;
    
}
