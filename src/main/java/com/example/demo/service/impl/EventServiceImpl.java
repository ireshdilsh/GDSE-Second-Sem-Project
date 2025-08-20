package com.example.demo.service.impl;

import com.example.demo.dto.EventDto;
import com.example.demo.entity.Event;
import com.example.demo.exception.ResourceNotFoundException;
import com.example.demo.repository.EventRepository;
import com.example.demo.service.EventService;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class EventServiceImpl implements EventService {
    private final EventRepository eventRepository;
    private final ModelMapper modelMapper;
    private static final Logger logger = LoggerFactory.getLogger(EventServiceImpl.class);

    @Override
    public EventDto createEvent(EventDto eventDto) {
        if (eventDto.getDescription() != null && eventDto.getDescription().split("\\s+").length > 100) {
            throw new IllegalArgumentException("Description cannot exceed 100 words");
        }
        Event event = modelMapper.map(eventDto, Event.class);
        Event saved = eventRepository.save(event);
        logger.info("Event created: {}", saved.getId());
        return modelMapper.map(saved, EventDto.class);
    }

    @Override
    public List<EventDto> getAllEvents() {
        List<Event> events = eventRepository.findAll();
        return events.stream().map(e -> modelMapper.map(e, EventDto.class)).collect(Collectors.toList());
    }

    @Override
    public EventDto getEventById(Long id) {
        Event event = eventRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Event not found: " + id));
        return modelMapper.map(event, EventDto.class);
    }

    @Override
    public void deleteEvent(Long id) {
        if (!eventRepository.existsById(id)) {
            throw new ResourceNotFoundException("Event not found: " + id);
        }
        eventRepository.deleteById(id);
        logger.info("Event deleted: {}", id);
    }
}
