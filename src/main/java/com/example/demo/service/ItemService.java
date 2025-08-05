package com.example.demo.service;

import com.example.demo.dto.ItemDto;
import java.util.List;
import org.springframework.web.multipart.MultipartFile;

public interface ItemService {
    ItemDto createItem(ItemDto itemDto, MultipartFile imageFile);
    ItemDto getItemById(Long id);
    List<ItemDto> getAllItems();
    ItemDto updateItem(Long id, ItemDto itemDto, MultipartFile imageFile);
    void deleteItem(Long id);
}
