package com.example.demo.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class BlogDto {
    private Long id;
    private String email;
    private String title;
    private String details;
    private String imageName;
    private String imageType;
    private byte[] imageData;
}
