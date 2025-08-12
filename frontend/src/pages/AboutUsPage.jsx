import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/AboutUsPage.css';

const AboutUsPage = () => {
    const teamMembers = [
        {
            name: "Sarah Chen",
            role: "CEO & Co-Founder",
            image: "👩‍💼",
            description: "Plant enthusiast with 10+ years in tech. Sarah founded Grow & Swap after struggling to find rare plants locally.",
            linkedin: "#",
            email: "sarah@growandswap.com"
        },
        {
            name: "Marcus Johnson",
            role: "CTO & Co-Founder",
            image: "👨‍💻",
            description: "Full-stack developer passionate about sustainable technology and connecting communities through innovation.",
            linkedin: "#",
            email: "marcus@growandswap.com"
        },
        {
            name: "Dr. Elena Rodriguez",
            role: "Head of Plant Science",
            image: "👩‍🔬",
            description: "PhD in Botany with expertise in plant identification and care. Leads our educational content and plant verification.",
            linkedin: "#",
            email: "elena@growandswap.com"
        },
        {
            name: "James Park",
            role: "Head of Community",
            image: "👨‍🌾",
            description: "Community builder who grew our user base from 100 to 50K+ members. Passionate about fostering plant friendships.",
            linkedin: "#",
            email: "james@growandswap.com"
        },
        {
            name: "Lisa Thompson",
            role: "Head of Design",
            image: "👩‍🎨",
            description: "UX/UI designer focused on creating beautiful, accessible experiences that make plant trading effortless.",
            linkedin: "#",
            email: "lisa@growandswap.com"
        },
        {
            name: "David Kim",
            role: "Head of Operations",
            image: "👨‍💼",
            description: "Operations expert ensuring smooth plant exchanges and building partnerships with nurseries worldwide.",
            linkedin: "#",
            email: "david@growandswap.com"
        }
    ];

    const milestones = [
        {
            year: "2022",
            title: "The Beginning",
            description: "Founded by two plant lovers who couldn't find rare plants in their local area.",
            icon: "🌱"
        },
        {
            year: "2022",
            title: "First 1,000 Users",
            description: "Reached our first milestone with 1,000 registered plant traders in just 6 months.",
            icon: "👥"
        },
        {
            year: "2023",
            title: "Mobile App Launch",
            description: "Launched our mobile app, making plant trading accessible on-the-go.",
            icon: "📱"
        },
        {
            year: "2023",
            title: "10,000 Plants Traded",
            description: "Celebrated 10,000 successful plant trades and exchanges worldwide.",
            icon: "🎉"
        },
        {
            year: "2024",
            title: "Series A Funding",
            description: "Raised $5M Series A to expand globally and enhance our platform.",
            icon: "💰"
        },
        {
            year: "2024",
            title: "AI Plant ID",
            description: "Introduced AI-powered plant identification to help users identify their plants.",
            icon: "🤖"
        },
        {
            year: "2025",
            title: "Global Expansion",
            description: "Expanded to 15 countries with 50,000+ active plant traders worldwide.",
            icon: "🌍"
        },
        {
            year: "2025",
            title: "100K Plants Traded",
            description: "Milestone achievement: facilitated over 100,000 plant trades globally!",
            icon: "🏆"
        }
    ];

    const values = [
        {
            icon: "🌱",
            title: "Sustainability",
            description: "We believe in promoting sustainable plant trading practices that benefit both people and the planet."
        },
        {
            icon: "🤝",
            title: "Community",
            description: "Building a supportive community where plant lovers can connect, learn, and grow together."
        },
        {
            icon: "🔄",
            title: "Circular Economy",
            description: "Encouraging plant sharing and trading to reduce waste and promote plant accessibility."
        },
        {
            icon: "📚",
            title: "Education",
            description: "Empowering our community with knowledge and resources for successful plant care and trading."
        },
        {
            icon: "🌍",
            title: "Global Impact",
            description: "Creating positive environmental impact through widespread plant trading and conservation."
        },
        {
            icon: "💚",
            title: "Passion",
            description: "Driven by genuine love for plants and dedication to making plant ownership accessible to all."
        }
    ];

    const stats = [
        { number: "100K+", label: "Plants Traded" },
        { number: "50K+", label: "Active Users" },
        { number: "15", label: "Countries" },
        { number: "95%", label: "Success Rate" }
    ];

    const handleGoBack = () => {
        window.history.back();
    };

    return (
        <div className="about-container">
            {/* Navigation Header */}
            <div className="about-header">
                <div className="container">
                    <div className="row align-items-center py-4">
                        <div className="col-auto">
                            <button onClick={handleGoBack} className="btn back-btn">
                                <i className="fas fa-arrow-left me-2"></i>
                                Back
                            </button>
                        </div>
                        <div className="col text-center">
                            <h1 className="about-title mb-0">
                                <i className="fas fa-users me-3"></i>
                                About Us
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
                            <h2 className="hero-title">Growing Communities, One Plant at a Time</h2>
                            <p className="hero-description">
                                We're on a mission to make plant ownership accessible to everyone by creating 
                                the world's largest community for plant trading, sharing, and education. 
                                Join thousands of plant lovers who've discovered the joy of growing together.
                            </p>
                            <div className="hero-stats">
                                <div className="row g-4">
                                    {stats.map((stat, index) => (
                                        <div key={index} className="col-lg-3 col-6">
                                            <div className="stat-item">
                                                <h3 className="stat-number">{stat.number}</h3>
                                                <p className="stat-label">{stat.label}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Our Story */}
            <div className="container py-5">
                <div className="row justify-content-center mb-5">
                    <div className="col-lg-8 text-center">
                        <h3 className="section-title">Our Story</h3>
                        <div className="story-content">
                            <p className="story-text">
                                It all started in 2022 when our founders, Sarah and Marcus, were frustrated by the 
                                difficulty of finding rare plants locally. As passionate plant parents, they often 
                                found themselves with propagated plants they couldn't keep, while desperately 
                                searching for specific varieties online.
                            </p>
                            <p className="story-text">
                                "Why isn't there a simple way for plant lovers to trade with each other?" they wondered. 
                                That question sparked the creation of Grow & Swap - a platform where plant enthusiasts 
                                could connect, trade, and share their love for greenery.
                            </p>
                            <p className="story-text">
                                What began as a small community project has grown into a global movement, connecting 
                                over 50,000 plant lovers across 15 countries. Every day, we help people find their 
                                dream plants while fostering friendships and promoting sustainable growing practices.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Our Values */}
            <div className="container py-5">
                <div className="row justify-content-center mb-5">
                    <div className="col-lg-8 text-center">
                        <h3 className="section-title">Our Values</h3>
                        <p className="section-description">
                            These core values guide everything we do and shape our community culture.
                        </p>
                    </div>
                </div>
                <div className="row g-4">
                    {values.map((value, index) => (
                        <div key={index} className="col-lg-4 col-md-6">
                            <div className="value-card">
                                <div className="value-icon">
                                    <span>{value.icon}</span>
                                </div>
                                <h4 className="value-title">{value.title}</h4>
                                <p className="value-description">{value.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Timeline */}
            <div className="container py-5">
                <div className="row justify-content-center mb-5">
                    <div className="col-lg-8 text-center">
                        <h3 className="section-title">Our Journey</h3>
                        <p className="section-description">
                            From a simple idea to a global community - here are the key milestones in our growth.
                        </p>
                    </div>
                </div>
                <div className="timeline">
                    {milestones.map((milestone, index) => (
                        <div key={index} className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}>
                            <div className="timeline-content">
                                <div className="timeline-icon">
                                    <span>{milestone.icon}</span>
                                </div>
                                <div className="timeline-year">{milestone.year}</div>
                                <h4 className="timeline-title">{milestone.title}</h4>
                                <p className="timeline-description">{milestone.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Team Section */}
            <div className="container py-5">
                <div className="row justify-content-center mb-5">
                    <div className="col-lg-8 text-center">
                        <h3 className="section-title">Meet Our Team</h3>
                        <p className="section-description">
                            We're a passionate team of plant lovers, tech experts, and community builders 
                            working together to grow the world's plant trading community.
                        </p>
                    </div>
                </div>
                <div className="row g-4">
                    {teamMembers.map((member, index) => (
                        <div key={index} className="col-lg-4 col-md-6">
                            <div className="team-card">
                                <div className="team-image">
                                    <span className="team-emoji">{member.image}</span>
                                </div>
                                <div className="team-info">
                                    <h4 className="team-name">{member.name}</h4>
                                    <p className="team-role">{member.role}</p>
                                    <p className="team-description">{member.description}</p>
                                    <div className="team-links">
                                        <a href={member.linkedin} className="team-link">
                                            <i className="fab fa-linkedin"></i>
                                        </a>
                                        <a href={`mailto:${member.email}`} className="team-link">
                                            <i className="fas fa-envelope"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Mission Statement */}
            <div className="container py-5">
                <div className="row justify-content-center">
                    <div className="col-lg-10">
                        <div className="mission-section">
                            <div className="row align-items-center">
                                <div className="col-lg-6">
                                    <div className="mission-content">
                                        <h3 className="mission-title">Our Mission</h3>
                                        <p className="mission-description">
                                            To democratize plant ownership by creating a global community where 
                                            plant lovers can easily trade, share knowledge, and grow together. 
                                            We believe everyone should have access to the plants they love, 
                                            regardless of location or budget.
                                        </p>
                                        <div className="mission-goals">
                                            <div className="goal-item">
                                                <i className="fas fa-check goal-check"></i>
                                                <span>Make rare plants accessible worldwide</span>
                                            </div>
                                            <div className="goal-item">
                                                <i className="fas fa-check goal-check"></i>
                                                <span>Reduce plant waste through sharing</span>
                                            </div>
                                            <div className="goal-item">
                                                <i className="fas fa-check goal-check"></i>
                                                <span>Build lasting plant friendships</span>
                                            </div>
                                            <div className="goal-item">
                                                <i className="fas fa-check goal-check"></i>
                                                <span>Promote sustainable growing practices</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="mission-visual">
                                        <div className="mission-icon">
                                            🌍🌱
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Contact CTA */}
            <div className="container py-5">
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <div className="contact-cta text-center">
                            <h3 className="cta-title">Want to Learn More?</h3>
                            <p className="cta-description">
                                We love connecting with fellow plant enthusiasts, partners, and anyone 
                                interested in our mission. Reach out and let's grow together!
                            </p>
                            <div className="cta-buttons">
                                <button className="btn btn-success me-3">
                                    <i className="fas fa-envelope me-2"></i>
                                    Contact Us
                                </button>
                                <button className="btn btn-outline-success">
                                    <i className="fas fa-newspaper me-2"></i>
                                    Press Inquiries
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUsPage;
