import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/PressPage.css';

const PressPage = () => {
    const [selectedCategory, setSelectedCategory] = useState('all');

    const pressReleases = [
        {
            id: 1,
            category: "funding",
            title: "Grow & Swap Raises $5M Series A to Accelerate Global Plant Trading Platform",
            date: "March 15, 2024",
            excerpt: "Leading plant trading platform secures Series A funding to expand internationally and enhance AI-powered features.",
            link: "#",
            featured: true
        },
        {
            id: 2,
            category: "product",
            title: "AI-Powered Plant Identification Feature Launches on Grow & Swap Platform",
            date: "February 8, 2024",
            excerpt: "New machine learning technology helps users identify plants with 95% accuracy using just a photo.",
            link: "#"
        },
        {
            id: 3,
            category: "milestone",
            title: "Grow & Swap Celebrates 100,000 Successful Plant Trades Globally",
            date: "January 22, 2025",
            excerpt: "Platform milestone demonstrates growing popularity of sustainable plant trading worldwide.",
            link: "#",
            featured: true
        },
        {
            id: 4,
            category: "expansion",
            title: "Grow & Swap Expands to European Markets with Localized Trading Features",
            date: "December 12, 2024",
            excerpt: "Platform now supports 15 countries with local shipping partnerships and currency support.",
            link: "#"
        },
        {
            id: 5,
            category: "partnership",
            title: "Grow & Swap Partners with Major Nurseries for Rare Plant Authentication",
            date: "November 5, 2024",
            excerpt: "Strategic partnerships with leading nurseries ensure authentic rare plant trading on the platform.",
            link: "#"
        },
        {
            id: 6,
            category: "award",
            title: "Grow & Swap Named 'Best Sustainability App' by Green Tech Awards 2024",
            date: "October 18, 2024",
            excerpt: "Platform recognized for promoting sustainable plant trading and reducing agricultural waste.",
            link: "#"
        }
    ];

    const mediaKit = [
        {
            title: "Company Logos",
            description: "High-resolution logos in various formats",
            items: ["PNG (Transparent)", "SVG (Vector)", "JPG (Standard)", "Monochrome versions"],
            downloadLink: "#"
        },
        {
            title: "Product Screenshots",
            description: "App and website interface screenshots",
            items: ["Mobile app screens", "Desktop interface", "Feature highlights", "User journey flows"],
            downloadLink: "#"
        },
        {
            title: "Team Photos",
            description: "Professional headshots and team photos",
            items: ["Leadership team", "Individual headshots", "Office photos", "Event photos"],
            downloadLink: "#"
        },
        {
            title: "Company Fact Sheet",
            description: "Key statistics and company information",
            items: ["Company overview", "Key metrics", "Timeline", "Contact information"],
            downloadLink: "#"
        }
    ];

    const awards = [
        {
            year: "2024",
            title: "Best Sustainability App",
            organization: "Green Tech Awards",
            description: "Recognized for environmental impact and sustainable practices"
        },
        {
            year: "2024",
            title: "Top 50 Startups to Watch",
            organization: "TechCrunch",
            description: "Featured among the most promising startups in sustainable technology"
        },
        {
            year: "2023",
            title: "Community Choice Award",
            organization: "App Store",
            description: "Chosen by users as the best community-driven trading platform"
        },
        {
            year: "2023",
            title: "Innovation in Agriculture",
            organization: "AgTech Summit",
            description: "Honored for revolutionizing plant trading and distribution"
        }
    ];

    const mediaContacts = [
        {
            name: "Sarah Chen",
            role: "CEO & Co-Founder",
            email: "press@growandswap.com",
            phone: "+1 (555) 123-4567",
            specialties: ["Company Vision", "Industry Trends", "Sustainability"]
        },
        {
            name: "Marketing Team",
            role: "Press Relations",
            email: "media@growandswap.com",
            phone: "+1 (555) 123-4568",
            specialties: ["Press Releases", "Media Kits", "Interview Requests"]
        }
    ];

    const categories = ['all', 'funding', 'product', 'milestone', 'expansion', 'partnership', 'award'];
    
    const filteredReleases = selectedCategory === 'all' 
        ? pressReleases 
        : pressReleases.filter(release => release.category === selectedCategory);

    const handleGoBack = () => {
        window.history.back();
    };

    const handleDownload = (item) => {
        console.log(`Downloading ${item}`);
        // Handle download logic
    };

    return (
        <div className="press-container">
            {/* Navigation Header */}
            <div className="press-header">
                <div className="container">
                    <div className="row align-items-center py-4">
                        <div className="col-auto">
                            <button onClick={handleGoBack} className="btn back-btn">
                                <i className="fas fa-arrow-left me-2"></i>
                                Back
                            </button>
                        </div>
                        <div className="col text-center">
                            <h1 className="press-title mb-0">
                                <i className="fas fa-newspaper me-3"></i>
                                Press & Media
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
                            <h2 className="hero-title">In the News</h2>
                            <p className="hero-description">
                                Stay updated with the latest news, announcements, and media coverage 
                                about Grow & Swap's mission to revolutionize plant trading worldwide.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Press Releases */}
            <div className="container py-5">
                <div className="row justify-content-center mb-4">
                    <div className="col-lg-8 text-center">
                        <h3 className="section-title">Press Releases</h3>
                        <p className="section-description">
                            Latest announcements and company news from Grow & Swap.
                        </p>
                    </div>
                </div>

                {/* Category Filter */}
                <div className="row justify-content-center mb-4">
                    <div className="col-lg-10">
                        <div className="filter-buttons text-center">
                            {categories.map((category, index) => (
                                <button
                                    key={index}
                                    className={`btn filter-btn ${selectedCategory === category ? 'active' : ''}`}
                                    onClick={() => setSelectedCategory(category)}
                                >
                                    {category === 'all' ? 'All News' : category.charAt(0).toUpperCase() + category.slice(1)}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Press Release Items */}
                <div className="row g-4">
                    {filteredReleases.map((release) => (
                        <div key={release.id} className="col-lg-6">
                            <div className={`press-card ${release.featured ? 'featured' : ''}`}>
                                {release.featured && (
                                    <div className="featured-badge">
                                        <i className="fas fa-star me-1"></i>
                                        Featured
                                    </div>
                                )}
                                <div className="press-meta">
                                    <span className="press-category">{release.category}</span>
                                    <span className="press-date">{release.date}</span>
                                </div>
                                <h4 className="press-title-item">{release.title}</h4>
                                <p className="press-excerpt">{release.excerpt}</p>
                                <a href={release.link} className="btn btn-outline-success read-more-btn">
                                    Read Full Release
                                    <i className="fas fa-arrow-right ms-2"></i>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Awards & Recognition */}
            <div className="container py-5">
                <div className="row justify-content-center mb-4">
                    <div className="col-lg-8 text-center">
                        <h3 className="section-title">Awards & Recognition</h3>
                        <p className="section-description">
                            We're honored to be recognized by leading organizations in tech and sustainability.
                        </p>
                    </div>
                </div>
                <div className="row g-4">
                    {awards.map((award, index) => (
                        <div key={index} className="col-lg-6">
                            <div className="award-card">
                                <div className="award-year">{award.year}</div>
                                <h4 className="award-title">{award.title}</h4>
                                <p className="award-organization">
                                    <i className="fas fa-trophy me-2"></i>
                                    {award.organization}
                                </p>
                                <p className="award-description">{award.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Media Kit */}
            <div className="container py-5">
                <div className="row justify-content-center mb-4">
                    <div className="col-lg-8 text-center">
                        <h3 className="section-title">Media Kit</h3>
                        <p className="section-description">
                            Download high-quality assets, logos, and information for your stories.
                        </p>
                    </div>
                </div>
                <div className="row g-4">
                    {mediaKit.map((kit, index) => (
                        <div key={index} className="col-lg-6">
                            <div className="media-kit-card">
                                <h4 className="kit-title">{kit.title}</h4>
                                <p className="kit-description">{kit.description}</p>
                                <ul className="kit-items">
                                    {kit.items.map((item, itemIndex) => (
                                        <li key={itemIndex} className="kit-item">
                                            <i className="fas fa-file-download me-2"></i>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                                <button 
                                    onClick={() => handleDownload(kit.title)}
                                    className="btn btn-success download-btn"
                                >
                                    <i className="fas fa-download me-2"></i>
                                    Download Package
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Media Contacts */}
            <div className="container py-5">
                <div className="row justify-content-center mb-4">
                    <div className="col-lg-8 text-center">
                        <h3 className="section-title">Media Contacts</h3>
                        <p className="section-description">
                            Get in touch with our team for interviews, comments, or additional information.
                        </p>
                    </div>
                </div>
                <div className="row g-4 justify-content-center">
                    {mediaContacts.map((contact, index) => (
                        <div key={index} className="col-lg-6">
                            <div className="contact-card">
                                <h4 className="contact-name">{contact.name}</h4>
                                <p className="contact-role">{contact.role}</p>
                                <div className="contact-details">
                                    <div className="contact-item">
                                        <i className="fas fa-envelope contact-icon"></i>
                                        <a href={`mailto:${contact.email}`} className="contact-link">
                                            {contact.email}
                                        </a>
                                    </div>
                                    <div className="contact-item">
                                        <i className="fas fa-phone contact-icon"></i>
                                        <a href={`tel:${contact.phone}`} className="contact-link">
                                            {contact.phone}
                                        </a>
                                    </div>
                                </div>
                                <div className="contact-specialties">
                                    <h6 className="specialties-title">Expertise Areas:</h6>
                                    <div className="specialty-tags">
                                        {contact.specialties.map((specialty, specIndex) => (
                                            <span key={specIndex} className="specialty-tag">
                                                {specialty}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Press CTA */}
            <div className="container py-5">
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <div className="press-cta text-center">
                            <h3 className="cta-title">Working on a Story?</h3>
                            <p className="cta-description">
                                We'd love to help! Whether you need quotes, data, or exclusive access, 
                                our team is here to support your coverage of the plant trading industry.
                            </p>
                            <div className="cta-buttons">
                                <button className="btn btn-success me-3">
                                    <i className="fas fa-envelope me-2"></i>
                                    Contact Press Team
                                </button>
                                <button className="btn btn-outline-success">
                                    <i className="fas fa-calendar me-2"></i>
                                    Schedule Interview
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PressPage;
