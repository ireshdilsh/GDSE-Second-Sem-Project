package com.example.demo.controller;

import com.example.demo.dto.ArticleDto;
import com.example.demo.service.ArticleService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@RestController
@RequestMapping("/api/articles")
@RequiredArgsConstructor
@CrossOrigin(origins = "*")
public class ArticleController {
    private final ArticleService articleService;

    @PostMapping
    public ResponseEntity<ArticleDto> createArticle(
            @RequestPart("article") ArticleDto articleDto,
            @RequestPart(value = "featuredImage", required = false) MultipartFile featuredImage) {
        ArticleDto created = articleService.createArticle(articleDto, featuredImage);
        return new ResponseEntity<>(created, HttpStatus.CREATED);
    }

    @GetMapping("/{id}")
    public ResponseEntity<ArticleDto> getArticleById(@PathVariable Long id) {
        ArticleDto article = articleService.getArticleById(id);
        return ResponseEntity.ok(article);
    }

    @GetMapping("/slug/{slug}")
    public ResponseEntity<ArticleDto> getArticleBySlug(@PathVariable String slug) {
        ArticleDto article = articleService.getArticleBySlug(slug);
        return ResponseEntity.ok(article);
    }

    @GetMapping
    public ResponseEntity<Page<ArticleDto>> getAllPublishedArticles(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size) {
        Pageable pageable = PageRequest.of(page, size);
        Page<ArticleDto> articles = articleService.getAllPublishedArticles(pageable);
        return ResponseEntity.ok(articles);
    }

    @GetMapping("/category/{categoryId}")
    public ResponseEntity<Page<ArticleDto>> getArticlesByCategory(
            @PathVariable Long categoryId,
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size) {
        Pageable pageable = PageRequest.of(page, size);
        Page<ArticleDto> articles = articleService.getArticlesByCategory(categoryId, pageable);
        return ResponseEntity.ok(articles);
    }

    @GetMapping("/tag/{tagName}")
    public ResponseEntity<Page<ArticleDto>> getArticlesByTag(
            @PathVariable String tagName,
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size) {
        Pageable pageable = PageRequest.of(page, size);
        Page<ArticleDto> articles = articleService.getArticlesByTag(tagName, pageable);
        return ResponseEntity.ok(articles);
    }

    @GetMapping("/search")
    public ResponseEntity<Page<ArticleDto>> searchArticles(
            @RequestParam String keyword,
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size) {
        Pageable pageable = PageRequest.of(page, size);
        Page<ArticleDto> articles = articleService.searchArticles(keyword, pageable);
        return ResponseEntity.ok(articles);
    }

    @GetMapping("/author/{authorId}")
    public ResponseEntity<List<ArticleDto>> getArticlesByAuthor(@PathVariable Long authorId) {
        List<ArticleDto> articles = articleService.getArticlesByAuthor(authorId);
        return ResponseEntity.ok(articles);
    }

    @GetMapping("/popular")
    public ResponseEntity<List<ArticleDto>> getPopularArticles(
            @RequestParam(defaultValue = "5") int limit) {
        List<ArticleDto> articles = articleService.getPopularArticles(limit);
        return ResponseEntity.ok(articles);
    }

    @PutMapping("/{id}")
    public ResponseEntity<ArticleDto> updateArticle(
            @PathVariable Long id,
            @RequestPart("article") ArticleDto articleDto,
            @RequestPart(value = "featuredImage", required = false) MultipartFile featuredImage) {
        ArticleDto updated = articleService.updateArticle(id, articleDto, featuredImage);
        return ResponseEntity.ok(updated);
    }

    @PutMapping("/{id}/publish")
    public ResponseEntity<ArticleDto> publishArticle(@PathVariable Long id) {
        ArticleDto published = articleService.publishArticle(id);
        return ResponseEntity.ok(published);
    }

    @PutMapping("/{id}/archive")
    public ResponseEntity<ArticleDto> archiveArticle(@PathVariable Long id) {
        ArticleDto archived = articleService.archiveArticle(id);
        return ResponseEntity.ok(archived);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteArticle(@PathVariable Long id) {
        articleService.deleteArticle(id);
        return ResponseEntity.noContent().build();
    }

    @PostMapping("/{id}/view")
    public ResponseEntity<ArticleDto> incrementViewCount(@PathVariable Long id) {
        ArticleDto updated = articleService.incrementViewCount(id);
        return ResponseEntity.ok(updated);
    }

    @PostMapping("/{id}/like")
    public ResponseEntity<ArticleDto> incrementLikeCount(@PathVariable Long id) {
        ArticleDto updated = articleService.incrementLikeCount(id);
        return ResponseEntity.ok(updated);
    }
}
