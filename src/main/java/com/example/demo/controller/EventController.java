package com.example.demo.controller;

import com.example.demo.dto.EventDto;
import com.example.demo.service.EventService;
import com.example.demo.utils.APIResponse;
import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/v1/event")
@RequiredArgsConstructor
@CrossOrigin(origins = "*")
public class EventController {
    private final EventService eventService;
    private static final Logger logger = LoggerFactory.getLogger(EventController.class);

    @PostMapping("/create")
    public ResponseEntity<APIResponse> createEvent(@RequestBody EventDto eventDto) {
        logger.info("Request to create event: {}", eventDto.getTitle());
        EventDto created = eventService.createEvent(eventDto);
        return new ResponseEntity<>(new APIResponse(201, "Event created successfully", created), HttpStatus.CREATED);
    }

    @GetMapping("/all")
    public ResponseEntity<APIResponse> getAllEvents() {
        List<EventDto> events = eventService.getAllEvents();
        return new ResponseEntity<>(new APIResponse(200, "Events retrieved successfully", events), HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<APIResponse> getEventById(@PathVariable Long id) {
        EventDto event = eventService.getEventById(id);
        return new ResponseEntity<>(new APIResponse(200, "Event retrieved successfully", event), HttpStatus.OK);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<APIResponse> deleteEvent(@PathVariable Long id) {
        eventService.deleteEvent(id);
        return new ResponseEntity<>(new APIResponse(200, "Event deleted successfully", null), HttpStatus.OK);
    }
}
