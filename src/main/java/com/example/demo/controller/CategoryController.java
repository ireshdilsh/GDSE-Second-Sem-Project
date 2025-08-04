package com.example.demo.controller;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.dto.CategoryDto;
import com.example.demo.service.CategoryService;
import com.example.demo.utils.APIResponse;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.PathVariable;

@RestController
@RequestMapping("/api/v1/category")
@CrossOrigin(origins = "*")
public class CategoryController {

    private static final Logger loger = LoggerFactory.getLogger(CategoryController.class);

    @Qualifier("categoryServiceImpl")
    @Autowired
    CategoryService service;

    @PostMapping("/save/category")
    public ResponseEntity<APIResponse> postMethod(@RequestBody CategoryDto dto) {
        loger.info("Received POST /save/category with data: {}", dto);
        CategoryDto saved = service.postMethod(dto);
        loger.info("Successfully saved category with ID: {}", saved.getId());
        return new ResponseEntity<>(new APIResponse(201, "success", saved), HttpStatus.CREATED);
    }

    @GetMapping("/get/all/categories")
    public ResponseEntity<APIResponse> getMethod() {
        loger.info("Received GET /get/all/categories");
        List<CategoryDto> dtos = service.getMethod();
        loger.info("Successfully processed get all categories {} : ", dtos);
        return new ResponseEntity<>(new APIResponse(200, "success", dtos), HttpStatus.OK);
    }

    @DeleteMapping("path")
    public String deleteMethod(@RequestParam String param) {
        return new String();
    }

    @PutMapping("path/{id}")
    public String putMethodName(@PathVariable String id, @RequestBody String entity) {
        // TODO: process PUT request

        return entity;
    }

}
