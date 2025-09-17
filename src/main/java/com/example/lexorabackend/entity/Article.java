package com.example.lexorabackend.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Article {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String title;

    private String subTitle;

    @Column(columnDefinition = "TEXT")
    private String content;

    @ManyToOne
    @JoinColumn(name = "category_id")
    private Category category;

    @ManyToOne
    @JoinColumn(name = "author_id")
    private Auth author;

    private String status = ArticleStatus.DRAFT.name();
    private LocalDate createdAt;
    private LocalDate updatedAt;
    private LocalDate publishedAt;
    private int estimatedReadTime;
    private long viewCount;
    private long likeCount;

    @PrePersist
    protected void onCreate() {
        createdAt = LocalDate.now();
        viewCount = 0;
        likeCount = 0;
    }

    @PreUpdate
    protected void onUpdate() {
        updatedAt = LocalDate.now();
    }

    public enum ArticleStatus {
        DRAFT,
        PUBLISHED,
    }
}
