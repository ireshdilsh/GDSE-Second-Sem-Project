package com.example.lexorabackend.dto;

import lombok.*;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class ContactDto {
    private Long id;
    private String firstName;
    private String lastName;
    private String email;
    private int phone;
    private String subject;
    private String message;
}
