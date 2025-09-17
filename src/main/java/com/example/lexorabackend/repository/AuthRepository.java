package com.example.lexorabackend.repository;

import com.example.lexorabackend.entity.Auth;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;
import java.util.UUID;

@Repository
public interface AuthRepository extends JpaRepository<Auth, UUID> {
    Optional<Auth> findByEmail(String email);
    Boolean existsByEmail(String email);
}
