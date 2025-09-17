package com.example.lexorabackend.controller;

import com.example.lexorabackend.dto.CategoryDto;
import com.example.lexorabackend.service.CategoryService;
import com.example.lexorabackend.util.APIResponse;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/api/v1/category")
public class CategoryController {

    Logger logger = LoggerFactory.getLogger(CategoryController.class);

    @Autowired
    private CategoryService categoryService;

    @PostMapping("/add/new/category")
    public ResponseEntity<APIResponse> addCategory(@RequestBody CategoryDto categoryDto) {
        logger.info("Adding new category");
        CategoryDto dto = categoryService.addNewCategory(categoryDto);
        logger.info("Category added");
        return new ResponseEntity<>(new APIResponse(200, "Category request sent successfully", dto), HttpStatus.CREATED);
    }

    @GetMapping("/get/all/categories")
    public ResponseEntity<APIResponse> getAllCategory(){
        logger.info("Getting all categories");
        List<CategoryDto>dtos = categoryService.getAllCategory();
        logger.info("All category request sent");
        return new ResponseEntity(new APIResponse(200, "All category request sent successfully", dtos), HttpStatus.OK);
    }

    @PutMapping("/update/category=/{id}")
    public ResponseEntity<APIResponse> updateCategory(@PathVariable Long id, @RequestBody CategoryDto categoryDto) {
        logger.info("Updating category");
        CategoryDto dto = categoryService.updateCategory(id,categoryDto);
        logger.info("Category updated");
        return new ResponseEntity<>(new APIResponse(200, "Category request sent successfully", dto), HttpStatus.OK);
    }

    @DeleteMapping("/delete/category=/{id}")
    public ResponseEntity<APIResponse> deleteCategory(@PathVariable Long id) {
        logger.info("Deleting category");
        CategoryDto dto = categoryService.deleteCategory(id);
        logger.info("Category deleted");
        return new ResponseEntity<>(new APIResponse(200, "Category request sent successfully", dto), HttpStatus.OK);
    }

}
