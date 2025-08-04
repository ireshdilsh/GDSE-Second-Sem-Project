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
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.dto.BlogDto;
import com.example.demo.service.BlogService;
import com.example.demo.utils.APIResponse;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;


@RestController
@RequestMapping("/api/v1/blog")
@CrossOrigin(origins = "*")
public class BlogController {

    private static final Logger logger = LoggerFactory.getLogger(BlogController.class);

    @Autowired
    @Qualifier("blogServiceImpl")
    BlogService service;

    @PostMapping("/post/new/blog")
    public ResponseEntity<APIResponse> postMethod(@RequestBody BlogDto dto) {
        logger.info("Received request to create a new blog with title: {}", dto);
        service.postMethod(dto);
        logger.info("Blog created successfully with title: {}", dto.getTitle());
        return new ResponseEntity<>(new APIResponse(200, "Blog created successfully", dto),HttpStatus.CREATED);
    }
    
    @GetMapping("/get/all/blogs")
    public ResponseEntity<APIResponse> getMethod() {
        logger.info("Received GET /get/all/blogs");
        List<BlogDto> blogs = service.getMethod();
        logger.info("Successfully processed get all blogs {} : " + blogs);
        return new ResponseEntity<>(new APIResponse(200, "success", blogs), HttpStatus.OK);
    }

    @GetMapping("/get/blogs/by/email")
    public ResponseEntity<APIResponse> getBlogsByEmail(@RequestParam String email) {
        logger.info("Received GET /get/blogs/by/email with email: {}", email);
        List<BlogDto> blogs = service.getBlogsByEmail(email);
        logger.info("Successfully retrieved {} blogs for email: {}", blogs.size(), email);
        return new ResponseEntity<>(new APIResponse(200, "Blogs retrieved successfully", blogs), HttpStatus.OK);
    }

    @DeleteMapping("/delete/blog/{id}")
    public ResponseEntity<APIResponse> deleteBlog(@PathVariable Long id) {
        logger.info("Received DELETE /delete/blog/{}", id);
        service.deleteBlog(id);
        logger.info("Blog deleted successfully with ID: {}", id);
        return new ResponseEntity<>(new APIResponse(200, "Blog deleted successfully", null), HttpStatus.OK);
    }

}
