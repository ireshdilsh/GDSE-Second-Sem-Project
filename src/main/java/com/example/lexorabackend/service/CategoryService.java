package com.example.lexorabackend.service;

import com.example.lexorabackend.dto.CategoryDto;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface CategoryService {
    CategoryDto addNewCategory(CategoryDto categoryDto);

    List<CategoryDto> getAllCategory();

    CategoryDto updateCategory(Long id, CategoryDto categoryDto);

    CategoryDto deleteCategory(Long id);
}
