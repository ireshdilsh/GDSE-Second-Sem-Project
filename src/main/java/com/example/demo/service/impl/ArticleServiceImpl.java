package com.example.demo.service.impl;

import com.example.demo.dto.ArticleDto;
import com.example.demo.entity.Article;
import com.example.demo.entity.Category;
import com.example.demo.entity.User;
import com.example.demo.exception.ResourceNotFoundException;
import com.example.demo.repository.ArticleRepository;
import com.example.demo.repository.CategoryRepository;
import com.example.demo.repository.UserRepository;
import com.example.demo.service.ArticleService;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;

@RequiredArgsConstructor
@Service
public class ArticleServiceImpl implements ArticleService {
    private final ArticleRepository articleRepository;
    private final UserRepository userRepository;
    private final CategoryRepository categoryRepository;
    private final ModelMapper modelMapper;
    
    private static final Logger logger = LoggerFactory.getLogger(ArticleServiceImpl.class);
    private final String uploadDir = "uploads/articles/";

    @Override
    public ArticleDto createArticle(ArticleDto articleDto, MultipartFile featuredImage) {
        logger.info("Creating article: {}", articleDto.getTitle());
        
        Article article = new Article();
        article.setTitle(articleDto.getTitle());
        article.setSubtitle(articleDto.getSubtitle());
        article.setContent(articleDto.getContent());
        article.setReadTime(calculateReadTime(articleDto.getContent()));
        
        // Set author
        User author = userRepository.findById(articleDto.getAuthorId())
                .orElseThrow(() -> new ResourceNotFoundException("Author not found"));
        article.setAuthor(author);
        
        // Set category if provided
        if (articleDto.getCategoryId() != null) {
            Category category = categoryRepository.findById(articleDto.getCategoryId())
                    .orElseThrow(() -> new ResourceNotFoundException("Category not found"));
            article.setCategory(category);
        }
        
        // Handle featured image
        if (featuredImage != null && !featuredImage.isEmpty()) {
            String imageUrl = saveFeaturedImage(featuredImage);
            article.setFeaturedImage(imageUrl);
        }
        
        Article saved = articleRepository.save(article);
        logger.info("Article created with ID: {}", saved.getId());
        return convertToDto(saved);
    }

    @Override
    public ArticleDto getArticleById(Long id) {
        logger.info("Fetching article by ID: {}", id);
        Article article = articleRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Article not found with ID: " + id));
        return convertToDto(article);
    }


    @Override
    public Page<ArticleDto> getAllPublishedArticles(Pageable pageable) {
        logger.info("Fetching all published articles");
        Pageable sortedPageable = PageRequest.of(
                pageable.getPageNumber(), 
                pageable.getPageSize(), 
                Sort.by(Sort.Direction.DESC, "publishedAt")
        );
        Page<Article> articles = articleRepository.findByStatus(Article.ArticleStatus.PUBLISHED, sortedPageable);
        return articles.map(this::convertToDto);
    }

    @Override
    public Page<ArticleDto> getArticlesByCategory(Long categoryId, Pageable pageable) {
        logger.info("Fetching articles by category: {}", categoryId);
        Page<Article> articles = articleRepository.findByCategoryIdAndStatus(
                categoryId, Article.ArticleStatus.PUBLISHED, pageable);
        return articles.map(this::convertToDto);
    }

    @Override
    public Page<ArticleDto> searchArticles(String keyword, Pageable pageable) {
        logger.info("Searching articles with keyword: {}", keyword);
        Page<Article> articles = articleRepository.findByStatusAndKeyword(
                Article.ArticleStatus.PUBLISHED, keyword, pageable);
        return articles.map(this::convertToDto);
    }

    @Override
    public List<ArticleDto> getArticlesByAuthor(Long authorId) {
        logger.info("Fetching articles by author: {}", authorId);
        User author = userRepository.findById(authorId)
                .orElseThrow(() -> new ResourceNotFoundException("Author not found"));
        List<Article> articles = articleRepository.findByAuthor(author);
        return articles.stream().map(this::convertToDto).collect(Collectors.toList());
    }

    @Override
    public List<ArticleDto> getPopularArticles(int limit) {
        logger.info("Fetching popular articles with limit: {}", limit);
        Pageable pageable = PageRequest.of(0, limit);
        List<Article> articles = articleRepository.findPopularArticles(pageable);
        return articles.stream().map(this::convertToDto).collect(Collectors.toList());
    }

