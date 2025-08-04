package com.example.demo.service;

import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.example.demo.dto.BlogDto;

@Service
public interface BlogService {
    
    // Save blog with image
    BlogDto saveBlogWithImage(BlogDto blogDto, MultipartFile image);
    
    // Save blog without image
    BlogDto saveBlog(BlogDto blogDto);
    
    // Get all blogs
    List<BlogDto> getAllBlogs();
    
    // Get blogs by email
    List<BlogDto> getBlogsByEmail(String email);
    
    // Get blog by ID
    BlogDto getBlogById(Long id);
    
    // Get blog image by ID
    byte[] getBlogImage(Long id);
    
    // Update blog
    BlogDto updateBlog(Long id, BlogDto blogDto);
    
    // Delete blog
    void deleteBlog(Long id);
    
    // Search blogs by title
    List<BlogDto> searchBlogsByTitle(String title);
}
