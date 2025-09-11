package com.example.demo.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ContactDto {
    private String name;
    private String email;
    private String subject;
    private String message;
}
