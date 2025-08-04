package com.example.demo.controller;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.example.demo.dto.BlogDto;
import com.example.demo.service.BlogService;
import com.example.demo.utils.APIResponse;

@RestController
@RequestMapping("/api/v1/blog")
@CrossOrigin(origins = "*")
public class BlogController {

    private static final Logger logger = LoggerFactory.getLogger(BlogController.class);

    @Autowired
    private BlogService blogService;

    @PostMapping("/save/blog")
    public ResponseEntity<APIResponse> postMethod(@RequestBody BlogDto blogDto) {
        logger.info("Received POST /save/blog with data: {}", blogDto);
        BlogDto savedBlog = blogService.saveBlog(blogDto);
        logger.info("Successfully processed blog save for: {}", savedBlog.getTitle());
        return new ResponseEntity<>(new APIResponse(200, "success", savedBlog), HttpStatus.CREATED);
    }

    @PostMapping(value = "/save/blog/with/image", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public ResponseEntity<APIResponse> postMethodWithImage(
            @RequestPart(value = "blog", required = false) BlogDto blogDto,
            @RequestPart("image") MultipartFile image,
            @RequestParam(required = false) String email,
            @RequestParam(required = false) String title,
            @RequestParam(required = false) String details) {
        
        logger.info("Received POST /save/blog/with/image with blog: {} and image: {}", 
                   blogDto != null ? blogDto.getTitle() : title, image.getOriginalFilename());
        
        // If blogDto is null, create it from request parameters
        if (blogDto == null) {
            blogDto = new BlogDto();
            blogDto.setEmail(email);
            blogDto.setTitle(title);
            blogDto.setDetails(details);
        }
        
        BlogDto savedBlog = blogService.saveBlogWithImage(blogDto, image);
        logger.info("Successfully processed blog with image save for: {}", savedBlog.getTitle());
        
        return new ResponseEntity<>(new APIResponse(200, "success", savedBlog), HttpStatus.CREATED);
    }

    @GetMapping("/get/all/blogs")
    public ResponseEntity<APIResponse> getAllBlogs() {
        logger.info("Received GET /get/all/blogs");
        List<BlogDto> blogs = blogService.getAllBlogs();
        logger.info("Successfully retrieved {} blogs", blogs.size());
        return new ResponseEntity<>(new APIResponse(200, "Blogs retrieved successfully", blogs), HttpStatus.OK);
    }

    @GetMapping("/get/blog/{id}")
    public ResponseEntity<APIResponse> getBlogById(@PathVariable Long id) {
        logger.info("Received GET /get/blog/{}", id);
        BlogDto blog = blogService.getBlogById(id);
        logger.info("Successfully retrieved blog with ID: {}", id);
        return new ResponseEntity<>(new APIResponse(200, "Blog retrieved successfully", blog), HttpStatus.OK);
    }

    @GetMapping("/get/blogs/by/email")
    public ResponseEntity<APIResponse> getBlogsByEmail(@RequestParam String email) {
        logger.info("Received GET /get/blogs/by/email with email: {}", email);
        List<BlogDto> blogs = blogService.getBlogsByEmail(email);
        logger.info("Successfully retrieved {} blogs for email: {}", blogs.size(), email);
        return new ResponseEntity<>(new APIResponse(200, "Blogs retrieved successfully", blogs), HttpStatus.OK);
    }

    @GetMapping("/get/blog/image/{id}")
    public ResponseEntity<byte[]> getBlogImage(@PathVariable Long id) {
        logger.info("Received GET /get/blog/image/{}", id);
        
        // First get the blog to check image details
        BlogDto blog = blogService.getBlogById(id);
        byte[] imageData = blogService.getBlogImage(id);
        
        HttpHeaders headers = new HttpHeaders();
        if (blog.getImageType() != null) {
            headers.setContentType(MediaType.parseMediaType(blog.getImageType()));
        } else {
            headers.setContentType(MediaType.APPLICATION_OCTET_STREAM);
        }
        
        if (blog.getImageName() != null) {
            headers.setContentDispositionFormData("inline", blog.getImageName());
        }
        
        logger.info("Successfully retrieved image for blog ID: {}", id);
        return new ResponseEntity<>(imageData, headers, HttpStatus.OK);
    }

    @GetMapping("/search/blogs")
    public ResponseEntity<APIResponse> searchBlogsByTitle(@RequestParam String title) {
        logger.info("Received GET /search/blogs with title: {}", title);
        List<BlogDto> blogs = blogService.searchBlogsByTitle(title);
        logger.info("Successfully found {} blogs with title containing: {}", blogs.size(), title);
        return new ResponseEntity<>(new APIResponse(200, "Blogs found successfully", blogs), HttpStatus.OK);
    }

    @PutMapping("/update/blog/{id}")
    public ResponseEntity<APIResponse> updateBlog(@PathVariable Long id, @RequestBody BlogDto blogDto) {
        logger.info("Received PUT /update/blog/{} with data: {}", id, blogDto);
        BlogDto updatedBlog = blogService.updateBlog(id, blogDto);
        logger.info("Successfully updated blog with ID: {}", id);
        return new ResponseEntity<>(new APIResponse(200, "Blog updated successfully", updatedBlog), HttpStatus.OK);
    }

    @DeleteMapping("/delete/blog/{id}")
    public ResponseEntity<APIResponse> deleteBlog(@PathVariable Long id) {
        logger.info("Received DELETE /delete/blog/{}", id);
        blogService.deleteBlog(id);
        logger.info("Successfully deleted blog with ID: {}", id);
        return new ResponseEntity<>(new APIResponse(200, "Blog deleted successfully", null), HttpStatus.OK);
    }
}
