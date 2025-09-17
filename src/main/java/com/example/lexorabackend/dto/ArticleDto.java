package com.example.lexorabackend.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.util.UUID;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ArticleDto {
    private UUID id;
    private String title;
    private String subTitle;
    private String content;
    private CategoryDto category;
    private AuthDto author;
    private String status;
    private LocalDate createdAt;
    private LocalDate updatedAt;
    private LocalDate publishedAt;
    private int estimatedReadTime;
    private long viewCount;
    private long likeCount;
    private boolean featured;
    private String coverImage;

    // Additional fields for response
    private String authorName;
    private String categoryName;
    private String formattedDate;
    private String readingTime;
}
