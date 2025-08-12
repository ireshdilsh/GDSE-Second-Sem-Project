import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/BlogsPage.css';

const BlogsPage = () => {
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [searchTerm, setSearchTerm] = useState('');

    const blogPosts = [
        {
            id: 1,
            title: "The Ultimate Guide to Plant Propagation for Beginners",
            category: "care",
            author: "Dr. Elena Rodriguez",
            date: "August 10, 2025",
            readTime: "8 min read",
            excerpt: "Learn the essential techniques for propagating your favorite plants and growing your collection sustainably.",
            image: "🌱",
            tags: ["Propagation", "Beginner", "Care Tips"],
            featured: true
        },
        {
            id: 2,
            title: "Top 10 Rare Plants Every Collector Should Know",
            category: "collecting",
            author: "James Park",
            date: "August 8, 2025",
            readTime: "6 min read",
            excerpt: "Discover the most sought-after rare plants and learn where to find them through our trading community.",
            image: "🌿",
            tags: ["Rare Plants", "Collecting", "Community"]
        },
        {
            id: 3,
            title: "Sustainable Plant Trading: Building a Greener Future",
            category: "sustainability",
            author: "Sarah Chen",
            date: "August 5, 2025",
            readTime: "5 min read",
            excerpt: "How plant trading contributes to environmental sustainability and reduces carbon footprint.",
            image: "🌍",
            tags: ["Sustainability", "Environment", "Trading"],
            featured: true
        },
        {
            id: 4,
            title: "Winter Plant Care: Keeping Your Indoor Garden Thriving",
            category: "care",
            author: "Lisa Thompson",
            date: "August 3, 2025",
            readTime: "7 min read",
            excerpt: "Essential tips for maintaining healthy plants during the colder months and low-light conditions.",
            image: "❄️",
            tags: ["Winter Care", "Indoor Plants", "Seasonal"]
        },
        {
            id: 5,
            title: "Building Meaningful Connections Through Plant Trading",
            category: "community",
            author: "Marcus Johnson",
            date: "August 1, 2025",
            readTime: "4 min read",
            excerpt: "Stories of friendships formed and communities built through the shared love of plants.",
            image: "🤝",
            tags: ["Community", "Relationships", "Stories"]
        },
        {
            id: 6,
            title: "Plant Identification Made Easy with AI Technology",
            category: "technology",
            author: "David Kim",
            date: "July 30, 2025",
            readTime: "6 min read",
            excerpt: "How our AI-powered plant identification feature is revolutionizing plant care and trading.",
            image: "🤖",
            tags: ["AI", "Technology", "Innovation"]
        },
        {
            id: 7,
            title: "Creating the Perfect Plant Trading Profile",
            category: "trading",
            author: "James Park",
            date: "July 28, 2025",
            readTime: "5 min read",
            excerpt: "Tips for creating an attractive profile that helps you connect with fellow plant enthusiasts.",
            image: "📱",
            tags: ["Profile", "Trading", "Tips"]
        },
        {
            id: 8,
            title: "The Science Behind Plant Growth and Development",
            category: "science",
            author: "Dr. Elena Rodriguez",
            date: "July 25, 2025",
            readTime: "9 min read",
            excerpt: "Understanding the biological processes that make plants grow and how to optimize conditions.",
            image: "🔬",
            tags: ["Science", "Biology", "Growth"]
        },
        {
            id: 9,
            title: "Indoor Air Quality: How Plants Improve Your Home Environment",
            category: "health",
            author: "Lisa Thompson",
            date: "July 22, 2025",
            readTime: "6 min read",
            excerpt: "Scientific evidence on how houseplants can improve air quality and mental well-being.",
            image: "🏠",
            tags: ["Health", "Air Quality", "Benefits"]
        }
    ];

    const categories = ['all', 'care', 'collecting', 'sustainability', 'community', 'technology', 'trading', 'science', 'health'];

    const featuredPost = blogPosts.find(post => post.featured);
    const regularPosts = blogPosts.filter(post => !post.featured);

    const filteredPosts = (selectedCategory === 'all' ? regularPosts : regularPosts.filter(post => post.category === selectedCategory))
        .filter(post => 
            post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
            post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
        );

    const handleGoBack = () => {
        window.history.back();
    };

    const handleReadPost = (postId) => {
        console.log(`Reading post ${postId}`);
        // Handle navigation to full post
    };

    return (
        <div className="blogs-container">
            {/* Navigation Header */}
            <div className="blogs-header">
                <div className="container">
                    <div className="row align-items-center py-4">
                        <div className="col-auto">
                            <button onClick={handleGoBack} className="btn back-btn">
                                <i className="fas fa-arrow-left me-2"></i>
                                Back
                            </button>
                        </div>
                        <div className="col text-center">
                            <h1 className="blogs-title mb-0">
                                <i className="fas fa-blog me-3"></i>
                                Plant Care Blog
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
                            <h2 className="hero-title">Growing Knowledge Together</h2>
                            <p className="hero-description">
                                Discover expert tips, plant care guides, and inspiring stories from our 
                                community of plant lovers. Learn, share, and grow your green knowledge.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Search and Filter */}
            <div className="container py-4">
                <div className="row justify-content-center mb-4">
                    <div className="col-lg-8">
                        <div className="search-section">
                            <div className="search-bar">
                                <i className="fas fa-search search-icon"></i>
                                <input
                                    type="text"
                                    className="form-control search-input"
                                    placeholder="Search articles, tips, and guides..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Category Filter */}
                <div className="row justify-content-center mb-5">
                    <div className="col-lg-10">
                        <div className="filter-buttons text-center">
                            {categories.map((category, index) => (
                                <button
                                    key={index}
                                    className={`btn filter-btn ${selectedCategory === category ? 'active' : ''}`}
                                    onClick={() => setSelectedCategory(category)}
                                >
                                    {category === 'all' ? 'All Posts' : category.charAt(0).toUpperCase() + category.slice(1)}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Featured Post */}
            {featuredPost && selectedCategory === 'all' && !searchTerm && (
                <div className="container mb-5">
                    <div className="row justify-content-center">
                        <div className="col-lg-10">
                            <div className="featured-post">
                                <div className="featured-badge">
                                    <i className="fas fa-star me-1"></i>
                                    Featured Article
                                </div>
                                <div className="row align-items-center">
                                    <div className="col-lg-8">
                                        <div className="featured-content">
                                            <div className="featured-meta">
                                                <span className="featured-category">{featuredPost.category}</span>
                                                <span className="featured-date">{featuredPost.date}</span>
                                                <span className="featured-read-time">{featuredPost.readTime}</span>
                                            </div>
                                            <h2 className="featured-title">{featuredPost.title}</h2>
                                            <p className="featured-excerpt">{featuredPost.excerpt}</p>
                                            <div className="featured-author">
                                                <span>By {featuredPost.author}</span>
                                            </div>
                                            <div className="featured-tags">
                                                {featuredPost.tags.map((tag, index) => (
                                                    <span key={index} className="tag">
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>
                                            <button 
                                                onClick={() => handleReadPost(featuredPost.id)}
                                                className="btn btn-success featured-read-btn"
                                            >
                                                Read Full Article
                                                <i className="fas fa-arrow-right ms-2"></i>
                                            </button>
                                        </div>
                                    </div>
                                    <div className="col-lg-4">
                                        <div className="featured-image">
                                            <span className="featured-emoji">{featuredPost.image}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Blog Posts Grid */}
            <div className="container py-5">
                <div className="row g-4">
                    {filteredPosts.length > 0 ? (
                        filteredPosts.map((post) => (
                            <div key={post.id} className="col-lg-4 col-md-6">
                                <div className="blog-card">
                                    <div className="blog-image">
                                        <span className="blog-emoji">{post.image}</span>
                                        <div className="blog-category-badge">
                                            {post.category}
                                        </div>
                                    </div>
                                    <div className="blog-content">
                                        <div className="blog-meta">
                                            <span className="blog-date">{post.date}</span>
                                            <span className="blog-read-time">{post.readTime}</span>
                                        </div>
                                        <h3 className="blog-title">{post.title}</h3>
                                        <p className="blog-excerpt">{post.excerpt}</p>
                                        <div className="blog-author">
                                            <span>By {post.author}</span>
                                        </div>
                                        <div className="blog-tags">
                                            {post.tags.map((tag, index) => (
                                                <span key={index} className="tag">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="blog-footer">
                                        <button 
                                            onClick={() => handleReadPost(post.id)}
                                            className="btn btn-outline-success read-btn"
                                        >
                                            Read More
                                            <i className="fas fa-arrow-right ms-2"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="col-12 text-center">
                            <div className="no-results">
                                <i className="fas fa-search no-results-icon"></i>
                                <h3 className="no-results-title">No Articles Found</h3>
                                <p className="no-results-description">
                                    Try adjusting your search terms or browse different categories.
                                </p>
                                <button 
                                    onClick={() => {
                                        setSearchTerm('');
                                        setSelectedCategory('all');
                                    }}
                                    className="btn btn-success"
                                >
                                    Show All Articles
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* Newsletter Signup */}
            <div className="container py-5">
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <div className="newsletter-section">
                            <div className="text-center">
                                <h3 className="newsletter-title">
                                    <i className="fas fa-envelope-open me-2"></i>
                                    Never Miss a Post
                                </h3>
                                <p className="newsletter-description">
                                    Subscribe to our newsletter and get the latest plant care tips, 
                                    trading insights, and community stories delivered to your inbox.
                                </p>
                                <div className="newsletter-form">
                                    <div className="row g-3 justify-content-center">
                                        <div className="col-md-6">
                                            <input
                                                type="email"
                                                className="form-control newsletter-input"
                                                placeholder="Enter your email address"
                                            />
                                        </div>
                                        <div className="col-md-4">
                                            <button className="btn btn-success newsletter-btn w-100">
                                                Subscribe Now
                                            </button>
                                        </div>
                                    </div>
                                    <small className="newsletter-disclaimer">
                                        No spam, unsubscribe anytime. Read our privacy policy.
                                    </small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Categories Overview */}
            <div className="container py-5">
                <div className="row justify-content-center mb-4">
                    <div className="col-lg-8 text-center">
                        <h3 className="section-title">Explore Our Categories</h3>
                        <p className="section-description">
                            Dive deep into specific topics and discover expert knowledge in every area of plant care.
                        </p>
                    </div>
                </div>
                <div className="row g-4">
                    {[
                        { name: 'Plant Care', icon: '🌱', desc: 'Essential tips for healthy plants', category: 'care' },
                        { name: 'Rare Plants', icon: '🌿', desc: 'Discover unique species', category: 'collecting' },
                        { name: 'Sustainability', icon: '🌍', desc: 'Eco-friendly gardening', category: 'sustainability' },
                        { name: 'Community', icon: '🤝', desc: 'Stories and connections', category: 'community' },
                        { name: 'Technology', icon: '🤖', desc: 'Innovation in plant care', category: 'technology' },
                        { name: 'Trading Tips', icon: '📱', desc: 'Successful plant trading', category: 'trading' }
                    ].map((cat, index) => (
                        <div key={index} className="col-lg-4 col-md-6">
                            <div 
                                className="category-card"
                                onClick={() => setSelectedCategory(cat.category)}
                                style={{ cursor: 'pointer' }}
                            >
                                <div className="category-icon">
                                    <span>{cat.icon}</span>
                                </div>
                                <h4 className="category-name">{cat.name}</h4>
                                <p className="category-description">{cat.desc}</p>
                                <div className="category-arrow">
                                    <i className="fas fa-arrow-right"></i>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BlogsPage;
