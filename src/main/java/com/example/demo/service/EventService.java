package com.example.demo.service;

import com.example.demo.dto.EventDto;
import java.util.List;

public interface EventService {
    EventDto createEvent(EventDto eventDto);
    List<EventDto> getAllEvents();
    EventDto getEventById(Long id);
    void deleteEvent(Long id);
}
