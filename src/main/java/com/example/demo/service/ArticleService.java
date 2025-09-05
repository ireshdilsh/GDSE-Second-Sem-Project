package com.example.demo.service;

import com.example.demo.dto.ArticleDto;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

public interface ArticleService {
    ArticleDto createArticle(ArticleDto articleDto, MultipartFile featuredImage);
    ArticleDto getArticleById(Long id);
    ArticleDto getArticleBySlug(String slug);
    Page<ArticleDto> getAllPublishedArticles(Pageable pageable);
    Page<ArticleDto> getArticlesByCategory(Long categoryId, Pageable pageable);
    Page<ArticleDto> searchArticles(String keyword, Pageable pageable);
    List<ArticleDto> getArticlesByAuthor(Long authorId);
    List<ArticleDto> getPopularArticles(int limit);
    ArticleDto updateArticle(Long id, ArticleDto articleDto, MultipartFile featuredImage);
    ArticleDto publishArticle(Long id);
    ArticleDto archiveArticle(Long id);
    void deleteArticle(Long id);
    ArticleDto incrementViewCount(Long id);
    ArticleDto incrementLikeCount(Long id);
}
