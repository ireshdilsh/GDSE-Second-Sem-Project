package com.example.lexorabackend.service;

import com.example.lexorabackend.dto.ArticleDto;

import java.util.List;

public interface ArticleService {
    // CRUD Operations
    ArticleDto addNewArticle(ArticleDto articleDto);
    ArticleDto getArticleById(Long id);
    List<ArticleDto> getAllArticles();
    ArticleDto updateArticle(Long id, ArticleDto articleDto);
    ArticleDto deleteArticle(Long id);

    // Status Management
    ArticleDto publishArticle(Long id);
    ArticleDto unpublishArticle(Long id);

    // Filtering and Search
    List<ArticleDto> getPublishedArticles();
    List<ArticleDto> getArticlesByAuthor(Long authorId);
    List<ArticleDto> getArticlesByCategory(Long categoryId);
    List<ArticleDto> searchArticles(String query);
    List<ArticleDto> getTrendingArticles();

    // Interaction Methods
    void incrementViewCount(Long id);
    void likeArticle(Long id);
    void unlikeArticle(Long id);
}
