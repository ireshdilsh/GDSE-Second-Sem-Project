package com.example.demo.utils;

import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.awt.image.BufferedImage;
import javax.imageio.ImageIO;
import java.io.ByteArrayInputStream;

import org.springframework.web.multipart.MultipartFile;

public class ImageUtils {
    
    // Supported image types
    private static final String[] SUPPORTED_IMAGE_TYPES = {
        "image/jpeg", "image/jpg", "image/png", "image/gif", "image/webp", "image/bmp"
    };
    
    // Maximum file size (50MB)
    private static final long MAX_FILE_SIZE = 50 * 1024 * 1024;
    
    /**
     * Validates if the uploaded file is a valid image
     */
    public static boolean isValidImage(MultipartFile file) {
        if (file == null || file.isEmpty()) {
            return false;
        }
        
        // Check file size
        if (file.getSize() > MAX_FILE_SIZE) {
            return false;
        }
        
        // Check content type
        String contentType = file.getContentType();
        if (contentType == null) {
            return false;
        }
        
        for (String supportedType : SUPPORTED_IMAGE_TYPES) {
            if (supportedType.equalsIgnoreCase(contentType)) {
                return true;
            }
        }
        
        return false;
    }
    
    /**
     * Compresses image if it's too large
     */
    public static byte[] compressImage(byte[] imageData, String imageType) throws IOException {
        // If image is already small enough, return as is
        if (imageData.length <= 1024 * 1024) { // 1MB
            return imageData;
        }
        
        try {
            ByteArrayInputStream bis = new ByteArrayInputStream(imageData);
            BufferedImage bufferedImage = ImageIO.read(bis);
            
            if (bufferedImage == null) {
                throw new IOException("Could not read image data");
            }
            
            // Get image format from content type
            String format = getImageFormat(imageType);
            
            ByteArrayOutputStream baos = new ByteArrayOutputStream();
            ImageIO.write(bufferedImage, format, baos);
            
            return baos.toByteArray();
        } catch (Exception e) {
            throw new IOException("Error compressing image: " + e.getMessage(), e);
        }
    }
    
    /**
     * Extracts image format from content type
     */
    private static String getImageFormat(String contentType) {
        if (contentType == null) {
            return "jpg";
        }
        
        switch (contentType.toLowerCase()) {
            case "image/jpeg":
            case "image/jpg":
                return "jpg";
            case "image/png":
                return "png";
            case "image/gif":
                return "gif";
            case "image/bmp":
                return "bmp";
            case "image/webp":
                return "webp";
            default:
                return "jpg";
        }
    }
    
    /**
     * Gets a user-friendly file size string
     */
    public static String getFileSizeString(long sizeInBytes) {
        if (sizeInBytes < 1024) {
            return sizeInBytes + " B";
        } else if (sizeInBytes < 1024 * 1024) {
            return String.format("%.2f KB", sizeInBytes / 1024.0);
        } else {
            return String.format("%.2f MB", sizeInBytes / (1024.0 * 1024.0));
        }
    }
}
