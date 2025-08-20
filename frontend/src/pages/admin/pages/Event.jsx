// Clear all event form fields

import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../../styles/admin/EventPage.css';
import axios from 'axios';
import Swal from 'sweetalert2';

// Remove static mockEvents. Use getAllEvents for dynamic retrieval.

export default function Event() {

  useEffect(() => {
    fetchAllEvents();
  }, []);

  // eventList will be populated from API
  const [eventList, setEvents] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [location, setLocation] = useState("");
  const [attendence, setAttendence] = useState("");
  const [description, setDescription] = useState("");


  // Individual onChange handlers for each field
  const handleTitle = (e) => setTitle(e.target.value);
  const handleDate = (e) => setDate(e.target.value);
  const handleLocation = (e) => setLocation(e.target.value);
  const handleAttendence = (e) => setAttendence(e.target.value);
  const handleDescription = (e) => setDescription(e.target.value);

  const fetchAllEvents = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/v1/event/all");
      // APIResponse: { code, message, data: [events] }
      if (response.data && Array.isArray(response.data.data)) {
        setEvents(response.data.data);
        console.log("Fetched events:", response.data.data);
      } else {
        setEvents([]);
        console.log("No events found or invalid response format.", response.data);
      }
    } catch (error) {
      console.error("Error fetching events:", error);
      setEvents([]);
    }
  }


  // add new event
  const addNewEvent = async (e) => {
    e.preventDefault();

    const data = {
      "title": title,
      "date": date,
      "location": location,
      "maxAttendance": attendence,
      "description": description
    }

    try {
      const resp = await axios.post("http://localhost:8080/api/v1/event/create", data);
      console.log(resp);
      fetchAllEvents();
      clearFields();
      setShowModal(false);
      Swal.fire({
        icon: 'success',
        title: 'Event Added',
        text: 'The event was added successfully!',
        timer: 1800,
        showConfirmButton: false
      });
    } catch (e) {
      console.log(e);
    }
  }

  const clearFields = () => {
    setTitle("");
    setDate("");
    setLocation("");
    setAttendence("");
    setDescription("");
  };

  const handleView = (event) => {
    setSelectedEvent(event);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedEvent(null);
  };

  return (
    <div className="event-page-container">
      <button className="btn btn-link event-back-btn" onClick={() => window.history.back()}>
        <span className="event-back-arrow" aria-hidden="true">&#8592;</span> Back
      </button>
      <div className="event-header">
        <div>
          <h2 className="event-title">Event Management</h2>
          <p className="event-subtitle">Create, manage, and track your community events</p>
        </div>
        <button className="event-add-btn" onClick={() => setShowModal(true)}>
          + Add Event
        </button>
      </div>

      {/* Event Cards Grid - now using eventList */}
      <div className="event-card-grid">
        {Array.isArray(eventList) && eventList.map(event => (
          <div key={event.id} className="event-card">
            <div>
              <h3 className="event-card-title">{event.title}</h3>
              <div className="event-card-location-date">{event.location} &middot; {event.date}</div>
              <div className="event-card-attendees">
                {/* this maxAttendance = users enrolls count of event */}
                <span>{event.maxAttendance}</span>
                <span style={{ color: '#a0aec0', fontWeight: 400 }}> / {event.maxAttendance} Attendees</span>
              </div>
              <span className={`event-card-status${event.status === 'Upcoming' ? ' upcoming' : ''}`}>{event.status}</span>
              <div className="event-card-description">
                {event.description}
              </div>
            </div>
            <div className="event-card-actions">
              <button className="btn-view" onClick={() => handleView(event)}>View</button>
              <button className="btn-edit" 
              style={{ background: 'linear-gradient(90deg, #f6d365 0%, #fda085 100%)', border: 'none',color:'#fff' }}>Edit</button>
            </div>
          </div>
        ))}
        {(Array.isArray(eventList) && eventList.length === 0) && (
          <div className="text-center text-secondary p-4" style={{ fontSize: 18 }}>
            No events found.
          </div>
        )}
      </div>

      {/* Add Event Modal */}
      {showModal && !selectedEvent && (
        <div className="event-modal-backdrop">
          <div className="event-modal">
            <button
              onClick={handleCloseModal}
              className="event-modal-close"
              aria-label="Close"
            >
              &times;
            </button>
            <h3 className="event-modal-title">Add New Event</h3>
            <form className="mt-3">
              <div className="mb-3">
                <label htmlFor="eventTitle" className="form-label">Title</label>
                <input type="text" onChange={handleTitle} value={title} className="form-control" id="eventTitle" placeholder="Enter event title" />
              </div>
              <div className="mb-3">
                <label htmlFor="eventDate" className="form-label">Date</label>
                <input type="date" onChange={handleDate} value={date} className="form-control" id="eventDate" />
              </div>
              <div className="mb-3">
                <label htmlFor="eventLocation" className="form-label">Location</label>
                <input type="text" onChange={handleLocation} value={location} className="form-control" id="eventLocation" placeholder="Enter location" />
              </div>
              <div className="mb-3">
                <label htmlFor="eventMaxAttendees" className="form-label">Max Attendees</label>
                <input type="number" onChange={handleAttendence} value={attendence} className="form-control" id="eventMaxAttendees" placeholder="Enter max attendees" min="1" />
              </div>
              <div className="mb-3">
                <label htmlFor="eventDescription" className="form-label">Description</label>
                <textarea className="form-control" onChange={handleDescription} value={description} id="eventDescription" rows="3" placeholder="Enter event description"></textarea>
              </div>
              <button type="submit" className="btn btn-primary w-100"
                style={{ background: 'linear-gradient(90deg, #f6d365 0%, #fda085 100%)', border: 'none' }}
                onClick={addNewEvent}>Add Event</button>
            </form>
          </div>
        </div>
      )}

      {/* Event Details Modal */}
      {showModal && selectedEvent && (
        <div className="event-modal-backdrop">
          <div className="event-modal">
            <button
              onClick={handleCloseModal}
              className="event-modal-close"
              aria-label="Close"
            >
              &times;
            </button>
            <h3 className="event-modal-title event-modal-title-margin">{selectedEvent.title}</h3>
            <div className="event-modal-location-date">{selectedEvent.location} &middot; {selectedEvent.date}</div>
            <div className="event-modal-attendees">
              <span>{selectedEvent.attendees}</span>
              <span style={{ color: '#a0aec0', fontWeight: 400 }}> / {selectedEvent.maxAttendees} Attendees</span>
            </div>
            <span className={`event-modal-status${selectedEvent.status === 'Upcoming' ? ' upcoming' : ''}`}>{selectedEvent.status}</span>
            <div className="event-modal-description">
              {selectedEvent.description}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
