import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/BlogPage.css';

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const blogPosts = [
    {
      id: 2,
      title: 'The Science of Companion Planting: What Really Works',
      author: 'Dr. Marcus Rivera',
      date: '2024-03-18',
      readTime: '8 min read',
      category: 'Growing Tips',
      tags: ['Companion Planting', 'Science', 'Advanced'],
      image: 'https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?w=600&h=400&fit=crop',
      excerpt: 'Separate fact from fiction in companion planting. We dive deep into the research to show you which plant partnerships actually boost your garden\'s productivity.',
      content: 'Companion planting has been practiced for centuries, but which combinations are based on science...',
      views: 1923,
      likes: 87,
      comments: 34
    },
    {
      id: 3,
      title: 'Building Your First Raised Bed: A Complete Guide',
      author: 'Sarah Martinez',
      date: '2024-03-15',
      readTime: '12 min read',
      category: 'DIY Projects',
      tags: ['Raised Beds', 'DIY', 'Getting Started'],
      image: 'https://images.unsplash.com/photo-1464207687429-7505649dae38?w=600&h=400&fit=crop',
      excerpt: 'Step-by-step instructions for creating your first raised bed garden, from choosing materials to filling with the perfect soil mix.',
      content: 'Raised beds offer better drainage, soil control, and easier maintenance...',
      views: 3421,
      likes: 203,
      comments: 67
    },
    {
      id: 4,
      title: 'Organic Pest Control: Natural Solutions That Work',
      author: 'James Thompson',
      date: '2024-03-12',
      readTime: '7 min read',
      category: 'Plant Care',
      tags: ['Pest Control', 'Organic', 'Natural Solutions'],
      image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?w=600&h=400&fit=crop',
      excerpt: 'Fight garden pests without harmful chemicals. Learn about beneficial insects, natural sprays, and preventive measures that protect your plants and the environment.',
      content: 'Chemical pesticides can harm beneficial insects and contaminate your food...',
      views: 2156,
      likes: 134,
      comments: 45
    },
    {
      id: 5,
      title: 'Urban Beekeeping: Supporting Pollinators in the City',
      author: 'Lisa Park',
      date: '2024-03-10',
      readTime: '9 min read',
      category: 'Sustainability',
      tags: ['Beekeeping', 'Pollinators', 'Urban Wildlife'],
      image: 'https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?w=600&h=400&fit=crop',
      excerpt: 'Urban beekeeping is growing in popularity. Learn how city dwellers are creating pollinator havens and producing their own honey.',
      content: 'Cities might seem like unlikely places for beehives, but urban beekeeping is thriving...',
      views: 1567,
      likes: 98,
      comments: 28
    },
    {
      id: 6,
      title: 'Seasonal Planting Guide: What to Grow When',
      author: 'Michael Wong',
      date: '2024-03-08',
      readTime: '11 min read',
      category: 'Seasonal Gardening',
      tags: ['Seasonal Planning', 'Planting Calendar', 'Year-Round Growing'],
      image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&h=400&fit=crop',
      excerpt: 'Master the art of succession planting and seasonal planning. Keep your garden productive all year with this comprehensive planting calendar.',
      content: 'Timing is everything in gardening. Plant too early and risk frost damage...',
      views: 2789,
      likes: 167,
      comments: 52
    },
    {
      id: 7,
      title: 'Water-Wise Gardening: Drought-Tolerant Plants for Urban Gardens',
      author: 'Rachel Green',
      date: '2024-03-05',
      readTime: '8 min read',
      category: 'Sustainability',
      tags: ['Water Conservation', 'Drought Tolerant', 'Climate Change'],
      image: 'https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?w=600&h=400&fit=crop',
      excerpt: 'Climate change demands smarter water use. Discover beautiful, productive plants that thrive with minimal irrigation.',
      content: 'Water scarcity is becoming a global concern, making water-wise gardening essential...',
      views: 1834,
      likes: 112,
      comments: 36
    },
    {
      id: 8,
      title: 'Fermentation 101: Preserving Your Harvest Naturally',
      author: 'Anna Kowalski',
      date: '2024-03-03',
      readTime: '10 min read',
      category: 'Food Preservation',
      tags: ['Fermentation', 'Food Preservation', 'Health Benefits'],
      image: 'https://images.unsplash.com/photo-1464207687429-7505649dae38?w=600&h=400&fit=crop',
      excerpt: 'Turn your garden surplus into probiotic-rich foods. Learn basic fermentation techniques that have preserved food for thousands of years.',
      content: 'Fermentation is one of humanity\'s oldest food preservation methods...',
      views: 2043,
      likes: 145,
      comments: 41
    }
  ];

  const categories = [
    'all',
    'Small Space Gardening',
    'Growing Tips',
    'DIY Projects',
    'Plant Care',
    'Sustainability',
    'Seasonal Gardening',
    'Food Preservation'
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const featuredPost = blogPosts.find(post => post.featured);

  return (
    <div className="blog-page">
      {/* Wave Effects */}
      <div className="blog-wave-container">
        <div className="blog-wave blog-wave-1"></div>
        <div className="blog-wave blog-wave-2"></div>
        <div className="blog-wave blog-wave-3"></div>
        <div className="blog-wave blog-wave-4"></div>
      </div>

      <div className="blog-container">
        {/* Header */}
        <div className="blog-header">
          <div className="section-badge">
            <span>📚 Knowledge Hub</span>
          </div>
          <h1 className="blog-title">
            <span className="gradient-text">Garden Blog</span> & Growing Guides
          </h1>
          <p className="blog-description">
            Expert tips, scientific insights, and practical advice to help you become a better urban gardener. 
            From beginner basics to advanced techniques, grow your knowledge along with your plants.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="blog-controls">
          <div className="search-section">
            <div className="search-bar">
              <i className="fas fa-search"></i>
              <input
                type="text"
                placeholder="Search articles, topics, or tags..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>

          <div className="category-filters">
            {categories.map(category => (
              <button
                key={category}
                className={`category-btn ${selectedCategory === category ? 'active' : ''}`}
                onClick={() => setSelectedCategory(category)}
              >
                {category === 'all' ? 'All Articles' : category}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Article */}
        {featuredPost && selectedCategory === 'all' && !searchTerm && (
          <div className="featured-article">
            <div className="featured-image">
              <img src={featuredPost.image} alt={featuredPost.title} />
              <div className="featured-badge">Featured Article</div>
            </div>
            <div className="featured-content">
              <div className="article-meta">
                <span className="article-category">{featuredPost.category}</span>
                <span className="article-date">{new Date(featuredPost.date).toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}</span>
                <span className="read-time">{featuredPost.readTime}</span>
              </div>
              
              <h2 className="featured-title">{featuredPost.title}</h2>
              <p className="featured-excerpt">{featuredPost.excerpt}</p>
              
              <div className="article-stats">
                <div className="stat-item">
                  <i className="fas fa-eye"></i>
                  <span>{featuredPost.views.toLocaleString()} views</span>
                </div>
                <div className="stat-item">
                  <i className="fas fa-heart"></i>
                  <span>{featuredPost.likes} likes</span>
                </div>
                <div className="stat-item">
                  <i className="fas fa-comment"></i>
                  <span>{featuredPost.comments} comments</span>
                </div>
              </div>

              <div className="article-tags">
                {featuredPost.tags.map((tag, index) => (
                  <span key={index} className="article-tag">{tag}</span>
                ))}
              </div>

              <div className="featured-actions">
                <button className="btn-read primary">
                  <span>Read Full Article</span>
                  <i className="fas fa-arrow-right"></i>
                </button>
                <div className="social-actions">
                  <button className="social-btn">
                    <i className="fas fa-heart"></i>
                  </button>
                  <button className="social-btn">
                    <i className="fas fa-bookmark"></i>
                  </button>
                  <button className="social-btn">
                    <i className="fas fa-share"></i>
                  </button>
                </div>
              </div>
              
              <div className="author-info">
                <div className="author-details">
                  <span className="author-name">By {featuredPost.author}</span>
                  <span className="author-title">Garden Expert</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Articles Grid */}
        <div className="articles-grid">
          <div className="grid-header">
            <h2>
              {searchTerm ? `Search Results (${filteredPosts.length})` : 
               selectedCategory === 'all' ? 'Latest Articles' : 
               `${selectedCategory} (${filteredPosts.length})`}
            </h2>
            <div className="sort-controls">
              <select className="sort-select">
                <option value="newest">Newest First</option>
                <option value="popular">Most Popular</option>
                <option value="trending">Trending</option>
                <option value="oldest">Oldest First</option>
              </select>
            </div>
          </div>

          <div className="articles-container">
            {filteredPosts.filter(post => !post.featured || selectedCategory !== 'all' || searchTerm).map(post => (
              <article key={post.id} className="article-card">
                <div className="article-image">
                  <img src={post.image} alt={post.title} />
                  <div className="article-category-badge">{post.category}</div>
                </div>

                <div className="article-content">
                  <div className="article-meta">
                    <span className="article-author">
                      <i className="fas fa-user"></i>
                      {post.author}
                    </span>
                    <span className="article-date">
                      <i className="fas fa-calendar"></i>
                      {new Date(post.date).toLocaleDateString('en-US', { 
                        month: 'short', 
                        day: 'numeric' 
                      })}
                    </span>
                    <span className="read-time">
                      <i className="fas fa-clock"></i>
                      {post.readTime}
                    </span>
                  </div>

                  <h3 className="article-title">{post.title}</h3>
                  <p className="article-excerpt">{post.excerpt}</p>

                  <div className="article-tags">
                    {post.tags.slice(0, 3).map((tag, index) => (
                      <span key={index} className="article-tag small">{tag}</span>
                    ))}
                  </div>

                  <div className="article-stats">
                    <div className="stats-left">
                      <span className="stat">
                        <i className="fas fa-eye"></i>
                        {post.views.toLocaleString()}
                      </span>
                      <span className="stat">
                        <i className="fas fa-heart"></i>
                        {post.likes}
                      </span>
                      <span className="stat">
                        <i className="fas fa-comment"></i>
                        {post.comments}
                      </span>
                    </div>
                    
                    <div className="article-actions">
                      <button className="action-btn">
                        <i className="fas fa-bookmark"></i>
                      </button>
                      <button className="action-btn">
                        <i className="fas fa-share"></i>
                      </button>
                    </div>
                  </div>

                  <button className="read-more-btn">
                    <span>Read Article</span>
                    <i className="fas fa-arrow-right"></i>
                  </button>
                </div>
              </article>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="no-results">
              <div className="no-results-icon">
                <i className="fas fa-search"></i>
              </div>
              <h3>No articles found</h3>
              <p>Try adjusting your search terms or explore different categories.</p>
              <button 
                className="clear-filters-btn"
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('all');
                }}
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>

        {/* Newsletter Section */}
        <div className="blog-newsletter">
          <div className="newsletter-content">
            <div className="newsletter-text">
              <h3>🌱 Weekly Garden Wisdom</h3>
              <p>Get expert tips, seasonal advice, and exclusive content delivered to your inbox every Tuesday.</p>
              <div className="newsletter-perks">
                <div className="perk-item">
                  <i className="fas fa-seedling"></i>
                  <span>Seasonal planting reminders</span>
                </div>
                <div className="perk-item">
                  <i className="fas fa-lightbulb"></i>
                  <span>Expert growing tips</span>
                </div>
                <div className="perk-item">
                  <i className="fas fa-gift"></i>
                  <span>Exclusive free resources</span>
                </div>
              </div>
            </div>
            
            <div className="newsletter-form">
              <input type="email" placeholder="Enter your email address" />
              <button className="subscribe-btn">
                <span>Subscribe</span>
                <i className="fas fa-arrow-right"></i>
              </button>
            </div>
          </div>
        </div>

        {/* Write for Us CTA */}
        <div className="write-cta">
          <div className="cta-content">
            <h2>Share Your Garden Knowledge</h2>
            <p>Have expertise to share? We're always looking for passionate gardeners to contribute to our community blog.</p>
            <div className="cta-benefits">
              <div className="benefit-item">
                <i className="fas fa-users"></i>
                <span>Reach thousands of gardeners</span>
              </div>
              <div className="benefit-item">
                <i className="fas fa-star"></i>
                <span>Build your reputation</span>
              </div>
              <div className="benefit-item">
                <i className="fas fa-handshake"></i>
                <span>Connect with experts</span>
              </div>
            </div>
            <div className="cta-buttons">
              <button className="btn-cta primary">
                <i className="fas fa-pen"></i>
                <span>Submit Article</span>
              </button>
              <Link to="/events" className="btn-cta secondary">
                <i className="fas fa-calendar"></i>
                <span>Join Events</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Back Button */}
        <div className="page-footer">
          <button className="back-btn" onClick={() => window.history.back()}>
            ← Back to Home
          </button>
        </div>
      </div>
    </div>
  );
}
