package com.example.demo.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.example.demo.entity.Blog;

@Repository
public interface BlogRepository extends JpaRepository<Blog, Long> {
    
    // Find blogs by email
    List<Blog> findByEmail(String email);
    
    // Find blogs by title containing specific text (case insensitive)
    List<Blog> findByTitleContainingIgnoreCase(String title);
    
    // Custom query to find blogs with images
    @Query("SELECT b FROM Blog b WHERE b.imageData IS NOT NULL")
    List<Blog> findBlogsWithImages();
    
    // Custom query to find blogs by email with image data excluded (for performance)
    @Query("SELECT new Blog(b.id, b.email, b.title, b.details, b.imageName, b.imageType, null) FROM Blog b WHERE b.email = :email")
    List<Blog> findBlogsByEmailWithoutImageData(@Param("email") String email);
}
