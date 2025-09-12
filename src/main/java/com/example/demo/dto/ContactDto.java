package com.example.demo.dto;

import java.time.LocalDate;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ContactDto {
    private Long id;
    private String name;
    private String email;
    private String subject;
    private String message;
    private LocalDate date;
}
