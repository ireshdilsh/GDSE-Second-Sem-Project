package com.example.demo.service.impl;

import java.util.List;

import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.controller.CategoryController;
import com.example.demo.dto.CategoryDto;
import com.example.demo.entity.Category;
import com.example.demo.exception.ExistsByCategoryNameException;
import com.example.demo.exception.ResourceNotFoundException;
import com.example.demo.repository.CategoryRepository;
import com.example.demo.service.CategoryService;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class CategoryServiceImpl implements CategoryService {

    private static final Logger logger = LoggerFactory.getLogger(CategoryController.class);
    private final ModelMapper modelMapper;

    @Autowired
    CategoryRepository categoryRepository;

    @Override
    public void postMethod(CategoryDto dto) {
        logger.info("Processing category details in service: {}", dto);
        if (categoryRepository.existsByCategoryName(dto.getCate_name())) {
            logger.warn("Attempt to register with existing category name: {}", dto.getCate_name());
            logger.error("Found Already Exists by Category Name", dto.getCate_name());
            throw new ExistsByCategoryNameException("ExistsEmail Exception Running " + dto.getCate_name());
        } else {
            categoryRepository.save(modelMapper.map(dto, Category.class));
            logger.info("Category details Saved In DB: {}", dto);
        }
    }

    @Override
    public List<CategoryDto> getMethod() {
        logger.info("Processing get all categories in service");
        List<Category> categories = categoryRepository.findAll();
        if (categories.isEmpty()) {
            throw new ResourceNotFoundException("Resource Not Found");
        }
        return modelMapper.map(categories, new TypeToken<List<CategoryDto>>() {}.getType());
    }
}
