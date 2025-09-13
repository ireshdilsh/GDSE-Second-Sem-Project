import React, { useState, useEffect } from 'react'
import '../styles/dashboard.css'
import '../styles/offcanvas.css'
import { Link } from 'react-router-dom'

export default function Dashboard() {
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [showOffcanvas, setShowOffcanvas] = useState(true);
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
  }, []);

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
              <h1><h1><h4>Lexora</h4></h1></h1>
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
                    <Link to="/">Sign out</Link>
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
    </div>
  )
}
