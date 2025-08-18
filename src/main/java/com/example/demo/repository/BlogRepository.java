package com.example.demo.repository;

import com.example.demo.entity.Blog;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface BlogRepository extends JpaRepository<Blog, Long> {

    // Find blogs by title containing keyword (case insensitive)
    List<Blog> findByTitleContainingIgnoreCase(String title);

    // Find blogs by author
    List<Blog> findByAuthorIgnoreCase(String author);

    // Find blogs by author and title containing keyword
    @Query("SELECT b FROM Blog b WHERE b.author = :author AND b.title LIKE %:title%")
    List<Blog> findByAuthorAndTitleContaining(@Param("author") String author, @Param("title") String title);

    // Find latest blogs (ordered by creation date)
    @Query("SELECT b FROM Blog b ORDER BY b.createdAt DESC")
    List<Blog> findLatestBlogs();
}
