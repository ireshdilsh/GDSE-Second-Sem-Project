import React, { useState, useEffect } from 'react';
import '../styles/LandingPage.css';

const LandingPage = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [showSignInModal, setShowSignInModal] = useState(false);
  const [showSignUpModal, setShowSignUpModal] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = ['home', 'services', 'greenai', 'marketplace', 'blogs', 'about', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="landing-page">
      {/* Navigation */}
      <nav className={`navbar navbar-expand-lg fixed-top transition-all ${isScrolled ? 'navbar-scrolled' : 'navbar-transparent'}`}>
        <div className="container">
          <a className="navbar-brand" href="#home">
            <div className="brand-logo">
              <span className="brand-icon">🌱</span>
              <span className="brand-text">Grow & Swap</span>
            </div>
          </a>
          
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>
          
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              {[
                { id: 'home', label: 'Home' },
                { id: 'services', label: 'Features' },
                { id: 'greenai', label: 'Community' },
                { id: 'marketplace', label: 'Marketplace' },
                { id: 'blogs', label: 'Garden Tips' },
                { id: 'about', label: 'About Us' },
                { id: 'contact', label: 'Contact' }
              ].map(item => (
                <li key={item.id} className="nav-item">
                  <button 
                    className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
                    onClick={() => scrollToSection(item.id)}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero-section">
        <div className="hero-background"></div>
        <div className="container">
          <div className="row align-items-center min-vh-100">
            <div className="col-lg-6">
              <div className="hero-content">
                <span className="badge bg-success bg-opacity-10 text-success rounded-pill px-3 py-2 mb-3">
                  🌱 Welcome to Urban Gardening Community
                </span>
                <h1 className="hero-title">
                  Grow, Share & Swap with 
                  <span className="text-gradient"> Local Gardeners</span>
                </h1>
                <p className="hero-subtitle">
                  Connect with urban gardeners in your neighborhood. Share surplus produce, 
                  exchange gardening knowledge, and build a sustainable community right from your home garden.
                </p>
                <div className="hero-buttons">
                  <button 
                    className="btn btn-success btn-lg me-3"
                    onClick={() => setShowSignUpModal(true)}
                  >
                    <i className="fas fa-seedling me-2"></i>
                    Start Growing
                  </button>
                  <button className="btn btn-outline-light btn-lg">
                    <i className="fas fa-play me-2"></i>
                    How It Works
                  </button>
                </div>
                <div className="hero-stats">
                  <div className="stat-item">
                    <h3>5K+</h3>
                    <span>Gardeners</span>
                  </div>
                  <div className="stat-item">
                    <h3>10K+</h3>
                    <span>Swaps Made</span>
                  </div>
                  <div className="stat-item">
                    <h3>95%</h3>
                    <span>Happy Users</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="hero-image">
                <div className="floating-card card-1">
                  <i className="fas fa-exchange-alt"></i>
                  <span>Easy Swapping</span>
                </div>
                <div className="floating-card card-2">
                  <i className="fas fa-users"></i>
                  <span>Local Community</span>
                </div>
                <div className="floating-card card-3">
                  <i className="fas fa-seedling"></i>
                  <span>Home Grown</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="scroll-indicator">
          <div className="scroll-arrow"></div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="services-section py-5">
        <div className="container">
          <div className="section-header text-center mb-5">
            <span className="section-badge">Key Features</span>
            <h2 className="section-title">What We Offer</h2>
            <p className="section-subtitle">
              Everything you need to connect with local gardeners and share your harvest
            </p>
          </div>
          
          <div className="row g-4">
            {[
              {
                icon: 'fas fa-user-circle',
                title: 'User Profiles',
                description: 'Create detailed profiles with your location and garden information',
                color: 'success'
              },
              {
                icon: 'fas fa-seedling',
                title: 'Crop Inventory',
                description: 'Manage your garden inventory with photos and availability status',
                color: 'info'
              },
              {
                icon: 'fas fa-map-marker-alt',
                title: 'Local Search',
                description: 'Find nearby gardeners and crops using interactive maps',
                color: 'warning'
              },
              {
                icon: 'fas fa-exchange-alt',
                title: 'Swap System',
                description: 'Send swap requests and offers with built-in messaging',
                color: 'primary'
              },
              {
                icon: 'fas fa-trophy',
                title: 'Points & Badges',
                description: 'Earn rewards for being an active community member',
                color: 'warning'
              },
              {
                icon: 'fas fa-blog',
                title: 'Garden Tips',
                description: 'Access gardening guides, recipes, and community events',
                color: 'success'
              }
            ].map((service, index) => (
              <div key={index} className="col-lg-4 col-md-6">
                <div className="service-card">
                  <div className={`service-icon bg-${service.color}`}>
                    <i className={service.icon}></i>
                  </div>
                  <h4>{service.title}</h4>
                  <p>{service.description}</p>
                  <button 
                    className="btn btn-link"
                    onClick={() => setShowSignInModal(true)}
                  >
                    Learn More <i className="fas fa-arrow-right"></i>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Green AI Section */}
      <section id="greenai" className="greenai-section py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="greenai-content">
                <span className="section-badge">Urban Garden Community</span>
                <h2 className="section-title">Connect with Local Gardeners</h2>
                <p className="section-description">
                  Join a vibrant community of urban gardeners who share knowledge, exchange produce, 
                  and help each other grow sustainable gardens in city spaces.
                </p>
                
                <div className="feature-list">
                  {[
                    'Smart Crop Matching System',
                    'Community Garden Events',
                    'Real-time Swap Notifications',
                    'Local Gardening Tips & Guides'
                  ].map((feature, index) => (
                    <div key={index} className="feature-item">
                      <i className="fas fa-check-circle text-success"></i>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                
                <button 
                  className="btn btn-success btn-lg mt-4"
                  onClick={() => setShowSignInModal(true)}
                >
                  Join Community
                </button>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="ai-visualization">
                <div className="ai-dashboard">
                  <div className="dashboard-header">
                    <span>Community Dashboard</span>
                    <div className="status-indicator active"></div>
                  </div>
                  <div className="dashboard-content">
                    <div className="metric">
                      <span className="label">Active Swaps</span>
                      <span className="value">142</span>
                    </div>
                    <div className="metric">
                      <span className="label">Produce Shared</span>
                      <span className="value">2.1k lbs</span>
                    </div>
                    <div className="metric">
                      <span className="label">Community Score</span>
                      <span className="value">98.5%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Marketplace Section */}
      <section id="marketplace" className="marketplace-section py-5">
        <div className="container">
          <div className="section-header text-center mb-5">
            <span className="section-badge">Garden Marketplace</span>
            <h2 className="section-title">Fresh Produce & Garden Supplies</h2>
            <p className="section-subtitle">
              Shop fresh produce from local gardeners and find quality garden supplies
            </p>
          </div>
          
          <div className="row g-4">
            {[
              {
                image: 'https://images.unsplash.com/photo-1502741338009-cac2772e18bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
                title: 'Fresh Organic Tomatoes (2 lbs)',
                price: '$8.99',
                rating: 4.8,
                seller: 'Sarah\'s Urban Garden',
                originalPrice: '$12.99',
                discount: '31% OFF'
              },
              {
                image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
                title: 'Complete Herb Garden Kit',
                price: '$15.00',
                rating: 4.9,
                seller: 'Mike\'s Garden Shop',
                originalPrice: '$25.00',
                discount: '40% OFF'
              },
              {
                image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
                title: 'Organic Lettuce & Greens Mix',
                price: '$6.50',
                rating: 4.7,
                seller: 'Emma\'s Fresh Produce',
                originalPrice: '$9.99',
                discount: '35% OFF'
              },
              {
                image: 'https://images.unsplash.com/photo-1506084868230-bb9d95c24759?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
                title: 'Hot Pepper Seeds Collection',
                price: '$8.99',
                rating: 4.6,
                seller: 'Green Thumb Co.',
                originalPrice: '$12.99',
                discount: '31% OFF'
              },
              {
                image: 'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
                title: 'Fresh Zucchini Harvest (3 lbs)',
                price: '$7.99',
                rating: 4.9,
                seller: 'John\'s Organic Garden',
                originalPrice: '$11.99',
                discount: '33% OFF'
              },
              {
                image: 'https://images.unsplash.com/photo-1509228468518-180dd4864904?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
                title: 'Premium Garden Tool Set',
                price: '$35.00',
                rating: 4.5,
                seller: 'Urban Garden Supply',
                originalPrice: '$49.99',
                discount: '30% OFF'
              },
              {
                image: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
                title: 'Fresh Basil & Mint Bundle',
                price: '$4.99',
                rating: 4.8,
                seller: 'Lisa\'s Herb Corner',
                originalPrice: '$7.99',
                discount: '38% OFF'
              },
              {
                image: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
                title: 'Eco-Friendly Composting Kit',
                price: '$22.99',
                rating: 4.4,
                seller: 'Eco Garden Store',
                originalPrice: '$29.99',
                discount: '23% OFF'
              }
            ].map((product, index) => (
              <div key={index} className="col-lg-3 col-md-6">
                <div className="product-card">
                  <div className="product-image">
                    <img src={product.image} alt={product.title} />
                    {product.discount && (
                      <span className="discount-badge">{product.discount}</span>
                    )}
                    <div className="product-overlay">
                      <button className="wishlist-btn">
                        <i className="far fa-heart"></i>
                      </button>
                      <button className="quick-view-btn">
                        <i className="fas fa-eye"></i>
                      </button>
                    </div>
                  </div>
                  <div className="product-info">
                    <h5>{product.title}</h5>
                    <div className="product-rating">
                      {[...Array(5)].map((_, i) => (
                        <i key={i} className={`fas fa-star ${i < Math.floor(product.rating) ? 'active' : ''}`}></i>
                      ))}
                      <span>({product.rating})</span>
                    </div>
                    <p className="seller">by {product.seller}</p>
                    <div className="product-footer">
                      <div className="price-section">
                        <span className="price">{product.price}</span>
                        {product.originalPrice && (
                          <span className="original-price">{product.originalPrice}</span>
                        )}
                      </div>
                      <button 
                        className="btn btn-success btn-sm add-to-cart-btn"
                        onClick={() => setShowSignInModal(true)}
                      >
                        <i className="fas fa-shopping-cart me-1"></i>
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-5">
            <button 
              className="btn btn-outline-success btn-lg"
              onClick={() => setShowSignInModal(true)}
            >
              View All Available Items
            </button>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blogs" className="blog-section py-5">
        <div className="container">
          <div className="section-header text-center mb-5">
            <span className="section-badge">Garden Tips & Guides</span>
            <h2 className="section-title">Urban Gardening Blog</h2>
            <p className="section-subtitle">
              Learn from experienced gardeners and share your growing knowledge
            </p>
          </div>
          
          <div className="row g-4">
            {[
              {
                category: 'Vegetable Growing',
                title: 'The Complete Guide to Growing Tomatoes in Small Spaces',
                excerpt: 'Learn how to grow delicious tomatoes in containers, balconies, and small urban gardens...',
                author: 'Sarah Green',
                date: 'Aug 5, 2025',
                readTime: '5 min read',
                image: 'https://images.unsplash.com/photo-1574943320219-553eb213f72d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
              },
              {
                category: 'Urban Gardening',
                title: 'How to Start Your First Balcony Garden',
                excerpt: 'Essential tips for creating a thriving garden in small urban spaces and containers...',
                author: 'Mark Johnson',
                date: 'Aug 3, 2025',
                readTime: '8 min read',
                image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
              },
              {
                category: 'Herb Gardening',
                title: '10 Essential Herbs Every Urban Gardener Should Grow',
                excerpt: 'Discover easy-to-grow herbs that thrive in containers and add flavor to your cooking...',
                author: 'Emma Wilson',
                date: 'Aug 1, 2025',
                readTime: '6 min read',
                image: 'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
              },
              {
                category: 'Community Gardening',
                title: 'Building Strong Neighborhood Garden Communities',
                excerpt: 'How to connect with fellow gardeners and create lasting community relationships...',
                author: 'Dr. Alex Chen',
                date: 'Jul 28, 2025',
                readTime: '7 min read',
                image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
              },
              {
                category: 'Seasonal Growing',
                title: 'Fall Planting: What to Grow in Your Urban Garden',
                excerpt: 'Discover the best vegetables and herbs to plant during the fall season...',
                author: 'Maria Rodriguez',
                date: 'Jul 25, 2025',
                readTime: '6 min read',
                image: 'https://images.unsplash.com/photo-1574943320219-553eb213f72d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
              },
              {
                category: 'Sustainable Practices',
                title: 'Composting in Small Spaces: A Beginner\'s Guide',
                excerpt: 'Learn how to create rich compost for your garden even in apartments and small homes...',
                author: 'James Park',
                date: 'Jul 22, 2025',
                readTime: '9 min read',
                image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
              }
            ].map((post, index) => (
              <div key={index} className="col-lg-4 col-md-6">
                <article className="blog-card">
                  <div className="blog-image">
                    <img src={post.image} alt={post.title} />
                    <div className="blog-overlay">
                      <span className={`blog-category category-${(index % 3) + 1}`}>{post.category}</span>
                    </div>
                  </div>
                  <div className="blog-content">
                    <h4>{post.title}</h4>
                    <p>{post.excerpt}</p>
                    <div className="blog-meta">
                      <div className="author-info">
                        <div className="author-avatar">
                          <i className="fas fa-user"></i>
                        </div>
                        <div>
                          <span className="author">{post.author}</span>
                          <span className="date">{post.date}</span>
                        </div>
                      </div>
                      <span className="read-time">
                        <i className="fas fa-clock"></i>
                        {post.readTime}
                      </span>
                    </div>
                  </div>
                </article>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-5">
            <button 
              className="btn btn-success btn-lg"
              onClick={() => setShowSignInModal(true)}
            >
              Read More Garden Tips
            </button>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="about-section py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="about-content">
                <span className="section-badge">About GreenTech</span>
                <h2 className="section-title">Leading the Green Revolution</h2>
                <p className="section-description">
                  We are passionate about creating innovative solutions that help businesses and 
                  individuals transition to sustainable practices while maintaining efficiency and profitability.
                </p>
                
                <div className="mission-values">
                  <div className="value-item">
                    <i className="fas fa-globe text-success"></i>
                    <div>
                      <h5>Global Impact</h5>
                      <p>Making environmental solutions accessible worldwide</p>
                    </div>
                  </div>
                  <div className="value-item">
                    <i className="fas fa-lightbulb text-warning"></i>
                    <div>
                      <h5>Innovation</h5>
                      <p>Cutting-edge technology for sustainable solutions</p>
                    </div>
                  </div>
                  <div className="value-item">
                    <i className="fas fa-users text-info"></i>
                    <div>
                      <h5>Community</h5>
                      <p>Building a network of eco-conscious leaders</p>
                    </div>
                  </div>
                </div>
                
                <button 
                  className="btn btn-success btn-lg mt-4"
                  onClick={() => setShowSignInModal(true)}
                >
                  Learn Our Story
                </button>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-stats">
                <div className="stats-grid">
                  {[
                    { number: '5+', label: 'Years Experience' },
                    { number: '1000+', label: 'Projects Completed' },
                    { number: '50+', label: 'Team Members' },
                    { number: '25+', label: 'Countries Served' }
                  ].map((stat, index) => (
                    <div key={index} className="stat-card">
                      <h3>{stat.number}</h3>
                      <p>{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section py-5">
        <div className="container">
          <div className="section-header text-center mb-5">
            <span className="section-badge">Get in Touch</span>
            <h2 className="section-title">Let's Work Together</h2>
            <p className="section-subtitle">
              Ready to start your sustainable journey? Contact us today!
            </p>
          </div>
          
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <div className="contact-form">
                <form>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label>Full Name</label>
                        <input type="text" className="form-control" placeholder="Your Name" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label>Email Address</label>
                        <input type="email" className="form-control" placeholder="your@email.com" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label>Phone Number</label>
                        <input type="tel" className="form-control" placeholder="+1 (555) 000-0000" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label>Service Interest</label>
                        <select className="form-control">
                          <option>Select a service</option>
                          <option>Solar Solutions</option>
                          <option>Green AI</option>
                          <option>Marketplace</option>
                          <option>Consultation</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-group">
                        <label>Message</label>
                        <textarea className="form-control" rows="5" placeholder="Tell us about your project..."></textarea>
                      </div>
                    </div>
                    <div className="col-12 text-center">
                      <button type="submit" className="btn btn-success btn-lg">
                        Send Message
                        <i className="fas fa-paper-plane ms-2"></i>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          
          <div className="row mt-5">
            <div className="col-lg-4 text-center">
              <div className="contact-info">
                <i className="fas fa-map-marker-alt"></i>
                <h5>Visit Us</h5>
                <p>123 Green Street<br />Eco City, EC 12345</p>
              </div>
            </div>
            <div className="col-lg-4 text-center">
              <div className="contact-info">
                <i className="fas fa-phone"></i>
                <h5>Call Us</h5>
                <p>+1 (555) 123-4567<br />Mon-Fri 9AM-6PM</p>
              </div>
            </div>
            <div className="col-lg-4 text-center">
              <div className="contact-info">
                <i className="fas fa-envelope"></i>
                <h5>Email Us</h5>
                <p>hello@greentech.com<br />support@greentech.com</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="footer-brand">
                <div className="brand-logo">
                  <span className="brand-icon">🌱</span>
                  <span className="brand-text">GreenTech</span>
                </div>
                <p>Leading the way to a sustainable future through innovative green technology solutions.</p>
                <div className="social-links">
                  {['facebook', 'twitter', 'linkedin', 'instagram'].map(social => (
                    <a key={social} href="#" className="social-link">
                      <i className={`fab fa-${social}`}></i>
                    </a>
                  ))}
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-6">
              <div className="footer-links">
                <h5>Services</h5>
                <ul>
                  <li><a href="#services">Solar Solutions</a></li>
                  <li><a href="#services">Wind Energy</a></li>
                  <li><a href="#services">Green Farming</a></li>
                  <li><a href="#services">Smart Buildings</a></li>
                </ul>
              </div>
            </div>
            <div className="col-lg-2 col-md-6">
              <div className="footer-links">
                <h5>Company</h5>
                <ul>
                  <li><a href="#about">About Us</a></li>
                  <li><a href="#blogs">Blog</a></li>
                  <li><a href="#contact">Contact</a></li>
                  <li><a href="#">Careers</a></li>
                </ul>
              </div>
            </div>
            <div className="col-lg-2 col-md-6">
              <div className="footer-links">
                <h5>Resources</h5>
                <ul>
                  <li><a href="#">Documentation</a></li>
                  <li><a href="#">Support</a></li>
                  <li><a href="#">Privacy Policy</a></li>
                  <li><a href="#">Terms of Service</a></li>
                </ul>
              </div>
            </div>
            <div className="col-lg-2 col-md-6">
              <div className="footer-newsletter">
                <h5>Newsletter</h5>
                <p>Stay updated with our latest news</p>
                <div className="newsletter-form">
                  <input type="email" placeholder="Your email" />
                  <button type="submit">
                    <i className="fas fa-arrow-right"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <hr />
          <div className="footer-bottom">
            <div className="row align-items-center">
              <div className="col-md-6">
                <p>&copy; 2025 GreenTech. All rights reserved.</p>
              </div>
              <div className="col-md-6 text-end">
                <p>Made with 💚 for a sustainable future</p>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Sign In Modal */}
      {showSignInModal && (
        <div className="modal-overlay" onClick={() => setShowSignInModal(false)}>
          <div className="auth-modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3>Welcome Back</h3>
              <button 
                className="modal-close-btn"
                onClick={() => setShowSignInModal(false)}
              >
                <i className="fas fa-times"></i>
              </button>
            </div>
            
            <form className="auth-form">
              <div className="form-group">
                <label>Email Address</label>
                <div className="input-group">
                  <i className="fas fa-envelope"></i>
                  <input 
                    type="email" 
                    placeholder="Enter your email"
                    className="form-control"
                  />
                </div>
              </div>
              
              <div className="form-group">
                <label>Password</label>
                <div className="input-group">
                  <i className="fas fa-lock"></i>
                  <input 
                    type="password" 
                    placeholder="Enter your password"
                    className="form-control"
                  />
                </div>
              </div>
              
              <div className="form-options">
                <label className="checkbox-label">
                  <input type="checkbox" />
                  <span className="checkmark"></span>
                  Remember me
                </label>
                <button type="button" className="forgot-password">
                  Forgot password?
                </button>
              </div>
              
              <button type="submit" className="btn btn-success btn-block">
                <i className="fas fa-sign-in-alt me-2"></i>
                Sign In
              </button>
              
              <div className="divider">
                <span>or continue with</span>
              </div>
              
              <div className="social-auth">
                <button type="button" className="btn btn-social google">
                  <i className="fab fa-google"></i>
                  Google
                </button>
                <button type="button" className="btn btn-social facebook">
                  <i className="fab fa-facebook-f"></i>
                  Facebook
                </button>
              </div>
              
              <div className="auth-switch">
                <span>Don't have an account? </span>
                <button 
                  type="button"
                  onClick={() => {
                    setShowSignInModal(false);
                    setShowSignUpModal(true);
                  }}
                >
                  Sign Up
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Sign Up Modal */}
      {showSignUpModal && (
        <div className="modal-overlay" onClick={() => setShowSignUpModal(false)}>
          <div className="auth-modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3>Join Our Community</h3>
              <button 
                className="modal-close-btn"
                onClick={() => setShowSignUpModal(false)}
              >
                <i className="fas fa-times"></i>
              </button>
            </div>
            
            <form className="auth-form">
              <div className="form-row">
                <div className="form-group">
                  <label>First Name</label>
                  <div className="input-group">
                    <i className="fas fa-user"></i>
                    <input 
                      type="text" 
                      placeholder="First name"
                      className="form-control"
                    />
                  </div>
                </div>
                
                <div className="form-group">
                  <label>Last Name</label>
                  <div className="input-group">
                    <i className="fas fa-user"></i>
                    <input 
                      type="text" 
                      placeholder="Last name"
                      className="form-control"
                    />
                  </div>
                </div>
              </div>
              
              <div className="form-group">
                <label>Email Address</label>
                <div className="input-group">
                  <i className="fas fa-envelope"></i>
                  <input 
                    type="email" 
                    placeholder="Enter your email"
                    className="form-control"
                  />
                </div>
              </div>
              
              <div className="form-group">
                <label>Password</label>
                <div className="input-group">
                  <i className="fas fa-lock"></i>
                  <input 
                    type="password" 
                    placeholder="Create a password"
                    className="form-control"
                  />
                </div>
              </div>
              
              <div className="form-group">
                <label>Confirm Password</label>
                <div className="input-group">
                  <i className="fas fa-lock"></i>
                  <input 
                    type="password" 
                    placeholder="Confirm your password"
                    className="form-control"
                  />
                </div>
              </div>
              
              <div className="form-group">
                <label>Location (Optional)</label>
                <div className="input-group">
                  <i className="fas fa-map-marker-alt"></i>
                  <input 
                    type="text" 
                    placeholder="City, State"
                    className="form-control"
                  />
                </div>
              </div>
              
              <div className="form-options">
                <label className="checkbox-label">
                  <input type="checkbox" />
                  <span className="checkmark"></span>
                  I agree to the terms of service and Privacy Policy
                </label>
              </div>
              
              <div className="form-options">
                <label className="checkbox-label">
                  <input type="checkbox" />
                  <span className="checkmark"></span>
                  Send me gardening tips and community updates
                </label>
              </div>
              
              <button type="submit" className="btn btn-success btn-block">
                <i className="fas fa-user-plus me-2"></i>
                Create Account
              </button>
              
              <div className="divider">
                <span>or continue with</span>
              </div>
              
              <div className="social-auth">
                <button type="button" className="btn btn-social google">
                  <i className="fab fa-google"></i>
                  Google
                </button>
                <button type="button" className="btn btn-social facebook">
                  <i className="fab fa-facebook-f"></i>
                  Facebook
                </button>
              </div>
              
              <div className="auth-switch">
                <span>Already have an account? </span>
                <button 
                  type="button"
                  onClick={() => {
                    setShowSignUpModal(false);
                    setShowSignInModal(true);
                  }}
                >
                  Sign In
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default LandingPage;