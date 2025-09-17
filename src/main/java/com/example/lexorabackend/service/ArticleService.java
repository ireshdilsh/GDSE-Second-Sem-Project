package com.example.lexorabackend.service;

import com.example.lexorabackend.dto.ArticleDto;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import java.util.List;
import java.util.UUID;

public interface ArticleService {

    ArticleDto addNewArticle(ArticleDto articleDto);
}
