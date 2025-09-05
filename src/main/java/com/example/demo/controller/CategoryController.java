package com.example.demo.controller;

import com.example.demo.dto.CategoryDto;
import com.example.demo.service.CategoryService;
import com.example.demo.utils.APIResponse;
import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/categories")
@RequiredArgsConstructor
@CrossOrigin(origins = "*")
public class CategoryController {
    private final CategoryService categoryService;
    private static final Logger logger = LoggerFactory.getLogger(CategoryController.class);

    @PostMapping
    public ResponseEntity<APIResponse> createCategory(@RequestBody CategoryDto categoryDto) {
        logger.info("Creating category: {}", categoryDto.getName());
        CategoryDto created = categoryService.createCategory(categoryDto);
        APIResponse response = new APIResponse(201, "Category created successfully", created);
        logger.info("Category created successfully with ID: {}", created.getId());
        return new ResponseEntity<>(response, HttpStatus.CREATED);
    }

    @GetMapping("/{id}")
    public ResponseEntity<APIResponse> getCategoryById(@PathVariable Long id) {
        logger.info("Fetching category by ID: {}", id);
        CategoryDto category = categoryService.getCategoryById(id);
        APIResponse response = new APIResponse(200, "Category retrieved successfully", category);
        return ResponseEntity.ok(response);
    }

    @GetMapping("/name/{name}")
    public ResponseEntity<APIResponse> getCategoryByName(@PathVariable String name) {
        logger.info("Fetching category by name: {}", name);
        CategoryDto category = categoryService.getCategoryByName(name);
        APIResponse response = new APIResponse(200, "Category retrieved successfully", category);
        return ResponseEntity.ok(response);
    }

    @GetMapping
    public ResponseEntity<APIResponse> getAllCategories() {
        logger.info("Fetching all categories");
        List<CategoryDto> categories = categoryService.getAllCategories();
        APIResponse response = new APIResponse(200, "Categories retrieved successfully", categories);
        logger.info("Retrieved {} categories", categories.size());
        return ResponseEntity.ok(response);
    }

    @PutMapping("/{id}")
    public ResponseEntity<APIResponse> updateCategory(@PathVariable Long id, @RequestBody CategoryDto categoryDto) {
        logger.info("Updating category with ID: {}", id);
        CategoryDto updated = categoryService.updateCategory(id, categoryDto);
        APIResponse response = new APIResponse(200, "Category updated successfully", updated);
        logger.info("Category updated successfully with ID: {}", id);
        return ResponseEntity.ok(response);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<APIResponse> deleteCategory(@PathVariable Long id) {
        logger.info("Deleting category with ID: {}", id);
        categoryService.deleteCategory(id);
        APIResponse response = new APIResponse(200, "Category deleted successfully", null);
        logger.info("Category deleted successfully with ID: {}", id);
        return ResponseEntity.ok(response);
    }

    @GetMapping("/exists/{name}")
    public ResponseEntity<APIResponse> existsByName(@PathVariable String name) {
        logger.info("Checking category name availability: {}", name);
        boolean exists = categoryService.existsByName(name);
        APIResponse response = new APIResponse(200, "Category name availability checked", exists);
        return ResponseEntity.ok(response);
    }
}
