import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/LandingPage.css';
import Swal from 'sweetalert2';
import axios from 'axios';

export default function LandingPage() {

  // Contact form for useStates
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [city, setCity] = useState("")
  const [type, setType] = useState("")
  const [msg, setMsg] = useState("")

  // contact form input-fields for onChange Methods

  const handleName = (e) => {
    setName(e.target.value)
  }

  const handleEmail = (e) => {
    setEmail(e.target.value)
  }

  const handleCity = (e) => {
    setCity(e.target.value)
  }

  const handleType = (e) => {
    setType(e.target.value)
  }

  const handleMsg = (e) => {
    setMsg(e.target.value)
  }

  const clearFields = () => {
    setName("")
    setEmail("")
    setCity("")
    setType("")
    setMsg("")
  }

  const sendCotactForm = async (e) => {
    e.preventDefault()

    try {
      const data = {
        "name": name,
        "email": email,
        "type": type,
        "message": msg
      }

      const resp = await axios.post("http://localhost:8080/api/v1/contact/save/contact/details", data)
      Swal.fire({
        icon: 'success',
        title: 'Submitted!',
        text: 'Your Message Send!',
        timer: 1500,
        showConfirmButton: false
      });
      clearFields()
      console.log(resp.data)
    } catch (erorr) {
      console.log(erorr)
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: erorr.response?.data?.message || 'Failed to send message. Please try gain later !'
      });
    }
  }

  const [stats, setStats] = useState({
    gardeners: 0,
    swaps: 0,
    cities: 0,
    waste: 0
  });
  const [isLoaded, setIsLoaded] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Handle initial load
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Handle navbar scroll effect and scroll spy
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Scroll spy logic
      const sections = ['home', 'about', 'features', 'how-it-works', 'community', 'contact'];
      const scrollPosition = window.scrollY + 100; // Offset for better UX

      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i]);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close mobile menu when clicking on a link
  const closeMobileMenu = () => {
    setIsMenuOpen(false);
  };

  // Animate stats on load
  useEffect(() => {
    const targetStats = { gardeners: 50000, swaps: 125000, cities: 350, waste: 85 };
    const duration = 2000;
    const steps = 60;
    const stepDuration = duration / steps;

    Object.keys(targetStats).forEach(key => {
      let current = 0;
      const increment = targetStats[key] / steps;

      const timer = setInterval(() => {
        current += increment;
        if (current >= targetStats[key]) {
          current = targetStats[key];
          clearInterval(timer);
        }
        setStats(prev => ({ ...prev, [key]: Math.floor(current) }));
      }, stepDuration);
    });
  }, [isLoaded]);

  return (
    <div className="modern-landing">
      {/* Navigation Bar */}
      <nav className={`navbar-modern ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container-fluid hero-padding-180">
          <div className="navbar-content d-flex justify-content-between align-items-center">
            {/* Logo */}
            <div className="navbar-brand">
              <a href="#home" className="brand-link" onClick={closeMobileMenu}>
                <div className="brand-icon">
                  <i className="fas fa-leaf"></i>
                </div>
                <span className="brand-text">UrbanGreen</span>
              </a>
            </div>

            {/* Navigation Links */}
            <div className="navbar-links d-none d-lg-flex">
              <a href="#home" className={`nav-link ${activeSection === 'home' ? 'active' : ''}`} onClick={closeMobileMenu}>Home</a>
              <a href="#about" className={`nav-link ${activeSection === 'about' ? 'active' : ''}`} onClick={closeMobileMenu}>About</a>
              <a href="#features" className={`nav-link ${activeSection === 'features' ? 'active' : ''}`} onClick={closeMobileMenu}>Features</a>
              <a href="#how-it-works" className={`nav-link ${activeSection === 'how-it-works' ? 'active' : ''}`} onClick={closeMobileMenu}>How It Works</a>
              <a href="#community" className={`nav-link ${activeSection === 'community' ? 'active' : ''}`} onClick={closeMobileMenu}>Community</a>
              <a href="#contact" className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`} onClick={closeMobileMenu}>Contact</a>
            </div>

            {/* CTA Button & Mobile Menu */}
            <div className="navbar-actions d-flex align-items-center gap-3">
              <Link to="/signin" className="btn-navbar-cta d-none d-md-flex" onClick={closeMobileMenu}>
                <span>Sign In</span>
                <i className="fas fa-sign-in-alt"></i>
              </Link>

              {/* Mobile Menu Toggle */}
              <button className="mobile-menu-toggle d-lg-none" onClick={toggleMobileMenu}>
                <span></span>
                <span></span>
                <span></span>
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          <div className={`mobile-menu ${isMenuOpen ? 'show' : ''}`}>
            <div className="mobile-menu-content">
              <a href="#home" className={`mobile-nav-link ${activeSection === 'home' ? 'active' : ''}`} onClick={closeMobileMenu}>Home</a>
              <a href="#about" className={`mobile-nav-link ${activeSection === 'about' ? 'active' : ''}`} onClick={closeMobileMenu}>About</a>
              <a href="#features" className={`mobile-nav-link ${activeSection === 'features' ? 'active' : ''}`} onClick={closeMobileMenu}>Features</a>
              <a href="#how-it-works" className={`mobile-nav-link ${activeSection === 'how-it-works' ? 'active' : ''}`} onClick={closeMobileMenu}>How It Works</a>
              <a href="#community" className={`mobile-nav-link ${activeSection === 'community' ? 'active' : ''}`} onClick={closeMobileMenu}>Community</a>
              <a href="#contact" className={`mobile-nav-link ${activeSection === 'contact' ? 'active' : ''}`} onClick={closeMobileMenu}>Contact</a>
              <Link to="/signin" className="mobile-nav-link signin-link" onClick={closeMobileMenu}>Sign In</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero-minimal">
        <div className="container-fluid hero-padding-180">
          <div className="row align-items-center min-vh-100 hero-wrapper">
            <div className="col-12 col-lg-6 order-2 order-lg-1">
              <div className="hero-content-minimal">
                <div className="animated-badge d-inline-flex align-items-center">
                  <div className="badge-dot"></div>
                  <span className="d-none d-sm-inline">Welcome to the Future of Urban Gardening</span>
                  <span className="d-sm-none">Urban Gardening Revolution</span>
                </div>

                <h1 className="hero-title-minimal">
                  <span className="word-animate d-block d-sm-inline" data-delay="0">Grow</span>
                  <span className="word-animate d-block d-sm-inline" data-delay="200">Together,</span>
                  <br className="d-none d-sm-block" />
                  <span className="word-animate gradient-text d-block d-sm-inline" data-delay="400">Share</span>
                  <span className="word-animate gradient-text d-block d-sm-inline" data-delay="600">Forever</span>
                </h1>

                <p className="hero-description-minimal">
                  Connect with urban gardeners worldwide. Share knowledge, exchange fresh produce,
                  and build sustainable communities that thrive in harmony with nature.
                </p>

                <div className="hero-actions-minimal d-flex flex-column flex-sm-row gap-3">
                  <Link to="/signup" className="btn-primary-hero d-flex align-items-center justify-content-center">
                    <span>Start Your Journey</span>
                    <div className="btn-arrow">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                        <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  </Link>

                  <button className="btn-outline-hero d-flex align-items-center justify-content-center">
                    <div className="play-icon">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                        <polygon points="5,3 19,12 5,21" fill="currentColor" />
                      </svg>
                    </div>
                    <span>Watch Demo</span>
                  </button>
                </div>

                <div className="hero-stats-minimal">
                  <div className="stats-inline d-flex flex-column flex-md-row align-items-start align-items-md-center">
                    <span className="stat-item-inline mb-2 mb-md-0">
                      <strong>{stats.gardeners.toLocaleString()}+</strong> Active Gardeners
                    </span>
                    <span className="stat-separator d-none d-md-inline">•</span>
                    <span className="stat-item-inline mb-2 mb-md-0">
                      <strong>{stats.swaps.toLocaleString()}+</strong> Successful Swaps
                    </span>
                    <span className="stat-separator d-none d-md-inline">•</span>
                    <span className="stat-item-inline">
                      <strong>{stats.cities}+</strong> Cities Worldwide
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12 col-lg-6 order-1 order-lg-2 mb-4 mb-lg-0">
              <div className="hero-visual-minimal d-flex justify-content-center justify-content-lg-end">
                <div className="floating-elements">
                  <div className="element-1">
                    <div className="icon-wrapper">
                      <i className="fas fa-leaf"></i>
                    </div>
                  </div>

                  <div className="element-2">
                    <div className="icon-wrapper">
                      <i className="fas fa-seedling"></i>
                    </div>
                  </div>

                  <div className="element-3">
                    <div className="icon-wrapper">
                      <i className="fas fa-users"></i>
                    </div>
                  </div>

                  <div className="element-4">
                    <div className="icon-wrapper">
                      <i className="fas fa-heart"></i>
                    </div>
                  </div>

                  <div className="element-5">
                    <div className="icon-wrapper">
                      <i className="fas fa-globe"></i>
                    </div>
                  </div>
                </div>

                <div className="animated-lines">
                  <div className="line line-1"></div>
                  <div className="line line-2"></div>
                  <div className="line line-3"></div>
                </div>

                <div className="pulse-circles">
                  <div className="pulse-circle pulse-1"></div>
                  <div className="pulse-circle pulse-2"></div>
                  <div className="pulse-circle pulse-3"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Clippath Wave Effects */}
        <div className="hero-wave-container">
          <div className="hero-wave hero-wave-1"></div>
          <div className="hero-wave hero-wave-2"></div>
          <div className="hero-wave hero-wave-3"></div>
          <div className="hero-wave hero-wave-4"></div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about-modern">
        <div className="container">
          <div className="section-header">
            <div className="section-badge">
              <span>🌿 About Us</span>
            </div>
            <h2 className="section-title">
              Revolutionizing <span className="gradient-text">Urban Gardening</span>
            </h2>
            <p className="section-description">
              We connect passionate urban gardeners, enabling them to share knowledge,
              exchange fresh produce, and build thriving sustainable communities.
            </p>
          </div>

          <div className="about-content">
            <div className="about-visual">
              <div className="about-image-stack">
                <img
                  src="https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=600&h=400&fit=crop"
                  alt="Urban Garden"
                  className="about-image primary"
                />
                <img
                  src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=400&h=300&fit=crop"
                  alt="Community"
                  className="about-image secondary"
                />
              </div>
            </div>

            <div className="about-info">
              <div className="mission-card">
                <h3>Our Mission</h3>
                <p>To create a world where every urban space blooms with life,
                  connecting communities through the simple joy of growing and sharing.</p>
              </div>

              <div className="impact-metrics">
                <div className="metric">
                  <div className="metric-icon">
                    <i className="fas fa-recycle"></i>
                  </div>
                  <div className="metric-content">
                    <div className="metric-number">95%</div>
                    <div className="metric-label">Food Waste Reduced</div>
                  </div>
                </div>

                <div className="metric">
                  <div className="metric-icon">
                    <i className="fas fa-users"></i>
                  </div>
                  <div className="metric-content">
                    <div className="metric-number">2.5M+</div>
                    <div className="metric-label">Connections Made</div>
                  </div>
                </div>

                <div className="metric">
                  <div className="metric-icon">
                    <i className="fas fa-leaf"></i>
                  </div>
                  <div className="metric-content">
                    <div className="metric-number">500K+</div>
                    <div className="metric-label">Plants Grown</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="features-modern">
        <div className="container">
          <div className="section-header">
            <div className="section-badge">
              <span>✨ Features</span>
            </div>
            <h2 className="section-title">
              Everything You Need to <span className="gradient-text">Grow & Connect</span>
            </h2>
            <p className="section-description">
              Powerful tools designed to make urban gardening social, sustainable, and successful.
            </p>
          </div>

          <div className="features-grid">
            <div className="feature-card spotlight">
              <div className="feature-visual">
                <div className="feature-icon large primary">
                  <i className="fas fa-users"></i>
                </div>
                <div className="feature-glow"></div>
              </div>
              <h3>Smart Matching</h3>
              <p>AI-powered algorithm connects you with nearby gardeners based on what you grow and what you need.</p>
              <div className="feature-highlight">
                <span className="highlight-text">Most Popular</span>
              </div>
            </div>

            <div className="feature-card">
              <div className="feature-icon success">
                <i className="fas fa-seedling"></i>
              </div>
              <h3>Crop Tracking</h3>
              <p>Monitor your garden's progress with photo logs, growth tracking, and harvest predictions.</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon warning">
                <i className="fas fa-map-marker-alt"></i>
              </div>
              <h3>Local Discovery</h3>
              <p>Find fresh produce and gardening supplies within walking distance of your location.</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon info">
                <i className="fas fa-exchange-alt"></i>
              </div>
              <h3>Easy Swapping</h3>
              <p>Simple, secure exchange system with built-in messaging and rating system.</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon danger">
                <i className="fas fa-trophy"></i>
              </div>
              <h3>Rewards System</h3>
              <p>Earn points, unlock achievements, and get recognized for your community contributions.</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon secondary">
                <i className="fas fa-book-open"></i>
              </div>
              <h3>Learning Hub</h3>
              <p>Access expert guides, seasonal tips, and learn from experienced community gardeners.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="how-it-works-modern">
        <div className="container">
          <div className="section-header">
            <div className="section-badge">
              <span>🚀 How It Works</span>
            </div>
            <h2 className="section-title">
              Get Started in <span className="gradient-text">3 Simple Steps</span>
            </h2>
            <p className="section-description">
              Join thousands of urban gardeners and start building your sustainable community today.
            </p>
          </div>

          <div className="steps-container">
            <div className="step-item">
              <div className="step-number">01</div>
              <div className="step-content">
                <div className="step-icon">
                  <i className="fas fa-user-plus"></i>
                </div>
                <h3>Create Your Profile</h3>
                <p>Set up your gardener profile with location, growing space details, and what you love to cultivate.</p>
              </div>
              <div className="step-connector"></div>
            </div>

            <div className="step-item">
              <div className="step-number">02</div>
              <div className="step-content">
                <div className="step-icon">
                  <i className="fas fa-search"></i>
                </div>
                <h3>Discover & Connect</h3>
                <p>Find nearby gardeners, browse available produce, and start building meaningful relationships.</p>
              </div>
              <div className="step-connector"></div>
            </div>

            <div className="step-item">
              <div className="step-number">03</div>
              <div className="step-content">
                <div className="step-icon">
                  <i className="fas fa-handshake"></i>
                </div>
                <h3>Start Swapping</h3>
                <p>Make your first exchange, share your harvest, and become part of a thriving community.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section id="community" className="community-modern">
        <div className="container">
          <div className="section-header">
            <div className="section-badge">
              <span>🌍 Our Community</span>
            </div>
            <h2 className="section-title">
              Join a <span className="gradient-text">Global Movement</span>
            </h2>
            <p className="section-description">
              Be part of a worldwide community that's transforming urban spaces and lives through gardening.
            </p>
          </div>

          <div className="community-showcase">
            <div className="community-visual">
              <img
                src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&h=500&fit=crop"
                alt="Community Garden"
                className="community-image"
              />
              <div className="community-overlay">
                <div className="community-stats">
                  <div className="stat-bubble">
                    <div className="stat-value">{stats.gardeners.toLocaleString()}+</div>
                    <div className="stat-text">Gardeners</div>
                  </div>
                  <div className="stat-bubble">
                    <div className="stat-value">{stats.cities}+</div>
                    <div className="stat-text">Cities</div>
                  </div>
                  <div className="stat-bubble">
                    <div className="stat-value">{stats.waste}%</div>
                    <div className="stat-text">Less Waste</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="community-testimonials">
              <div className="testimonial-card active">
                <div className="testimonial-content">
                  <div className="quote-icon">
                    <i className="fas fa-quote-left"></i>
                  </div>
                  <p>"GrowSwap transformed my tiny balcony into a thriving garden. I've met amazing neighbors and my family now enjoys fresh vegetables year-round!"</p>
                  <div className="testimonial-author">
                    <img src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=60&h=60&fit=crop&crop=face" alt="Sarah" />
                    <div>
                      <div className="author-name">Sarah Johnson</div>
                      <div className="author-location">Seattle, WA</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="testimonial-card">
                <div className="testimonial-content">
                  <div className="quote-icon">
                    <i className="fas fa-quote-left"></i>
                  </div>
                  <p>"The community support is incredible. From beginner tips to advanced techniques, there's always someone willing to help you grow better."</p>
                  <div className="testimonial-author">
                    <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&h=60&fit=crop&crop=face" alt="Mike" />
                    <div>
                      <div className="author-name">Mike Chen</div>
                      <div className="author-location">Portland, OR</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact & CTA Section */}
      <section id="contact" className="contact-modern">
        <div className="container">
          <div className="contact-wrapper">
            <div className="contact-info">
              <div className="section-badge">
                <span>🌿 Get in Touch</span>
              </div>
              <h2 className="contact-title">
                Ready to Start Your <span className="gradient-text">Garden Journey?</span>
              </h2>
              <p className="contact-description">
                Join thousands of urban gardeners who are already growing, sharing,
                and building sustainable communities.
              </p>

              <div className="contact-features">
                <div className="contact-feature">
                  <div className="feature-icon-small">
                    <i className="fas fa-rocket"></i>
                  </div>
                  <span>Quick setup in under 5 minutes</span>
                </div>
                <div className="contact-feature">
                  <div className="feature-icon-small">
                    <i className="fas fa-shield-alt"></i>
                  </div>
                  <span>Safe and secure community</span>
                </div>
                <div className="contact-feature">
                  <div className="feature-icon-small">
                    <i className="fas fa-heart"></i>
                  </div>
                  <span>Free to start, always</span>
                </div>
              </div>
            </div>

            <div className="contact-form-wrapper">
              <form className="contact-form-modern">
                <div className="form-row">
                  <div className="form-group">
                    <label>Full Name</label>
                    <input type="text" value={name} onChange={handleName} className="form-input" placeholder="Enter your name" />
                  </div>
                  <div className="form-group">
                    <label>Email Address</label>
                    <input type="email" value={email} onChange={handleEmail} className="form-input" placeholder="your@email.com" />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label>City</label>
                    <input type="text" className="form-input" value={city} onChange={handleCity} placeholder="Where are you located?" />
                  </div>
                  <div className="form-group">
                    <label>Garden Type</label>
                    <select className="form-input" value={type} onChange={handleType}>
                      <option>Balcony Garden</option>
                      <option>Indoor Garden</option>
                      <option>Backyard Garden</option>
                      <option>Community Garden</option>
                      <option>Rooftop Garden</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label>What would you like to grow?</label>
                  <textarea className="form-input" value={msg} onChange={handleMsg} rows="4" placeholder="Tell us about your gardening goals and interests..."></textarea>
                </div>

                <div className="form-submit-wrapper">
                  <button onClick={sendCotactForm} type="submit" className="btn-contact-primary">
                    <div className="btn-content">
                      <span className="btn-text">Join Our Garden Community</span>
                      <div className="btn-icon">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M5 12H19M12 5L19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                    </div>
                    <div className="btn-overlay"></div>
                  </button>

                  <p className="form-privacy-text">
                    <i className="fas fa-lock"></i>
                    We respect your privacy and never share your information.
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer-modern">
        <div className="container">
          <div className="footer-content">
            <div className="footer-brand">
              <div className="brand-logo">
                <div className="logo-icon">
                  <i className="fas fa-leaf"></i>
                </div>
                <span className="brand-text">GrowSwap</span>
              </div>
              <p>Connecting urban gardeners worldwide to build sustainable communities through sharing and growing.</p>
              <div className="social-links">
                <a href="#" className="social-link">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" className="social-link">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="social-link">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#" className="social-link">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>

            <div className="footer-links">
              <div className="link-group">
                <h4>Platform</h4>
                <a href="#">How It Works</a>
                <a href="#">Features</a>
                <Link to="/pricing">Pricing</Link>
                <a href="#">Mobile App</a>
              </div>

              <div className="link-group">
                <h4>Community</h4>
                <Link to="/success-stories">Success Stories</Link>
                <Link to="/events">Events</Link>
                <Link to="/blog">Blog</Link>
              </div>

              <div className="link-group">
                <h4>Resources</h4>
                <a href="#">Garden Guides</a>
                <a href="#">Plant Library</a>
                <a href="#">Seasonal Tips</a>
                <a href="#">Help Center</a>
              </div>

              <div className="link-group">
                <h4>Company</h4>
                <a href="#">About Us</a>
                <a href="#">Careers</a>
                <a href="#">Press</a>
                <a href="#">Contact</a>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <p>&copy; 2024 GrowSwap. All rights reserved. Built with 💚 for urban gardeners everywhere.</p>
            <div className="footer-bottom-links">
              <Link to="/privacy">Privacy Policy</Link>
              <Link to="/terms">Terms of Service</Link>
              <a href="#">Cookie Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
