import React, { useState, useRef, useEffect } from 'react';

const ModernNavbar = ({ user, onTabChange, activeTab, onBlogsClick }) => {
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const profileMenuRef = useRef(null);
  const notificationRef = useRef(null);

  // Close menus when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (profileMenuRef.current && !profileMenuRef.current.contains(event.target)) {
        setShowProfileMenu(false);
      }
      if (notificationRef.current && !notificationRef.current.contains(event.target)) {
        setShowNotifications(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleProfileClick = () => {
    setShowProfileMenu(!showProfileMenu);
    setShowNotifications(false);
  };

  const handleNotificationClick = () => {
    setShowNotifications(!showNotifications);
    setShowProfileMenu(false);
  };

  const handleMenuItemClick = (tabId) => {
    onTabChange(tabId);
    setShowProfileMenu(false);
  };

  const notifications = [
    {
      id: 1,
      type: 'swap',
      message: 'Sarah wants to swap her Monstera for your Fiddle Leaf Fig',
      time: '2 minutes ago',
      unread: true
    },
    {
      id: 2,
      type: 'message',
      message: 'New message from Plant Community',
      time: '1 hour ago',
      unread: true
    },
    {
      id: 3,
      type: 'reminder',
      message: 'Water your Snake Plant today',
      time: '3 hours ago',
      unread: false
    }
  ];

  return (
    <nav className="navbar navbar-expand-lg bg-white shadow-sm border-bottom sticky-top">
      <div className="container-fluid px-4">
        {/* Brand Logo */}
        <div className="navbar-brand d-flex align-items-center mb-0">
          <div className="d-flex align-items-center">
            <div 
              className="rounded-circle d-flex align-items-center justify-content-center me-3"
              style={{ 
                background: 'linear-gradient(135deg, #22c55e 0%, #16a34a 100%)',
                width: '45px',
                height: '45px'
              }}
            >
              <i className="fas fa-seedling text-white fs-5"></i>
            </div>
            <div>
              <div className="fw-bold" style={{ color: '#16a34a', fontSize: '1.4rem' }}>
                Grow & Swap
              </div>
            </div>
          </div>
        </div>

        {/* Center Navigation Links - Hidden on mobile */}
        <div className="d-none d-lg-flex flex-grow-1 justify-content-center">
          <div className="nav nav-pills">
            {[
              { id: 'dashboard', label: 'Dashboard', icon: 'fas fa-home' },
              { id: 'greenai', label: 'GreenAI', icon: 'fas fa-robot' },
              { id: 'trades', label: 'Trades', icon: 'fas fa-exchange-alt' },
              { id: 'community', label: 'Community', icon: 'fas fa-users' }
            ].map(item => (
              <button
                key={item.id}
                className={`nav-link btn px-4 py-2 mx-1 rounded-pill ${
                  activeTab === item.id 
                    ? 'active bg-success text-white' 
                    : 'text-dark hover-bg-light'
                }`}
                onClick={() => onTabChange(item.id)}
                style={{
                  transition: 'all 0.3s ease',
                  border: 'none',
                  fontWeight: '500'
                }}
              >
                <i className={`${item.icon} me-2`}></i>
                {item.label}
              </button>
            ))}
          </div>
        </div>

        {/* Right Side Actions */}
        <div className="d-flex align-items-center gap-3">
          {/* Search Bar */}
          <div className="position-relative d-none d-md-block">
            <input 
              type="text" 
              className="form-control rounded-pill"
              placeholder="Search plants, users..."
              style={{
                width: '280px',
                paddingLeft: '45px',
                border: '1px solid #e5e7eb',
                backgroundColor: '#f9fafb'
              }}
            />
            <i className="fas fa-search position-absolute text-muted" 
               style={{left: '15px', top: '50%', transform: 'translateY(-50%)'}}></i>
          </div>

          {/* Notifications */}
          <div className="position-relative" ref={notificationRef}>
            <button 
              className="btn btn-link text-muted p-2 position-relative rounded-circle"
              onClick={handleNotificationClick}
              style={{ 
                width: '44px', 
                height: '44px',
                backgroundColor: showNotifications ? '#f3f4f6' : 'transparent',
                transition: 'all 0.2s ease'
              }}
            >
              <i className="fas fa-bell fs-5"></i>
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" 
                    style={{fontSize: '0.65em'}}>
                {notifications.filter(n => n.unread).length}
              </span>
            </button>

            {/* Notifications Dropdown */}
            {showNotifications && (
              <div className="position-absolute end-0 mt-2 bg-white border rounded-3 shadow-lg" 
                   style={{width: '350px', zIndex: 1050}}>
                <div className="p-3 border-bottom">
                  <div className="d-flex justify-content-between align-items-center">
                    <h6 className="mb-0 fw-bold">Notifications</h6>
                    <span className="badge bg-success bg-opacity-10 text-success">
                      {notifications.filter(n => n.unread).length} new
                    </span>
                  </div>
                </div>
                
                <div className="py-2" style={{ maxHeight: '300px', overflowY: 'auto' }}>
                  {notifications.map(notification => (
                    <div 
                      key={notification.id}
                      className={`px-3 py-2 border-bottom ${notification.unread ? 'bg-light bg-opacity-50' : ''}`}
                      style={{ cursor: 'pointer' }}
                    >
                      <div className="d-flex align-items-start">
                        <div className="me-3 mt-1">
                          <i className={`fas ${
                            notification.type === 'swap' ? 'fa-exchange-alt text-primary' :
                            notification.type === 'message' ? 'fa-envelope text-info' :
                            'fa-bell text-warning'
                          }`}></i>
                        </div>
                        <div className="flex-grow-1">
                          <div className="fw-medium text-dark small mb-1">
                            {notification.message}
                          </div>
                          <div className="text-muted" style={{ fontSize: '0.75rem' }}>
                            {notification.time}
                          </div>
                        </div>
                        {notification.unread && (
                          <div className="bg-success rounded-circle" style={{width: '8px', height: '8px'}}></div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="p-2 border-top text-center">
                  <button className="btn btn-sm btn-link text-success">
                    View All Notifications
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Profile Menu */}
          <div className="position-relative" ref={profileMenuRef}>
            <button
              className="btn d-flex align-items-center gap-2 rounded-pill p-2"
              onClick={handleProfileClick}
              style={{
                border: showProfileMenu ? '2px solid #22c55e' : '2px solid transparent',
                backgroundColor: showProfileMenu ? '#f0fdf4' : 'transparent',
                transition: 'all 0.2s ease'
              }}
            >
              <img 
                src={user.avatar} 
                alt={user.name}
                className="rounded-circle"
                style={{ width: '36px', height: '36px', objectFit: 'cover' }}
              />
              <div className="text-start d-none d-md-block me-2">
                <div className="fw-bold small text-dark">{user.name}</div>
                <div className="text-muted" style={{ fontSize: '0.75rem' }}>{user.level}</div>
              </div>
              <i className={`fas fa-chevron-down text-muted transition-transform ${showProfileMenu ? 'rotate-180' : ''}`} 
                 style={{ fontSize: '0.8rem', transition: 'transform 0.2s ease' }}></i>
            </button>
            
            {/* Profile Dropdown Menu */}
            {showProfileMenu && (
              <div className="position-absolute end-0 mt-2 bg-white border rounded-3 shadow-lg" 
                   style={{width: '300px', zIndex: 1050}}>
                <div className="p-4 border-bottom">
                  <div className="d-flex align-items-center mb-3">
                    <img 
                      src={user.avatar} 
                      alt="Profile" 
                      className="rounded-circle me-3"
                      width="55" 
                      height="55"
                      style={{objectFit: 'cover'}}
                    />
                    <div className="flex-grow-1">
                      <div className="fw-bold text-dark mb-1">{user.name}</div>
                      <div className="text-muted small mb-2">{user.email}</div>
                      <div className="d-flex align-items-center gap-2">
                        <span className="badge bg-success bg-opacity-10 text-success small">
                          ⭐ {user.reputation}
                        </span>
                        <span className="badge bg-primary bg-opacity-10 text-primary small">
                          {user.level}
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="row text-center">
                    <div className="col-6">
                      <div className="fw-bold text-success">{user.plantsOwned}</div>
                      <div className="text-muted small">Plants</div>
                    </div>
                    <div className="col-6">
                      <div className="fw-bold text-primary">{user.swapsCompleted}</div>
                      <div className="text-muted small">Swaps</div>
                    </div>
                  </div>
                </div>
                
                <div className="py-2">
                  {[
                    { id: 'profile', icon: 'fas fa-user', label: 'My Profile', color: 'text-primary' },
                    { id: 'blogs', icon: 'fas fa-blog', label: 'My Blogs', color: 'text-warning', isSpecial: true },
                    { id: 'greenai', icon: 'fas fa-robot', label: 'GreenAI Assistant', color: 'text-success' },
                    { id: 'trades', icon: 'fas fa-exchange-alt', label: 'Trade History', color: 'text-info' },
                    { id: 'settings', icon: 'fas fa-cog', label: 'Settings', color: 'text-muted' }
                  ].map(item => (
                    <button 
                      key={item.id}
                      className="dropdown-item d-flex align-items-center px-4 py-3 border-0 bg-transparent w-100 text-start"
                      onClick={() => item.isSpecial ? onBlogsClick?.() : handleMenuItemClick(item.id)}
                      style={{ transition: 'background-color 0.2s ease' }}
                    >
                      <i className={`${item.icon} me-3 ${item.color}`} style={{ width: '16px' }}></i>
                      <span className="text-dark">{item.label}</span>
                    </button>
                  ))}
                  
                  <div className="dropdown-divider mx-4"></div>
                  
                  <button 
                    className="dropdown-item d-flex align-items-center px-4 py-3 border-0 bg-transparent w-100 text-start text-danger"
                    onClick={() => {
                      setShowProfileMenu(false);
                      // Handle logout
                    }}
                    style={{ transition: 'background-color 0.2s ease' }}
                  >
                    <i className="fas fa-sign-out-alt me-3" style={{ width: '16px' }}></i>
                    Logout
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default ModernNavbar;
