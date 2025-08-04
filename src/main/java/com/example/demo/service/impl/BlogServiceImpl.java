package com.example.demo.service.impl;

import java.util.List;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.dto.BlogDto;
import com.example.demo.entity.Blog;
import com.example.demo.exception.ResourceNotFoundException;
import com.example.demo.repository.BlogRepository;
import com.example.demo.service.BlogService;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class BlogServiceImpl implements BlogService{

    private static final Logger logger = LoggerFactory.getLogger(BlogServiceImpl.class);
    
    @Autowired
    ModelMapper modelMapper;

    @Autowired
    BlogRepository repository;

    @Override
    public void postMethod(BlogDto dto) {
        logger.info("Saving blog with title: {}", dto);
        repository.save(modelMapper.map(dto, Blog.class));
        logger.info("Blog saved successfully with ID: {}", dto);
    }

    @Override
    public List<BlogDto> getMethod() {
        logger.info("Processing get all blogs in service");
        List<Blog> blogs = repository.findAll();
        
        if (blogs.isEmpty()) {
            logger.warn("No blogs found in database");
            throw new ResourceNotFoundException("No blogs found");
        }
        
        List<BlogDto> blogDtos = blogs.stream()
                .map(blog -> modelMapper.map(blog, BlogDto.class))
                .collect(Collectors.toList());
        
        logger.info("Successfully processed get all blogs {} : " + blogDtos);
        return blogDtos;
    }

    @Override
    public List<BlogDto> getBlogsByEmail(String email) {
        logger.info("Processing get blogs by email: {}", email);
        List<Blog> blogs = repository.findByEmail(email);
        
        if (blogs.isEmpty()) {
            logger.warn("No blogs found for email: {}", email);
            throw new ResourceNotFoundException("No blogs found for email: " + email);
        }
        
        List<BlogDto> blogDtos = blogs.stream()
                .map(blog -> modelMapper.map(blog, BlogDto.class))
                .collect(Collectors.toList());
        
        logger.info("Successfully retrieved {} blogs for email {}: {}", blogDtos.size(), email, blogDtos);
        return blogDtos;
    }

    @Override
    public void deleteBlog(Long id) {
        logger.info("Processing delete blog with ID: {}", id);
        
        if (!repository.existsById(id)) {
            logger.warn("Blog not found with ID: {}", id);
            throw new ResourceNotFoundException("Blog not found with ID: " + id);
        }
        
        repository.deleteById(id);
        logger.info("Blog deleted successfully with ID: {}", id);
    }
}
