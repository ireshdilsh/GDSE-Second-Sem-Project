# Blog Image Upload API Documentation

## Overview
This API allows you to create and manage blog posts with image attachments. Images are stored directly in the MySQL database as BLOB data.

## Features
- ✅ Save blog posts with or without images
- ✅ Support for multiple image formats (JPEG, PNG, GIF, WebP, BMP)
- ✅ Image validation and size limits (50MB max)
- ✅ Retrieve blog images via dedicated endpoint
- ✅ Search blogs by title
- ✅ Get blogs by user email
- ✅ Full CRUD operations

## API Endpoints

### 1. Create Blog Without Image
```http
POST /api/v1/blog/add/new/blog
Content-Type: application/json

{
    "email": "user@example.com",
    "title": "My Blog Title",
    "details": "Blog content goes here..."
}
```

### 2. Create Blog With Image
```http
POST /api/v1/blog/add/blog/with/image
Content-Type: multipart/form-data

Form Data:
- blog: {
    "email": "user@example.com",
    "title": "My Blog with Image",
    "details": "Blog content with image..."
  }
- image: [image file]
```

### 3. Get All Blogs
```http
GET /api/v1/blog/get/all/blogs
```

### 4. Get Blog by ID
```http
GET /api/v1/blog/get/blog/{id}
```

### 5. Get Blog Image
```http
GET /api/v1/blog/get/blog/image/{id}
```
Returns the image with proper content type headers.

### 6. Get Blogs by Email
```http
GET /api/v1/blog/get/blogs/by/email?email=user@example.com
```

### 7. Search Blogs by Title
```http
GET /api/v1/blog/search/blogs?title=search_term
```

### 8. Update Blog
```http
PUT /api/v1/blog/update/blog/{id}
Content-Type: application/json

{
    "email": "user@example.com",
    "title": "Updated Title",
    "details": "Updated content..."
}
```

### 9. Delete Blog
```http
DELETE /api/v1/blog/delete/blog/{id}
```

## Response Format
All API responses follow this structure:
```json
{
    "code": 200,
    "message": "success",
    "data": {
        "id": 1,
        "email": "user@example.com",
        "title": "Blog Title",
        "details": "Blog content...",
        "imageName": "image.jpg",
        "imageType": "image/jpeg",
        "imageData": "base64_encoded_data"
    }
}
```

## Image Handling
- **Supported formats**: JPEG, PNG, GIF, WebP, BMP
- **Maximum file size**: 50MB
- **Storage**: Images are stored as BLOB in MySQL database
- **Validation**: Automatic file type and size validation
- **Compression**: Large images may be compressed automatically

## Database Schema
The `blogs` table includes these fields:
- `id`: Primary key (auto-increment)
- `email`: User email (not null)
- `title`: Blog title (not null)
- `details`: Blog content (TEXT)
- `image_name`: Original filename
- `image_type`: MIME type
- `image_data`: Binary image data (LONGBLOB)

## Error Handling
The API handles various error scenarios:
- **400**: Image processing errors, invalid data
- **404**: Blog not found, no resources
- **413**: File size exceeds limit
- **500**: Internal server errors

## Usage Examples

### Frontend JavaScript (Fetch API)
```javascript
// Create blog with image
const formData = new FormData();
formData.append('blog', JSON.stringify({
    email: 'user@example.com',
    title: 'My Blog',
    details: 'Content here...'
}));
formData.append('image', fileInput.files[0]);

fetch('/api/v1/blog/add/blog/with/image', {
    method: 'POST',
    body: formData
})
.then(response => response.json())
.then(data => console.log(data));

// Display image
const imageUrl = '/api/v1/blog/get/blog/image/' + blogId;
document.getElementById('blogImage').src = imageUrl;
```

### cURL Examples
```bash
# Create blog with image
curl -X POST \
  -F 'blog={"email":"user@example.com","title":"Test Blog","details":"Content..."}' \
  -F 'image=@path/to/image.jpg' \
  http://localhost:8080/api/v1/blog/add/blog/with/image

# Get blog image
curl -X GET \
  http://localhost:8080/api/v1/blog/get/blog/image/1 \
  --output blog_image.jpg
```

## Configuration
The following properties are set in `application.properties`:
```properties
# File upload configuration
spring.servlet.multipart.enabled=true
spring.servlet.multipart.max-file-size=50MB
spring.servlet.multipart.max-request-size=50MB
spring.servlet.multipart.file-size-threshold=2KB
```

## Testing
You can test the API using:
- Postman
- Swagger UI (available at `/swagger-ui.html`)
- Frontend forms
- cURL commands

The API is fully functional and ready to handle blog posts with image uploads!
