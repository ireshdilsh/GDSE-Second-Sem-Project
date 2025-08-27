package com.example.demo.service.impl;

import com.example.demo.dto.ItemDto;
import com.example.demo.entity.Category;
import com.example.demo.entity.Item;
import com.example.demo.exception.ResourceNotFoundException;
import com.example.demo.repository.CategoryRepository;
import com.example.demo.repository.ItemRepository;
import com.example.demo.service.ItemService;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;
import java.util.stream.Collectors;

@RequiredArgsConstructor
@Service
public class ItemServiceImpl implements ItemService {
    @Autowired
    private ItemRepository itemRepository;
    @Autowired
    private CategoryRepository categoryRepository;
    @Autowired
    private ModelMapper modelMapper;

    private static final Logger logger = LoggerFactory.getLogger(ItemServiceImpl.class);
    private final String uploadDir = "uploads/products/";


    @Override
    public ItemDto createItem(ItemDto itemDto, MultipartFile imageFile) {
        logger.info("Creating item: {}", itemDto);
        Item item = modelMapper.map(itemDto, Item.class);
        Category category = categoryRepository.findById(itemDto.getCategoryId())
                .orElseThrow(() -> new RuntimeException("Category not found"));
        item.setCategory(category);
        if (imageFile != null && !imageFile.isEmpty()) {
            String imageUrl = saveImage(imageFile);
            item.setImageUrl(imageUrl);
        }
        Item saved = itemRepository.save(item);
        logger.info("Item created with ID: {}", saved.getId());
        return modelMapper.map(saved, ItemDto.class);
    }

    @Override
    public ItemDto getItemById(Long id) {
        logger.info("Fetching item by ID: {}", id);
        Item item = itemRepository.findById(id).orElseThrow(() -> new RuntimeException("Item not found"));
        return modelMapper.map(item, ItemDto.class);
    }

    @Override
    public List<ItemDto> getAllItems() {
        logger.info("Fetching all items");
        List<Item> items = itemRepository.findAll();
        if (items.isEmpty()) {
            logger.warn("No items found in the database");
            throw new ResourceNotFoundException("No items found");
        }
        return items.stream()
                .map(item -> modelMapper.map(item, ItemDto.class))
                .collect(Collectors.toList());
    }

    @Override
    public ItemDto updateItem(Long id, ItemDto itemDto, MultipartFile imageFile) {
        logger.info("Updating item with ID: {}", id);
        Item item = itemRepository.findById(id).orElseThrow(() -> new RuntimeException("Item not found"));
        modelMapper.map(itemDto, item);
        Category category = categoryRepository.findById(itemDto.getCategoryId())
                .orElseThrow(() -> new RuntimeException("Category not found"));
        item.setCategory(category);
        if (imageFile != null && !imageFile.isEmpty()) {
            String imageUrl = saveImage(imageFile);
            item.setImageUrl(imageUrl);
        }
        Item updated = itemRepository.save(item);
        logger.info("Item updated with ID: {}", updated.getId());
        return modelMapper.map(updated, ItemDto.class);
    }

    @Override
    public void deleteItem(Long id) {
        logger.info("Deleting item with ID: {}", id);
        itemRepository.deleteById(id);
    }

    private String saveImage(MultipartFile imageFile) {
        try {
            Files.createDirectories(Paths.get(uploadDir));
            String fileName = System.currentTimeMillis() + "_" + imageFile.getOriginalFilename();
            Path filePath = Paths.get(uploadDir, fileName);
            imageFile.transferTo(filePath);
            return filePath.toString();
        } catch (IOException e) {
            logger.error("Failed to save image", e);
            throw new RuntimeException("Failed to save image", e);
        }
    }
}
