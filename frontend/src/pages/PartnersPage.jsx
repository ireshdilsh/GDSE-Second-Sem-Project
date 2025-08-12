import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/PartnersPage.css';

const PartnersPage = () => {
    const partnerCategories = [
        {
            title: "Nursery Partners",
            description: "Leading nurseries providing quality plants and expertise",
            partners: [
                {
                    name: "Green Thumb Nursery",
                    logo: "🌿",
                    description: "Premium plants and gardening supplies since 1985",
                    location: "California, USA",
                    website: "www.greenthumb.com"
                },
                {
                    name: "Botanical Gardens Co.",
                    logo: "🌺",
                    description: "Exotic plants and rare species specialists",
                    location: "Florida, USA",
                    website: "www.botanicalgardens.com"
                },
                {
                    name: "Urban Plant House",
                    logo: "🏡",
                    description: "Indoor plants and urban gardening solutions",
                    location: "New York, USA",
                    website: "www.urbanplanthouse.com"
                },
                {
                    name: "Nature's Best",
                    logo: "🌱",
                    description: "Organic plants and sustainable growing practices",
                    location: "Oregon, USA",
                    website: "www.naturesbest.com"
                }
            ]
        },
        {
            title: "Technology Partners",
            description: "Tech companies helping us build the best platform",
            partners: [
                {
                    name: "PlantID Pro",
                    logo: "🔍",
                    description: "AI-powered plant identification technology",
                    location: "San Francisco, USA",
                    website: "www.plantidpro.com"
                },
                {
                    name: "GrowSmart Analytics",
                    logo: "📊",
                    description: "Garden analytics and growing insights platform",
                    location: "Seattle, USA",
                    website: "www.growsmart.com"
                },
                {
                    name: "CloudGarden Systems",
                    logo: "☁️",
                    description: "Cloud infrastructure for plant communities",
                    location: "Austin, USA",
                    website: "www.cloudgarden.com"
                }
            ]
        },
        {
            title: "Educational Partners",
            description: "Universities and institutions advancing plant science",
            partners: [
                {
                    name: "Botanical Research Institute",
                    logo: "🎓",
                    description: "Leading research in plant biology and conservation",
                    location: "Cambridge, UK",
                    website: "www.botanicalresearch.edu"
                },
                {
                    name: "Horticulture University",
                    logo: "🌳",
                    description: "Advanced horticultural education and training",
                    location: "Davis, California",
                    website: "www.horticulture.edu"
                },
                {
                    name: "Green Science Academy",
                    logo: "🔬",
                    description: "Environmental science and sustainable agriculture",
                    location: "Melbourne, Australia",
                    website: "www.greenscience.edu"
                }
            ]
        },
        {
            title: "Community Partners",
            description: "Organizations supporting gardening communities worldwide",
            partners: [
                {
                    name: "Global Garden Network",
                    logo: "🌍",
                    description: "Connecting gardeners across the globe",
                    location: "International",
                    website: "www.globalgardennetwork.org"
                },
                {
                    name: "Urban Farming Alliance",
                    logo: "🏙️",
                    description: "Promoting urban agriculture and food security",
                    location: "Chicago, USA",
                    website: "www.urbanfarmingalliance.org"
                },
                {
                    name: "Plant Conservation Society",
                    logo: "🌿",
                    description: "Protecting endangered plant species worldwide",
                    location: "London, UK",
                    website: "www.plantconservation.org"
                }
            ]
        }
    ];

    const partnershipBenefits = [
        {
            icon: "🤝",
            title: "Collaborative Growth",
            description: "Work together to expand the plant trading community and reach new audiences."
        },
        {
            icon: "📈",
            title: "Mutual Benefits",
            description: "Share resources, knowledge, and opportunities for sustainable business growth."
        },
        {
            icon: "🌱",
            title: "Innovation",
            description: "Drive innovation in plant trading technology and sustainable practices."
        },
        {
            icon: "🌐",
            title: "Global Reach",
            description: "Expand your presence in the international plant trading marketplace."
        }
    ];

    const handleGoBack = () => {
        window.history.back();
    };

    const handlePartnershipInquiry = () => {
        // Handle partnership inquiry
        console.log("Partnership inquiry submitted");
    };

    return (
        <div className="partners-container">
            {/* Navigation Header */}
            <div className="partners-header">
                <div className="container">
                    <div className="row align-items-center py-4">
                        <div className="col-auto">
                            <button onClick={handleGoBack} className="btn back-btn">
                                <i className="fas fa-arrow-left me-2"></i>
                                Back
                            </button>
                        </div>
                        <div className="col text-center">
                            <h1 className="partners-title mb-0">
                                <i className="fas fa-handshake me-3"></i>
                                Our Partners
                            </h1>
                        </div>
                        <div className="col-auto">
                            {/* Spacer for centering */}
                        </div>
                    </div>
                </div>
            </div>

            {/* Hero Section */}
            <div className="container py-5">
                <div className="row justify-content-center mb-5">
                    <div className="col-lg-8 text-center">
                        <h2 className="section-title">Growing Together</h2>
                        <p className="section-description">
                            We're proud to collaborate with leading organizations, nurseries, and institutions 
                            who share our passion for plants and sustainable growing. Together, we're building 
                            the world's most vibrant plant trading community.
                        </p>
                    </div>
                </div>

                {/* Partner Categories */}
                {partnerCategories.map((category, categoryIndex) => (
                    <div key={categoryIndex} className="partner-category mb-5">
                        <div className="category-header text-center mb-4">
                            <h3 className="category-title">{category.title}</h3>
                            <p className="category-description">{category.description}</p>
                        </div>
                        
                        <div className="row g-4">
                            {category.partners.map((partner, partnerIndex) => (
                                <div key={partnerIndex} className="col-lg-3 col-md-6">
                                    <div className="partner-card h-100">
                                        <div className="partner-logo">
                                            <span className="logo-emoji">{partner.logo}</span>
                                        </div>
                                        <div className="partner-info">
                                            <h4 className="partner-name">{partner.name}</h4>
                                            <p className="partner-description">{partner.description}</p>
                                            <div className="partner-details">
                                                <p className="partner-location">
                                                    <i className="fas fa-map-marker-alt me-2"></i>
                                                    {partner.location}
                                                </p>
                                                <p className="partner-website">
                                                    <i className="fas fa-globe me-2"></i>
                                                    {partner.website}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}

                {/* Partnership Benefits */}
                <div className="row justify-content-center mt-5 pt-5">
                    <div className="col-lg-10">
                        <div className="benefits-section">
                            <div className="text-center mb-5">
                                <h3 className="benefits-title">Why Partner With Us?</h3>
                                <p className="benefits-description">
                                    Join our growing network and discover the advantages of partnering with 
                                    the leading plant trading platform.
                                </p>
                            </div>
                            
                            <div className="row g-4">
                                {partnershipBenefits.map((benefit, index) => (
                                    <div key={index} className="col-lg-3 col-md-6">
                                        <div className="benefit-card text-center">
                                            <div className="benefit-icon">
                                                <span>{benefit.icon}</span>
                                            </div>
                                            <h5 className="benefit-title">{benefit.title}</h5>
                                            <p className="benefit-description">{benefit.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Partnership CTA */}
                <div className="row justify-content-center mt-5">
                    <div className="col-lg-8">
                        <div className="partnership-cta text-center">
                            <h3 className="cta-title">Interested in Partnering?</h3>
                            <p className="cta-description">
                                We're always looking for new partners who share our vision of creating 
                                a sustainable and thriving plant community. Let's grow together!
                            </p>
                            <div className="cta-buttons">
                                <button onClick={handlePartnershipInquiry} className="btn btn-success me-3">
                                    <i className="fas fa-envelope me-2"></i>
                                    Partnership Inquiry
                                </button>
                                <button className="btn btn-outline-success">
                                    <i className="fas fa-download me-2"></i>
                                    Download Partnership Kit
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Contact Information */}
                <div className="row justify-content-center mt-5">
                    <div className="col-lg-6">
                        <div className="contact-info">
                            <h4 className="contact-title text-center mb-4">Get In Touch</h4>
                            <div className="contact-details">
                                <div className="contact-item">
                                    <i className="fas fa-envelope contact-icon"></i>
                                    <div className="contact-text">
                                        <strong>Email:</strong> partnerships@growandswap.com
                                    </div>
                                </div>
                                <div className="contact-item">
                                    <i className="fas fa-phone contact-icon"></i>
                                    <div className="contact-text">
                                        <strong>Phone:</strong> +1 (555) 123-4567
                                    </div>
                                </div>
                                <div className="contact-item">
                                    <i className="fas fa-clock contact-icon"></i>
                                    <div className="contact-text">
                                        <strong>Business Hours:</strong> Mon-Fri 9AM-6PM PST
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PartnersPage;
