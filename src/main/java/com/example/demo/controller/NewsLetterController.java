package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.dto.NewsLetterDto;
import com.example.demo.entity.NewsLetter;
import com.example.demo.service.NewsLetterService;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("api/v1")
public class NewsLetterController {

    @Autowired
    NewsLetterService service;

    @PostMapping("/newsletter/for/email/add")
    public ResponseEntity<NewsLetter> getNewsLetterEmail(@RequestBody NewsLetterDto dto) {
        return ResponseEntity.status(200).body(service.getNewsLetterEmail(dto));
    }
}
