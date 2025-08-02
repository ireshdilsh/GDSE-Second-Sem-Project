package com.example.demo.service.impl;

import java.util.List;

import org.modelmapper.ModelMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.dto.UserDto;
import com.example.demo.entity.User;
import com.example.demo.exception.ExistsByEmailException;
import com.example.demo.repository.UserRepository;
import com.example.demo.service.UserService;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService {

    private static final Logger logger = LoggerFactory.getLogger(UserServiceImpl.class);

    @Autowired
    UserRepository userRepository;

    private final ModelMapper modelMapper;

    @Override
    public void postMethod(UserDto dto) {
        logger.info("Processing user in service: {}", dto);

        if (userRepository.existsByEmail(dto.getEmail())) {
            logger.warn("Attempt to register with existing email: {}", dto.getEmail());
            logger.error("Found Already Exists by Email Address", dto.getEmail());
            throw new ExistsByEmailException("ExistsEmail Exception Running " + dto.getEmail());
        } else {
            userRepository.save(modelMapper.map(dto, User.class));
            logger.info("User Saved In DB: {}", dto);
        }
        logger.info("Operation Complete: {}");

    }

    @Override
    public void getMethod() {
        logger.info("Processing get all users in service");
        List<User> users = userRepository.findAll();
        
            if (users.isEmpty()) {
                
            }

        logger.info("Operation Complete");

    }

}
