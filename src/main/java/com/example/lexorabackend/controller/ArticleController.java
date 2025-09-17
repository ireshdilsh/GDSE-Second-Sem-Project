package com.example.lexorabackend.controller;

import com.example.lexorabackend.dto.ArticleDto;
import com.example.lexorabackend.service.ArticleService;
import com.example.lexorabackend.util.APIResponse;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/articles")
@CrossOrigin(origins = "*")
public class ArticleController {

    Logger logger = LoggerFactory.getLogger(ArticleController.class);

    @Autowired
    private ArticleService articleService;

    // CREATE - Add new article
    @PostMapping("/add/new/article")
    public ResponseEntity<APIResponse> addArticle(@RequestBody ArticleDto articleDto) {
        logger.info("Adding new article: {}", articleDto.getTitle());
        ArticleDto dto = articleService.addNewArticle(articleDto);
        logger.info("Article added successfully with ID: {}", dto.getId());
        return new ResponseEntity<>(
            new APIResponse(200, "Article added successfully", dto),
            HttpStatus.CREATED
        );
    }

    // READ - Get all articles
    @GetMapping("/get/all/articles")
    public ResponseEntity<APIResponse> getAllArticles() {
        logger.info("Getting all articles");
        List<ArticleDto> dtos = articleService.getAllArticles();
        logger.info("Retrieved {} articles", dtos.size());
        return new ResponseEntity<>(
            new APIResponse(200, "All articles retrieved successfully", dtos),
            HttpStatus.OK
        );
    }

    // READ - Get article by ID
    @GetMapping("/get/article/{id}")
    public ResponseEntity<APIResponse> getArticleById(@PathVariable Long id) {
        logger.info("Getting article with ID: {}", id);
        articleService.incrementViewCount(id); // Increment view count when accessed
        ArticleDto dto = articleService.getArticleById(id);
        logger.info("Article retrieved: {}", dto.getTitle());
        return new ResponseEntity<>(
            new APIResponse(200, "Article retrieved successfully", dto),
            HttpStatus.OK
        );
    }

    // UPDATE - Update article
    @PutMapping("/update/article/{id}")
    public ResponseEntity<APIResponse> updateArticle(
            @PathVariable Long id,
            @RequestBody ArticleDto articleDto) {
        logger.info("Updating article with ID: {}", id);
        ArticleDto dto = articleService.updateArticle(id, articleDto);
        logger.info("Article updated successfully");
        return new ResponseEntity<>(
            new APIResponse(200, "Article updated successfully", dto),
            HttpStatus.OK
        );
    }

    // DELETE - Delete article
    @DeleteMapping("/delete/article/{id}")
    public ResponseEntity<APIResponse> deleteArticle(@PathVariable Long id) {
        logger.info("Deleting article with ID: {}", id);
        ArticleDto dto = articleService.deleteArticle(id);
        logger.info("Article deleted successfully");
        return new ResponseEntity<>(
            new APIResponse(200, "Article deleted successfully", dto),
            HttpStatus.OK
        );
    }

    // PUBLISH - Publish article
    @PutMapping("/publish/article/{id}")
    public ResponseEntity<APIResponse> publishArticle(@PathVariable Long id) {
        logger.info("Publishing article with ID: {}", id);
        ArticleDto dto = articleService.publishArticle(id);
        logger.info("Article published successfully");
        return new ResponseEntity<>(
            new APIResponse(200, "Article published successfully", dto),
            HttpStatus.OK
        );
    }

    // UNPUBLISH - Unpublish article
    @PutMapping("/unpublish/article/{id}")
    public ResponseEntity<APIResponse> unpublishArticle(@PathVariable Long id) {
        logger.info("Unpublishing article with ID: {}", id);
        ArticleDto dto = articleService.unpublishArticle(id);
        logger.info("Article unpublished successfully");
        return new ResponseEntity<>(
            new APIResponse(200, "Article unpublished successfully", dto),
            HttpStatus.OK
        );
    }

    // GET PUBLISHED - Get all published articles
    @GetMapping("/get/published/articles")
    public ResponseEntity<APIResponse> getPublishedArticles() {
        logger.info("Getting all published articles");
        List<ArticleDto> dtos = articleService.getPublishedArticles();
        logger.info("Retrieved {} published articles", dtos.size());
        return new ResponseEntity<>(
            new APIResponse(200, "Published articles retrieved successfully", dtos),
            HttpStatus.OK
        );
    }

    // GET BY AUTHOR - Get articles by author
    @GetMapping("/get/articles/author/{authorId}")
    public ResponseEntity<APIResponse> getArticlesByAuthor(@PathVariable Long authorId) {
        logger.info("Getting articles for author ID: {}", authorId);
        List<ArticleDto> dtos = articleService.getArticlesByAuthor(authorId);
        logger.info("Retrieved {} articles for author", dtos.size());
        return new ResponseEntity<>(
            new APIResponse(200, "Author articles retrieved successfully", dtos),
            HttpStatus.OK
        );
    }

    // GET BY CATEGORY - Get articles by category
    @GetMapping("/get/articles/category/{categoryId}")
    public ResponseEntity<APIResponse> getArticlesByCategory(@PathVariable Long categoryId) {
        logger.info("Getting articles for category ID: {}", categoryId);
        List<ArticleDto> dtos = articleService.getArticlesByCategory(categoryId);
        logger.info("Retrieved {} articles for category", dtos.size());
        return new ResponseEntity<>(
            new APIResponse(200, "Category articles retrieved successfully", dtos),
            HttpStatus.OK
        );
    }

    // SEARCH - Search articles
    @GetMapping("/search/articles")
    public ResponseEntity<APIResponse> searchArticles(@RequestParam String query) {
        logger.info("Searching articles with query: {}", query);
        List<ArticleDto> dtos = articleService.searchArticles(query);
        logger.info("Found {} articles matching the query", dtos.size());
        return new ResponseEntity<>(
            new APIResponse(200, "Search completed successfully", dtos),
            HttpStatus.OK
        );
    }

    // TRENDING - Get trending articles
    @GetMapping("/get/trending/articles")
    public ResponseEntity<APIResponse> getTrendingArticles() {
        logger.info("Getting trending articles");
        List<ArticleDto> dtos = articleService.getTrendingArticles();
        logger.info("Retrieved {} trending articles", dtos.size());
        return new ResponseEntity<>(
            new APIResponse(200, "Trending articles retrieved successfully", dtos),
            HttpStatus.OK
        );
    }

    // LIKE - Like an article
    @PostMapping("/like/article/{id}")
    public ResponseEntity<APIResponse> likeArticle(@PathVariable Long id) {
        logger.info("Liking article with ID: {}", id);
        articleService.likeArticle(id);
        logger.info("Article liked successfully");
        return new ResponseEntity<>(
            new APIResponse(200, "Article liked successfully", null),
            HttpStatus.OK
        );
    }

    // UNLIKE - Unlike an article
    @PostMapping("/unlike/article/{id}")
    public ResponseEntity<APIResponse> unlikeArticle(@PathVariable Long id) {
        logger.info("Unliking article with ID: {}", id);
        articleService.unlikeArticle(id);
        logger.info("Article unliked successfully");
        return new ResponseEntity<>(
            new APIResponse(200, "Article unliked successfully", null),
            HttpStatus.OK
        );
    }
}
