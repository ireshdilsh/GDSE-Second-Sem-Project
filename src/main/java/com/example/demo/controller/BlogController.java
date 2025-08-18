package com.example.demo.controller;

import com.example.demo.dto.BlogDto;
import com.example.demo.service.BlogService;
import com.example.demo.utils.APIResponse;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.util.List;

@RestController
@RequestMapping("/api/v1/blog")
@CrossOrigin(origins = "*")
public class BlogController {

    private final BlogService blogService;
    private static final Logger logger = LoggerFactory.getLogger(BlogController.class);

    public BlogController(BlogService blogService) {
        this.blogService = blogService;
    }

    // Create blog without image (JSON body)
    @PostMapping("/create")
    public ResponseEntity<APIResponse> createBlog(@RequestBody BlogDto blogDto) {
        logger.info("Request to create blog without image: {}", blogDto.getTitle());
        try {
            BlogDto created = blogService.createBlog(blogDto);
            logger.info("Blog created successfully: {}", created.getId());
            return new ResponseEntity<>(new APIResponse(201, "Blog created successfully", created), HttpStatus.CREATED);
        } catch (Exception e) {
            logger.error("Error creating blog: ", e);
            return new ResponseEntity<>(new APIResponse(500, "Error creating blog: " + e.getMessage(), null), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    // Create blog with image (form-data)
    @PostMapping("/create/with-image")
    public ResponseEntity<APIResponse> createBlogWithImage(
            @RequestParam(value = "title", required = false) String title,
            @RequestParam(value = "content", required = false) String content,
            @RequestParam(value = "author", required = false) String author,
            @RequestPart(value = "imageFile", required = false) MultipartFile imageFile) {

        // Validate required fields
        if (title == null || title.trim().isEmpty()) {
            return new ResponseEntity<>(new APIResponse(400, "Title is required", null), HttpStatus.BAD_REQUEST);
        }
        if (content == null || content.trim().isEmpty()) {
            return new ResponseEntity<>(new APIResponse(400, "Content is required", null), HttpStatus.BAD_REQUEST);
        }

        BlogDto blogDto = new BlogDto();
        blogDto.setTitle(title.trim());
        blogDto.setContent(content.trim());
        blogDto.setAuthor(author != null ? author.trim() : "Anonymous");

        logger.info("Request to create blog with image: {}", blogDto.getTitle());
        try {
            BlogDto created = blogService.createBlogWithImage(blogDto, imageFile);
            logger.info("Blog created successfully with image: {}", created.getId());
            return new ResponseEntity<>(new APIResponse(201, "Blog created successfully with image", created), HttpStatus.CREATED);
        } catch (Exception e) {
            logger.error("Error creating blog with image: ", e);
            return new ResponseEntity<>(new APIResponse(500, "Error creating blog: " + e.getMessage(), null), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    // Get blog by ID
    @GetMapping("/get/{id}")
    public ResponseEntity<APIResponse> getBlogById(@PathVariable Long id) {
        logger.info("Request to get blog by ID: {}", id);
        try {
            BlogDto blog = blogService.getBlogById(id);
            logger.info("Blog fetched successfully: {}", blog.getId());
            return new ResponseEntity<>(new APIResponse(200, "Blog fetched successfully", blog), HttpStatus.OK);
        } catch (Exception e) {
            logger.error("Error fetching blog with ID: {}", id, e);
            return new ResponseEntity<>(new APIResponse(404, e.getMessage(), null), HttpStatus.NOT_FOUND);
        }
    }

    // Get all blogs
    @GetMapping("/get/all")
    public ResponseEntity<APIResponse> getAllBlogs() {
        logger.info("Request to get all blogs");
        try {
            List<BlogDto> blogs = blogService.getAllBlogs();
            logger.info("Fetched {} blogs", blogs.size());
            return new ResponseEntity<>(new APIResponse(200, "Blogs fetched successfully", blogs), HttpStatus.OK);
        } catch (Exception e) {
            logger.error("Error fetching blogs: ", e);
            return new ResponseEntity<>(new APIResponse(404, e.getMessage(), null), HttpStatus.NOT_FOUND);
        }
    }

    // Update blog without image (JSON body)
    @PutMapping("/update/{id}")
    public ResponseEntity<APIResponse> updateBlog(@PathVariable Long id, @RequestBody BlogDto blogDto) {
        logger.info("Request to update blog without image, ID: {}", id);
        try {
            BlogDto updated = blogService.updateBlog(id, blogDto);
            logger.info("Blog updated successfully: {}", updated.getId());
            return new ResponseEntity<>(new APIResponse(200, "Blog updated successfully", updated), HttpStatus.OK);
        } catch (Exception e) {
            logger.error("Error updating blog with ID: {}", id, e);
            return new ResponseEntity<>(new APIResponse(500, "Error updating blog: " + e.getMessage(), null), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    // Update blog with image (form-data)
    @PutMapping("/update/{id}/with-image")
    public ResponseEntity<APIResponse> updateBlogWithImage(
            @PathVariable Long id,
            @RequestParam(value = "title", required = false) String title,
            @RequestParam(value = "content", required = false) String content,
            @RequestParam(value = "author", required = false) String author,
            @RequestPart(value = "imageFile", required = false) MultipartFile imageFile) {

        // Validate required fields
        if (title == null || title.trim().isEmpty()) {
            return new ResponseEntity<>(new APIResponse(400, "Title is required", null), HttpStatus.BAD_REQUEST);
        }
        if (content == null || content.trim().isEmpty()) {
            return new ResponseEntity<>(new APIResponse(400, "Content is required", null), HttpStatus.BAD_REQUEST);
        }

        BlogDto blogDto = new BlogDto();
        blogDto.setTitle(title.trim());
        blogDto.setContent(content.trim());
        blogDto.setAuthor(author != null ? author.trim() : "Anonymous");

        logger.info("Request to update blog with image, ID: {}", id);
        try {
            BlogDto updated = blogService.updateBlogWithImage(id, blogDto, imageFile);
            logger.info("Blog updated successfully with image: {}", updated.getId());
            return new ResponseEntity<>(new APIResponse(200, "Blog updated successfully with image", updated), HttpStatus.OK);
        } catch (Exception e) {
            logger.error("Error updating blog with image, ID: {}", id, e);
            return new ResponseEntity<>(new APIResponse(500, "Error updating blog: " + e.getMessage(), null), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    // Delete blog
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<APIResponse> deleteBlog(@PathVariable Long id) {
        logger.info("Request to delete blog with ID: {}", id);
        try {
            blogService.deleteBlog(id);
            logger.info("Blog deleted successfully with ID: {}", id);
            return new ResponseEntity<>(new APIResponse(200, "Blog deleted successfully", null), HttpStatus.OK);
        } catch (Exception e) {
            logger.error("Error deleting blog with ID: {}", id, e);
            return new ResponseEntity<>(new APIResponse(500, "Error deleting blog: " + e.getMessage(), null), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    // Search blogs by title
    @GetMapping("/search")
    public ResponseEntity<APIResponse> searchBlogsByTitle(@RequestParam String title) {
        logger.info("Request to search blogs by title: {}", title);
        try {
            List<BlogDto> blogs = blogService.searchBlogsByTitle(title);
            logger.info("Found {} blogs matching title: {}", blogs.size(), title);
            return new ResponseEntity<>(new APIResponse(200, "Blogs found", blogs), HttpStatus.OK);
        } catch (Exception e) {
            logger.error("Error searching blogs by title: {}", title, e);
            return new ResponseEntity<>(new APIResponse(500, "Error searching blogs: " + e.getMessage(), null), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    // Get blogs by author
    @GetMapping("/author/{author}")
    public ResponseEntity<APIResponse> getBlogsByAuthor(@PathVariable String author) {
        logger.info("Request to get blogs by author: {}", author);
        try {
            List<BlogDto> blogs = blogService.getBlogsByAuthor(author);
            logger.info("Found {} blogs by author: {}", blogs.size(), author);
            return new ResponseEntity<>(new APIResponse(200, "Blogs found", blogs), HttpStatus.OK);
        } catch (Exception e) {
            logger.error("Error fetching blogs by author: {}", author, e);
            return new ResponseEntity<>(new APIResponse(500, "Error fetching blogs: " + e.getMessage(), null), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    // Get latest blogs
    @GetMapping("/latest")
    public ResponseEntity<APIResponse> getLatestBlogs() {
        logger.info("Request to get latest blogs");
        try {
            List<BlogDto> blogs = blogService.getLatestBlogs();
            logger.info("Fetched {} latest blogs", blogs.size());
            return new ResponseEntity<>(new APIResponse(200, "Latest blogs fetched", blogs), HttpStatus.OK);
        } catch (Exception e) {
            logger.error("Error fetching latest blogs: ", e);
            return new ResponseEntity<>(new APIResponse(500, "Error fetching blogs: " + e.getMessage(), null), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
