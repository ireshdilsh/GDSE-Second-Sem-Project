package com.example.demo.service;

import org.springframework.stereotype.Service;

import com.example.demo.dto.CategoryDto;

@Service
public interface CategoryService {

    void postMethod(CategoryDto dto);

}
