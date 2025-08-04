package com.example.demo.service;

import org.springframework.stereotype.Service;

import com.example.demo.dto.BlogDto;

@Service
public interface BlogService {

    void postMethod(BlogDto dto);

}
