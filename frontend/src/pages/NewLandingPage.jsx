import React, { useState } from 'react'
import '../styles/NewLandingPage.css'
import hero from '../assets/hero.jpeg'
import logo from '../assets/logo.png'
import map from '../assets/map.png'

// Sample product images for blog
import seeds1 from '../assets/seeds/1.jpg'
import tools1 from '../assets/tools/1.jpg'
import soil1 from '../assets/soil/1.jpg'
import planters1 from '../assets/planters/1.jpg'
import planters2 from '../assets/planters/2.jpg'
import books1 from '../assets/books/1.jpg'
import seeds2 from '../assets/seeds/2.jpg'
import tools2 from '../assets/tools/2.jpg'
import soil2 from '../assets/soil/2.jpg'

export default function NewLandingPage() {
  const [showAllBlogs, setShowAllBlogs] = useState(false)

  const toggleBlogs = () => {
    setShowAllBlogs(!showAllBlogs)
  }

  return (
    <div className="landing-page">
      {/* Navigation */}
      <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm fixed-top">
        <div className="container">
          <a className="navbar-brand d-flex align-items-center" href="#home">
            <span className="fw-bold text-success fs-4">Grow & Swap</span>
          </a>

          <button className="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto me-4">
              <li className="nav-item">
                <a className="nav-link fw-medium px-3" href="#home">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link fw-medium px-3" href="#features">Features</a>
              </li>
              <li className="nav-item">
                <a className="nav-link fw-medium px-3" href="#how-it-works">How It Works</a>
              </li>
              <li className="nav-item">
                <a className="nav-link fw-medium px-3" href="#community">Community</a>
              </li>
              <li className="nav-item">
                <a className="nav-link fw-medium px-3" href="#blog">Blog</a>
              </li>
            </ul>
            <div className="d-flex gap-2">
              <button className="btn btn-outline-success rounded-pill px-4">Sign In</button>
              <button className="btn btn-success rounded-pill px-4">Join Now</button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero-section position-relative min-vh-100 d-flex align-items-center">
        <div className="hero-bg position-absolute top-0 start-0 w-100 h-100">
          <img src={hero} alt="Urban Garden" className="w-100 h-100 object-fit-cover" />
          <div className="hero-overlay position-absolute top-0 start-0 w-100 h-100"></div>
        </div>

        <div className="container position-relative">
          <div className="row align-items-center min-vh-100">
            <div className="col-lg-6 col-md-8 col-sm-10 mx-auto mx-lg-0">
              <div className="hero-content text-white text-center text-lg-start w-100">
                <span className="badge bg-success-subtle text-success rounded-pill px-3 py-2 mb-4">
                  🌱 Sustainable Urban Living
                </span>
                <h1 className="display-2 fw-bold mb-4 hero-title w-100">
                  Grow & Swap
                  <span className="text-success d-block">Urban Community</span>
                </h1>
                <p className="lead mb-4 fs-5 opacity-90 w-100">
                  Connect with fellow urban gardeners, swap homegrown produce, and build a sustainable community right in your neighborhood. Even small spaces can make a big difference!
                </p>
                <div className="d-flex gap-3 flex-wrap justify-content-center justify-content-lg-start">
                  <button className="btn btn-success btn-lg rounded-pill px-5 py-3 fw-medium">
                    Start Growing Together
                  </button>
                  <button className="btn btn-outline-light btn-lg rounded-pill px-5 py-3 fw-medium">
                    Watch Demo
                  </button>
                </div>
                <div className="mt-5 d-flex gap-4 text-center text-lg-start justify-content-center justify-content-lg-start flex-wrap">
                  <div className="flex-fill">
                    <div className="h3 fw-bold text-light">10K+</div>
                    <small className="opacity-75">Active Gardeners</small>
                  </div>
                  <div className="flex-fill">
                    <div className="h3 fw-bold text-light">50K+</div>
                    <small className="opacity-75">Swaps Completed</small>
                  </div>
                  <div className="flex-fill">
                    <div className="h3 fw-bold text-light">100+</div>
                    <small className="opacity-75">Cities Connected</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-6 bg-light" style={{ marginTop: '120px' }}>
        <div className="container">
          <div className="row mb-5">
            <div className="col-lg-8 mx-auto text-center">
              <span className="badge bg-success-subtle text-success rounded-pill px-3 py-2 mb-3">
                ✨ Key Features
              </span>
              <h2 className="display-4 fw-bold mb-4">Everything You Need for Urban Gardening</h2>
              <p className="lead text-muted">
                Our platform connects urban gardeners with powerful tools to grow, share, and build sustainable communities
              </p>
            </div>
          </div>

          <div className="row g-4">
            <div className="col-lg-4 col-md-6">
              <div className="feature-card card h-100 border-0 shadow-sm hover-card">
                <div className="card-body p-4">
                  <div className="feature-icon bg-success bg-opacity-10 rounded-3 p-3 mb-3 d-inline-block">
                    <i className="fas fa-user-circle text-success fs-1"></i>
                  </div>
                  <h5 className="fw-bold mb-3">Smart User Profiles</h5>
                  <p className="text-muted mb-3">
                    Create detailed profiles with your location, garden details, and growing preferences. Let others discover what makes your urban garden unique.
                  </p>
                  <ul className="list-unstyled small text-muted">
                    <li><i className="fas fa-check text-success me-2"></i>Location-based matching</li>
                    <li><i className="fas fa-check text-success me-2"></i>Garden inventory tracking</li>
                    <li><i className="fas fa-check text-success me-2"></i>Growing experience levels</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="feature-card card h-100 border-0 shadow-sm hover-card">
                <div className="card-body p-4">
                  <div className="feature-icon bg-success bg-opacity-10 rounded-3 p-3 mb-3 d-inline-block">
                    <i className="fas fa-seedling text-success fs-1"></i>
                  </div>
                  <h5 className="fw-bold mb-3">Crop Inventory Management</h5>
                  <p className="text-muted mb-3">
                    Easily manage your harvest with photos, availability status, and detailed descriptions. Keep track of what's ready to share!
                  </p>
                  <ul className="list-unstyled small text-muted">
                    <li><i className="fas fa-check text-success me-2"></i>Photo galleries</li>
                    <li><i className="fas fa-check text-success me-2"></i>Harvest calendars</li>
                    <li><i className="fas fa-check text-success me-2"></i>Availability tracking</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="feature-card card h-100 border-0 shadow-sm hover-card">
                <div className="card-body p-4">
                  <div className="feature-icon bg-success bg-opacity-10 rounded-3 p-3 mb-3 d-inline-block">
                    <i className="fas fa-map-marked-alt text-success fs-1"></i>
                  </div>
                  <h5 className="fw-bold mb-3">Interactive Map Search</h5>
                  <p className="text-muted mb-3">
                    Find fresh produce and fellow gardeners in your neighborhood using our smart map system. Filter by crop type and distance.
                  </p>
                  <ul className="list-unstyled small text-muted">
                    <li><i className="fas fa-check text-success me-2"></i>Radius-based search</li>
                    <li><i className="fas fa-check text-success me-2"></i>Crop type filters</li>
                    <li><i className="fas fa-check text-success me-2"></i>Real-time availability</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="feature-card card h-100 border-0 shadow-sm hover-card">
                <div className="card-body p-4">
                  <div className="feature-icon bg-success bg-opacity-10 rounded-3 p-3 mb-3 d-inline-block">
                    <i className="fas fa-exchange-alt text-success fs-1"></i>
                  </div>
                  <h5 className="fw-bold mb-3">Smart Swap System</h5>
                  <p className="text-muted mb-3">
                    Send swap requests and offers with built-in messaging. Coordinate pickups and build relationships with local growers.
                  </p>
                  <ul className="list-unstyled small text-muted">
                    <li><i className="fas fa-check text-success me-2"></i>In-app messaging</li>
                    <li><i className="fas fa-check text-success me-2"></i>Swap proposals</li>
                    <li><i className="fas fa-check text-success me-2"></i>Pickup coordination</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="feature-card card h-100 border-0 shadow-sm hover-card">
                <div className="card-body p-4">
                  <div className="feature-icon bg-success bg-opacity-10 rounded-3 p-3 mb-3 d-inline-block">
                    <i className="fas fa-award text-success fs-1"></i>
                  </div>
                  <h5 className="fw-bold mb-3">Community Rewards</h5>
                  <p className="text-muted mb-3">
                    Earn points and badges for active participation. The more you share and contribute, the more you unlock special community perks.
                  </p>
                  <ul className="list-unstyled small text-muted">
                    <li><i className="fas fa-check text-success me-2"></i>Points system</li>
                    <li><i className="fas fa-check text-success me-2"></i>Achievement badges</li>
                    <li><i className="fas fa-check text-success me-2"></i>Community leaderboards</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="feature-card card h-100 border-0 shadow-sm hover-card">
                <div className="card-body p-4">
                  <div className="feature-icon bg-success bg-opacity-10 rounded-3 p-3 mb-3 d-inline-block">
                    <i className="fas fa-blog text-success fs-1"></i>
                  </div>
                  <h5 className="fw-bold mb-3">Knowledge Hub</h5>
                  <p className="text-muted mb-3">
                    Access gardening guides, seasonal tips, recipes, and local events. Learn from experienced growers and share your knowledge.
                  </p>
                  <ul className="list-unstyled small text-muted">
                    <li><i className="fas fa-check text-success me-2"></i>Expert gardening guides</li>
                    <li><i className="fas fa-check text-success me-2"></i>Recipe collections</li>
                    <li><i className="fas fa-check text-success me-2"></i>Community events</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-6 bg-white mt-5">
        <div className="container">
          <div className="row mb-5">
            <div className="col-lg-8 mx-auto text-center">
              <span className="badge bg-success-subtle text-success rounded-pill px-3 py-2 mb-3">
                🚀 Simple Process
              </span>
              <h2 className="display-4 fw-bold mb-4">How It Works</h2>
              <p className="lead text-muted">
                Getting started is easy! Follow these simple steps to join the urban gardening revolution
              </p>
            </div>
          </div>

          <div className="row g-5 align-items-center">
            <div className="col-lg-6">
              <div className="steps-content">
                <div className="step-item d-flex mb-4">
                  <div className="step-number bg-success text-white rounded-circle d-flex align-items-center justify-content-center me-4" style={{ width: '60px', height: '60px' }}>
                    <span className="fw-bold fs-4">1</span>
                  </div>
                  <div>
                    <h5 className="fw-bold mb-2">Create Your Profile</h5>
                    <p className="text-muted mb-0">
                      Sign up and tell us about your garden, location, and what you love to grow. Add photos and describe your growing space.
                    </p>
                  </div>
                </div>

                <div className="step-item d-flex mb-4">
                  <div className="step-number bg-success text-white rounded-circle d-flex align-items-center justify-content-center me-4" style={{ width: '60px', height: '60px' }}>
                    <span className="fw-bold fs-4">2</span>
                  </div>
                  <div>
                    <h5 className="fw-bold mb-2">List Your Harvest</h5>
                    <p className="text-muted mb-0">
                      Upload photos of your fresh produce, herbs, or plants. Set availability and describe what makes your harvest special.
                    </p>
                  </div>
                </div>

                <div className="step-item d-flex mb-4">
                  <div className="step-number bg-success text-white rounded-circle d-flex align-items-center justify-content-center me-4" style={{ width: '60px', height: '60px' }}>
                    <span className="fw-bold fs-4">3</span>
                  </div>
                  <div>
                    <h5 className="fw-bold mb-2">Connect & Swap</h5>
                    <p className="text-muted mb-0">
                      Browse nearby gardens, send swap requests, and chat with fellow growers. Coordinate pickups and build lasting relationships.
                    </p>
                  </div>
                </div>

                <div className="step-item d-flex">
                  <div className="step-number bg-success text-white rounded-circle d-flex align-items-center justify-content-center me-4" style={{ width: '60px', height: '60px' }}>
                    <span className="fw-bold fs-4">4</span>
                  </div>
                  <div>
                    <h5 className="fw-bold mb-2">Grow Together</h5>
                    <p className="text-muted mb-0">
                      Earn points, unlock badges, and participate in community events. Share knowledge and help others succeed in their gardening journey.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="how-it-works-visual">
                <img src={map} alt="Community Map" className="img-fluid rounded-3 shadow-lg" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section id="community" className="py-6 bg-white mt-5">
        <div className="container">
          <div className="row mb-5">
            <div className="col-lg-8 mx-auto text-center">
              <span className="badge bg-success-subtle text-success rounded-pill px-3 py-2 mb-3">
                🌍 Growing Community
              </span>
              <h2 className="display-4 fw-bold mb-4">Join Thousands of Urban Gardeners</h2>
              <p className="lead text-muted">
                Be part of a vibrant community that's transforming urban spaces into thriving green ecosystems
              </p>
            </div>
          </div>

          <div className="row g-4 mb-5">
            <div className="col-lg-3 col-md-6 text-center">
              <div className="stat-card">
                <div className="stat-number display-3 fw-bold text-success">10K+</div>
                <p className="stat-label text-muted mb-0">Active Members</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 text-center">
              <div className="stat-card">
                <div className="stat-number display-3 fw-bold text-success">50K+</div>
                <p className="stat-label text-muted mb-0">Successful Swaps</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 text-center">
              <div className="stat-card">
                <div className="stat-number display-3 fw-bold text-success">100+</div>
                <p className="stat-label text-muted mb-0">Cities Connected</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 text-center">
              <div className="stat-card">
                <div className="stat-number display-3 fw-bold text-success">500+</div>
                <p className="stat-label text-muted mb-0">Plant Varieties</p>
              </div>
            </div>
          </div>

          <div className="row g-4">
            <div className="col-lg-4">
              <div className="testimonial-card card border-0 shadow-sm h-100">
                <div className="card-body p-4">
                  <div className="d-flex mb-3">
                    {[...Array(5)].map((_, i) => (
                      <i key={i} className="fas fa-star text-warning me-1"></i>
                    ))}
                  </div>
                  <p className="card-text mb-3">
                    "I've connected with amazing gardeners in my neighborhood and learned so much! The swap system is brilliant - I've tried vegetables I never would have grown myself."
                  </p>
                  <div className="d-flex align-items-center">
                    <div className="avatar bg-success bg-opacity-10 rounded-circle d-flex align-items-center justify-content-center me-3" style={{ width: '50px', height: '50px' }}>
                      <span className="fw-bold text-success">SM</span>
                    </div>
                    <div>
                      <h6 className="mb-0 fw-bold">Sarah Mitchell</h6>
                      <small className="text-muted">Balcony Gardener, NYC</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="testimonial-card card border-0 shadow-sm h-100">
                <div className="card-body p-4">
                  <div className="d-flex mb-3">
                    {[...Array(5)].map((_, i) => (
                      <i key={i} className="fas fa-star text-warning me-1"></i>
                    ))}
                  </div>
                  <p className="card-text mb-3">
                    "The community aspect is what makes this special. It's not just about swapping produce - we share knowledge, tools, and genuine friendships have formed."
                  </p>
                  <div className="d-flex align-items-center">
                    <div className="avatar bg-success bg-opacity-10 rounded-circle d-flex align-items-center justify-content-center me-3" style={{ width: '50px', height: '50px' }}>
                      <span className="fw-bold text-success">MJ</span>
                    </div>
                    <div>
                      <h6 className="mb-0 fw-bold">Mike Johnson</h6>
                      <small className="text-muted">Rooftop Gardener, LA</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="testimonial-card card border-0 shadow-sm h-100">
                <div className="card-body p-4">
                  <div className="d-flex mb-3">
                    {[...Array(5)].map((_, i) => (
                      <i key={i} className="fas fa-star text-warning me-1"></i>
                    ))}
                  </div>
                  <p className="card-text mb-3">
                    "As a beginner, I was nervous about gardening. This platform connected me with experienced growers who mentored me. Now I'm growing my own herbs and vegetables!"
                  </p>
                  <div className="d-flex align-items-center">
                    <div className="avatar bg-success bg-opacity-10 rounded-circle d-flex align-items-center justify-content-center me-3" style={{ width: '50px', height: '50px' }}>
                      <span className="fw-bold text-success">EP</span>
                    </div>
                    <div>
                      <h6 className="mb-0 fw-bold">Emily Park</h6>
                      <small className="text-muted">Window Gardener, Chicago</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Preview Section */}
      <section id="blog" className="py-6 bg-light mt-5">
        <div className="container">
          <div className="row mb-5">
            <div className="col-lg-8 mx-auto text-center">
              <span className="badge bg-success-subtle text-success rounded-pill px-3 py-2 mb-3">
                📚 Knowledge Hub
              </span>
              <h2 className="display-4 fw-bold mb-4">Latest from Our Blog</h2>
              <p className="lead text-muted">
                Discover expert tips, seasonal guides, and inspiring stories from our community
              </p>
            </div>
          </div>

          <div className="row g-4">
            {/* First Row - 3 Cards (Always visible) */}
            <div className="col-lg-4 col-md-6">
              <article className="blog-card card border-0 shadow-sm h-100 hover-card">
                <div className="blog-image-container position-relative overflow-hidden">
                  <img src={seeds1} alt="Container Gardening" className="card-img-top" style={{ height: '250px', objectFit: 'cover' }} />
                  <div className="blog-category position-absolute top-0 start-0 m-3">
                    <span className="badge bg-success rounded-pill">Beginner Guide</span>
                  </div>
                </div>
                <div className="card-body p-4">
                  <h5 className="card-title fw-bold mb-3">
                    <a href="#" className="text-decoration-none text-dark">Container Gardening for Small Spaces</a>
                  </h5>
                  <p className="card-text text-muted mb-3">
                    Learn how to maximize your harvest even with limited space. Perfect for apartment dwellers and urban gardening beginners.
                  </p>
                  <div className="d-flex align-items-center justify-content-between">
                    <div className="d-flex align-items-center">
                      <div className="author-avatar bg-success bg-opacity-10 rounded-circle d-flex align-items-center justify-content-center me-2" style={{ width: '35px', height: '35px' }}>
                        <span className="fw-bold text-success small">JD</span>
                      </div>
                      <small className="text-muted">Jane Doe • 5 min read</small>
                    </div>
                    <small className="text-muted">2 days ago</small>
                  </div>
                </div>
              </article>
            </div>

            <div className="col-lg-4 col-md-6">
              <article className="blog-card card border-0 shadow-sm h-100 hover-card">
                <div className="blog-image-container position-relative overflow-hidden">
                  <img src={tools1} alt="Seasonal Planting" className="card-img-top" style={{ height: '250px', objectFit: 'cover' }} />
                  <div className="blog-category position-absolute top-0 start-0 m-3">
                    <span className="badge bg-warning rounded-pill">Seasonal Tips</span>
                  </div>
                </div>
                <div className="card-body p-4">
                  <h5 className="card-title fw-bold mb-3">
                    <a href="#" className="text-decoration-none text-dark">Fall Planting Guide: What to Grow Now</a>
                  </h5>
                  <p className="card-text text-muted mb-3">
                    Discover the best vegetables and herbs to plant this fall for a winter harvest. Seasonal gardening made simple.
                  </p>
                  <div className="d-flex align-items-center justify-content-between">
                    <div className="d-flex align-items-center">
                      <div className="author-avatar bg-success bg-opacity-10 rounded-circle d-flex align-items-center justify-content-center me-2" style={{ width: '35px', height: '35px' }}>
                        <span className="fw-bold text-success small">RS</span>
                      </div>
                      <small className="text-muted">Robert Smith • 7 min read</small>
                    </div>
                    <small className="text-muted">1 week ago</small>
                  </div>
                </div>
              </article>
            </div>

            <div className="col-lg-4 col-md-6">
              <article className="blog-card card border-0 shadow-sm h-100 hover-card">
                <div className="blog-image-container position-relative overflow-hidden">
                  <img src={soil1} alt="Community Recipe" className="card-img-top" style={{ height: '250px', objectFit: 'cover' }} />
                  <div className="blog-category position-absolute top-0 start-0 m-3">
                    <span className="badge bg-info rounded-pill">Recipes</span>
                  </div>
                </div>
                <div className="card-body p-4">
                  <h5 className="card-title fw-bold mb-3">
                    <a href="#" className="text-decoration-none text-dark">Fresh Herb Pesto: Garden to Table</a>
                  </h5>
                  <p className="card-text text-muted mb-3">
                    Transform your homegrown herbs into delicious pesto. Includes variations and storage tips from our community members.
                  </p>
                  <div className="d-flex align-items-center justify-content-between">
                    <div className="d-flex align-items-center">
                      <div className="author-avatar bg-success bg-opacity-10 rounded-circle d-flex align-items-center justify-content-center me-2" style={{ width: '35px', height: '35px' }}>
                        <span className="fw-bold text-success small">ML</span>
                      </div>
                      <small className="text-muted">Maria Lopez • 4 min read</small>
                    </div>
                    <small className="text-muted">3 days ago</small>
                  </div>
                </div>
              </article>
            </div>

            {/* Additional Blog Articles - Show when expanded (2 more rows, 6 cards total) */}
            {showAllBlogs && (
              <>
                {/* Second Row - 3 Cards */}
                <div className="col-lg-4 col-md-6">
                  <article className="blog-card card border-0 shadow-sm h-100 hover-card">
                    <div className="blog-image-container position-relative overflow-hidden">
                      <img src={planters1} alt="Urban Composting" className="card-img-top" style={{ height: '250px', objectFit: 'cover' }} />
                      <div className="blog-category position-absolute top-0 start-0 m-3">
                        <span className="badge bg-success rounded-pill">Sustainability</span>
                      </div>
                    </div>
                    <div className="card-body p-4">
                      <h5 className="card-title fw-bold mb-3">
                        <a href="#" className="text-decoration-none text-dark">Urban Composting Made Simple</a>
                      </h5>
                      <p className="card-text text-muted mb-3">
                        Turn your kitchen scraps into garden gold with these easy composting techniques designed for urban spaces.
                      </p>
                      <div className="d-flex align-items-center justify-content-between">
                        <div className="d-flex align-items-center">
                          <div className="author-avatar bg-success bg-opacity-10 rounded-circle d-flex align-items-center justify-content-center me-2" style={{ width: '35px', height: '35px' }}>
                            <span className="fw-bold text-success small">DK</span>
                          </div>
                          <small className="text-muted">David Kim • 6 min read</small>
                        </div>
                        <small className="text-muted">5 days ago</small>
                      </div>
                    </div>
                  </article>
                </div>

                <div className="col-lg-4 col-md-6">
                  <article className="blog-card card border-0 shadow-sm h-100 hover-card">
                    <div className="blog-image-container position-relative overflow-hidden">
                      <img src={planters2} alt="Hydroponic Systems" className="card-img-top" style={{ height: '250px', objectFit: 'cover' }} />
                      <div className="blog-category position-absolute top-0 start-0 m-3">
                        <span className="badge bg-primary rounded-pill">Technology</span>
                      </div>
                    </div>
                    <div className="card-body p-4">
                      <h5 className="card-title fw-bold mb-3">
                        <a href="#" className="text-decoration-none text-dark">DIY Hydroponic Systems for Beginners</a>
                      </h5>
                      <p className="card-text text-muted mb-3">
                        Build your own soilless growing system at home. Perfect for year-round fresh herbs and vegetables.
                      </p>
                      <div className="d-flex align-items-center justify-content-between">
                        <div className="d-flex align-items-center">
                          <div className="author-avatar bg-success bg-opacity-10 rounded-circle d-flex align-items-center justify-content-center me-2" style={{ width: '35px', height: '35px' }}>
                            <span className="fw-bold text-success small">AL</span>
                          </div>
                          <small className="text-muted">Anna Lee • 8 min read</small>
                        </div>
                        <small className="text-muted">1 week ago</small>
                      </div>
                    </div>
                  </article>
                </div>

                <div className="col-lg-4 col-md-6">
                  <article className="blog-card card border-0 shadow-sm h-100 hover-card">
                    <div className="blog-image-container position-relative overflow-hidden">
                      <img src={books1} alt="Plant Diseases" className="card-img-top" style={{ height: '250px', objectFit: 'cover' }} />
                      <div className="blog-category position-absolute top-0 start-0 m-3">
                        <span className="badge bg-danger rounded-pill">Plant Care</span>
                      </div>
                    </div>
                    <div className="card-body p-4">
                      <h5 className="card-title fw-bold mb-3">
                        <a href="#" className="text-decoration-none text-dark">Common Plant Diseases & Natural Solutions</a>
                      </h5>
                      <p className="card-text text-muted mb-3">
                        Identify and treat plant diseases using natural, eco-friendly methods that keep your garden healthy.
                      </p>
                      <div className="d-flex align-items-center justify-content-between">
                        <div className="d-flex align-items-center">
                          <div className="author-avatar bg-success bg-opacity-10 rounded-circle d-flex align-items-center justify-content-center me-2" style={{ width: '35px', height: '35px' }}>
                            <span className="fw-bold text-success small">TC</span>
                          </div>
                          <small className="text-muted">Tom Chen • 7 min read</small>
                        </div>
                        <small className="text-muted">2 weeks ago</small>
                      </div>
                    </div>
                  </article>
                </div>

                {/* Third Row - 3 Cards */}
                <div className="col-lg-4 col-md-6">
                  <article className="blog-card card border-0 shadow-sm h-100 hover-card">
                    <div className="blog-image-container position-relative overflow-hidden">
                      <img src={seeds2} alt="Indoor Herb Garden" className="card-img-top" style={{ height: '250px', objectFit: 'cover' }} />
                      <div className="blog-category position-absolute top-0 start-0 m-3">
                        <span className="badge bg-success rounded-pill">Indoor Growing</span>
                      </div>
                    </div>
                    <div className="card-body p-4">
                      <h5 className="card-title fw-bold mb-3">
                        <a href="#" className="text-decoration-none text-dark">Year-Round Indoor Herb Garden Setup</a>
                      </h5>
                      <p className="card-text text-muted mb-3">
                        Create a thriving indoor herb garden that provides fresh ingredients all year round, regardless of weather.
                      </p>
                      <div className="d-flex align-items-center justify-content-between">
                        <div className="d-flex align-items-center">
                          <div className="author-avatar bg-success bg-opacity-10 rounded-circle d-flex align-items-center justify-content-center me-2" style={{ width: '35px', height: '35px' }}>
                            <span className="fw-bold text-success small">LM</span>
                          </div>
                          <small className="text-muted">Lisa Martin • 5 min read</small>
                        </div>
                        <small className="text-muted">3 weeks ago</small>
                      </div>
                    </div>
                  </article>
                </div>

                <div className="col-lg-4 col-md-6">
                  <article className="blog-card card border-0 shadow-sm h-100 hover-card">
                    <div className="blog-image-container position-relative overflow-hidden">
                      <img src={tools2} alt="Garden Tools" className="card-img-top" style={{ height: '250px', objectFit: 'cover' }} />
                      <div className="blog-category position-absolute top-0 start-0 m-3">
                        <span className="badge bg-info rounded-pill">Tools & Equipment</span>
                      </div>
                    </div>
                    <div className="card-body p-4">
                      <h5 className="card-title fw-bold mb-3">
                        <a href="#" className="text-decoration-none text-dark">Essential Tools for Urban Gardening</a>
                      </h5>
                      <p className="card-text text-muted mb-3">
                        Discover the must-have tools and equipment that make urban gardening easier and more productive.
                      </p>
                      <div className="d-flex align-items-center justify-content-between">
                        <div className="d-flex align-items-center">
                          <div className="author-avatar bg-success bg-opacity-10 rounded-circle d-flex align-items-center justify-content-center me-2" style={{ width: '35px', height: '35px' }}>
                            <span className="fw-bold text-success small">BW</span>
                          </div>
                          <small className="text-muted">Ben Wilson • 6 min read</small>
                        </div>
                        <small className="text-muted">4 weeks ago</small>
                      </div>
                    </div>
                  </article>
                </div>

                <div className="col-lg-4 col-md-6">
                  <article className="blog-card card border-0 shadow-sm h-100 hover-card">
                    <div className="blog-image-container position-relative overflow-hidden">
                      <img src={soil2} alt="Soil Preparation" className="card-img-top" style={{ height: '250px', objectFit: 'cover' }} />
                      <div className="blog-category position-absolute top-0 start-0 m-3">
                        <span className="badge bg-warning rounded-pill">Soil Science</span>
                      </div>
                    </div>
                    <div className="card-body p-4">
                      <h5 className="card-title fw-bold mb-3">
                        <a href="#" className="text-decoration-none text-dark">Soil Preparation for Container Gardens</a>
                      </h5>
                      <p className="card-text text-muted mb-3">
                        Master the art of creating perfect soil mixes for container gardening to maximize plant health and yield.
                      </p>
                      <div className="d-flex align-items-center justify-content-between">
                        <div className="d-flex align-items-center">
                          <div className="author-avatar bg-success bg-opacity-10 rounded-circle d-flex align-items-center justify-content-center me-2" style={{ width: '35px', height: '35px' }}>
                            <span className="fw-bold text-success small">SF</span>
                          </div>
                          <small className="text-muted">Sara Foster • 9 min read</small>
                        </div>
                        <small className="text-muted">1 month ago</small>
                      </div>
                    </div>
                  </article>
                </div>
              </>
            )}
          </div>

          {/* Show More/Show Less Button */}
          <div className="text-center mt-5">
            <button
              className="btn btn-success btn-lg rounded-pill px-5 blog-expand-button"
              onClick={toggleBlogs}
            >
              {showAllBlogs ? (
                <>
                  <i className="fas fa-chevron-up me-2"></i>
                  Show Less
                </>
              ) : (
                <>
                  <i className="fas fa-chevron-down me-2"></i>
                  Show More Articles
                </>
              )}
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-6 bg-success text-white mt-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8">
              <h2 className="display-4 fw-bold mb-4">Ready to Start Growing?</h2>
              <p className="lead mb-4 mb-lg-0">
                Join thousands of urban gardeners who are building sustainable communities, one swap at a time.
                Your garden journey starts here!
              </p>
            </div>
            <div className="col-lg-4 text-lg-end">
              <div className="d-flex gap-3 justify-content-lg-end flex-wrap">
                <button className="btn btn-light btn-lg rounded-pill px-5 fw-medium">
                  Get Started Free
                </button>
                <button className="btn btn-outline-light btn-lg rounded-pill px-5 fw-medium">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark text-white py-5">
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-4 col-md-12 text-center text-lg-start">
              <div className="d-flex align-items-center justify-content-center justify-content-lg-start mb-4">
                <span className="h4 fw-bold mb-0">Grow & Swap</span>
              </div>
              <p className="text-light mb-4">
                Connecting urban gardeners to build sustainable communities through fresh produce sharing and knowledge exchange.
              </p>
              <div className="social-links d-flex gap-3 justify-content-center justify-content-lg-start">
                <a href="#" className="text-light fs-4"><i className="fab fa-facebook"></i></a>
                <a href="#" className="text-light fs-4"><i className="fab fa-twitter"></i></a>
                <a href="#" className="text-light fs-4"><i className="fab fa-instagram"></i></a>
                <a href="#" className="text-light fs-4"><i className="fab fa-linkedin"></i></a>
              </div>
            </div>

            <div className="col-lg-2 col-md-6 col-sm-6">
              <h6 className="fw-bold mb-4">Platform</h6>
              <ul className="list-unstyled">
                <li className="mb-2"><a href="#" className="text-light text-decoration-none">Features</a></li>
                <li className="mb-2"><a href="#" className="text-light text-decoration-none">How it Works</a></li>
                <li className="mb-2"><a href="#" className="text-light text-decoration-none">Community</a></li>
                <li className="mb-2"><a href="#" className="text-light text-decoration-none">Pricing</a></li>
              </ul>
            </div>

            <div className="col-lg-2 col-md-6 col-sm-6">
              <h6 className="fw-bold mb-4">Resources</h6>
              <ul className="list-unstyled">
                <li className="mb-2"><a href="#" className="text-light text-decoration-none">Blog</a></li>
                <li className="mb-2"><a href="#" className="text-light text-decoration-none">Guides</a></li>
                <li className="mb-2"><a href="#" className="text-light text-decoration-none">Events</a></li>
                <li className="mb-2"><a href="#" className="text-light text-decoration-none">Help Center</a></li>
              </ul>
            </div>

            <div className="col-lg-2 col-md-6 col-sm-6">
              <h6 className="fw-bold mb-4">Company</h6>
              <ul className="list-unstyled">
                <li className="mb-2"><a href="#" className="text-light text-decoration-none">About Us</a></li>
                <li className="mb-2"><a href="#" className="text-light text-decoration-none">Careers</a></li>
                <li className="mb-2"><a href="#" className="text-light text-decoration-none">Contact</a></li>
                <li className="mb-2"><a href="#" className="text-light text-decoration-none">Press</a></li>
              </ul>
            </div>

            <div className="col-lg-2 col-md-6 col-sm-6">
              <h6 className="fw-bold mb-4">Legal</h6>
              <ul className="list-unstyled">
                <li className="mb-2"><a href="#" className="text-light text-decoration-none">Privacy Policy</a></li>
                <li className="mb-2"><a href="#" className="text-light text-decoration-none">Terms of Service</a></li>
                <li className="mb-2"><a href="#" className="text-light text-decoration-none">Cookie Policy</a></li>
                <li className="mb-2"><a href="#" className="text-light text-decoration-none">GDPR</a></li>
              </ul>
            </div>
          </div>

          <hr className="my-4 border-secondary" />

          <div className="row align-items-center text-center text-md-start">
            <div className="col-md-6 mb-3 mb-md-0">
              <p className="mb-0 text-light">
                © 2025 Grow & Swap. All rights reserved.
              </p>
            </div>
            <div className="col-md-6 text-md-end">
              <p className="mb-0 text-light">
                Made with 💚 for sustainable communities
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
