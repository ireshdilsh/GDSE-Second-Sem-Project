package com.example.lexorabackend.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Entity
public class Article {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private Long id;
    private  String title;
    private String subTitle;

    @ManyToOne
    @JoinColumn(name = "cate_id")
    private Cateory cateory;

    @ManyToOne
    @JoinColumn(name = "author_id")
    private Auth author;

    private String content;
    private LocalDateTime publishDate;
    private int readTime;
}
