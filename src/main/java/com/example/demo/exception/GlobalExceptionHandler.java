package com.example.demo.exception;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import org.springframework.web.multipart.MaxUploadSizeExceededException;

import com.example.demo.utils.APIResponse;

@RestControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(ExistsByEmailException.class)
    public ResponseEntity<APIResponse> handleEmailExists(ExistsByEmailException e) {
        return new ResponseEntity<>(new APIResponse(404, "Already Exists Email", null),HttpStatus.BAD_REQUEST);
    }

    @ExceptionHandler(ResourceNotFoundException.class)
    public ResponseEntity<APIResponse> handleResourceNotFound(ResourceNotFoundException e) {
        return new ResponseEntity<>(new APIResponse(404, "Resource Not Found", null),HttpStatus.BAD_REQUEST);
    }

    @ExceptionHandler(ExistsByCategoryNameException.class)
    public ResponseEntity<APIResponse> handleCategoryNameExists(ExistsByCategoryNameException e) { 
        return new ResponseEntity<>(new APIResponse(404, "Already Exists Category Name", null),HttpStatus.BAD_REQUEST); 
    }

    @ExceptionHandler(ImageProcessingException.class)
    public ResponseEntity<APIResponse> handleImageProcessingException(ImageProcessingException e) {
        return new ResponseEntity<>(new APIResponse(400, "Image Processing Error: " + e.getMessage(), null), HttpStatus.BAD_REQUEST);
    }

    @ExceptionHandler(MaxUploadSizeExceededException.class)
    public ResponseEntity<APIResponse> handleMaxUploadSizeExceeded(MaxUploadSizeExceededException e) {
        return new ResponseEntity<>(new APIResponse(413, "File size exceeds maximum allowed size", null), HttpStatus.PAYLOAD_TOO_LARGE);
    }

    @ExceptionHandler(RuntimeException.class)
    public ResponseEntity<APIResponse> handleRuntimeException(RuntimeException e) {
        return new ResponseEntity<>(new APIResponse(500, "Internal Server Error: " + e.getMessage(), null), HttpStatus.INTERNAL_SERVER_ERROR);
    }
}
