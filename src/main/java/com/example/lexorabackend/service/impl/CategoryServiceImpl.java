package com.example.lexorabackend.service.impl;

import com.example.lexorabackend.repository.CategoryRepository;
import com.example.lexorabackend.service.CategoryService;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class CategoryServiceImpl implements CategoryService {

    Logger logger = LoggerFactory.getLogger(CategoryServiceImpl.class);

    private final ModelMapper modelMapper;

    @Autowired
    private CategoryRepository categoryRepository;
}
