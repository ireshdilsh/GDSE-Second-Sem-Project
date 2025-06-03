package com.example.demo.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
public class Admin {
    private String firstName;
    private String lastName;
    @Column(unique = true , nullable = false)
    private String email;
    @Column(nullable = false)
    private String password;
}
