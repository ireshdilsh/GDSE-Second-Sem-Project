package com.example.lexorabackend.repository;

import com.example.lexorabackend.entity.Cateory;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CategoryRepository extends JpaRepository<Cateory, Long> {
}
