package com.example.lexorabackend.service.impl;

import com.example.lexorabackend.dto.ArticleDto;
import com.example.lexorabackend.entity.Article;
import com.example.lexorabackend.entity.Auth;
import com.example.lexorabackend.entity.Category;
import com.example.lexorabackend.repository.ArticleRepository;
import com.example.lexorabackend.service.ArticleService;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.slf4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class ArticleServiceImpl implements ArticleService {

    @Autowired
    private ArticleRepository articleRepository;

    Logger logger = org.slf4j.LoggerFactory.getLogger(ArticleServiceImpl.class);

    private final ModelMapper modelMapper;

    @Override
    public ArticleDto addNewArticle(ArticleDto articleDto) {
        logger.info("Add new article");
        Article article = modelMapper.map(articleDto, Article.class);
        article.setCreatedAt(articleDto.getCreatedAt());
        article.setUpdatedAt(articleDto.getUpdatedAt());

        Category category = modelMapper.map(articleDto.getCategory(), Category.class);
        article.setCategory(category);

        Auth auth = modelMapper.map(articleDto.getAuthor(), Auth.class);
        article.setAuthor(auth);

        Article savedArticle = articleRepository.save(article);
        logger.info("Article added successfully");
        return modelMapper.map(savedArticle, ArticleDto.class);
    }
}
