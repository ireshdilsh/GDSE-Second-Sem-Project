package com.example.demo.service;

import com.example.demo.dto.TagDto;

import java.util.List;

public interface TagService {
    TagDto createTag(TagDto tagDto);
    TagDto getTagById(Long id);
    TagDto getTagByName(String name);
    List<TagDto> getAllTags();
    TagDto updateTag(Long id, TagDto tagDto);
    void deleteTag(Long id);
    boolean existsByName(String name);
}
