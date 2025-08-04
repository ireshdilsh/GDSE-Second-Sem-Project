package com.example.demo.service.impl;

import java.io.IOException;
import java.util.List;
import java.util.Optional;

import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.example.demo.dto.BlogDto;
import com.example.demo.entity.Blog;
import com.example.demo.exception.ResourceNotFoundException;
import com.example.demo.repository.BlogRepository;
import com.example.demo.service.BlogService;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class BlogServiceImpl implements BlogService {

    private static final Logger logger = LoggerFactory.getLogger(BlogServiceImpl.class);

    @Autowired
    private BlogRepository blogRepository;

    private final ModelMapper modelMapper;

    @Override
    public BlogDto saveBlogWithImage(BlogDto blogDto, MultipartFile image) {
        logger.info("Processing blog save with image: {}", blogDto.getTitle());
        
        try {
            // Process image
            if (image != null && !image.isEmpty()) {
                blogDto.setImageName(image.getOriginalFilename());
                blogDto.setImageType(image.getContentType());
                blogDto.setImageData(image.getBytes());
                logger.info("Image processed: {} - Size: {} bytes", 
                    image.getOriginalFilename(), image.getSize());
            }
            
            Blog blog = modelMapper.map(blogDto, Blog.class);
            Blog savedBlog = blogRepository.save(blog);
            
            logger.info("Blog saved successfully with ID: {}", savedBlog.getId());
            
            // Return saved blog as DTO with generated ID
            return modelMapper.map(savedBlog, BlogDto.class);
            
        } catch (IOException e) {
            logger.error("Error processing image for blog: {}", blogDto.getTitle(), e);
            throw new RuntimeException("Error processing image: " + e.getMessage());
        }
    }

    @Override
    public BlogDto saveBlog(BlogDto blogDto) {
        logger.info("Processing blog save without image: {}", blogDto.getTitle());
        
        Blog blog = modelMapper.map(blogDto, Blog.class);
        Blog savedBlog = blogRepository.save(blog);
        
        logger.info("Blog saved successfully with ID: {}", savedBlog.getId());
        
        // Return saved blog as DTO with generated ID
        return modelMapper.map(savedBlog, BlogDto.class);
    }

    @Override
    public List<BlogDto> getAllBlogs() {
        logger.info("Fetching all blogs");
        List<Blog> blogs = blogRepository.findAll();
        
        if (blogs.isEmpty()) {
            throw new ResourceNotFoundException("No blogs found");
        }
        
        return modelMapper.map(blogs, new TypeToken<List<BlogDto>>() {}.getType());
    }

    @Override
    public List<BlogDto> getBlogsByEmail(String email) {
        logger.info("Fetching blogs for email: {}", email);
        List<Blog> blogs = blogRepository.findByEmail(email);
        
        if (blogs.isEmpty()) {
            throw new ResourceNotFoundException("No blogs found for email: " + email);
        }
        
        return modelMapper.map(blogs, new TypeToken<List<BlogDto>>() {}.getType());
    }

    @Override
    public BlogDto getBlogById(Long id) {
        logger.info("Fetching blog with ID: {}", id);
        Optional<Blog> blog = blogRepository.findById(id);
        
        if (blog.isEmpty()) {
            throw new ResourceNotFoundException("Blog not found with ID: " + id);
        }
        
        return modelMapper.map(blog.get(), BlogDto.class);
    }

    @Override
    public byte[] getBlogImage(Long id) {
        logger.info("Fetching image for blog ID: {}", id);
        Optional<Blog> blog = blogRepository.findById(id);
        
        if (blog.isEmpty()) {
            throw new ResourceNotFoundException("Blog not found with ID: " + id);
        }
        
        if (blog.get().getImageData() == null) {
            throw new ResourceNotFoundException("No image found for blog ID: " + id);
        }
        
        return blog.get().getImageData();
    }

    @Override
    public BlogDto updateBlog(Long id, BlogDto blogDto) {
        logger.info("Updating blog with ID: {}", id);
        Optional<Blog> existingBlog = blogRepository.findById(id);
        
        if (existingBlog.isEmpty()) {
            throw new ResourceNotFoundException("Blog not found with ID: " + id);
        }
        
        Blog blog = existingBlog.get();
        blog.setTitle(blogDto.getTitle());
        blog.setDetails(blogDto.getDetails());
        blog.setEmail(blogDto.getEmail());
        
        // Update image if provided
        if (blogDto.getImageData() != null) {
            blog.setImageName(blogDto.getImageName());
            blog.setImageType(blogDto.getImageType());
            blog.setImageData(blogDto.getImageData());
        }
        
        Blog updatedBlog = blogRepository.save(blog);
        logger.info("Blog updated successfully with ID: {}", id);
        
        return modelMapper.map(updatedBlog, BlogDto.class);
    }

    @Override
    public void deleteBlog(Long id) {
        logger.info("Deleting blog with ID: {}", id);
        Optional<Blog> blog = blogRepository.findById(id);
        
        if (blog.isEmpty()) {
            throw new ResourceNotFoundException("Blog not found with ID: " + id);
        }
        
        blogRepository.deleteById(id);
        logger.info("Blog deleted successfully with ID: {}", id);
    }

    @Override
    public List<BlogDto> searchBlogsByTitle(String title) {
        logger.info("Searching blogs with title containing: {}", title);
        List<Blog> blogs = blogRepository.findByTitleContainingIgnoreCase(title);
        
        if (blogs.isEmpty()) {
            throw new ResourceNotFoundException("No blogs found with title containing: " + title);
        }
        
        return modelMapper.map(blogs, new TypeToken<List<BlogDto>>() {}.getType());
    }
}
