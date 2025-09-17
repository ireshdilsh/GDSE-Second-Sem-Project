package com.example.lexorabackend.controller;

import com.example.lexorabackend.dto.ArticleDto;
import com.example.lexorabackend.service.ArticleService;
import com.example.lexorabackend.util.APIResponse;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/api/v1/articles")
@CrossOrigin(origins = "*")
public class ArticleController {

    private final Logger logger = LoggerFactory.getLogger(ArticleController.class);

    @Autowired
    private ArticleService articleService;

    @PostMapping("/add/new/article")
    public ResponseEntity<APIResponse> addNewArticle(@RequestBody ArticleDto articleDto) {
        logger.info("Add new article");
        ArticleDto dto = articleService.addNewArticle(articleDto);
        logger.info("Article added successfully");
        return new ResponseEntity<>(new APIResponse(200, "Article added successfully", dto), HttpStatus.CREATED);
    }
}
