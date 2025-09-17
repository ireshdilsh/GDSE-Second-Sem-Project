package com.example.lexorabackend.service.impl;

import com.example.lexorabackend.dto.ArticleDto;
import com.example.lexorabackend.entity.Article;
import com.example.lexorabackend.entity.Auth;
import com.example.lexorabackend.entity.Category;
import com.example.lexorabackend.repository.ArticleRepository;
import com.example.lexorabackend.repository.AuthRepository;
import com.example.lexorabackend.repository.CategoryRepository;
import com.example.lexorabackend.service.ArticleService;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;
import java.util.stream.Collectors;

@Service
@Transactional
@RequiredArgsConstructor
public class ArticleServiceImpl implements ArticleService {

    private final ArticleRepository articleRepository;
    private final CategoryRepository categoryRepository;
    private final AuthRepository authRepository;
    private final ModelMapper modelMapper;


    @Override
    public ArticleDto addNewArticle(ArticleDto articleDto) {
        Article article = new Article();
        article.setTitle(articleDto.getTitle());
        article.setSubTitle(articleDto.getSubTitle());
        article.setContent(articleDto.getContent());
        article.setStatus(Article.ArticleStatus.DRAFT.name());
        article.setEstimatedReadTime(calculateReadTime(articleDto.getContent()));

        // Set relationships
        setRelationships(article, articleDto);

        Article savedArticle = articleRepository.save(article);
        return convertToDto(savedArticle);
    }

    @Override
    public ArticleDto getArticleById(Long id) {
        Article article = articleRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Article not found with id: " + id));
        return convertToDto(article);
    }

    @Override
    public List<ArticleDto> getAllArticles() {
        List<Article> articles = articleRepository.findAll();
        return articles.stream()
                .map(this::convertToDto)
                .collect(Collectors.toList());
    }

    @Override
    public ArticleDto updateArticle(Long id, ArticleDto articleDto) {
        Article existingArticle = articleRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Article not found with id: " + id));

        existingArticle.setTitle(articleDto.getTitle());
        existingArticle.setSubTitle(articleDto.getSubTitle());
        existingArticle.setContent(articleDto.getContent());
        existingArticle.setEstimatedReadTime(calculateReadTime(articleDto.getContent()));

        // Update relationships if provided
        if (articleDto.getCategoryID() != null) {
            Category category = categoryRepository.findById(articleDto.getCategoryID())
                    .orElseThrow(() -> new RuntimeException("Category not found"));
            existingArticle.setCategory(category);
        }

        Article updatedArticle = articleRepository.save(existingArticle);
        return convertToDto(updatedArticle);
    }

    @Override
    public ArticleDto deleteArticle(Long id) {
        Article article = articleRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Article not found with id: " + id));
        articleRepository.deleteById(id);
        return convertToDto(article);
    }

    @Override
    public ArticleDto publishArticle(Long id) {
        Article article = articleRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Article not found with id: " + id));

        article.setStatus(Article.ArticleStatus.PUBLISHED.name());
        article.setPublishedAt(LocalDate.now());

        Article publishedArticle = articleRepository.save(article);
        return convertToDto(publishedArticle);
    }

    @Override
    public ArticleDto unpublishArticle(Long id) {
        Article article = articleRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Article not found with id: " + id));

        article.setStatus(Article.ArticleStatus.DRAFT.name());
        article.setPublishedAt(null);

        Article unpublishedArticle = articleRepository.save(article);
        return convertToDto(unpublishedArticle);
    }

    @Override
    public List<ArticleDto> getPublishedArticles() {
        List<Article> articles = articleRepository.findByStatusOrderByPublishedAtDesc(
                Article.ArticleStatus.PUBLISHED.name());
        return articles.stream()
                .map(this::convertToDto)
                .collect(Collectors.toList());
    }

    @Override
    public List<ArticleDto> getArticlesByAuthor(Long authorId) {
        List<Article> articles = articleRepository.findByAuthor_IdOrderByCreatedAtDesc(authorId);
        return articles.stream()
                .map(this::convertToDto)
                .collect(Collectors.toList());
    }

    @Override
    public List<ArticleDto> getArticlesByCategory(Long categoryId) {
        List<Article> articles = articleRepository.findByCategory_IdAndStatusOrderByPublishedAtDesc(
                categoryId, Article.ArticleStatus.PUBLISHED.name());
        return articles.stream()
                .map(this::convertToDto)
                .collect(Collectors.toList());
    }

    @Override
    public List<ArticleDto> searchArticles(String query) {
        List<Article> articles = articleRepository
                .findByStatusAndTitleContainingIgnoreCaseOrStatusAndSubTitleContainingIgnoreCase(
                        Article.ArticleStatus.PUBLISHED.name(), query,
                        Article.ArticleStatus.PUBLISHED.name(), query);
        return articles.stream()
                .map(this::convertToDto)
                .collect(Collectors.toList());
    }

    @Override
    public List<ArticleDto> getTrendingArticles() {
        List<Article> articles = articleRepository.findTrendingArticles(
                Article.ArticleStatus.PUBLISHED.name());
        return articles.stream()
                .limit(10) // Limit to top 10 trending articles
                .map(this::convertToDto)
                .collect(Collectors.toList());
    }

    @Override
    public void incrementViewCount(Long id) {
        articleRepository.incrementViewCount(id);
    }

    @Override
    public void likeArticle(Long id) {
        articleRepository.incrementLikeCount(id);
    }

    @Override
    public void unlikeArticle(Long id) {
        articleRepository.decrementLikeCount(id);
    }

    // Helper Methods
    private void setRelationships(Article article, ArticleDto articleDto) {
        if (articleDto.getCategoryID() != null) {
            Category category = categoryRepository.findById(articleDto.getCategoryID())
                    .orElseThrow(() -> new RuntimeException("Category not found with id: " + articleDto.getCategoryID()));
            article.setCategory(category);
        }

        if (articleDto.getAuthorID() != null) {
            Auth author = authRepository.findById(articleDto.getAuthorID())
                    .orElseThrow(() -> new RuntimeException("Author not found with id: " + articleDto.getAuthorID()));
            article.setAuthor(author);
        }
    }

    private ArticleDto convertToDto(Article article) {
        ArticleDto dto = modelMapper.map(article, ArticleDto.class);

        // Set additional fields
        if (article.getCategory() != null) {
            dto.setCategoryID(article.getCategory().getId());
            dto.setCateName(article.getCategory().getCategoryName());
        }

        if (article.getAuthor() != null) {
            dto.setAuthorID(article.getAuthor().getId());
            dto.setAuthorName(article.getAuthor().getName());
        }

        return dto;
    }

    private int calculateReadTime(String content) {
        if (content == null || content.isEmpty()) {
            return 1;
        }
        // Estimate reading time: average 15 words per minute
        int wordCount = content.split("\\s+").length;
        return Math.max(1, (int) Math.ceil(wordCount / 15.0));
    }
}
