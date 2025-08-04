package com.example.demo.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.example.demo.dto.BlogDto;

@Service
public interface BlogService {

    void postMethod(BlogDto dto);
    
    List<BlogDto> getMethod();
    
    List<BlogDto> getBlogsByEmail(String email);
    
    void deleteBlog(Long id);

}
