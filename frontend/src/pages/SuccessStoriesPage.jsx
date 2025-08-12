import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/SuccessStoriesPage.css';

const SuccessStoriesPage = () => {
    const [selectedFilter, setSelectedFilter] = useState('all');

    const successStories = [
        {
            id: 1,
            name: "Emma Rodriguez",
            location: "San Francisco, CA",
            avatar: "👩‍🌾",
            story: "From Plant Novice to Community Leader",
            category: "community",
            achievement: "Built a local plant-sharing network of 500+ members",
            quote: "I never imagined that trading a single pothos cutting would lead to creating the largest plant community in San Francisco. Grow & Swap didn't just help me find plants - it helped me find my passion and purpose.",
            details: "Started with zero plants in her apartment, Emma now manages a community garden and has helped over 2,000 people start their plant journeys.",
            plantsTraded: 150,
            yearsActive: 2,
            featured: true
        },
        {
            id: 2,
            name: "Marcus Chen",
            location: "Austin, TX",
            avatar: "👨‍💼",
            story: "Rare Plant Collector Extraordinaire",
            category: "collecting",
            achievement: "Completed collection of 50+ rare Aroids",
            quote: "The platform connected me with collectors worldwide who shared my passion for rare Aroids. What seemed impossible became achievable through this amazing community.",
            details: "Built one of the most comprehensive Aroid collections in Texas through strategic trades and community connections.",
            plantsTraded: 200,
            yearsActive: 3
        },
        {
            id: 3,
            name: "Sarah & David Kim",
            location: "Seattle, WA",
            avatar: "👫",
            story: "Couple Builds Plant Paradise",
            category: "lifestyle",
            achievement: "Transformed 500 sq ft apartment into urban jungle",
            quote: "Our tiny apartment became a lush paradise thanks to the generous plant parents we met. Every corner tells a story of friendship and growth.",
            details: "This couple turned their small space into an Instagram-famous plant haven with over 200 plants, all acquired through trading.",
            plantsTraded: 120,
            yearsActive: 1.5,
            featured: true
        },
        {
            id: 4,
            name: "Dr. Jennifer Walsh",
            location: "Boston, MA",
            avatar: "👩‍⚕️",
            story: "Plants as Therapy During Medical Residency",
            category: "wellness",
            achievement: "Used plant care as stress relief during residency",
            quote: "During the most stressful period of my medical training, caring for plants and connecting with the community kept me grounded and brought joy to difficult days.",
            details: "Found healing and stress relief through plant care while completing her medical residency at Mass General.",
            plantsTraded: 45,
            yearsActive: 2
        },
        {
            id: 5,
            name: "Miguel Santos",
            location: "Miami, FL",
            avatar: "👨‍🎓",
            story: "Student Creates Dorm Room Oasis",
            category: "education",
            achievement: "Started campus plant-sharing program",
            quote: "Who says college students can't have plants? I proved them wrong and started a movement that spread across three universities.",
            details: "Created the first university plant-sharing program, now adopted by 15+ colleges nationwide.",
            plantsTraded: 80,
            yearsActive: 2
        },
        {
            id: 6,
            name: "Lisa Thompson",
            location: "Portland, OR",
            avatar: "👩‍💻",
            story: "Remote Worker's Green Office",
            category: "workspace",
            achievement: "Created the perfect work-from-home plant setup",
            quote: "Working from home was lonely until I filled my office with plants. Each one has a story, and together they create the most inspiring workspace imaginable.",
            details: "Designed a plant-filled home office that became the backdrop for her successful freelance design business.",
            plantsTraded: 60,
            yearsActive: 1
        },
        {
            id: 7,
            name: "Robert & Anna Martinez",
            location: "Denver, CO",
            avatar: "👴👵",
            story: "Retirement Brings New Growth",
            category: "retirement",
            achievement: "Started plant nursery business at 65",
            quote: "Retirement gave us time to nurture our love for plants. What started as trading cuttings became a thriving nursery business that brings us joy every day.",
            details: "Used their trading experience to launch a successful specialty plant nursery focusing on rare and unusual varieties.",
            plantsTraded: 300,
            yearsActive: 4
        },
        {
            id: 8,
            name: "Alex Rivera",
            location: "Phoenix, AZ",
            avatar: "🏳️‍⚧️",
            story: "Desert Dweller's Succulent Success",
            category: "specialty",
            achievement: "Became desert plant specialist and educator",
            quote: "Living in the desert, I thought my plant options were limited. This community taught me about the incredible diversity of desert plants and connected me with fellow desert gardeners.",
            details: "Became a renowned expert in desert plants and now leads workshops on drought-tolerant gardening.",
            plantsTraded: 180,
            yearsActive: 3
        }
    ];

    const filters = ['all', 'community', 'collecting', 'lifestyle', 'wellness', 'education', 'workspace', 'retirement', 'specialty'];

    const filteredStories = selectedFilter === 'all' 
        ? successStories 
        : successStories.filter(story => story.category === selectedFilter);

    const featuredStories = successStories.filter(story => story.featured);
    const totalTrades = successStories.reduce((total, story) => total + story.plantsTraded, 0);
    const averageYears = (successStories.reduce((total, story) => total + story.yearsActive, 0) / successStories.length).toFixed(1);

    const handleGoBack = () => {
        window.history.back();
    };

    const handleShareStory = () => {
        console.log("Opening story submission form");
        // Handle story submission
    };

    return (
        <div className="stories-container">
            {/* Navigation Header */}
            <div className="stories-header">
                <div className="container">
                    <div className="row align-items-center py-4">
                        <div className="col-auto">
                            <button onClick={handleGoBack} className="btn back-btn">
                                <i className="fas fa-arrow-left me-2"></i>
                                Back
                            </button>
                        </div>
                        <div className="col text-center">
                            <h1 className="stories-title mb-0">
                                <i className="fas fa-star me-3"></i>
                                Success Stories
                            </h1>
                        </div>
                        <div className="col-auto">
                            {/* Spacer for centering */}
                        </div>
                    </div>
                </div>
            </div>

            {/* Hero Section */}
            <div className="hero-section">
                <div className="container py-5">
                    <div className="row justify-content-center text-center">
                        <div className="col-lg-8">
                            <h2 className="hero-title">Real Stories, Real Growth</h2>
                            <p className="hero-description">
                                Discover inspiring journeys of plant lovers who transformed their lives, 
                                spaces, and communities through our platform. These stories showcase the 
                                power of plants to connect, heal, and inspire.
                            </p>
                            <div className="hero-stats">
                                <div className="row g-4">
                                    <div className="col-md-4">
                                        <div className="stat-item">
                                            <h3 className="stat-number">{totalTrades}+</h3>
                                            <p className="stat-label">Plants Traded by Our Heroes</p>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="stat-item">
                                            <h3 className="stat-number">{averageYears}</h3>
                                            <p className="stat-label">Avg Years in Community</p>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="stat-item">
                                            <h3 className="stat-number">8</h3>
                                            <p className="stat-label">Featured Success Stories</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Featured Stories */}
            <div className="container py-5">
                <div className="row justify-content-center mb-4">
                    <div className="col-lg-8 text-center">
                        <h3 className="section-title">Featured Success Stories</h3>
                        <p className="section-description">
                            These remarkable journeys showcase the transformative power of our plant community.
                        </p>
                    </div>
                </div>
                <div className="row g-4">
                    {featuredStories.map((story) => (
                        <div key={story.id} className="col-lg-6">
                            <div className="featured-story-card">
                                <div className="featured-badge">
                                    <i className="fas fa-crown me-1"></i>
                                    Featured
                                </div>
                                <div className="story-header">
                                    <div className="story-avatar">
                                        <span>{story.avatar}</span>
                                    </div>
                                    <div className="story-info">
                                        <h4 className="story-name">{story.name}</h4>
                                        <p className="story-location">
                                            <i className="fas fa-map-marker-alt me-1"></i>
                                            {story.location}
                                        </p>
                                        <h5 className="story-subtitle">{story.story}</h5>
                                    </div>
                                </div>
                                <div className="story-achievement">
                                    <i className="fas fa-trophy achievement-icon"></i>
                                    <span>{story.achievement}</span>
                                </div>
                                <blockquote className="story-quote">
                                    "{story.quote}"
                                </blockquote>
                                <p className="story-details">{story.details}</p>
                                <div className="story-stats">
                                    <div className="story-stat">
                                        <span className="stat-number">{story.plantsTraded}</span>
                                        <span className="stat-label">Plants Traded</span>
                                    </div>
                                    <div className="story-stat">
                                        <span className="stat-number">{story.yearsActive}</span>
                                        <span className="stat-label">Years Active</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* All Stories Section */}
            <div className="container py-5">
                <div className="row justify-content-center mb-4">
                    <div className="col-lg-8 text-center">
                        <h3 className="section-title">All Success Stories</h3>
                        <p className="section-description">
                            Browse through all the inspiring stories from our community members.
                        </p>
                    </div>
                </div>

                {/* Filter Buttons */}
                <div className="row justify-content-center mb-4">
                    <div className="col-lg-10">
                        <div className="filter-buttons text-center">
                            {filters.map((filter, index) => (
                                <button
                                    key={index}
                                    className={`btn filter-btn ${selectedFilter === filter ? 'active' : ''}`}
                                    onClick={() => setSelectedFilter(filter)}
                                >
                                    {filter === 'all' ? 'All Stories' : filter.charAt(0).toUpperCase() + filter.slice(1)}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Stories Grid */}
                <div className="row g-4">
                    {filteredStories.map((story) => (
                        <div key={story.id} className="col-lg-4 col-md-6">
                            <div className="story-card">
                                <div className="story-card-header">
                                    <div className="story-avatar-small">
                                        <span>{story.avatar}</span>
                                    </div>
                                    <div className="story-basic-info">
                                        <h4 className="story-name-small">{story.name}</h4>
                                        <p className="story-location-small">
                                            <i className="fas fa-map-marker-alt me-1"></i>
                                            {story.location}
                                        </p>
                                    </div>
                                    <div className="story-category-badge">
                                        {story.category}
                                    </div>
                                </div>
                                <div className="story-card-body">
                                    <h5 className="story-title-small">{story.story}</h5>
                                    <div className="story-achievement-small">
                                        <i className="fas fa-trophy me-1"></i>
                                        {story.achievement}
                                    </div>
                                    <blockquote className="story-quote-small">
                                        "{story.quote.length > 120 ? story.quote.substring(0, 120) + '...' : story.quote}"
                                    </blockquote>
                                    <div className="story-stats-small">
                                        <div className="stat-item-small">
                                            <span className="stat-number-small">{story.plantsTraded}</span>
                                            <span className="stat-label-small">Trades</span>
                                        </div>
                                        <div className="stat-item-small">
                                            <span className="stat-number-small">{story.yearsActive}y</span>
                                            <span className="stat-label-small">Active</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Share Your Story CTA */}
            <div className="container py-5">
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <div className="share-story-cta">
                            <div className="text-center">
                                <div className="cta-icon">
                                    <i className="fas fa-pen-fancy"></i>
                                </div>
                                <h3 className="cta-title">Share Your Success Story</h3>
                                <p className="cta-description">
                                    Have you had an amazing experience with our plant community? 
                                    We'd love to hear your story and inspire others with your journey!
                                </p>
                                <div className="cta-benefits">
                                    <div className="row g-3">
                                        <div className="col-md-4">
                                            <div className="benefit-item">
                                                <i className="fas fa-gift benefit-icon"></i>
                                                <span>Get featured on our platform</span>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="benefit-item">
                                                <i className="fas fa-users benefit-icon"></i>
                                                <span>Inspire other plant lovers</span>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="benefit-item">
                                                <i className="fas fa-seedling benefit-icon"></i>
                                                <span>Receive exclusive plants</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <button onClick={handleShareStory} className="btn btn-success cta-btn">
                                    <i className="fas fa-share-alt me-2"></i>
                                    Share Your Story
                                </button>
                                <p className="cta-note">
                                    <small>
                                        <i className="fas fa-lock me-1"></i>
                                        Your privacy is important to us. We'll contact you before publishing any story.
                                    </small>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Community Impact */}
            <div className="container py-5">
                <div className="row justify-content-center mb-4">
                    <div className="col-lg-8 text-center">
                        <h3 className="section-title">Community Impact</h3>
                        <p className="section-description">
                            See how our success stories create ripple effects throughout the plant community.
                        </p>
                    </div>
                </div>
                <div className="row g-4">
                    <div className="col-lg-3 col-md-6">
                        <div className="impact-card">
                            <div className="impact-icon">
                                <i className="fas fa-seedling"></i>
                            </div>
                            <h4 className="impact-number">50K+</h4>
                            <p className="impact-label">Lives Touched</p>
                            <p className="impact-description">People inspired to start their plant journey</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="impact-card">
                            <div className="impact-icon">
                                <i className="fas fa-home"></i>
                            </div>
                            <h4 className="impact-number">15K+</h4>
                            <p className="impact-label">Homes Transformed</p>
                            <p className="impact-description">Living spaces made greener and healthier</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="impact-card">
                            <div className="impact-icon">
                                <i className="fas fa-heart"></i>
                            </div>
                            <h4 className="impact-number">5K+</h4>
                            <p className="impact-label">Friendships Formed</p>
                            <p className="impact-description">Real connections made through plant trading</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="impact-card">
                            <div className="impact-icon">
                                <i className="fas fa-leaf"></i>
                            </div>
                            <h4 className="impact-number">100K+</h4>
                            <p className="impact-label">Plants Rescued</p>
                            <p className="impact-description">Plants saved from waste through trading</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SuccessStoriesPage;
