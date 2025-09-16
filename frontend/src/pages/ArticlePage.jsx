import React, { useState, useEffect } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import axios from 'axios'
import '../styles/article.css'

export default function ArticlePage() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [article, setArticle] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)
  const [isLiked, setIsLiked] = useState(false)

  useEffect(() => {
    if (id) {
      fetchArticle()
      incrementViewCount()
    }
  }, [id])

  // Fetch article by ID
  const fetchArticle = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/api/v1/articles/get/article/${id}`)
      
      if (response.status === 200) {
        setArticle(response.data.data)
      }
    } catch (error) {
      console.error('Error fetching article:', error)
      setError('Failed to load article')
    } finally {
      setIsLoading(false)
    }
  }

  // Increment view count when article is loaded
  const incrementViewCount = async () => {
    try {
      const response = await axios.post(`http://localhost:8080/api/v1/articles/${id}/view`)
      if (response.status === 200) {
        // Update article view count if article is already loaded
        setArticle(prevArticle => 
          prevArticle ? { ...prevArticle, viewCount: response.data.data.viewCount } : null
        )
      }
    } catch (error) {
      console.error('Error incrementing view count:', error)
    }
  }

  // Handle like button click
  const handleLike = async () => {
    try {
      const response = await axios.post(`http://localhost:8080/api/v1/articles/${id}/like`)
      if (response.status === 200) {
        setArticle(prevArticle => ({
          ...prevArticle,
          likeCount: response.data.data.likeCount
        }))
        setIsLiked(true)
        // Reset like animation after a short delay
        setTimeout(() => setIsLiked(false), 300)
      }
    } catch (error) {
      console.error('Error incrementing like count:', error)
    }
  }

  if (isLoading) {
    return (
      <div className="article-page">
        <div className="article-loading">
          <div className="loading-spinner"></div>
          <p>Loading article...</p>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="article-page">
        <div className="article-error">
          <h2>Error</h2>
          <p>{error}</p>
          <button onClick={() => navigate('/writer/dashboard')} className="back-btn">
            Back to Dashboard
          </button>
        </div>
      </div>
    )
  }

  if (!article) {
    return (
      <div className="article-page">
        <div className="article-error">
          <h2>Article Not Found</h2>
          <p>The article you're looking for doesn't exist.</p>
          <button onClick={() => navigate('/writer/dashboard')} className="back-btn">
            Back to Dashboard
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="article-page">
      {/* Navigation Header */}
      <nav className="article-nav">
        <div className="nav-left">
          <button onClick={() => navigate('/writer/dashboard')} className="back-button">
            ← Back to Dashboard
          </button>
        </div>
        <div className="nav-center">
          <Link to="/writer/dashboard" className="logo">Lexora</Link>
        </div>
        <div className="nav-right">
          <Link to="/writer/write" className="write-link">Write</Link>
        </div>
      </nav>

      {/* Article Content */}
      <article className="article-content">
        <header className="article-header">
          <h1 className="article-title">{article.title}</h1>
          {article.subtitle && (
            <h2 className="article-subtitle">{article.subtitle}</h2>
          )}
          
          <div className="article-meta">
            <div className="meta-info">
              <span className="publish-date">
                Published on {new Date(article.publishedAt).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </span>
              <span className="reading-time">• {article.readTime}</span>
              {article.categoryName && (
                <span className="category">• {article.categoryName}</span>
              )}
            </div>
          </div>
        </header>

        <div className="article-body">
          <div className="article-text">
            {article.content?.split('\n').map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>

        {/* Article Stats and Actions */}
        <div className="article-actions">
          <div className="article-stats">
            <span className="view-count">
              👁️ {article.viewCount || 0} views
            </span>
            <button 
              className={`like-button ${isLiked ? 'liked' : ''}`}
              onClick={handleLike}
            >
              ❤️ {article.likeCount || 0}
            </button>
          </div>
          
          <div className="article-share">
            <button className="share-button">Share</button>
          </div>
        </div>
      </article>

      {/* Related Articles or Back to Dashboard */}
      <div className="article-footer">
        <Link to="/writer/dashboard" className="back-to-dashboard">
          ← Back to all articles
        </Link>
      </div>
    </div>
  )
}