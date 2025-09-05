package com.example.demo.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
import java.util.List;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class ArticleDto {
    private Long id;
    private String title;
    private String subtitle;
    private String content;
    private String featuredImage;
    private String slug;
    private Integer readTime;
    private String status;
    private Integer viewCount;
    private Integer likeCount;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
    private LocalDateTime publishedAt;
    
    // Author information
    private Long authorId;
    private String authorUsername;
    private String authorName;
    private String authorProfileImage;
    
    // Category information
    private Long categoryId;
    private String categoryName;
    
    // Tags
    private List<TagDto> tags;
    
    // Comment count
    private Integer commentCount;
}
