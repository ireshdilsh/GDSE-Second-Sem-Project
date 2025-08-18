package com.example.demo.service;

import com.example.demo.dto.BlogDto;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

public interface BlogService {
    // Create blog without image
    BlogDto createBlog(BlogDto blogDto);
    
    // Create blog with image
    BlogDto createBlogWithImage(BlogDto blogDto, MultipartFile imageFile);
    
    // Get blog by ID
    BlogDto getBlogById(Long id);
    
    // Get all blogs
    List<BlogDto> getAllBlogs();
    
    // Update blog without image
    BlogDto updateBlog(Long id, BlogDto blogDto);
    
    // Update blog with image
    BlogDto updateBlogWithImage(Long id, BlogDto blogDto, MultipartFile imageFile);
    
    // Delete blog
    void deleteBlog(Long id);
    
    // Search blogs by title
    List<BlogDto> searchBlogsByTitle(String title);
    
    // Get blogs by author
    List<BlogDto> getBlogsByAuthor(String author);
    
    // Get latest blogs
    List<BlogDto> getLatestBlogs();
}
