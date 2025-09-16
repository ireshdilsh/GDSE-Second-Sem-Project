import React, { useState, useEffect } from 'react'
import '../styles/dashboard.css'
import '../styles/offcanvas.css'
import '../styles/write.css' // For using card styles
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

export default function Dashboard() {
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [showOffcanvas, setShowOffcanvas] = useState(true);
  const [publishedArticles, setPublishedArticles] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const pageSize = 9; // 9 articles per page (3 cards per row x 3 rows)
  const navigate = useNavigate();
  
  const [userData, setUserData] = useState({
    firstName: 'User',
    lastName: '',
    username: '@user',
    email: 'user@example.com'
  });

  // Load user data from localStorage
  useEffect(() => {
    const storedUserData = localStorage.getItem('userData');
    if (storedUserData) {
      const parsedData = JSON.parse(storedUserData);
      setUserData({
        firstName: parsedData.firstName || 'User',
        lastName: parsedData.lastName || '',
        username: parsedData.username ? `@${parsedData.username}` : '@user',
        email: parsedData.email || 'user@example.com'
      });
    }
    
    fetchPublishedArticles(0);
  }, []);
  
  // Function to fetch published articles with pagination
  const fetchPublishedArticles = async (page) => {
    setIsLoading(true);
    try {
      const response = await axios.get(`http://localhost:8080/api/v1/articles/all?page=${page}&size=${pageSize}`);
      
      if (response.status === 200) {
        const data = response.data.data;
        setPublishedArticles(data.content);
        setTotalPages(data.totalPages);
        setCurrentPage(page);
      } else {
        console.error('Failed to fetch articles');
      }
    } catch (error) {
      console.error('Error fetching published articles:', error);
    } finally {
      setIsLoading(false);
    }
  };
  
  // Handle page change
  const handlePageChange = (newPage) => {
    if (newPage >= 0 && newPage < totalPages) {
      fetchPublishedArticles(newPage);
    }
  };

  // Function to increment view count
  const incrementViewCount = async (articleId) => {
    try {
      const response = await axios.post(`http://localhost:8080/api/v1/articles/${articleId}/view`);
      if (response.status === 200) {
        // Update the local state with the new view count
        setPublishedArticles(prevArticles =>
          prevArticles.map(article =>
            article.id === articleId
              ? { ...article, viewCount: response.data.data.viewCount }
              : article
          )
        );
      }
    } catch (error) {
      console.error('Error incrementing view count:', error);
    }
  }

  // Handle article card click
  const handleArticleClick = (article) => {
    incrementViewCount(article.id);
    navigate(`/article/${article.id}`);
  }

  // Function to increment like count
  const incrementLikeCount = async (articleId, event) => {
    event.stopPropagation(); // Prevent card click when like button is clicked
    try {
      const response = await axios.post(`http://localhost:8080/api/v1/articles/${articleId}/like`);
      if (response.status === 200) {
        // Update the local state with the new like count
        setPublishedArticles(prevArticles =>
          prevArticles.map(article =>
            article.id === articleId
              ? { ...article, likeCount: response.data.data.likeCount }
              : article
          )
        )
      }
    } catch (error) {
      console.error('Error incrementing like count:', error);
    }
  }

  const getDisplayName = () => {
    return userData.firstName && userData.lastName 
      ? `${userData.firstName} ${userData.lastName}` 
      : userData.firstName || 'User';
  };

  const toggleProfileMenu = () => {
    setShowProfileMenu(!showProfileMenu);
  };

  const toggleOffcanvas = () => {
    setShowOffcanvas(!showOffcanvas);
  };

  // Auto open offcanvas on page load for larger screens
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1200) {
        setShowOffcanvas(true);
      } else {
        setShowOffcanvas(false);
      }
    };

    // Set initial state
    handleResize();

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Clean up
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className={`dashboard ${showOffcanvas ? 'content-shifted' : ''}`}>
        <nav className="dash-nav">
          <div className="left-side">
            <div className="logo-menu">
              <img 
                src="https://img.icons8.com/?size=100&id=59832&format=png&color=5D5D5D" 
                alt="menu-icon" 
                className="menu-icon"
                onClick={toggleOffcanvas}
              />
              <h1><h3><h4>Lexora</h4></h3></h1>
            </div>
            <input type="text" placeholder='Search'/>
          </div>
          <div className="right-side">
            <Link to="/writer/write"><img src="https://img.icons8.com/?size=100&id=Pi3IAam41WM2&format=png&color=5D5D5D" alt="write-img"/> Write</Link>
            <img src="https://img.icons8.com/?size=100&id=83989&format=png&color=5D5D5D" alt="notification-img" />
            <div className="profile" onClick={toggleProfileMenu}>
              <img src="https://img.icons8.com/?size=100&id=7819&format=png&color=5D5D5D" alt="profile-img" />
              <span>{getDisplayName()}</span>
              {showProfileMenu && (
                <div className="profile-popup" style={{width: '330px'}}>
                  <div className="profile-popup-header">
                    <div className="popup-user-container">
                      <img src="https://img.icons8.com/?size=100&id=7819&format=png&color=5D5D5D" alt="profile-img" />
                      <div className="profile-popup-info">
                        <h4>{getDisplayName()}</h4>
                        <p>{userData.email}</p>
                      </div>
                    </div>
                    <button className="close-popup" onClick={(e) => {
                      e.stopPropagation();
                      toggleProfileMenu();
                    }}>
                      &times;
                    </button>
                  </div>
                  <div className="profile-popup-menu">
                    <Link to="/profile">Profile</Link>
                    <Link to="/library">Library</Link>
                    <Link to="/stories">Stories</Link>
                    <Link to="/stats">Stats</Link>
                    <div className="divider"></div>
                    <Link to="/settings">Settings</Link>
                    <Link to="/referrals">Referrals</Link>
                    <div className="divider"></div>
                    <Link to="/help">Help</Link>
                    <button 
                      onClick={() => {
                        localStorage.removeItem('authToken');
                        localStorage.removeItem('userData');
                        window.location.href = '/';
                      }}
                      style={{
                        background: 'none',
                        border: 'none',
                        color: 'inherit',
                        textDecoration: 'none',
                        cursor: 'pointer',
                        padding: 0,
                        font: 'inherit'
                      }}
                    >
                      Sign out
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </nav>

        {/* Offcanvas Sidebar */}
        <div className={`offcanvas-sidebar ${showOffcanvas ? 'show' : ''}`}>
          <div className="offcanvas-header">
            <div className="user-info">
              <img src="https://img.icons8.com/?size=100&id=7819&format=png&color=5D5D5D" alt="profile-img" />
              <div className="user-details">
                <h4>{getDisplayName()}</h4>
                <p>{userData.username}</p>
              </div>
            </div>
          </div>
          <div className="offcanvas-content">
            <div className="offcanvas-section">
              <Link to="/" className="offcanvas-link active">
                <span>Home</span>
              </Link>
              <Link to="/notifications" className="offcanvas-link">
                <span>Notifications</span>
              </Link>
              <Link to="/lists" className="offcanvas-link">
                <span>Lists</span>
              </Link>
              <Link to="/stories" className="offcanvas-link">
                <span>Stories</span>
              </Link>
              <Link to="/stats" className="offcanvas-link">
                <span>Stats</span>
              </Link>
            </div>
            <div className="divider"></div>
            <div className="offcanvas-section">
              <h5>Recommended Topics</h5>
              <Link to="/topic/programming" className="topic-link">Programming</Link>
              <Link to="/topic/technology" className="topic-link">Technology</Link>
              <Link to="/topic/data-science" className="topic-link">Data Science</Link>
              <Link to="/topic/writing" className="topic-link">Writing</Link>
              <Link to="/topic/self-improvement" className="topic-link">Self Improvement</Link>
              <Link to="/topics" className="see-more-link">See more topics</Link>
            </div>
            <div className="divider"></div>
            <div className="offcanvas-section">
              <Link to="/settings" className="offcanvas-link">
                <span>Settings</span>
              </Link>
              <Link to="/help" className="offcanvas-link">
                <span>Help</span>
              </Link>
            </div>
          </div>
        </div>
        
        {/* Overlay for mobile */}
        {showOffcanvas && <div className="offcanvas-overlay" onClick={toggleOffcanvas}></div>}
        
        {/* Published Articles Section */}
        <div className="dashboard-content">
          <div className="content-header">
            <h2>Published Articles</h2>
            <p>Discover the latest articles from our writers</p>
          </div>
          
          {isLoading ? (
            <div className="loading-indicator">
              <p>Loading articles...</p>
            </div>
          ) : (
            <>
              {/* Articles Grid */}
              <div id="published-articles">
                {publishedArticles.length > 0 ? (
                  publishedArticles.map((article) => (
                    <div className="card" key={article.id} onClick={() => handleArticleClick(article)}>
                      <div className="card-body">
                        <h1>{article.title}</h1>
                        <h3>{article.subtitle}</h3>
                        <div className="article-meta">
                          <h5>Published on: {new Date(article.publishedAt).toLocaleDateString()}</h5>
                          <h5>Reading Time: {article.readTime}</h5>
                        </div>
                        <div className="article-stats">
                          <span className="view-count">
                            👁️ {article.viewCount || 0} views
                          </span>
                          <button 
                            className="like-button"
                            onClick={(e) => incrementLikeCount(article.id, e)}
                            style={{
                              background: 'none',
                              border: 'none',
                              cursor: 'pointer',
                              fontSize: '14px',
                              color: '#666',
                              display: 'flex',
                              alignItems: 'center',
                              gap: '5px'
                            }}
                          >
                            ❤️ {article.likeCount || 0}
                          </button>
                        </div>
                        <p id='categoryName'>{article.categoryName}</p>
                        <p style={{marginTop:'-80px',textAlign:'justify'}}>{article.content}</p>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="no-articles">
                    <p>No published articles available at the moment.</p>
                    <Link to="/writer/write" className="start-writing-btn">Start Writing</Link>
                  </div>
                )}
              </div>
              
              {/* Pagination */}
              {publishedArticles.length > 0 && (
                <div className="pagination">
                  <button 
                    onClick={() => handlePageChange(currentPage - 1)} 
                    disabled={currentPage === 0}
                    className="pagination-btn"
                  >
                    Previous
                  </button>
                  
                  <span className="page-info">
                    Page {currentPage + 1} of {totalPages}
                  </span>
                  
                  <button 
                    onClick={() => handlePageChange(currentPage + 1)} 
                    disabled={currentPage === totalPages - 1}
                    className="pagination-btn"
                  >
                    Next
                  </button>
                </div>
              )}
            </>
          )}
        </div>
    </div>
  )
}
