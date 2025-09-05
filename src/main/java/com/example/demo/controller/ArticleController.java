package com.example.demo.controller;

import com.example.demo.dto.ArticleDto;
import com.example.demo.service.ArticleService;
import com.example.demo.utils.APIResponse;
import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@RestController
@RequestMapping("/api/v1/articles")
@RequiredArgsConstructor
@CrossOrigin(origins = "*")
public class ArticleController {
    private final ArticleService articleService;
    private static final Logger logger = LoggerFactory.getLogger(ArticleController.class);

    @PostMapping("/create/article")
    public ResponseEntity<APIResponse> createArticle(
            @RequestPart("article") ArticleDto articleDto,
            @RequestPart(value = "featuredImage", required = false) 
            MultipartFile featuredImage) {
        logger.info("Creating article: {}", articleDto.getTitle());
        ArticleDto created = articleService.createArticle(articleDto, featuredImage);
        APIResponse response = new APIResponse(201, "Article created successfully", created);
        logger.info("Article created successfully with ID: {}", created.getId());
        return new ResponseEntity<>(response, HttpStatus.CREATED);
    }

    @PostMapping("/create")
    public ResponseEntity<APIResponse> createArticleJson(@RequestBody ArticleDto articleDto) {
        logger.info("Creating article (JSON): {}", articleDto.getTitle());
        ArticleDto created = articleService.createArticle(articleDto, null);
        APIResponse response = new APIResponse(201, "Article created successfully", created);
        logger.info("Article created successfully with ID: {}", created.getId());
        return new ResponseEntity<>(response, HttpStatus.CREATED);
    }

    @GetMapping("/get/article/{id}")
    public ResponseEntity<APIResponse> getArticleById(@PathVariable Long id) {
        logger.info("Fetching article by ID: {}", id);
        ArticleDto article = articleService.getArticleById(id);
        APIResponse response = new APIResponse(200, "Article retrieved successfully", article);
        return ResponseEntity.ok(response);
    }

    @GetMapping("/all")
    public ResponseEntity<APIResponse> getAllPublishedArticles(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size) {
        logger.info("Fetching all published articles - page: {}, size: {}", page, size);
        Pageable pageable = PageRequest.of(page, size);
        Page<ArticleDto> articles = articleService.getAllPublishedArticles(pageable);
        APIResponse response = new APIResponse(200, "Articles retrieved successfully", articles);
        logger.info("Retrieved {} articles", articles.getNumberOfElements());
        return ResponseEntity.ok(response);
    }

    @GetMapping("/all/drafts")
    public ResponseEntity<APIResponse> getAllArticlesByAuthor(@RequestParam Long authorId) {
        logger.info("Fetching all articles by author: {} (including drafts)", authorId);
        List<ArticleDto> articles = articleService.getArticlesByAuthor(authorId);
        APIResponse response = new APIResponse(200, "Author articles retrieved successfully", articles);
        logger.info("Retrieved {} total articles for author", articles.size());
        return ResponseEntity.ok(response);
    }

    @GetMapping("/category/{categoryId}")
    public ResponseEntity<APIResponse> getArticlesByCategory(
            @PathVariable Long categoryId,
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size) {
        logger.info("Fetching articles by category: {}", categoryId);
        Pageable pageable = PageRequest.of(page, size);
        Page<ArticleDto> articles = articleService.getArticlesByCategory(categoryId, pageable);
        APIResponse response = new APIResponse(200, "Articles retrieved successfully", articles);
        return ResponseEntity.ok(response);
    }

    @GetMapping("/search")
    public ResponseEntity<APIResponse> searchArticles(
            @RequestParam String keyword,
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size) {
        logger.info("Searching articles with keyword: {}", keyword);
        Pageable pageable = PageRequest.of(page, size);
        Page<ArticleDto> articles = articleService.searchArticles(keyword, pageable);
        APIResponse response = new APIResponse(200, "Search results retrieved successfully", articles);
        return ResponseEntity.ok(response);
    }

    // get draft articles by author
    @GetMapping("/author/{authorId}")
    public ResponseEntity<APIResponse> getArticlesByAuthor(@PathVariable Long authorId) {
        logger.info("Fetching articles by author: {}", authorId);
        List<ArticleDto> articles = articleService.getArticlesByAuthor(authorId);
        APIResponse response = new APIResponse(200, "Author articles retrieved successfully", articles);
        return ResponseEntity.ok(response);
    }

    @GetMapping("/popular")
    public ResponseEntity<APIResponse> getPopularArticles(
            @RequestParam(defaultValue = "5") int limit) {
        logger.info("Fetching popular articles with limit: {}", limit);
        List<ArticleDto> articles = articleService.getPopularArticles(limit);
        APIResponse response = new APIResponse(200, "Popular articles retrieved successfully", articles);
        return ResponseEntity.ok(response);
    }

    @PutMapping("/{id}")
    public ResponseEntity<APIResponse> updateArticle(
            @PathVariable Long id,
            @RequestPart("article") ArticleDto articleDto,
            @RequestPart(value = "featuredImage", required = false) MultipartFile featuredImage) {
        logger.info("Updating article with ID: {}", id);
        ArticleDto updated = articleService.updateArticle(id, articleDto, featuredImage);
        APIResponse response = new APIResponse(200, "Article updated successfully", updated);
        logger.info("Article updated successfully with ID: {}", id);
        return ResponseEntity.ok(response);
    }

    @PutMapping("/{id}/publish")
    public ResponseEntity<APIResponse> publishArticle(@PathVariable Long id) {
        logger.info("Publishing article with ID: {}", id);
        ArticleDto published = articleService.publishArticle(id);
        APIResponse response = new APIResponse(200, "Article published successfully", published);
        logger.info("Article published successfully with ID: {}", id);
        return ResponseEntity.ok(response);
    }

    @PutMapping("/{id}/archive")
    public ResponseEntity<APIResponse> archiveArticle(@PathVariable Long id) {
        logger.info("Archiving article with ID: {}", id);
        ArticleDto archived = articleService.archiveArticle(id);
        APIResponse response = new APIResponse(200, "Article archived successfully", archived);
        logger.info("Article archived successfully with ID: {}", id);
        return ResponseEntity.ok(response);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<APIResponse> deleteArticle(@PathVariable Long id) {
        logger.info("Deleting article with ID: {}", id);
        articleService.deleteArticle(id);
        APIResponse response = new APIResponse(200, "Article deleted successfully", null);
        logger.info("Article deleted successfully with ID: {}", id);
        return ResponseEntity.ok(response);
    }

    @PostMapping("/{id}/view")
    public ResponseEntity<APIResponse> incrementViewCount(@PathVariable Long id) {
        logger.info("Incrementing view count for article: {}", id);
        ArticleDto updated = articleService.incrementViewCount(id);
        APIResponse response = new APIResponse(200, "View count incremented", updated);
        return ResponseEntity.ok(response);
    }

    @PostMapping("/{id}/like")
    public ResponseEntity<APIResponse> incrementLikeCount(@PathVariable Long id) {
        logger.info("Incrementing like count for article: {}", id);
        ArticleDto updated = articleService.incrementLikeCount(id);
        APIResponse response = new APIResponse(200, "Like count incremented", updated);
        return ResponseEntity.ok(response);
    }
}
