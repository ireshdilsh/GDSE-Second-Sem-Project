package com.example.demo.service;

import org.springframework.stereotype.Service;

import com.example.demo.dto.NewsLetterDto;
import com.example.demo.entity.NewsLetter;

@Service
public interface NewsLetterService {

    NewsLetter getNewsLetterEmail(NewsLetterDto dto);

}
