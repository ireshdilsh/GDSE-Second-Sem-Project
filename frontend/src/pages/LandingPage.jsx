import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const LandingPage = () => {
    const [showModal, setShowModal] = useState(false);
    const [isSignUp, setIsSignUp] = useState(false);

    const customStyles = `
    .hero-gradient {
      background: linear-gradient(135deg, #2d5016 0%, #4a7c59 50%, #6ea574 100%);
    }
    .card-hover {
      transition: all 0.3s ease;
    }
    .card-hover:hover {
      transform: translateY(-5px);
      box-shadow: 0 15px 35px rgba(0,0,0,0.1);
    }
    .text-gradient {
      background: linear-gradient(135deg, #2d5016, #4a7c59);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }
    .btn-modern {
      border-radius: 50px;
      padding: 12px 30px;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 1px;
      transition: all 0.3s ease;
    }
    .btn-modern:hover {
      transform: translateY(-2px);
      box-shadow: 0 10px 25px rgba(0,0,0,0.15);
    }
    .section-padding {
      padding: 100px 0;
    }
    .navbar-modern {
      background: rgba(255, 255, 255, 0.95) !important;
      backdrop-filter: blur(10px);
      border-bottom: 1px solid rgba(0,0,0,0.05);
    }
    .testimonial-card {
      background: linear-gradient(145deg, #ffffff 0%, #f8f9fa 100%);
      border: none;
      box-shadow: 0 10px 40px rgba(0,0,0,0.08);
    }
    .auth-modal {
      backdrop-filter: blur(10px);
    }
    .auth-modal .modal-content {
      border: none;
      border-radius: 20px;
      box-shadow: 0 20px 60px rgba(0,0,0,0.1);
    }
    .auth-modal .form-control {
      border-radius: 12px;
      border: 2px solid #e9ecef;
      padding: 12px 16px;
      transition: all 0.3s ease;
    }
    .auth-modal .form-control:focus {
      border-color: #4a7c59;
      box-shadow: 0 0 0 0.2rem rgba(74, 124, 89, 0.25);
    }
    .btn-google {
      border-radius: 50px !important;
      padding: 12px 20px;
      font-weight: 500;
      transition: all 0.3s ease;
    }
    .btn-google:hover {
      transform: translateY(-1px);
      box-shadow: 0 4px 15px rgba(0,0,0,0.1);
    }
      border: 2px solid #e9ecef;
      padding: 12px 16px;
      font-size: 14px;
      transition: all 0.3s ease;
    }
    .auth-modal .form-control:focus {
      border-color: #4a7c59;
      box-shadow: 0 0 0 0.2rem rgba(74, 124, 89, 0.25);
    }
    .auth-tab {
      background: none;
      border: none;
      padding: 10px 20px;
      font-weight: 600;
      color: #6c757d;
      border-bottom: 3px solid transparent;
      transition: all 0.3s ease;
    }
    .auth-tab.active {
      color: #2d5016;
      border-bottom-color: #4a7c59;
    }
  `;

    return (
        <div className="landing-page">
            <style>{customStyles}</style>

            {/* Navigation */}
            <nav className="navbar navbar-expand-lg navbar-light fixed-top navbar-modern">
                <div className="container">
                    <a className="navbar-brand fw-bold" href="#" style={{ fontSize: '1.8rem' }}>
                        <span className="text-gradient">
                            <i className="fas fa-leaf me-2"></i>
                            Grow & Swap
                        </span>
                    </a>
                    <button className="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto align-items-center">
                            <li className="nav-item">
                                <a className="nav-link fw-500 mx-2" href="#hero" style={{ color: '#2d5016' }}>Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link fw-500 mx-2" href="#features" style={{ color: '#2d5016' }}>Features</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link fw-500 mx-2" href="#how-it-works" style={{ color: '#2d5016' }}>How It Works</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link fw-500 mx-2" href="#community" style={{ color: '#2d5016' }}>Community</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link fw-500 mx-2" href="#testimonials" style={{ color: '#2d5016' }}>Testimonials</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link fw-500 mx-2" href="#contact" style={{ color: '#2d5016' }}>Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            {/* Section 1: Hero Section */}
            <section id="hero" className="hero-gradient text-white section-padding" style={{ marginTop: '76px', minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="mb-4">
                                <span className="badge bg-white text-dark px-3 py-2 rounded-pill fw-bold mb-3" style={{ fontSize: '0.9rem' }}>
                                    🌱 #1 Urban Gardening Platform
                                </span>
                            </div>
                            <h1 className="display-3 fw-bold mb-4 lh-1">
                                Grow Together,<br />
                                <span style={{ color: '#a8d5ba' }}>Swap Smart</span>
                            </h1>
                            <p className="lead mb-5 opacity-90" style={{ fontSize: '1.3rem', lineHeight: '1.6' }}>
                                Transform your urban space into a thriving garden. Connect with neighbors,
                                exchange fresh produce, and build sustainable communities.
                            </p>
                            <div className="d-flex gap-4 mb-5 flex-wrap">
                                <button className="btn btn-light btn-lg btn-modern text-dark" onClick={() => setShowModal(true)}>
                                    <i className="fas fa-rocket me-2"></i>
                                    Start Your Journey
                                </button>
                                <button className="btn btn-outline-light btn-lg btn-modern">
                                    <i className="fas fa-play me-2"></i>
                                    Watch Demo
                                </button>
                            </div>
                            <div className="row text-center mt-5">
                                <div className="col-4">
                                    <h3 className="fw-bold mb-1">15K+</h3>
                                    <p className="mb-0 opacity-80">Active Members</p>
                                </div>
                                <div className="col-4">
                                    <h3 className="fw-bold mb-1">75K+</h3>
                                    <p className="mb-0 opacity-80">Successful Swaps</p>
                                </div>
                                <div className="col-4">
                                    <h3 className="fw-bold mb-1">150+</h3>
                                    <p className="mb-0 opacity-80">Cities Worldwide</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="position-relative">
                                <img
                                    src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=700&h=500&fit=crop&crop=center"
                                    alt="Urban Garden"
                                    className="img-fluid rounded-4 shadow-lg"
                                    style={{ transform: 'rotate(2deg)' }}
                                />
                                <div className="position-absolute top-0 end-0 bg-white rounded-4 p-4 shadow-lg me-4 mt-4" style={{ transform: 'rotate(-5deg)' }}>
                                    <div className="d-flex align-items-center">
                                        <div className="bg-success rounded-circle p-2 me-3">
                                            <i className="fas fa-leaf text-white"></i>
                                        </div>
                                        <div>
                                            <h6 className="mb-0 fw-bold text-dark">Fresh Today</h6>
                                            <small className="text-muted">3 new swaps nearby</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 2: Key Features */}
            <section id="features" className="section-padding" style={{ background: '#f8fffe' }}>
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center mb-5">
                            <span className="badge bg-light text-dark px-3 py-2 rounded-pill fw-bold mb-3" style={{ fontSize: '0.9rem', color: '#2d5016 !important' }}>
                                ✨ Platform Features
                            </span>
                            <h2 className="display-4 fw-bold mb-4">
                                <span className="text-gradient">Everything You Need</span><br />
                                to Grow & Share
                            </h2>
                            <p className="lead text-muted mx-auto" style={{ maxWidth: '600px' }}>
                                Our comprehensive platform provides all the tools you need for successful
                                urban gardening and vibrant community building.
                            </p>
                        </div>
                    </div>
                    <div className="row g-4">
                        <div className="col-md-6 col-lg-4">
                            <div className="card h-100 border-0 shadow-lg card-hover" style={{ background: 'linear-gradient(145deg, #ffffff 0%, #f8f9fa 100%)' }}>
                                <div className="card-body text-center p-5">
                                    <div className="position-relative mb-4">
                                        <div className="bg-gradient rounded-4 d-inline-flex align-items-center justify-content-center"
                                            style={{ width: '90px', height: '90px', background: 'linear-gradient(135deg, #2d5016, #4a7c59)' }}>
                                            <i className="fas fa-user-circle fa-2x" style={{color: '#a8d5ba'}}></i>
                                        </div>
                                    </div>
                                    <h5 className="fw-bold mb-3" style={{ color: '#2d5016' }}>Smart Profiles</h5>
                                    <p className="text-muted mb-0" style={{ lineHeight: '1.6' }}>
                                        Create detailed profiles with your location, garden details, and growing
                                        preferences to connect with the right community members.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4">
                            <div className="card h-100 border-0 shadow-lg card-hover" style={{ background: 'linear-gradient(145deg, #ffffff 0%, #f8f9fa 100%)' }}>
                                <div className="card-body text-center p-5">
                                    <div className="position-relative mb-4">
                                        <div className="bg-gradient rounded-4 d-inline-flex align-items-center justify-content-center"
                                            style={{ width: '90px', height: '90px', background: 'linear-gradient(135deg, #2d5016, #4a7c59)' }}>
                                            <i className="fas fa-seedling fa-2x" style={{color: '#a8d5ba'}}></i>
                                        </div>
                                    </div>
                                    <h5 className="fw-bold mb-3" style={{ color: '#2d5016' }}>Crop Management</h5>
                                    <p className="text-muted mb-0" style={{ lineHeight: '1.6' }}>
                                        Easily track your garden inventory with photos, manage availability,
                                        and showcase your homegrown produce to the community.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4">
                            <div className="card h-100 border-0 shadow-lg card-hover" style={{ background: 'linear-gradient(145deg, #ffffff 0%, #f8f9fa 100%)' }}>
                                <div className="card-body text-center p-5">
                                    <div className="position-relative mb-4">
                                        <div className="bg-gradient rounded-4 d-inline-flex align-items-center justify-content-center"
                                            style={{ width: '90px', height: '90px', background: 'linear-gradient(135deg, #2d5016, #4a7c59)' }}>
                                            <i className="fas fa-map-marked-alt fa-2x" style={{color: '#a8d5ba'}}></i>
                                        </div>
                                    </div>
                                    <h5 className="fw-bold mb-3" style={{ color: '#2d5016' }}>Location-Based Search</h5>
                                    <p className="text-muted mb-0" style={{ lineHeight: '1.6' }}>
                                        Find nearby gardeners and available produce using our interactive
                                        maps and radius-based search functionality.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4">
                            <div className="card h-100 border-0 shadow-lg card-hover" style={{ background: 'linear-gradient(145deg, #ffffff 0%, #f8f9fa 100%)' }}>
                                <div className="card-body text-center p-5">
                                    <div className="position-relative mb-4">
                                        <div className="bg-gradient rounded-4 d-inline-flex align-items-center justify-content-center"
                                            style={{ width: '90px', height: '90px', background: 'linear-gradient(135deg, #2d5016, #4a7c59)' }}>
                                            <i className="fas fa-exchange-alt fa-2x" style={{color: '#a8d5ba'}}></i>
                                        </div>
                                    </div>
                                    <h5 className="fw-bold mb-3" style={{ color: '#2d5016' }}>Smart Swapping</h5>
                                    <p className="text-muted mb-0" style={{ lineHeight: '1.6' }}>
                                        Make swap requests and offers with built-in messaging system
                                        to coordinate exchanges seamlessly.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4">
                            <div className="card h-100 border-0 shadow-lg card-hover" style={{ background: 'linear-gradient(145deg, #ffffff 0%, #f8f9fa 100%)' }}>
                                <div className="card-body text-center p-5">
                                    <div className="position-relative mb-4">
                                        <div className="bg-gradient rounded-4 d-inline-flex align-items-center justify-content-center"
                                            style={{ width: '90px', height: '90px', background: 'linear-gradient(135deg, #2d5016, #4a7c59)' }}>
                                            <i className="fas fa-trophy fa-2x" style={{color: '#a8d5ba'}}></i>
                                        </div>
                                    </div>
                                    <h5 className="fw-bold mb-3" style={{ color: '#2d5016' }}>Rewards System</h5>
                                    <p className="text-muted mb-0" style={{ lineHeight: '1.6' }}>
                                        Earn points and badges for active participation, successful swaps,
                                        and helping build the community.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4">
                            <div className="card h-100 border-0 shadow-lg card-hover" style={{ background: 'linear-gradient(145deg, #ffffff 0%, #f8f9fa 100%)' }}>
                                <div className="card-body text-center p-5">
                                    <div className="position-relative mb-4">
                                        <div className="bg-gradient rounded-4 d-inline-flex align-items-center justify-content-center"
                                            style={{ width: '90px', height: '90px', background: 'linear-gradient(135deg, #2d5016, #4a7c59)' }}>
                                            <i className="fas fa-blog fa-2x" style={{color: '#a8d5ba'}}></i>
                                        </div>
                                    </div>
                                    <h5 className="fw-bold mb-3" style={{ color: '#2d5016' }}>Knowledge Hub</h5>
                                    <p className="text-muted mb-0" style={{ lineHeight: '1.6' }}>
                                        Access gardening guides, recipes, seasonal tips, and community
                                        events to enhance your urban gardening journey.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 3: How It Works */}
            <section id="how-it-works" className="section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center mb-5">
                            <span className="badge bg-light text-dark px-3 py-2 rounded-pill fw-bold mb-3" style={{ fontSize: '0.9rem', color: '#2d5016 !important' }}>
                                🚀 Getting Started
                            </span>
                            <h2 className="display-4 fw-bold mb-4">
                                <span className="text-gradient">How Grow & Swap</span><br />
                                Works for You
                            </h2>
                            <p className="lead text-muted mx-auto" style={{ maxWidth: '600px' }}>
                                Join thousands of urban gardeners in just three simple steps and
                                start building your sustainable community today.
                            </p>
                        </div>
                    </div>
                    <div className="row g-5 align-items-center">
                        <div className="col-lg-4">
                            <div className="text-center position-relative">
                                <div className="position-relative d-inline-block">
                                    <div className="rounded-circle d-inline-flex align-items-center justify-content-center text-white fw-bold mb-4 shadow-lg"
                                        style={{ width: '120px', height: '120px', fontSize: '2.5rem', background: 'linear-gradient(135deg, #2d5016, #4a7c59)' }}>
                                        1
                                    </div>
                                    <div className="position-absolute top-0 end-0 bg-warning rounded-circle p-2 shadow-sm">
                                        <i className="fas fa-user-plus text-white" style={{ fontSize: '1.2rem' }}></i>
                                    </div>
                                </div>
                                <h4 className="fw-bold mb-3 mt-4" style={{ color: '#2d5016' }}>Create Your Profile</h4>
                                <p className="text-muted mb-4" style={{ lineHeight: '1.6' }}>
                                    Sign up and create your personalized gardener profile. Add your location,
                                    garden space details, and showcase what you love to grow.
                                </p>
                                <div className="position-relative">
                                    <img
                                        src="https://images.pexels.com/photos/5699456/pexels-photo-5699456.jpeg?auto=compress&cs=tinysrgb&w=350&h=250"
                                        alt="Create Profile"
                                        className="img-fluid rounded-4 shadow-lg"
                                    />
                                    <div className="position-absolute bottom-0 start-0 bg-white rounded-3 p-3 shadow-lg ms-3 mb-3">
                                        <div className="d-flex align-items-center">
                                            <i className="fas fa-check-circle text-success me-2"></i>
                                            <small className="fw-bold">Profile Complete!</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="text-center position-relative">
                                <div className="position-relative d-inline-block">
                                    <div className="rounded-circle d-inline-flex align-items-center justify-content-center text-white fw-bold mb-4 shadow-lg"
                                        style={{ width: '120px', height: '120px', fontSize: '2.5rem', background: 'linear-gradient(135deg, #2d5016, #4a7c59)' }}>
                                        2
                                    </div>
                                    <div className="position-absolute top-0 end-0 bg-info rounded-circle p-2 shadow-sm">
                                        <i className="fas fa-seedling text-white" style={{ fontSize: '1.2rem' }}></i>
                                    </div>
                                </div>
                                <h4 className="fw-bold mb-3 mt-4" style={{ color: '#2d5016' }}>List Your Produce</h4>
                                <p className="text-muted mb-4" style={{ lineHeight: '1.6' }}>
                                    Add your homegrown fruits, vegetables, and herbs to your inventory.
                                    Include beautiful photos and availability dates.
                                </p>
                                <div className="position-relative">
                                    <img
                                        src="https://images.pexels.com/photos/1300972/pexels-photo-1300972.jpeg?auto=compress&cs=tinysrgb&w=350&h=250"
                                        alt="List Produce"
                                        className="img-fluid rounded-4 shadow-lg"
                                    />
                                    <div className="position-absolute top-0 end-0 bg-white rounded-3 p-3 shadow-lg me-3 mt-3">
                                        <div className="d-flex align-items-center">
                                            <i className="fas fa-camera text-info me-2"></i>
                                            <small className="fw-bold">5 Items Added</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="text-center position-relative">
                                <div className="position-relative d-inline-block">
                                    <div className="rounded-circle d-inline-flex align-items-center justify-content-center text-white fw-bold mb-4 shadow-lg"
                                        style={{ width: '120px', height: '120px', fontSize: '2.5rem', background: 'linear-gradient(135deg, #2d5016, #4a7c59)' }}>
                                        3
                                    </div>
                                    <div className="position-absolute top-0 end-0 bg-success rounded-circle p-2 shadow-sm">
                                        <i className="fas fa-exchange-alt text-white" style={{ fontSize: '1.2rem' }}></i>
                                    </div>
                                </div>
                                <h4 className="fw-bold mb-3 mt-4" style={{ color: '#2d5016' }}>Start Swapping</h4>
                                <p className="text-muted mb-4" style={{ lineHeight: '1.6' }}>
                                    Browse nearby gardens, make swap requests, and coordinate exchanges.
                                    Build lasting community connections!
                                </p>
                                <div className="position-relative">
                                    <img
                                        src="https://images.pexels.com/photos/1327838/pexels-photo-1327838.jpeg?auto=compress&cs=tinysrgb&w=350&h=250"
                                        alt="Start Swapping"
                                        className="img-fluid rounded-4 shadow-lg"
                                    />
                                    <div className="position-absolute bottom-0 start-0 bg-white rounded-3 p-3 shadow-lg ms-3 mb-3">
                                        <div className="d-flex align-items-center">
                                            <i className="fas fa-heart text-danger me-2"></i>
                                            <small className="fw-bold">First Swap Done!</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col-12 text-center">
                            <button className="btn btn-lg btn-modern" style={{ background: 'linear-gradient(135deg, #2d5016, #4a7c59)', border: 'none', color: 'white' }} onClick={() => setShowModal(true)}>
                                <i className="fas fa-rocket me-2"></i>
                                Get Started Today - It's Free!
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 4: Community Impact */}
            <section id="community" className="section-padding hero-gradient text-white">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 mb-5 mb-lg-0">
                            <span className="badge bg-white text-dark px-3 py-2 rounded-pill fw-bold mb-3" style={{ fontSize: '0.9rem' }}>
                                🌍 Impact & Community
                            </span>
                            <h2 className="display-4 fw-bold mb-4 lh-1">
                                Building Sustainable<br />
                                <span style={{ color: '#a8d5ba' }}>Communities</span>
                            </h2>
                            <p className="lead mb-5 opacity-90" style={{ fontSize: '1.2rem', lineHeight: '1.6' }}>
                                Grow & Swap is more than just a trading platform - we're building a movement
                                towards sustainable urban living and stronger neighborhood connections.
                            </p>
                            <div className="row g-4">
                                <div className="col-md-6">
                                    <div className="d-flex align-items-start">
                                        <div className="bg-white bg-opacity-30 rounded-3 p-3 me-3">
                                            <i className="fas fa-leaf fa-2x" style={{color: '#2d5016'}}></i>
                                        </div>
                                        <div>
                                            <h5 className="fw-bold mb-2">Reduce Food Waste</h5>
                                            <p className="opacity-90 mb-0" style={{ fontSize: '0.95rem' }}>
                                                Share surplus instead of throwing away
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="d-flex align-items-start">
                                        <div className="bg-white bg-opacity-30 rounded-3 p-3 me-3">
                                            <i className="fas fa-hands-helping fa-2x" style={{color: '#2d5016'}}></i>
                                        </div>
                                        <div>
                                            <h5 className="fw-bold mb-2">Build Connections</h5>
                                            <p className="opacity-90 mb-0" style={{ fontSize: '0.95rem' }}>
                                                Meet like-minded neighbors
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="d-flex align-items-start">
                                        <div className="bg-white bg-opacity-30 rounded-3 p-3 me-3">
                                            <i className="fas fa-recycle fa-2x" style={{color: '#2d5016'}}></i>
                                        </div>
                                        <div>
                                            <h5 className="fw-bold mb-2">Promote Sustainability</h5>
                                            <p className="opacity-90 mb-0" style={{ fontSize: '0.95rem' }}>
                                                Reduce carbon footprint locally
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="d-flex align-items-start">
                                        <div className="bg-white bg-opacity-30 rounded-3 p-3 me-3">
                                            <i className="fas fa-graduation-cap fa-2x" style={{color: '#2d5016'}}></i>
                                        </div>
                                        <div>
                                            <h5 className="fw-bold mb-2">Learn Together</h5>
                                            <p className="opacity-90 mb-0" style={{ fontSize: '0.95rem' }}>
                                                Share knowledge and techniques
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="position-relative">
                                <img
                                    src="https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=600&h=400&fit=crop"
                                    alt="Community Garden"
                                    className="img-fluid rounded-4 shadow-lg"
                                />
                                <div className="position-absolute bottom-0 end-0 bg-white rounded-4 p-4 shadow-lg me-4 mb-4">
                                    <div className="text-center">
                                        <h4 className="fw-bold mb-2 text-dark">2,500 lbs</h4>
                                        <p className="text-muted mb-0" style={{ fontSize: '0.9rem' }}>
                                            Food waste prevented<br />this month
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 5: Testimonials */}
            <section id="testimonials" className="section-padding" style={{ background: '#f8fffe' }}>
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center mb-5">
                            <span className="badge bg-light text-dark px-3 py-2 rounded-pill fw-bold mb-3" style={{ fontSize: '0.9rem', color: '#2d5016 !important' }}>
                                ⭐ Success Stories
                            </span>
                            <h2 className="display-4 fw-bold mb-4">
                                What Our <span className="text-gradient">Community</span><br />
                                Says About Us
                            </h2>
                            <p className="lead text-muted mx-auto" style={{ maxWidth: '600px' }}>
                                Join thousands of satisfied urban gardeners who've transformed their neighborhoods
                                and built lasting connections through sustainable sharing.
                            </p>
                        </div>
                    </div>
                    <div className="row g-4">
                        <div className="col-md-6 col-lg-4">
                            <div className="testimonial-card card h-100 card-hover">
                                <div className="card-body p-5">
                                    <div className="mb-4">
                                        <div className="d-flex mb-3">
                                            <i className="fas fa-star text-warning me-1"></i>
                                            <i className="fas fa-star text-warning me-1"></i>
                                            <i className="fas fa-star text-warning me-1"></i>
                                            <i className="fas fa-star text-warning me-1"></i>
                                            <i className="fas fa-star text-warning"></i>
                                        </div>
                                    </div>
                                    <p className="mb-4 fst-italic" style={{ lineHeight: '1.7', fontSize: '1.1rem' }}>
                                        "I've swapped my excess tomatoes for fresh herbs and made amazing friends in my neighborhood.
                                        This platform has completely changed how I think about urban gardening!"
                                    </p>
                                    <div className="d-flex align-items-center">
                                        <img
                                            src="https://randomuser.me/api/portraits/women/44.jpg"
                                            alt="Sarah Martinez"
                                            className="rounded-circle me-3 shadow-sm"
                                            style={{ width: '60px', height: '60px' }}
                                        />
                                        <div>
                                            <h6 className="fw-bold mb-1" style={{ color: '#2d5016' }}>Sarah Martinez</h6>
                                            <small className="text-muted">Urban Gardener • Brooklyn, NY</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4">
                            <div className="testimonial-card card h-100 card-hover">
                                <div className="card-body p-5">
                                    <div className="mb-4">
                                        <div className="d-flex mb-3">
                                            <i className="fas fa-star text-warning me-1"></i>
                                            <i className="fas fa-star text-warning me-1"></i>
                                            <i className="fas fa-star text-warning me-1"></i>
                                            <i className="fas fa-star text-warning me-1"></i>
                                            <i className="fas fa-star text-warning"></i>
                                        </div>
                                    </div>
                                    <p className="mb-4 fst-italic" style={{ lineHeight: '1.7', fontSize: '1.1rem' }}>
                                        "The knowledge sharing aspect is incredible. I've learned so much from experienced gardeners
                                        and my small balcony garden is now more productive than ever!"
                                    </p>
                                    <div className="d-flex align-items-center">
                                        <img
                                            src="https://randomuser.me/api/portraits/men/32.jpg"
                                            alt="Mike Chen"
                                            className="rounded-circle me-3 shadow-sm"
                                            style={{ width: '60px', height: '60px' }}
                                        />
                                        <div>
                                            <h6 className="fw-bold mb-1" style={{ color: '#2d5016' }}>Mike Chen</h6>
                                            <small className="text-muted">Balcony Gardener • San Francisco, CA</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4">
                            <div className="testimonial-card card h-100 card-hover">
                                <div className="card-body p-5">
                                    <div className="mb-4">
                                        <div className="d-flex mb-3">
                                            <i className="fas fa-star text-warning me-1"></i>
                                            <i className="fas fa-star text-warning me-1"></i>
                                            <i className="fas fa-star text-warning me-1"></i>
                                            <i className="fas fa-star text-warning me-1"></i>
                                            <i className="fas fa-star text-warning"></i>
                                        </div>
                                    </div>
                                    <p className="mb-4 fst-italic" style={{ lineHeight: '1.7', fontSize: '1.1rem' }}>
                                        "As a beginner, the community support has been amazing. I've reduced my food waste
                                        by 80% and my kids love participating in local garden swaps!"
                                    </p>
                                    <div className="d-flex align-items-center">
                                        <img
                                            src="https://randomuser.me/api/portraits/women/68.jpg"
                                            alt="Emily Rodriguez"
                                            className="rounded-circle me-3 shadow-sm"
                                            style={{ width: '60px', height: '60px' }}
                                        />
                                        <div>
                                            <h6 className="fw-bold mb-1" style={{ color: '#2d5016' }}>Emily Rodriguez</h6>
                                            <small className="text-muted">Community Organizer • Austin, TX</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 6: Contact/CTA */}
            <section id="contact" className="section-padding" style={{ background: 'linear-gradient(135deg, #1a3d0a 0%, #2d5016 50%, #4a7c59 100%)' }}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-7 mb-5 mb-lg-0">
                            <span className="badge bg-white text-dark px-3 py-2 rounded-pill fw-bold mb-3" style={{ fontSize: '0.9rem' }}>
                                🚀 Join the Movement
                            </span>
                            <h2 className="display-4 fw-bold mb-4 text-white lh-1">
                                Ready to Transform<br />
                                Your <span style={{ color: '#a8d5ba' }}>Urban Space?</span>
                            </h2>
                            <p className="lead mb-5 text-white opacity-90" style={{ fontSize: '1.2rem', lineHeight: '1.6' }}>
                                Join thousands of gardeners building sustainable communities one swap at a time.
                                Start your journey today - it's completely free to join!
                            </p>
                            <div className="row text-white mb-4">
                                <div className="col-md-6 mb-4">
                                    <div className="d-flex align-items-center">
                                        <div className="bg-white bg-opacity-30 rounded-3 p-3 me-3">
                                            <i className="fas fa-envelope fa-xl" style={{color: '#2d5016'}}></i>
                                        </div>
                                        <div>
                                            <h6 className="fw-bold mb-1">Email Support</h6>
                                            <p className="mb-0 opacity-90">hello@growandswap.com</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 mb-4">
                                    <div className="d-flex align-items-center">
                                        <div className="bg-white bg-opacity-30 rounded-3 p-3 me-3">
                                            <i className="fas fa-phone fa-xl" style={{color: '#2d5016'}}></i>
                                        </div>
                                        <div>
                                            <h6 className="fw-bold mb-1">Call Us</h6>
                                            <p className="mb-0 opacity-90">+1 (555) 123-GROW</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className="bg-white rounded-4 p-5 shadow-lg">
                                <h4 className="fw-bold mb-4 text-center" style={{ color: '#2d5016' }}>
                                    📧 Contact Us
                                </h4>
                                <form>
                                    <div className="mb-4">
                                        <label className="form-label fw-bold text-muted">Name</label>
                                        <input
                                            type="text"
                                            className="form-control form-control-lg border-0 shadow-sm"
                                            placeholder="Enter your full name"
                                            style={{ backgroundColor: '#f8f9fa', fontSize: '14px', height: '45px' }}
                                        />
                                    </div>
                                    <div className="mb-4">
                                        <label className="form-label fw-bold text-muted">Email Address</label>
                                        <input
                                            type="email"
                                            className="form-control form-control-lg border-0 shadow-sm"
                                            placeholder="Enter your email address"
                                            style={{ backgroundColor: '#f8f9fa', fontSize: '14px', height: '45px' }}
                                        />
                                    </div>
                                    <div className="mb-4">
                                        <label className="form-label fw-bold text-muted">Subject</label>
                                        <input
                                            type="text"
                                            className="form-control form-control-lg border-0 shadow-sm"
                                            placeholder="What's this about?"
                                            style={{ backgroundColor: '#f8f9fa', fontSize: '14px', height: '45px' }}
                                        />
                                    </div>
                                    <div className="mb-4">
                                        <label className="form-label fw-bold text-muted">Message</label>
                                        <textarea
                                            className="form-control border-0 shadow-sm"
                                            rows="5"
                                            placeholder="Tell us more about your inquiry..."
                                            style={{ backgroundColor: '#f8f9fa', fontSize: '14px' }}
                                        ></textarea>
                                    </div>
                                    <button type="submit" className="btn btn-lg w-100 btn-modern text-white mb-3" style={{ background: 'linear-gradient(135deg, #2d5016, #4a7c59)', border: 'none' }}>
                                        <i className="fas fa-paper-plane me-2"></i>
                                        Send Message
                                    </button>
                                </form>
                                <div className="text-center">
                                    <small className="text-muted">
                                        <i className="fas fa-clock me-1"></i>
                                        We'll get back to you within 24 hours
                                    </small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-5" style={{ background: '#1a3d0a' }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 mb-4">
                            <div className="d-flex align-items-center mb-3">
                                <i className="fas fa-leaf fa-2x text-white me-3"></i>
                                <div>
                                    <h5 className="fw-bold mb-0 text-white">Grow & Swap</h5>
                                    <small className="text-white opacity-75">Growing communities, one swap at a time</small>
                                </div>
                            </div>
                            <p className="text-white opacity-75 mb-4">
                                Empowering urban gardeners to build sustainable communities through
                                the power of sharing and collaboration.
                            </p>
                            <div className="d-flex">
                                <a href="#" className="text-white me-4 opacity-75">
                                    <i className="fab fa-facebook-f fa-xl"></i>
                                </a>
                                <a href="#" className="text-white me-4 opacity-75">
                                    <i className="fab fa-twitter fa-xl"></i>
                                </a>
                                <a href="#" className="text-white me-4 opacity-75">
                                    <i className="fab fa-instagram fa-xl"></i>
                                </a>
                                <a href="#" className="text-white opacity-75">
                                    <i className="fab fa-linkedin fa-xl"></i>
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-3 mb-4">
                            <h6 className="fw-bold text-white mb-3">Platform</h6>
                            <ul className="list-unstyled">
                                <li className="mb-2"><a href="#" className="text-white opacity-75 text-decoration-none">How it Works</a></li>
                                <li className="mb-2"><a href="#" className="text-white opacity-75 text-decoration-none">Features</a></li>
                                <li className="mb-2"><a href="#" className="text-white opacity-75 text-decoration-none">Pricing</a></li>
                                <li className="mb-2"><a href="#" className="text-white opacity-75 text-decoration-none">Mobile App</a></li>
                            </ul>
                        </div>
                        <div className="col-lg-2 col-md-3 mb-4">
                            <h6 className="fw-bold text-white mb-3">Community</h6>
                            <ul className="list-unstyled">
                                <li className="mb-2"><a href="#" className="text-white opacity-75 text-decoration-none">Success Stories</a></li>
                                <li className="mb-2"><a href="#" className="text-white opacity-75 text-decoration-none">Events</a></li>
                                <li className="mb-2"><a href="#" className="text-white opacity-75 text-decoration-none">Blog</a></li>
                                <li className="mb-2"><a href="#" className="text-white opacity-75 text-decoration-none">Newsletter</a></li>
                            </ul>
                        </div>
                        <div className="col-lg-2 col-md-3 mb-4">
                            <h6 className="fw-bold text-white mb-3">Support</h6>
                            <ul className="list-unstyled">
                                <li className="mb-2"><a href="#" className="text-white opacity-75 text-decoration-none">Help Center</a></li>
                                <li className="mb-2"><a href="#" className="text-white opacity-75 text-decoration-none">Contact Us</a></li>
                                <li className="mb-2"><a href="#" className="text-white opacity-75 text-decoration-none">Privacy Policy</a></li>
                                <li className="mb-2"><a href="#" className="text-white opacity-75 text-decoration-none">Terms of Service</a></li>
                            </ul>
                        </div>
                        <div className="col-lg-2 col-md-3 mb-4">
                            <h6 className="fw-bold text-white mb-3">Company</h6>
                            <ul className="list-unstyled">
                                <li className="mb-2"><a href="#" className="text-white opacity-75 text-decoration-none">About Us</a></li>
                                <li className="mb-2"><a href="#" className="text-white opacity-75 text-decoration-none">Careers</a></li>
                                <li className="mb-2"><a href="#" className="text-white opacity-75 text-decoration-none">Press</a></li>
                                <li className="mb-2"><a href="#" className="text-white opacity-75 text-decoration-none">Partners</a></li>
                            </ul>
                        </div>
                    </div>
                    <hr className="my-4 opacity-25" />
                    <div className="row align-items-center">
                        <div className="col-md-6">
                            <small className="text-white opacity-75">
                                &copy; 2025 Grow & Swap. All rights reserved. Made with 💚 for urban gardeners worldwide.
                            </small>
                        </div>
                        <div className="col-md-6 text-md-end mt-3 mt-md-0">
                            <small className="text-white opacity-75">
                                Sustainable • Community-Driven • Carbon Neutral
                            </small>
                        </div>
                    </div>
                </div>
            </footer>

            {/* Authentication Modal */}
            {showModal && (
                <div className="modal fade show auth-modal" style={{ display: 'block' }} tabIndex="-1">
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-header border-0 pb-0">
                                <div className="w-100 text-center">
                                    <h4 className="modal-title fw-bold text-gradient mb-0">
                                        <i className="fas fa-leaf me-2"></i>
                                        Grow & Swap
                                    </h4>
                                </div>
                                <button 
                                    type="button" 
                                    className="btn-close" 
                                    onClick={() => setShowModal(false)}
                                ></button>
                            </div>
                            <div className="modal-body px-4 pb-4">
                                {/* Tab Navigation */}
                                <div className="text-center mb-4">
                                    <button 
                                        className={`auth-tab me-4 ${!isSignUp ? 'active' : ''}`}
                                        onClick={() => setIsSignUp(false)}
                                    >
                                        Sign In
                                    </button>
                                    <button 
                                        className={`auth-tab ${isSignUp ? 'active' : ''}`}
                                        onClick={() => setIsSignUp(true)}
                                    >
                                        Sign Up
                                    </button>
                                </div>

                                {/* Sign In Form */}
                                {!isSignUp ? (
                                    <div>
                                        <h5 className="text-center mb-4" style={{ color: '#2d5016' }}>
                                            Welcome Back!
                                        </h5>
                                        <form>
                                            <div className="mb-3">
                                                <label htmlFor="signInEmail" className="form-label fw-600" style={{ color: '#2d5016' }}>
                                                    Email Address
                                                </label>
                                                <input 
                                                    type="email" 
                                                    className="form-control" 
                                                    id="signInEmail" 
                                                    placeholder="Enter your email"
                                                />
                                            </div>
                                            <div className="mb-4">
                                                <label htmlFor="signInPassword" className="form-label fw-600" style={{ color: '#2d5016' }}>
                                                    Password
                                                </label>
                                                <input 
                                                    type="password" 
                                                    className="form-control" 
                                                    id="signInPassword" 
                                                    placeholder="Enter your password"
                                                />
                                            </div>
                                            <div className="d-flex justify-content-between align-items-center mb-4">
                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" id="rememberMe" />
                                                    <label className="form-check-label text-muted" htmlFor="rememberMe">
                                                        Remember me
                                                    </label>
                                                </div>
                                                <a href="#" className="text-decoration-none" style={{ color: '#4a7c59' }}>
                                                    Forgot Password?
                                                </a>
                                            </div>
                                            <button type="submit" className="btn btn-success w-100 btn-modern mb-3" style={{ backgroundColor: '#2d5016', borderColor: '#2d5016' }}>
                                                <i className="fas fa-sign-in-alt me-2"></i>
                                                Sign In
                                            </button>
                                        </form>
                                        
                                        <div className="text-center mb-4">
                                            <span className="text-muted">or continue with</span>
                                        </div>
                                        
                                        <div className="d-grid gap-2 mb-4">
                                            <button className="btn btn-outline-dark btn-google">
                                                <i className="fab fa-google me-2"></i>
                                                Continue with Google
                                            </button>
                                        </div>
                                    </div>
                                ) : (
                                    /* Sign Up Form */
                                    <div>
                                        <h5 className="text-center mb-4" style={{ color: '#2d5016' }}>
                                            Join Our Community!
                                        </h5>
                                        <form>
                                            <div className="row">
                                                <div className="col-md-6 mb-3">
                                                    <label htmlFor="firstName" className="form-label fw-600" style={{ color: '#2d5016' }}>
                                                        First Name
                                                    </label>
                                                    <input 
                                                        type="text" 
                                                        className="form-control" 
                                                        id="firstName" 
                                                        placeholder="First name"
                                                    />
                                                </div>
                                                <div className="col-md-6 mb-3">
                                                    <label htmlFor="lastName" className="form-label fw-600" style={{ color: '#2d5016' }}>
                                                        Last Name
                                                    </label>
                                                    <input 
                                                        type="text" 
                                                        className="form-control" 
                                                        id="lastName" 
                                                        placeholder="Last name"
                                                    />
                                                </div>
                                            </div>
                                            <div className="mb-3">
                                                <label htmlFor="signUpEmail" className="form-label fw-600" style={{ color: '#2d5016' }}>
                                                    Email Address
                                                </label>
                                                <input 
                                                    type="email" 
                                                    className="form-control" 
                                                    id="signUpEmail" 
                                                    placeholder="Enter your email"
                                                />
                                            </div>
                                            <div className="mb-3">
                                                <label htmlFor="signUpPassword" className="form-label fw-600" style={{ color: '#2d5016' }}>
                                                    Password
                                                </label>
                                                <input 
                                                    type="password" 
                                                    className="form-control" 
                                                    id="signUpPassword" 
                                                    placeholder="Create a password"
                                                />
                                            </div>
                                            <div className="mb-4">
                                                <label htmlFor="confirmPassword" className="form-label fw-600" style={{ color: '#2d5016' }}>
                                                    Confirm Password
                                                </label>
                                                <input 
                                                    type="password" 
                                                    className="form-control" 
                                                    id="confirmPassword" 
                                                    placeholder="Confirm your password"
                                                />
                                            </div>
                                            <div className="form-check mb-4">
                                                <input className="form-check-input" type="checkbox" id="termsCheck" />
                                                <label className="form-check-label text-muted" htmlFor="termsCheck">
                                                    I agree to the <a href="#" style={{ color: '#4a7c59' }}>Terms of Service</a> and <a href="#" style={{ color: '#4a7c59' }}>Privacy Policy</a>
                                                </label>
                                            </div>
                                            <button type="submit" className="btn btn-success w-100 btn-modern mb-3" style={{ backgroundColor: '#2d5016', borderColor: '#2d5016' }}>
                                                <i className="fas fa-user-plus me-2"></i>
                                                Create Account
                                            </button>
                                        </form>
                                        
                                        <div className="text-center mb-4">
                                            <span className="text-muted">or sign up with</span>
                                        </div>
                                        
                                        <div className="d-grid gap-2 mb-4">
                                            <button className="btn btn-outline-dark btn-google">
                                                <i className="fab fa-google me-2"></i>
                                                Sign up with Google
                                            </button>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Modal Backdrop */}
            {showModal && (
                <div 
                    className="modal-backdrop fade show" 
                    onClick={() => setShowModal(false)}
                ></div>
            )}
        </div>
    );
};

export default LandingPage;
