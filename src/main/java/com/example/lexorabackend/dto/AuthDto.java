package com.example.lexorabackend.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;
import java.util.UUID;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class AuthDto {
    private Long id;
    private String name;
    private String email;
    private String password;
    private String bio;
    private String website;
    private String twitterUsername;
    private String token;
    private List<ArticleDto> articles;
}