    @Override
    public ArticleDto updateArticle(Long id, ArticleDto articleDto, MultipartFile featuredImage) {
        logger.info("Updating article with ID: {}", id);
        Article article = articleRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Article not found"));
        
        article.setTitle(articleDto.getTitle());
        article.setSubtitle(articleDto.getSubtitle());
        article.setContent(articleDto.getContent());
        article.setReadTime(calculateReadTime(articleDto.getContent()));
        
        // Update category if provided
        if (articleDto.getCategoryId() != null) {
            Category category = categoryRepository.findById(articleDto.getCategoryId())
                    .orElseThrow(() -> new ResourceNotFoundException("Category not found"));
            article.setCategory(category);
        }
        
        // Handle featured image
        if (featuredImage != null && !featuredImage.isEmpty()) {
            String imageUrl = saveFeaturedImage(featuredImage);
            article.setFeaturedImage(imageUrl);
        }
        
        Article updated = articleRepository.save(article);
        logger.info("Article updated with ID: {}", updated.getId());
        return convertToDto(updated);
    }

    @Override
    public ArticleDto publishArticle(Long id) {
        logger.info("Publishing article with ID: {}", id);
        Article article = articleRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Article not found"));
        
        article.setStatus(Article.ArticleStatus.PUBLISHED);
        article.setPublishedAt(LocalDateTime.now());
        
        Article updated = articleRepository.save(article);
        logger.info("Article published with ID: {}", updated.getId());
        return convertToDto(updated);
    }

    @Override
    public ArticleDto archiveArticle(Long id) {
        logger.info("Archiving article with ID: {}", id);
        Article article = articleRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Article not found"));
        
        article.setStatus(Article.ArticleStatus.ARCHIVED);
        
        Article updated = articleRepository.save(article);
        logger.info("Article archived with ID: {}", updated.getId());
        return convertToDto(updated);
    }

    @Override
    public void deleteArticle(Long id) {
        logger.info("Deleting article with ID: {}", id);
        if (!articleRepository.existsById(id)) {
            throw new ResourceNotFoundException("Article not found with ID: " + id);
        }
        articleRepository.deleteById(id);
        logger.info("Article deleted with ID: {}", id);
    }

    @Override
    public ArticleDto incrementViewCount(Long id) {
        logger.info("Incrementing view count for article: {}", id);
        Article article = articleRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Article not found"));
        
        article.setViewCount(article.getViewCount() + 1);
        Article updated = articleRepository.save(article);
        return convertToDto(updated);
    }

    @Override
    public ArticleDto incrementLikeCount(Long id) {
        logger.info("Incrementing like count for article: {}", id);
        Article article = articleRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Article not found"));
        
        article.setLikeCount(article.getLikeCount() + 1);
        Article updated = articleRepository.save(article);
        return convertToDto(updated);
    }

    private ArticleDto convertToDto(Article article) {
        ArticleDto dto = modelMapper.map(article, ArticleDto.class);
        
        // Set author information
        dto.setAuthorId(article.getAuthor().getId());
        dto.setAuthorUsername(article.getAuthor().getUsername());
        dto.setAuthorProfileImage(article.getAuthor().getProfileImage());
        
        // Set category information
        if (article.getCategory() != null) {
            dto.setCategoryId(article.getCategory().getId());
            dto.setCategoryName(article.getCategory().getName());
        }
        
        // Set comment count (you might want to implement this based on your needs)
        dto.setCommentCount(0); // Placeholder
        
        return dto;
    }

    private Integer calculateReadTime(String content) {
        // Assume average reading speed of 200 words per minute
        int wordCount = content.split("\\s+").length;
        return Math.max(1, wordCount / 200);
    }

    private String saveFeaturedImage(MultipartFile imageFile) {
        try {
            Files.createDirectories(Paths.get(uploadDir));
            String fileName = System.currentTimeMillis() + "_" + imageFile.getOriginalFilename();
            Path filePath = Paths.get(uploadDir, fileName);
            imageFile.transferTo(filePath);
            return "/uploads/articles/" + fileName;
        } catch (IOException e) {
            logger.error("Failed to save featured image", e);
            throw new RuntimeException("Failed to save featured image", e);
        }
    }
}

// b37d55be4609de3eec6686762b4de57e71268b3d330b6d1374c7b93dddd40adf