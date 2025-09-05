package com.example.demo.service.impl;

import java.util.List;

import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

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
    public CategoryDto postMethod(CategoryDto dto) {
        logger.info("Processing category details in service: {}", dto);
        if (categoryRepository.existsBycateName(dto.getCateName())) {
            logger.warn("Attempt to register with existing category name: {}", dto.getCateName());
            throw new ExistsByCategoryNameException("ExistsEmail Exception Running " + dto.getCateName());
        } else {
            Category savedEntity = categoryRepository.save(modelMapper.map(dto, Category.class));
            CategoryDto savedDto = modelMapper.map(savedEntity, CategoryDto.class);
            logger.info("Category saved with ID: {}", savedDto.getId());
            return savedDto;
        }
    }

    @Override
    public List<CategoryDto> getMethod() {
        logger.info("Processing get all categories in service");
        List<Category> categories = categoryRepository.findAll();
        if (categories.isEmpty()) {
            throw new ResourceNotFoundException("Resource Not Found");
        }
        return modelMapper.map(categories, new TypeToken<List<CategoryDto>>() {
        }.getType());
    }
}
