package com.example.lexorabackend.service.impl;

import com.example.lexorabackend.dto.CategoryDto;
import com.example.lexorabackend.entity.Cateory;
import com.example.lexorabackend.repository.CategoryRepository;
import com.example.lexorabackend.service.CategoryService;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class CategoryServiceImpl implements CategoryService {

    Logger logger = LoggerFactory.getLogger(CategoryServiceImpl.class);

    private final ModelMapper modelMapper;

    @Autowired
    private CategoryRepository categoryRepository;

    @Override
    public CategoryDto addNewCategory(CategoryDto categoryDto) {
        logger.info("Adding new category");
        return modelMapper.map(categoryRepository.save(modelMapper.map(categoryDto,Cateory.class)), CategoryDto.class);
    }

    @Override
    public List<CategoryDto> getAllCategory() {
        logger.info("Getting all categories");
        List<Cateory>cateories =  categoryRepository.findAll();

        if (cateories.isEmpty()) {
            logger.info("No categories found");
            throw new RuntimeException("No categories found");
        }
        return categoryRepository.findAll().stream().map(cateory -> modelMapper.map(cateory,CategoryDto.class)).toList();
    }

    @Override
    public CategoryDto updateCategory(Long id, CategoryDto categoryDto) {
        logger.info("Updating category");
        Cateory cateory =  categoryRepository.findById(id).get();
        if (cateory == null) {
            logger.info("No category found");
            throw new RuntimeException("No category found");
        }
        cateory.setCategoryName(categoryDto.getCategoryName());
        Cateory updateCategory = categoryRepository.save(cateory);
        logger.info("Category updated successfully");
        return modelMapper.map(updateCategory,CategoryDto.class);
    }

    @Override
    public CategoryDto deleteCategory(Long id) {
        logger.info("Deleting category");
        Cateory cateory =  categoryRepository.findById(id).get();
        if (cateory == null) {
            logger.info("No category found");
            throw new RuntimeException("No category found");
        } else {
            categoryRepository.delete(cateory);
            logger.info("Category deleted successfully");
            return modelMapper.map(cateory,CategoryDto.class);
        }
    }
}
