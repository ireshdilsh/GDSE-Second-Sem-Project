package com.example.demo.service.impl;

import com.example.demo.dto.BlogDto;
import com.example.demo.entity.Blog;
import com.example.demo.exception.ResourceNotFoundException;
import com.example.demo.repository.BlogRepository;
import com.example.demo.service.BlogService;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class BlogServiceImpl implements BlogService {

    private final BlogRepository blogRepository;
    private final ModelMapper modelMapper;

    private static final Logger logger = LoggerFactory.getLogger(BlogServiceImpl.class);
    private final String uploadDir = "uploads/blogs/";

    @Override
    public BlogDto createBlogWithImage(BlogDto blogDto, MultipartFile imageFile) {
        logger.info("Creating blog with image: {}", blogDto.getTitle());
        Blog blog = modelMapper.map(blogDto, Blog.class);

        if (imageFile != null && !imageFile.isEmpty()) {
            String imageUrl = saveImage(imageFile);
            blog.setImageUrl(imageUrl);
            logger.info("Image saved for blog: {}", imageUrl);
        }
        if (blog.getCreatedAt() == null) {
            blog.setCreatedAt(LocalDate.now());
        }

        Blog saved = blogRepository.save(blog);
        logger.info("Blog created with ID: {}", saved.getId());
        return modelMapper.map(saved, BlogDto.class);
    }

    @Override
    public BlogDto getBlogById(Long id) {
        logger.info("Fetching blog by ID: {}", id);
        Blog blog = blogRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Blog not found with id: " + id));
        return modelMapper.map(blog, BlogDto.class);
    }

    @Override
    public List<BlogDto> getAllBlogs() {
        logger.info("Fetching all blogs");
        List<Blog> blogs = blogRepository.findAll();
        if (blogs.isEmpty()) {
            logger.warn("No blogs found in the database");
            throw new ResourceNotFoundException("No blogs found");
        }
        return blogs.stream()
                .map(blog -> modelMapper.map(blog, BlogDto.class))
                .collect(Collectors.toList());
    }

    @Override
    public BlogDto updateBlog(Long id, BlogDto blogDto) {
        logger.info("Updating blog without image, ID: {}", id);
        Blog existingBlog = blogRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Blog not found with id: " + id));

        // Update fields (preserve existing imageUrl)
        existingBlog.setTitle(blogDto.getTitle());
        existingBlog.setContent(blogDto.getContent());
        existingBlog.setAuthor(blogDto.getAuthor());

        Blog updated = blogRepository.save(existingBlog);
        logger.info("Blog updated with ID: {}", updated.getId());
        return modelMapper.map(updated, BlogDto.class);
    }

    @Override
    public BlogDto updateBlogWithImage(Long id, BlogDto blogDto, MultipartFile imageFile) {
        logger.info("Updating blog with image, ID: {}", id);
        Blog existingBlog = blogRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Blog not found with id: " + id));

        // Update fields
        existingBlog.setTitle(blogDto.getTitle());
        existingBlog.setContent(blogDto.getContent());
        existingBlog.setAuthor(blogDto.getAuthor());

        // Update image if provided
        if (imageFile != null && !imageFile.isEmpty()) {
            String imageUrl = saveImage(imageFile);
            existingBlog.setImageUrl(imageUrl);
            logger.info("Image updated for blog: {}", imageUrl);
        }

        Blog updated = blogRepository.save(existingBlog);
        logger.info("Blog updated with ID: {}", updated.getId());
        return modelMapper.map(updated, BlogDto.class);
    }

    @Override
    public void deleteBlog(Long id) {
        logger.info("Deleting blog with ID: {}", id);
        try {
            Blog blog = blogRepository.findById(id)
                    .orElseThrow(() -> new ResourceNotFoundException("Blog not found with id: " + id));

            // Delete image file if exists
            if (blog.getImageUrl() != null && !blog.getImageUrl().isEmpty()) {
                deleteImageFile(blog.getImageUrl());
            }

            blogRepository.deleteById(id);
            logger.info("Blog successfully deleted with ID: {}", id);
        } catch (Exception e) {
            logger.error("Error deleting blog with ID: {}", id, e);
            throw new RuntimeException("Cannot delete blog: " + e.getMessage());
        }
    }

    @Override
    public List<BlogDto> searchBlogsByTitle(String title) {
        logger.info("Searching blogs by title: {}", title);
        List<Blog> blogs = blogRepository.findByTitleContainingIgnoreCase(title);
        return blogs.stream()
                .map(blog -> modelMapper.map(blog, BlogDto.class))
                .collect(Collectors.toList());
    }

    @Override
    public List<BlogDto> getBlogsByAuthor(String author) {
        logger.info("Fetching blogs by author: {}", author);
        List<Blog> blogs = blogRepository.findByAuthorIgnoreCase(author);
        return blogs.stream()
                .map(blog -> modelMapper.map(blog, BlogDto.class))
                .collect(Collectors.toList());
    }

    @Override
    public List<BlogDto> getLatestBlogs() {
        logger.info("Fetching latest blogs");
        List<Blog> blogs = blogRepository.findLatestBlogs();
        return blogs.stream()
                .map(blog -> modelMapper.map(blog, BlogDto.class))
                .collect(Collectors.toList());
    }

    private String saveImage(MultipartFile imageFile) {
        try {
            Files.createDirectories(Paths.get(uploadDir));
            String fileName = System.currentTimeMillis() + "_" + imageFile.getOriginalFilename();
            Path filePath = Paths.get(uploadDir, fileName);
            imageFile.transferTo(filePath);
            // Return the relative URL for frontend
            return "/uploads/blogs/" + fileName;
        } catch (IOException e) {
            logger.error("Failed to save blog image", e);
            throw new RuntimeException("Failed to save blog image", e);
        }
    }

    private void deleteImageFile(String imageUrl) {
        try {
            Path imagePath = Paths.get(imageUrl);
            if (Files.exists(imagePath)) {
                Files.delete(imagePath);
                logger.info("Deleted image file: {}", imageUrl);
            }
        } catch (IOException e) {
            logger.warn("Could not delete image file: {}", imageUrl, e);
        }
    }
}
