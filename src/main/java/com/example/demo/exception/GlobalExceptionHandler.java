package com.example.demo.exception;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import com.example.demo.utils.APIResponse;

@RestControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(ExistsByEmailException.class)
    public ResponseEntity<APIResponse> handleEmailExists(ExistsByEmailException e) {
        APIResponse response = new APIResponse(409, e.getMessage(), null); 
        return new ResponseEntity<>(response, HttpStatus.NOT_FOUND);
    }

}
