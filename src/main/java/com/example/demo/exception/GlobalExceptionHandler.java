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
        return new ResponseEntity(new APIResponse(404, "Already Exists Email", null),HttpStatus.BAD_REQUEST);
    }

    @ExceptionHandler(ResourceNotFoundException.class)
    public ResponseEntity<APIResponse> handleResourceNotFound(ResourceNotFoundException e) {
        return new ResponseEntity(new APIResponse(404, "Resource Not Found", null),HttpStatus.BAD_REQUEST);
    }

}
