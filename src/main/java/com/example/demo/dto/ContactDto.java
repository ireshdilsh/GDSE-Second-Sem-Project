package com.example.demo.dto;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Data
public class ContactDto {
    private Long id;
    private String fName;
    private String lName;
    private String email;
    private String phone;
    private String subject;
    private String message;
}
