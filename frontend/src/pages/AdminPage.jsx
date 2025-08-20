import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/AdminPage.css';

const AdminPage = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [animatedStats, setAnimatedStats] = useState({
    users: 0,
    swaps: 0,
    revenue: 0,
    satisfaction: 0
  });

  // Sample data
  const notifications = [
    { id: 1, type: 'success', message: 'New user registration completed', time: '2 minutes ago' },
    { id: 2, type: 'warning', message: 'Swap requires admin approval', time: '15 minutes ago' },
    { id: 3, type: 'info', message: 'System maintenance scheduled', time: '1 hour ago' },
    { id: 4, type: 'success', message: 'Payment processed successfully', time: '2 hours ago' }
  ];

  const recentUsers = [
    { id: 1, name: 'Alice Johnson', email: 'alice@example.com', joinDate: '2024-01-15', status: 'Active' },
    { id: 2, name: 'Bob Smith', email: 'bob@example.com', joinDate: '2024-01-14', status: 'Pending' },
    { id: 3, name: 'Carol Davis', email: 'carol@example.com', joinDate: '2024-01-13', status: 'Active' },
    { id: 4, name: 'David Wilson', email: 'david@example.com', joinDate: '2024-01-12', status: 'Inactive' }
  ];



  // Animated stats effect
  useEffect(() => {
    const targets = { users: 15420, swaps: 3892, revenue: 284750, satisfaction: 98.5 };
    const duration = 2000;
    const steps = 60;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;
      const easeProgress = 1 - Math.pow(1 - progress, 3);

      setAnimatedStats({
        users: Math.floor(targets.users * easeProgress),
        swaps: Math.floor(targets.swaps * easeProgress),
        revenue: Math.floor(targets.revenue * easeProgress),
        satisfaction: Math.floor(targets.satisfaction * easeProgress * 100) / 100
      });

      if (currentStep >= steps) {
        clearInterval(timer);
        setAnimatedStats(targets);
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, []);

  const getStatusBadge = (status) => {
    switch (status) {
      case 'Active':
      case 'Completed':
        return 'bg-success';
      case 'Pending':
      case 'In Progress':
        return 'bg-warning';
      case 'Inactive':
        return 'bg-secondary';
      default:
        return 'bg-primary';
    }
  };

  return (
    <div className="admin-dashboard">
      <div className="admin-sidebar">
        <div className="admin-brand">
          <h3>UrbanGreen Admin</h3>
        </div>
        <nav className="admin-nav">
          <button 
            className={`admin-nav-item ${activeTab === 'dashboard' ? 'active' : ''}`}
            onClick={() => setActiveTab('dashboard')}
          >
            <i className="fas fa-tachometer-alt"></i>
            <span>Dashboard</span>
          </button>
          <button 
            className={`admin-nav-item ${activeTab === 'customers' ? 'active' : ''}`}
            onClick={() => setActiveTab('customers')}
          >
            <i className="fas fa-users"></i>
            <span>Customers</span>
          </button>
          <button 
            className={`admin-nav-item ${activeTab === 'orders' ? 'active' : ''}`}
            onClick={() => setActiveTab('orders')}
          >
            <i className="fas fa-shopping-cart"></i>
            <span>Orders</span>
          </button>
          <button 
            className={`admin-nav-item ${activeTab === 'products' ? 'active' : ''}`}
            onClick={() => setActiveTab('products')}
          >
            <i className="fas fa-box"></i>
            <span>Products</span>
          </button>
          <button 
            className={`admin-nav-item ${activeTab === 'analytics' ? 'active' : ''}`}
            onClick={() => setActiveTab('analytics')}
          >
            <i className="fas fa-chart-line"></i>
            <span>Analytics</span>
          </button>
          <button 
            className={`admin-nav-item ${activeTab === 'events' ? 'active' : ''}`}
            onClick={() => setActiveTab('events')}
          >
            <i className="fas fa-calendar-alt"></i>
            <span>Events</span>
          </button>
          <button 
            className={`admin-nav-item ${activeTab === 'blogs' ? 'active' : ''}`}
            onClick={() => setActiveTab('blogs')}
          >
            <i className="fas fa-blog"></i>
            <span>Blogs</span>
          </button>
          <Link to="/" className="admin-nav-item">
            <i className="fas fa-home"></i>
            <span>Back to Site</span>
          </Link>
        </nav>
      </div>

      <div className="admin-main">
        <div className="admin-header">
          <div className="admin-header-left">
            <h1 className="admin-title">Dashboard Overview</h1>
            <p className="admin-subtitle">Welcome back, Admin! Here's what's happening today.</p>
          </div>
          <div className="admin-header-right">
            <div className="admin-user-info">
              <div className="admin-avatar">A</div>
              <span>Admin User</span>
            </div>
          </div>
        </div>

        <div className="admin-content">
          {/* Stats Cards */}
          <div className="row g-4 mb-4">
            <div className="col-xl-3 col-lg-6">
              <div className="stat-card users-stat">
                <div className="stat-icon">
                  <i className="fas fa-users"></i>
                </div>
                <div className="stat-content">
                  <h3 className="stat-number">{animatedStats.users.toLocaleString()}</h3>
                  <p className="stat-label">Total Users</p>
                  <div className="stat-trend positive">
                    <i className="fas fa-arrow-up"></i>
                    <span>+12% from last month</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="col-xl-3 col-lg-6">
              <div className="stat-card swaps-stat">
                <div className="stat-icon">
                  <i className="fas fa-exchange-alt"></i>
                </div>
                <div className="stat-content">
                  <h3 className="stat-number">{animatedStats.swaps.toLocaleString()}</h3>
                  <p className="stat-label">Total Swaps</p>
                  <div className="stat-trend positive">
                    <i className="fas fa-arrow-up"></i>
                    <span>+8% from last month</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="col-xl-3 col-lg-6">
              <div className="stat-card revenue-stat">
                <div className="stat-icon">
                  <i className="fas fa-dollar-sign"></i>
                </div>
                <div className="stat-content">
                  <h3 className="stat-number">${animatedStats.revenue.toLocaleString()}</h3>
                  <p className="stat-label">Revenue</p>
                  <div className="stat-trend positive">
                    <i className="fas fa-arrow-up"></i>
                    <span>+15% from last month</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="col-xl-3 col-lg-6">
              <div className="stat-card satisfaction-stat">
                <div className="stat-icon">
                  <i className="fas fa-heart"></i>
                </div>
                <div className="stat-content">
                  <h3 className="stat-number">{animatedStats.satisfaction}%</h3>
                  <p className="stat-label">Satisfaction</p>
                  <div className="stat-trend positive">
                    <i className="fas fa-arrow-up"></i>
                    <span>+2% from last month</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Management Cards Grid */}
          <div className="row g-4 mb-4">
            <div className="col-xl-4 col-lg-6">
              <div className="management-card customers-card">
                <div className="management-header">
                  <div className="management-icon">
                    <i className="fas fa-users"></i>
                  </div>
                  <div className="management-info">
                    <h4>Customer Management</h4>
                    <p>Manage user accounts and profiles</p>
                  </div>
                </div>
                <div className="management-stats">
                  <div className="quick-stat">
                    <span className="stat-value">15,420</span>
                    <span className="stat-desc">Total Customers</span>
                  </div>
                  <div className="quick-stat">
                    <span className="stat-value">342</span>
                    <span className="stat-desc">New This Month</span>
                  </div>
                </div>
                <div className="management-actions">
                  <button className="btn btn-outline-primary btn-sm" onClick={() => setActiveTab('customers')}>
                    Manage Customers
                  </button>
                </div>
              </div>
            </div>

            <div className="col-xl-4 col-lg-6">
              <div className="management-card orders-card">
                <div className="management-header">
                  <div className="management-icon">
                    <i className="fas fa-shopping-cart"></i>
                  </div>
                  <div className="management-info">
                    <h4>Order Management</h4>
                    <p>Track and manage all orders</p>
                  </div>
                </div>
                <div className="management-stats">
                  <div className="quick-stat">
                    <span className="stat-value">3,892</span>
                    <span className="stat-desc">Total Orders</span>
                  </div>
                  <div className="quick-stat">
                    <span className="stat-value">127</span>
                    <span className="stat-desc">Pending</span>
                  </div>
                </div>
                <div className="management-actions">
                  <button className="btn btn-outline-success btn-sm" onClick={() => setActiveTab('orders')}>
                    Manage Orders
                  </button>
                </div>
              </div>
            </div>

            <div className="col-xl-4 col-lg-6">
              <div className="management-card products-card">
                <div className="management-header">
                  <div className="management-icon">
                    <i className="fas fa-box"></i>
                  </div>
                  <div className="management-info">
                    <h4>Product Management</h4>
                    <p>Add and manage products</p>
                  </div>
                </div>
                <div className="management-stats">
                  <div className="quick-stat">
                    <span className="stat-value">156</span>
                    <span className="stat-desc">Total Products</span>
                  </div>
                  <div className="quick-stat">
                    <span className="stat-value">12</span>
                    <span className="stat-desc">Low Stock</span>
                  </div>
                </div>
                <div className="management-actions">
                  <button className="btn btn-outline-warning btn-sm" onClick={() => setActiveTab('products')}>
                    Manage Products
                  </button>
                </div>
              </div>
            </div>

            <div className="col-xl-4 col-lg-6">
              <div className="management-card analytics-card">
                <div className="management-header">
                  <div className="management-icon">
                    <i className="fas fa-chart-line"></i>
                  </div>
                  <div className="management-info">
                    <h4>Analytics & Reports</h4>
                    <p>View detailed analytics</p>
                  </div>
                </div>
                <div className="management-stats">
                  <div className="quick-stat">
                    <span className="stat-value">98.5%</span>
                    <span className="stat-desc">Uptime</span>
                  </div>
                  <div className="quick-stat">
                    <span className="stat-value">4.8</span>
                    <span className="stat-desc">Avg Rating</span>
                  </div>
                </div>
                <div className="management-actions">
                  <button className="btn btn-outline-info btn-sm" onClick={() => setActiveTab('analytics')}>
                    View Analytics
                  </button>
                </div>
              </div>
            </div>

            <div className="col-xl-4 col-lg-6">
              <div className="management-card events-card">
                <div className="management-header">
                  <div className="management-icon">
                    <i className="fas fa-calendar-alt"></i>
                  </div>
                  <div className="management-info">
                    <h4>Event Management</h4>
                    <p>Create and manage events</p>
                  </div>
                </div>
                <div className="management-stats">
                  <div className="quick-stat">
                    <span className="stat-value">24</span>
                    <span className="stat-desc">Total Events</span>
                  </div>
                  <div className="quick-stat">
                    <span className="stat-value">8</span>
                    <span className="stat-desc">Upcoming</span>
                  </div>
                </div>
                <div className="management-actions">
                  <button className="btn btn-outline-secondary btn-sm" onClick={() => setActiveTab('events')}>
                    Manage Events
                  </button>
                </div>
              </div>
            </div>

            <div className="col-xl-4 col-lg-6">
              <div className="management-card blogs-card">
                <div className="management-header">
                  <div className="management-icon">
                    <i className="fas fa-blog"></i>
                  </div>
                  <div className="management-info">
                    <h4>Blog Management</h4>
                    <p>Create and publish blogs</p>
                  </div>
                </div>
                <div className="management-stats">
                  <div className="quick-stat">
                    <span className="stat-value">89</span>
                    <span className="stat-desc">Published Posts</span>
                  </div>
                  <div className="quick-stat">
                    <span className="stat-value">5</span>
                    <span className="stat-desc">Drafts</span>
                  </div>
                </div>
                <div className="management-actions">
                  <button className="btn btn-outline-dark btn-sm" onClick={() => setActiveTab('blogs')}>
                    Manage Blogs
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Actions and Recent Activity */}
          <div className="row g-4">
            {/* Recent Activity */}
            <div className="col-xl-8">
              <div className="admin-card">
                <div className="card-header">
                  <h5 className="card-title">Recent Activity</h5>
                  <button className="btn btn-outline-primary btn-sm">View All</button>
                </div>
                <div className="card-body">
                  <div className="activity-feed">
                    {notifications.map(notification => (
                      <div key={notification.id} className="activity-item">
                        <div className={`activity-icon activity-${notification.type}`}>
                          <i className={`fas ${
                            notification.type === 'success' ? 'fa-check' :
                            notification.type === 'warning' ? 'fa-exclamation' :
                            'fa-info'
                          }`}></i>
                        </div>
                        <div className="activity-content">
                          <p className="activity-message">{notification.message}</p>
                          <span className="activity-time">{notification.time}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="col-xl-4">
              <div className="admin-card">
                <div className="card-header">
                  <h5 className="card-title">Quick Actions</h5>
                </div>
                <div className="card-body">
                  <div className="quick-actions">
                    <button className="quick-action-btn" onClick={() => setActiveTab('customers')}>
                      <i className="fas fa-user-plus"></i>
                      <span>Add Customer</span>
                    </button>
                    <button className="quick-action-btn" onClick={() => setActiveTab('products')}>
                      <i className="fas fa-plus-circle"></i>
                      <span>Add Product</span>
                    </button>
                    <button className="quick-action-btn" onClick={() => setActiveTab('events')}>
                      <i className="fas fa-calendar-plus"></i>
                      <span>Create Event</span>
                    </button>
                    <button className="quick-action-btn" onClick={() => setActiveTab('blogs')}>
                      <i className="fas fa-edit"></i>
                      <span>Write Blog</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Recent Users Table */}
          <div className="row g-4 mt-2">
            <div className="col-12">
              <div className="admin-card">
                <div className="card-header">
                  <h5 className="card-title">Recent Users</h5>
                  <button className="btn btn-outline-primary btn-sm">View All</button>
                </div>
                <div className="card-body">
                  <div className="table-responsive">
                    <table className="table table-hover">
                      <thead>
                        <tr>
                          <th>Name</th>
                          <th>Email</th>
                          <th>Join Date</th>
                          <th>Status</th>
                          <th>Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {recentUsers.map(user => (
                          <tr key={user.id}>
                            <td>
                              <div className="user-info">
                                <div className="user-avatar">
                                  {user.name.split(' ').map(n => n[0]).join('')}
                                </div>
                                <span>{user.name}</span>
                              </div>
                            </td>
                            <td>{user.email}</td>
                            <td>{user.joinDate}</td>
                            <td>
                              <span className={`badge ${getStatusBadge(user.status)}`}>
                                {user.status}
                              </span>
                            </td>
                            <td>
                              <div className="action-buttons">
                                <button className="btn btn-sm btn-outline-primary">
                                  <i className="fas fa-eye"></i>
                                </button>
                                <button className="btn btn-sm btn-outline-success">
                                  <i className="fas fa-edit"></i>
                                </button>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
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

export default AdminPage;