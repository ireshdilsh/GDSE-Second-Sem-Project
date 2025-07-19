package com.example.demo.dto;

import lombok.Setter;
import lombok.Getter;

@Getter
@Setter
public class ContactDto {
    private Long id;
    private String name;
    private String email;
    private String subject;
    private String message;
}
