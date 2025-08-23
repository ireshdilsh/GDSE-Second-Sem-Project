package com.example.demo.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class BlogDto {
    private Long id;
    private String title;
    private String content;
    private String author;
    private String imageUrl;
    private LocalDate createdAt;
    private LocalDate updatedAt;
}
