package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.example.demo.dto.ItemDto;
import com.example.demo.service.ItemService;
import com.example.demo.utils.APIResponse;

import java.util.List;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.multipart.MultipartFile;

@RestController
@RequestMapping("/api/v1/item")
@CrossOrigin(origins = "*")
public class ItemController {
    @Autowired
    private ItemService itemService;

    private static final Logger logger = LoggerFactory.getLogger(ItemController.class);

    @PostMapping("/add/new/product")
    public ResponseEntity<APIResponse> createItem(
            @RequestParam("name") String name,
            @RequestParam("description") String description,
            @RequestParam("price") Double price,
            @RequestParam("qty") int qty,
            @RequestParam("categoryId") Long categoryId,
            @RequestPart(value = "imageFile", required = false) MultipartFile imageFile) {

        ItemDto itemDto = new ItemDto();
        itemDto.setName(name);
        itemDto.setDescription(description);
        itemDto.setPrice(price);
        itemDto.setQty(qty);
        itemDto.setCategoryId(categoryId);

        logger.info("Request to create item: {}", itemDto);
        ItemDto created = itemService.createItem(itemDto, imageFile);
        logger.info("Item created: {}", created);
        return new ResponseEntity<>(new APIResponse(201, "Item created", created), HttpStatus.CREATED);
    }

    @GetMapping("/get/item/{id}")
    public ResponseEntity<APIResponse> getItem(@PathVariable Long id) {
        logger.info("Request to get item by ID: {}", id);
        ItemDto item = itemService.getItemById(id);
        logger.info("Fetched item: {}", item);
        return new ResponseEntity<>(new APIResponse(200, "Success", item), HttpStatus.OK);
    }

    @GetMapping("/get/all/items")
    public ResponseEntity<APIResponse> getAllItems() {
        logger.info("Request to get all items");
        List<ItemDto> items = itemService.getAllItems();
        logger.info("Fetched {} items", items.size());
        logger.info("Items: {}", items);
        return new ResponseEntity<>(new APIResponse(200, "Success", items), HttpStatus.OK);
    }

    @PutMapping("/update/item/{id}")
    public ResponseEntity<APIResponse> updateItem(
            @PathVariable Long id,
            @RequestParam("name") String name,
            @RequestParam("description") String description,
            @RequestParam("price") Double price,
            @RequestParam("qty") int qty,
            @RequestParam("categoryId") Long categoryId,
            @RequestPart(value = "imageFile", required = false) MultipartFile imageFile) {

        ItemDto itemDto = new ItemDto();
        itemDto.setName(name);
        itemDto.setDescription(description);
        itemDto.setPrice(price);
        itemDto.setQty(qty);
        itemDto.setCategoryId(categoryId);

        logger.info("Request to update item with ID: {}", id);
        ItemDto updated = itemService.updateItem(id, itemDto, imageFile);
        logger.info("Item updated: {}", updated);
        return new ResponseEntity<>(new APIResponse(200, "Item updated", updated), HttpStatus.OK);
    }

    @DeleteMapping("/delete/item/{id}")
    public ResponseEntity<APIResponse> deleteItem(@PathVariable Long id) {
        logger.info("Request to delete item with ID: {}", id);
        itemService.deleteItem(id);
        logger.info("Item deleted with ID: {}", id);
        return new ResponseEntity<>(new APIResponse(200, "Item deleted", null), HttpStatus.OK);
    }
}
