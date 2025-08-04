package com.example.demo.service.impl;

import org.modelmapper.ModelMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.dto.BlogDto;
import com.example.demo.entity.Blog;
import com.example.demo.repository.BlogRepository;
import com.example.demo.service.BlogService;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class BlogServiceImpl implements BlogService{

    private static final Logger logger = LoggerFactory.getLogger(BlogServiceImpl.class);
    ModelMapper modelMapper;
    @Autowired
    BlogRepository repository;

    @Override
    public void postMethod(BlogDto dto) {
        logger.info("Saving blog with title: {}", dto);
        repository.save(modelMapper.map(dto, Blog.class));
        logger.info("Blog saved successfully with ID: {}", dto);
    }
}
