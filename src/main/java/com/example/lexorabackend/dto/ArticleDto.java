package com.example.lexorabackend.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ArticleDto {
    private Long id;
    private String title;
    private String subTitle;
    private String content;
    private Long categoryID;
    private String cateName;
    private Long authorID;
    private String authorName;
    private String status;
    private LocalDate createdAt;
    private LocalDate updatedAt;
    private LocalDate publishedAt;
    private int estimatedReadTime;
    private long viewCount;
    private long likeCount;

    // Additional fields for response
    private String readingTime;
}
