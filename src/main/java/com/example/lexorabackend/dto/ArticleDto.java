package com.example.lexorabackend.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class ArticleDto {
    private Long id;
    private String title;
    private String subTitle;
    private CategoryDto cateory;
    private AuthDto author;
    private String content;
    private LocalDateTime publishDate;
    private int readTime;
}
