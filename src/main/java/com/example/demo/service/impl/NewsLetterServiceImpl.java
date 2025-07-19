package com.example.demo.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.dto.NewsLetterDto;
import com.example.demo.entity.NewsLetter;
import com.example.demo.repository.NewsLetterRepository;
import com.example.demo.service.NewsLetterService;

@Service
public class NewsLetterServiceImpl implements NewsLetterService {

    @Autowired
    NewsLetterRepository repository;

    @Override
    public NewsLetter getNewsLetterEmail(NewsLetterDto dto) {
        NewsLetter newsLetter = new NewsLetter();
        newsLetter.setEmail(dto.getEmail());

        return repository.save(newsLetter);

    }

}
