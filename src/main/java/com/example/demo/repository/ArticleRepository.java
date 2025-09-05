package com.example.demo.repository;

import com.example.demo.entity.Article;
import com.example.demo.entity.User;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface ArticleRepository extends JpaRepository<Article, Long> {
    Optional<Article> findBySlug(String slug);
    
    List<Article> findByAuthor(User author);
    
    Page<Article> findByStatus(Article.ArticleStatus status, Pageable pageable);
    
    Page<Article> findByCategoryIdAndStatus(Long categoryId, Article.ArticleStatus status, Pageable pageable);
    
    @Query("SELECT a FROM Article a WHERE a.status = :status AND (a.title LIKE %:keyword% OR a.content LIKE %:keyword%)")
    Page<Article> findByStatusAndKeyword(@Param("status") Article.ArticleStatus status, @Param("keyword") String keyword, Pageable pageable);
    
    @Query("SELECT a FROM Article a WHERE a.status = 'PUBLISHED' ORDER BY a.viewCount DESC")
    List<Article> findPopularArticles(Pageable pageable);
}
