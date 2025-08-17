import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/EventsPage.css';

export default function EventsPage() {
//   const [selectedDate, setSelectedDate] = useState(new Date());
  const [viewType, setViewType] = useState('upcoming');

  const events = [
    {
      id: 1,
      title: 'Urban Composting Workshop',
      date: '2024-04-15',
      time: '2:00 PM - 4:00 PM',
      location: 'Community Garden Center',
      address: '123 Green Street, Portland, OR',
      type: 'Workshop',
      price: 'Free',
      attendees: 24,
      maxAttendees: 30,
      organizer: 'Green Thumbs Society',
      image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=300&fit=crop',
      description: 'Learn the art of turning kitchen scraps into garden gold! This hands-on workshop covers everything from bin selection to troubleshooting common composting problems.',
      tags: ['Beginner Friendly', 'Hands-on', 'Sustainability'],
      featured: true
    },
    {
      id: 2,
      title: 'Seed Swap & Social',
      date: '2024-04-20',
      time: '10:00 AM - 1:00 PM',
      location: 'Central Park Pavilion',
      address: '456 Park Avenue, New York, NY',
      type: 'Social',
      price: 'Free',
      attendees: 67,
      maxAttendees: 100,
      organizer: 'NYC Urban Gardeners',
      image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=300&fit=crop',
      description: 'Bring your excess seeds and trade with fellow gardeners! Meet new friends, share growing tips, and discover rare varieties.',
      tags: ['Social', 'All Levels', 'Community']
    },
    {
      id: 3,
      title: 'Vertical Garden Design Masterclass',
      date: '2024-04-25',
      time: '6:00 PM - 8:30 PM',
      location: 'Innovation Hub',
      address: '789 Tech Boulevard, San Francisco, CA',
      type: 'Masterclass',
      price: '$45',
      attendees: 18,
      maxAttendees: 25,
      organizer: 'Future Farmers Academy',
      image: 'https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?w=400&h=300&fit=crop',
      description: 'Master the art of vertical gardening with expert designer Maria Santos. Learn space-efficient techniques that maximize your harvest.',
      tags: ['Advanced', 'Design', 'Small Spaces']
    },
    {
      id: 4,
      title: 'Kids Garden Adventure Day',
      date: '2024-05-01',
      time: '9:00 AM - 12:00 PM',
      location: 'Sunshine Elementary School',
      address: '321 Learning Lane, Austin, TX',
      type: 'Family',
      price: '$20 per family',
      attendees: 12,
      maxAttendees: 40,
      organizer: 'Little Sprouts Program',
      image: 'https://images.unsplash.com/photo-1464207687429-7505649dae38?w=400&h=300&fit=crop',
      description: 'Fun-filled morning for families! Kids will plant their own vegetables, learn about beneficial insects, and create garden art.',
      tags: ['Family', 'Kids', 'Interactive']
    },
    {
      id: 5,
      title: 'Hydroponics 101: Soil-Free Growing',
      date: '2024-05-08',
      time: '3:00 PM - 6:00 PM',
      location: 'Tech Garden Lab',
      address: '567 Innovation Drive, Seattle, WA',
      type: 'Workshop',
      price: '$75',
      attendees: 15,
      maxAttendees: 20,
      organizer: 'Hydro Masters',
      image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?w=400&h=300&fit=crop',
      description: 'Discover the future of urban farming! Build your own hydroponic system and learn the science behind soil-free cultivation.',
      tags: ['Technology', 'Advanced', 'Indoor Growing']
    },
    {
      id: 6,
      title: 'Rooftop Garden Tour',
      date: '2024-05-15',
      time: '11:00 AM - 3:00 PM',
      location: 'Downtown District',
      address: 'Multiple locations, Chicago, IL',
      type: 'Tour',
      price: '$30',
      attendees: 35,
      maxAttendees: 50,
      organizer: 'Chicago Rooftop Alliance',
      image: 'https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?w=400&h=300&fit=crop',
      description: 'Explore 5 innovative rooftop gardens across downtown Chicago. See how urban spaces are transformed into productive green oases.',
      tags: ['Tour', 'Inspiration', 'Urban Design']
    },
    {
      id: 7,
      title: 'Permaculture Design Workshop',
      date: '2024-05-22',
      time: '9:00 AM - 5:00 PM',
      location: 'Eco Learning Center',
      address: '890 Sustainable Way, Boulder, CO',
      type: 'Workshop',
      price: '$120',
      attendees: 22,
      maxAttendees: 30,
      organizer: 'Permaculture Institute',
      image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=300&fit=crop',
      description: 'Full day intensive on permaculture principles. Design sustainable food systems that work with nature, not against it.',
      tags: ['Intensive', 'Sustainability', 'Design Thinking']
    },
    {
      id: 8,
      title: 'Community Garden Cleanup Day',
      date: '2024-05-29',
      time: '8:00 AM - 12:00 PM',
      location: 'Riverside Community Garden',
      address: '234 River Road, Phoenix, AZ',
      type: 'Community',
      price: 'Free',
      attendees: 45,
      maxAttendees: 75,
      organizer: 'Phoenix Garden Alliance',
      image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?w=400&h=300&fit=crop',
      description: 'Join fellow gardeners for our monthly cleanup and beautification day. Tools provided, bring gloves and enthusiasm!',
      tags: ['Community Service', 'All Welcome', 'Networking']
    }
  ];

  const upcomingEvents = events.filter(event => new Date(event.date) >= new Date());
  const pastEvents = events.filter(event => new Date(event.date) < new Date());

  return (
    <div className="events-page">
      {/* Wave Effects */}
      <div className="events-wave-container">
        <div className="events-wave events-wave-1"></div>
        <div className="events-wave events-wave-2"></div>
        <div className="events-wave events-wave-3"></div>
        <div className="events-wave events-wave-4"></div>
      </div>

      <div className="events-container">
        {/* Header */}
        <div className="events-header">
          <div className="section-badge">
            <span>📅 Community</span>
          </div>
          <h1 className="events-title">
            <span className="gradient-text">Gardening Events</span> & Workshops
          </h1>
          <p className="events-description">
            Join our vibrant community of urban gardeners. Learn new skills, share knowledge, 
            and connect with like-minded people who are passionate about growing green.
          </p>
        </div>

        {/* Event Navigation */}
        <div className="events-nav">
          <div className="view-toggles">
            <button 
              className={`toggle-btn ${viewType === 'upcoming' ? 'active' : ''}`}
              onClick={() => setViewType('upcoming')}
            >
              <i className="fas fa-calendar-plus"></i>
              <span>Upcoming Events</span>
              <span className="event-count">{upcomingEvents.length}</span>
            </button>
            <button 
              className={`toggle-btn ${viewType === 'past' ? 'active' : ''}`}
              onClick={() => setViewType('past')}
            >
              <i className="fas fa-history"></i>
              <span>Past Events</span>
              <span className="event-count">{pastEvents.length}</span>
            </button>
            <button 
              className={`toggle-btn ${viewType === 'calendar' ? 'active' : ''}`}
              onClick={() => setViewType('calendar')}
            >
              <i className="fas fa-calendar-alt"></i>
              <span>Calendar View</span>
            </button>
          </div>

          <div className="event-filters">
            <select className="filter-select">
              <option value="">All Types</option>
              <option value="workshop">Workshops</option>
              <option value="social">Social Events</option>
              <option value="tour">Garden Tours</option>
              <option value="family">Family Events</option>
              <option value="community">Community</option>
            </select>
            
            <select className="filter-select">
              <option value="">All Locations</option>
              <option value="portland">Portland, OR</option>
              <option value="nyc">New York, NY</option>
              <option value="sf">San Francisco, CA</option>
              <option value="austin">Austin, TX</option>
              <option value="seattle">Seattle, WA</option>
              <option value="chicago">Chicago, IL</option>
            </select>
          </div>
        </div>

        {/* Featured Event */}
        {upcomingEvents.find(event => event.featured) && viewType === 'upcoming' && (
          <div className="featured-event">
            {(() => {
              const featuredEvent = upcomingEvents.find(event => event.featured);
              return (
                <div className="featured-content">
                  <div className="featured-image">
                    <img src={featuredEvent.image} alt={featuredEvent.title} />
                    <div className="featured-badge">Featured Event</div>
                  </div>
                  <div className="featured-details">
                    <div className="event-meta">
                      <span className="event-type">{featuredEvent.type}</span>
                      <span className="event-price">{featuredEvent.price}</span>
                    </div>
                    <h2 className="featured-title">{featuredEvent.title}</h2>
                    <p className="featured-description">{featuredEvent.description}</p>
                    
                    <div className="event-info">
                      <div className="info-item">
                        <i className="fas fa-calendar"></i>
                        <span>{new Date(featuredEvent.date).toLocaleDateString('en-US', { 
                          weekday: 'long', 
                          year: 'numeric', 
                          month: 'long', 
                          day: 'numeric' 
                        })}</span>
                      </div>
                      <div className="info-item">
                        <i className="fas fa-clock"></i>
                        <span>{featuredEvent.time}</span>
                      </div>
                      <div className="info-item">
                        <i className="fas fa-map-marker-alt"></i>
                        <span>{featuredEvent.location}</span>
                      </div>
                      <div className="info-item">
                        <i className="fas fa-users"></i>
                        <span>{featuredEvent.attendees}/{featuredEvent.maxAttendees} attending</span>
                      </div>
                    </div>

                    <div className="event-tags">
                      {featuredEvent.tags.map((tag, index) => (
                        <span key={index} className="event-tag">{tag}</span>
                      ))}
                    </div>

                    <div className="featured-actions">
                      <button className="btn-register primary">
                        <i className="fas fa-ticket-alt"></i>
                        <span>Register Now</span>
                      </button>
                      <button className="btn-info secondary">
                        <i className="fas fa-info-circle"></i>
                        <span>More Details</span>
                      </button>
                    </div>
                  </div>
                </div>
              );
            })()}
          </div>
        )}

        {/* Events Grid */}
        <div className="events-grid">
          {(viewType === 'upcoming' ? upcomingEvents.filter(e => !e.featured) : pastEvents).map(event => (
            <div key={event.id} className="event-card">
              <div className="event-image">
                <img src={event.image} alt={event.title} />
                <div className="event-date-overlay">
                  <div className="date-month">
                    {new Date(event.date).toLocaleDateString('en-US', { month: 'short' })}
                  </div>
                  <div className="date-day">
                    {new Date(event.date).getDate()}
                  </div>
                </div>
                <div className="event-type-badge">{event.type}</div>
              </div>

              <div className="event-content">
                <div className="event-header">
                  <h3 className="event-title">{event.title}</h3>
                  <div className="event-price">{event.price}</div>
                </div>

                <p className="event-description">{event.description}</p>

                <div className="event-details">
                  <div className="detail-item">
                    <i className="fas fa-clock"></i>
                    <span>{event.time}</span>
                  </div>
                  <div className="detail-item">
                    <i className="fas fa-map-marker-alt"></i>
                    <span>{event.location}</span>
                  </div>
                  <div className="detail-item">
                    <i className="fas fa-user-friends"></i>
                    <span>{event.attendees}/{event.maxAttendees}</span>
                  </div>
                  <div className="detail-item">
                    <i className="fas fa-user"></i>
                    <span>{event.organizer}</span>
                  </div>
                </div>

                <div className="event-tags">
                  {event.tags.slice(0, 2).map((tag, index) => (
                    <span key={index} className="event-tag small">{tag}</span>
                  ))}
                  {event.tags.length > 2 && (
                    <span className="event-tag small more">+{event.tags.length - 2} more</span>
                  )}
                </div>

                <div className="event-actions">
                  <button className="btn-register primary">
                    {viewType === 'upcoming' ? 'Register' : 'View Details'}
                  </button>
                  <button className="btn-save secondary">
                    <i className="fas fa-heart"></i>
                  </button>
                  <button className="btn-share secondary">
                    <i className="fas fa-share"></i>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Host an Event CTA */}
        <div className="host-event-cta">
          <div className="cta-content">
            <h2>Want to Host Your Own Event?</h2>
            <p>Share your knowledge and bring the community together! We help you plan, promote, and manage successful gardening events.</p>
            <div className="cta-features">
              <div className="feature-item">
                <i className="fas fa-bullhorn"></i>
                <span>Free Event Promotion</span>
              </div>
              <div className="feature-item">
                <i className="fas fa-users"></i>
                <span>Community Support</span>
              </div>
              <div className="feature-item">
                <i className="fas fa-tools"></i>
                <span>Planning Resources</span>
              </div>
            </div>
            <div className="cta-buttons">
              <button className="btn-cta primary">
                <i className="fas fa-plus"></i>
                <span>Host an Event</span>
              </button>
              <Link to="/success-stories" className="btn-cta secondary">
                <i className="fas fa-star"></i>
                <span>Success Stories</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="newsletter-section">
          <div className="newsletter-content">
            <h3>Never Miss an Event</h3>
            <p>Get weekly updates on new workshops, tours, and community gatherings.</p>
            <div className="newsletter-form">
              <input type="email" placeholder="Enter your email address" />
              <button className="subscribe-btn">Subscribe</button>
            </div>
          </div>
        </div>

        {/* Back Button */}
        <div className="page-footer">
          <button className="back-btn" onClick={() => window.history.back()}>
            ← Back to Home
          </button>
        </div>
      </div>
    </div>
  );
}
