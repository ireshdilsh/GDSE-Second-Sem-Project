import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/SuccessStoriesPage.css';

export default function SuccessStoriesPage() {
  const stories = [
    {
      id: 1,
      title: 'From Concrete to Community Garden',
      author: 'Maria Gonzalez',
      location: 'Los Angeles, CA',
      image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&h=600&fit=crop',
      date: 'March 15, 2024',
      readTime: '5 min read',
      category: 'Community Impact',
      excerpt: 'How I transformed an abandoned lot into a thriving community garden that now feeds 50 families...',
      story: 'When I first moved to downtown LA, I was struck by the lack of green spaces. The empty lot next to my apartment had been vacant for years. With determination and help from neighbors, we turned it into something beautiful...'
    },
    {
      id: 2,
      title: 'Growing 300% More Food in Half the Space',
      author: 'James Park',
      location: 'New York, NY',
      image: 'https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?w=800&h=600&fit=crop',
      date: 'February 28, 2024',
      readTime: '4 min read',
      category: 'Innovation',
      excerpt: 'My vertical garden experiment exceeded all expectations, proving small spaces can yield big harvests...',
      story: 'Living in a small NYC apartment, I thought fresh vegetables were impossible. Then I discovered vertical gardening. My kitchen wall now produces more food than my parents\' backyard garden...'
    },
    {
      id: 3,
      title: 'Teaching Kids to Love Vegetables',
      author: 'Linda Chen',
      location: 'Portland, OR',
      image: 'https://images.unsplash.com/photo-1464207687429-7505649dae38?w=800&h=600&fit=crop',
      date: 'January 20, 2024',
      readTime: '6 min read',
      category: 'Education',
      excerpt: 'Starting a school garden program changed how 200 students think about food and nutrition...',
      story: 'As a teacher, I watched kids throw away vegetables daily. The school garden project started small but grew into something that transformed our entire cafeteria culture...'
    },
    {
      id: 4,
      title: 'Zero Waste, Maximum Flavor',
      author: 'Ahmed Hassan',
      location: 'Chicago, IL',
      image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?w=800&h=600&fit=crop',
      date: 'December 10, 2023',
      readTime: '7 min read',
      category: 'Sustainability',
      excerpt: 'My composting system turns kitchen waste into garden gold, creating a completely circular food system...',
      story: 'Food waste bothered me for years. Now, every scrap from my kitchen feeds my garden, which feeds my family. It\'s a perfect circle of sustainability...'
    },
    {
      id: 5,
      title: 'Healing Through Horticulture',
      author: 'Sarah Williams',
      location: 'Denver, CO',
      image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&h=600&fit=crop',
      date: 'November 5, 2023',
      readTime: '8 min read',
      category: 'Wellness',
      excerpt: 'Gardening became my therapy after a difficult period, showing me the healing power of growing things...',
      story: 'After losing my job, gardening saved me. Each seed planted was hope growing. Now I help others find peace through plants...'
    },
    {
      id: 6,
      title: 'Building Bridges Through Basil',
      author: 'Roberto Silva',
      location: 'Miami, FL',
      image: 'https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?w=800&h=600&fit=crop',
      date: 'October 15, 2023',
      readTime: '5 min read',
      category: 'Community',
      excerpt: 'A shared herb garden brought together neighbors from different cultures, creating lasting friendships...',
      story: 'Language barriers dissolved over shared gardening tasks. Now our neighborhood feels like a real community, all starting with a few herb plants...'
    }
  ];

  return (
    <div className="success-stories-page">
      {/* Wave Effects */}
      <div className="stories-wave-container">
        <div className="stories-wave stories-wave-1"></div>
        <div className="stories-wave stories-wave-2"></div>
        <div className="stories-wave stories-wave-3"></div>
        <div className="stories-wave stories-wave-4"></div>
      </div>

      <div className="stories-container">
        {/* Header */}
        <div className="stories-header">
          <div className="section-badge">
            <span>🌟 Inspiration</span>
          </div>
          <h1 className="stories-title">
            <span className="gradient-text">Success Stories</span> From Our Community
          </h1>
          <p className="stories-description">
            Real stories from urban gardeners who are making a difference in their communities. 
            Get inspired and discover what's possible when passion meets purpose.
          </p>
        </div>

        {/* Featured Story */}
        <div className="featured-story">
          <div className="featured-image">
            <img src={stories[0].image} alt={stories[0].title} />
            <div className="featured-overlay">
              <div className="featured-category">{stories[0].category}</div>
              <h2 className="featured-title">{stories[0].title}</h2>
              <p className="featured-excerpt">{stories[0].excerpt}</p>
              <div className="featured-meta">
                <div className="author-info">
                  <span className="author-name">{stories[0].author}</span>
                  <span className="author-location">{stories[0].location}</span>
                </div>
                <div className="story-stats">
                  <span className="read-time">{stories[0].readTime}</span>
                  <span className="story-date">{stories[0].date}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Story Categories */}
        <div className="story-categories">
          <div className="category-filters">
            <button className="category-filter active">All Stories</button>
            <button className="category-filter">Community Impact</button>
            <button className="category-filter">Innovation</button>
            <button className="category-filter">Education</button>
            <button className="category-filter">Sustainability</button>
            <button className="category-filter">Wellness</button>
          </div>
        </div>

        {/* Stories Grid */}
        <div className="stories-grid">
          {stories.slice(1).map(story => (
            <article key={story.id} className="story-card">
              <div className="story-image">
                <img src={story.image} alt={story.title} />
                <div className="story-category">{story.category}</div>
              </div>
              
              <div className="story-content">
                <div className="story-meta">
                  <span className="story-date">{story.date}</span>
                  <span className="read-time">{story.readTime}</span>
                </div>
                
                <h3 className="story-title">{story.title}</h3>
                <p className="story-excerpt">{story.excerpt}</p>
                
                <div className="story-author">
                  <div className="author-details">
                    <span className="author-name">{story.author}</span>
                    <span className="author-location">
                      <i className="fas fa-map-marker-alt"></i>
                      {story.location}
                    </span>
                  </div>
                </div>
                
                <button className="read-more-btn">
                  <span>Read Full Story</span>
                  <i className="fas fa-arrow-right"></i>
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Share Your Story CTA */}
        <div className="share-story-cta">
          <div className="cta-content">
            <h2>Have a Success Story to Share?</h2>
            <p>Inspire others with your gardening journey. Your story could be the motivation someone needs to start their own urban garden!</p>
            <div className="cta-buttons">
              <button className="btn-cta primary">
                <i className="fas fa-pen"></i>
                <span>Share Your Story</span>
              </button>
              <Link to="/find-gardeners" className="btn-cta secondary">
                <i className="fas fa-users"></i>
                <span>Connect with Gardeners</span>
              </Link>
            </div>
          </div>
          <div className="cta-illustration">
            <div className="success-stats">
              <div className="stat-item">
                <div className="stat-number">500+</div>
                <div className="stat-label">Stories Shared</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">50K+</div>
                <div className="stat-label">Lives Inspired</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">200%</div>
                <div className="stat-label">Average Yield Increase</div>
              </div>
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
