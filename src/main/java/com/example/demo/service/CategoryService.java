package com.example.demo.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.example.demo.dto.CategoryDto;

@Service
public interface CategoryService {

    CategoryDto postMethod(CategoryDto dto);

    List<CategoryDto> getMethod();

}
