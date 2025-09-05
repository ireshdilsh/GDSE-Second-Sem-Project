package com.example.demo.service;

import com.example.demo.dto.CommentDto;

import java.util.List;

public interface CommentService {
    CommentDto createComment(CommentDto commentDto);
    CommentDto getCommentById(Long id);
    List<CommentDto> getCommentsByArticle(Long articleId);
    List<CommentDto> getRepliesByComment(Long parentCommentId);
    CommentDto updateComment(Long id, CommentDto commentDto);
    void deleteComment(Long id);
    CommentDto incrementLikeCount(Long id);
    int getCommentCountByArticle(Long articleId);
}
