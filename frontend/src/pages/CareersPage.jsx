import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/CareersPage.css';

const CareersPage = () => {
    const [selectedDepartment, setSelectedDepartment] = useState('all');

    const jobOpenings = [
        {
            id: 1,
            title: "Senior Frontend Developer",
            department: "Engineering",
            location: "San Francisco, CA",
            type: "Full-time",
            experience: "3-5 years",
            description: "Join our frontend team to build beautiful, responsive web applications for our plant trading platform.",
            requirements: [
                "Proficiency in React, JavaScript, and CSS",
                "Experience with responsive design",
                "Knowledge of modern frontend tooling",
                "Understanding of UX/UI principles"
            ],
            benefits: ["Health Insurance", "401k", "Flexible Hours", "Remote Work"]
        },
        {
            id: 2,
            title: "Plant Care Specialist",
            department: "Operations",
            location: "Remote",
            type: "Full-time",
            experience: "2-4 years",
            description: "Help our community with plant care advice and content creation for our educational resources.",
            requirements: [
                "Degree in Botany, Horticulture, or related field",
                "Experience in plant care and identification",
                "Excellent communication skills",
                "Passion for helping others grow plants"
            ],
            benefits: ["Health Insurance", "Plant Allowance", "Flexible Schedule", "Learning Budget"]
        },
        {
            id: 3,
            title: "Marketing Manager",
            department: "Marketing",
            location: "New York, NY",
            type: "Full-time",
            experience: "4-6 years",
            description: "Lead our marketing efforts to grow the plant trading community and increase user engagement.",
            requirements: [
                "Bachelor's degree in Marketing or related field",
                "Experience with digital marketing campaigns",
                "Knowledge of social media marketing",
                "Analytical mindset with data-driven approach"
            ],
            benefits: ["Health Insurance", "Equity", "Professional Development", "Gym Membership"]
        },
        {
            id: 4,
            title: "Backend Engineer",
            department: "Engineering",
            location: "Austin, TX",
            type: "Full-time",
            experience: "3-5 years",
            description: "Build scalable backend systems to support our growing plant trading marketplace.",
            requirements: [
                "Proficiency in Node.js, Python, or Java",
                "Experience with databases and APIs",
                "Knowledge of cloud platforms (AWS, GCP)",
                "Understanding of microservices architecture"
            ],
            benefits: ["Health Insurance", "Stock Options", "Flexible PTO", "Tech Stipend"]
        },
        {
            id: 5,
            title: "Community Manager",
            department: "Community",
            location: "Remote",
            type: "Full-time",
            experience: "2-3 years",
            description: "Foster and grow our plant trading community through engagement and support initiatives.",
            requirements: [
                "Experience in community management",
                "Excellent written and verbal communication",
                "Passion for plants and gardening",
                "Social media management experience"
            ],
            benefits: ["Health Insurance", "Plant Budget", "Work From Home", "Conference Budget"]
        },
        {
            id: 6,
            title: "UX/UI Designer",
            department: "Design",
            location: "Seattle, WA",
            type: "Full-time",
            experience: "3-5 years",
            description: "Design intuitive and beautiful user experiences for our plant trading platform.",
            requirements: [
                "Proficiency in Figma, Sketch, or Adobe Creative Suite",
                "Strong portfolio of web and mobile designs",
                "Understanding of user-centered design principles",
                "Experience with design systems"
            ],
            benefits: ["Health Insurance", "Design Conferences", "Creative Tools Budget", "Flexible Hours"]
        },
        {
            id: 7,
            title: "Data Scientist",
            department: "Analytics",
            location: "Remote",
            type: "Full-time",
            experience: "2-4 years",
            description: "Analyze user behavior and marketplace data to drive product decisions and growth.",
            requirements: [
                "Degree in Data Science, Statistics, or related field",
                "Proficiency in Python, R, or SQL",
                "Experience with data visualization tools",
                "Knowledge of machine learning algorithms"
            ],
            benefits: ["Health Insurance", "Learning Budget", "Remote Work", "Conference Travel"]
        },
        {
            id: 8,
            title: "Customer Success Intern",
            department: "Support",
            location: "San Francisco, CA",
            type: "Internship",
            experience: "Entry Level",
            description: "Support our customer success team in helping users have the best plant trading experience.",
            requirements: [
                "Currently enrolled in college or recent graduate",
                "Strong communication and problem-solving skills",
                "Interest in plants and sustainability",
                "Customer service experience preferred"
            ],
            benefits: ["Stipend", "Mentorship", "Learning Opportunities", "Plant Gifts"]
        }
    ];

    const departments = ['all', 'Engineering', 'Operations', 'Marketing', 'Community', 'Design', 'Analytics', 'Support'];

    const companyValues = [
        {
            icon: "🌱",
            title: "Growth Mindset",
            description: "We believe in continuous learning and growing together, just like the plants we love."
        },
        {
            icon: "🌍",
            title: "Sustainability",
            description: "We're committed to environmental responsibility and sustainable business practices."
        },
        {
            icon: "🤝",
            title: "Community First",
            description: "Our community of plant lovers is at the heart of everything we do."
        },
        {
            icon: "💡",
            title: "Innovation",
            description: "We embrace new ideas and technologies to improve the plant trading experience."
        }
    ];

    const perks = [
        {
            icon: "🏥",
            title: "Health & Wellness",
            description: "Comprehensive health, dental, and vision insurance plus wellness programs."
        },
        {
            icon: "🌿",
            title: "Plant Benefits",
            description: "Monthly plant allowance and access to rare plants from our partner nurseries."
        },
        {
            icon: "💻",
            title: "Remote Flexibility",
            description: "Work from home options and flexible schedules to maintain work-life balance."
        },
        {
            icon: "📚",
            title: "Learning & Growth",
            description: "Professional development budget and opportunities to learn new skills."
        },
        {
            icon: "🏖️",
            title: "Time Off",
            description: "Generous PTO policy and company holidays to recharge and explore."
        },
        {
            icon: "💰",
            title: "Financial Benefits",
            description: "Competitive salary, equity options, and 401k matching program."
        }
    ];

    const filteredJobs = selectedDepartment === 'all' 
        ? jobOpenings 
        : jobOpenings.filter(job => job.department === selectedDepartment);

    const handleGoBack = () => {
        window.history.back();
    };

    const handleApplyNow = (jobId) => {
        console.log(`Applying for job ${jobId}`);
        // Handle job application
    };

    return (
        <div className="careers-container">
            {/* Navigation Header */}
            <div className="careers-header">
                <div className="container">
                    <div className="row align-items-center py-4">
                        <div className="col-auto">
                            <button onClick={handleGoBack} className="btn back-btn">
                                <i className="fas fa-arrow-left me-2"></i>
                                Back
                            </button>
                        </div>
                        <div className="col text-center">
                            <h1 className="careers-title mb-0">
                                <i className="fas fa-briefcase me-3"></i>
                                Join Our Team
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
                            <h2 className="hero-title">Grow Your Career With Us</h2>
                            <p className="hero-description">
                                Join a passionate team dedicated to connecting plant lovers worldwide. 
                                We're building the future of sustainable plant trading, and we want you to be part of it.
                            </p>
                            <div className="hero-stats">
                                <div className="row g-4">
                                    <div className="col-md-3 col-6">
                                        <div className="stat-item">
                                            <h3 className="stat-number">50+</h3>
                                            <p className="stat-label">Team Members</p>
                                        </div>
                                    </div>
                                    <div className="col-md-3 col-6">
                                        <div className="stat-item">
                                            <h3 className="stat-number">15</h3>
                                            <p className="stat-label">Countries</p>
                                        </div>
                                    </div>
                                    <div className="col-md-3 col-6">
                                        <div className="stat-item">
                                            <h3 className="stat-number">95%</h3>
                                            <p className="stat-label">Employee Satisfaction</p>
                                        </div>
                                    </div>
                                    <div className="col-md-3 col-6">
                                        <div className="stat-item">
                                            <h3 className="stat-number">100K+</h3>
                                            <p className="stat-label">Plants Traded</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Company Values */}
            <div className="container py-5">
                <div className="row justify-content-center mb-5">
                    <div className="col-lg-8 text-center">
                        <h3 className="section-title">Our Values</h3>
                        <p className="section-description">
                            These core values guide everything we do and shape our company culture.
                        </p>
                    </div>
                </div>
                <div className="row g-4">
                    {companyValues.map((value, index) => (
                        <div key={index} className="col-lg-3 col-md-6">
                            <div className="value-card text-center">
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

            {/* Job Openings */}
            <div className="container py-5">
                <div className="row justify-content-center mb-5">
                    <div className="col-lg-8 text-center">
                        <h3 className="section-title">Open Positions</h3>
                        <p className="section-description">
                            Find your perfect role and help us grow the world's largest plant trading community.
                        </p>
                    </div>
                </div>

                {/* Department Filter */}
                <div className="row justify-content-center mb-4">
                    <div className="col-lg-8">
                        <div className="filter-buttons text-center">
                            {departments.map((dept, index) => (
                                <button
                                    key={index}
                                    className={`btn filter-btn ${selectedDepartment === dept ? 'active' : ''}`}
                                    onClick={() => setSelectedDepartment(dept)}
                                >
                                    {dept === 'all' ? 'All Departments' : dept}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Job Listings */}
                <div className="row g-4">
                    {filteredJobs.map((job) => (
                        <div key={job.id} className="col-lg-6">
                            <div className="job-card">
                                <div className="job-header">
                                    <div className="job-meta">
                                        <span className="job-department">{job.department}</span>
                                        <span className="job-type">{job.type}</span>
                                    </div>
                                    <h4 className="job-title">{job.title}</h4>
                                    <div className="job-details">
                                        <span className="job-location">
                                            <i className="fas fa-map-marker-alt me-1"></i>
                                            {job.location}
                                        </span>
                                        <span className="job-experience">
                                            <i className="fas fa-clock me-1"></i>
                                            {job.experience}
                                        </span>
                                    </div>
                                </div>
                                <div className="job-body">
                                    <p className="job-description">{job.description}</p>
                                    <div className="job-requirements">
                                        <h6 className="requirements-title">Key Requirements:</h6>
                                        <ul className="requirements-list">
                                            {job.requirements.slice(0, 3).map((req, index) => (
                                                <li key={index}>{req}</li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="job-benefits">
                                        <div className="benefits-tags">
                                            {job.benefits.map((benefit, index) => (
                                                <span key={index} className="benefit-tag">
                                                    {benefit}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                <div className="job-footer">
                                    <button 
                                        onClick={() => handleApplyNow(job.id)}
                                        className="btn btn-success apply-btn"
                                    >
                                        <i className="fas fa-paper-plane me-2"></i>
                                        Apply Now
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Perks & Benefits */}
            <div className="container py-5">
                <div className="row justify-content-center mb-5">
                    <div className="col-lg-8 text-center">
                        <h3 className="section-title">Perks & Benefits</h3>
                        <p className="section-description">
                            We believe in taking care of our team members with comprehensive benefits and unique perks.
                        </p>
                    </div>
                </div>
                <div className="row g-4">
                    {perks.map((perk, index) => (
                        <div key={index} className="col-lg-4 col-md-6">
                            <div className="perk-card">
                                <div className="perk-icon">
                                    <span>{perk.icon}</span>
                                </div>
                                <h5 className="perk-title">{perk.title}</h5>
                                <p className="perk-description">{perk.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Contact Section */}
            <div className="container py-5">
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <div className="contact-section text-center">
                            <h3 className="contact-title">Don't See Your Perfect Role?</h3>
                            <p className="contact-description">
                                We're always looking for talented individuals to join our growing team. 
                                Send us your resume and let us know how you'd like to contribute!
                            </p>
                            <div className="contact-buttons">
                                <button className="btn btn-success me-3">
                                    <i className="fas fa-envelope me-2"></i>
                                    careers@growandswap.com
                                </button>
                                <button className="btn btn-outline-success">
                                    <i className="fas fa-linkedin me-2"></i>
                                    Follow Us on LinkedIn
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CareersPage;
