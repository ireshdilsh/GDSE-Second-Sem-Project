package com.example.demo.dto;

import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
public class AdminDto {
    private Long id;
    private String fName;
    private String lName;
    private String email;
    private String password;
}
