import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/AdminPage.css';
import axios from 'axios';

const AdminPage = () => {
  const [productCategoryFilter, setProductCategoryFilter] = useState("");
  const [productSearch, setProductSearch] = useState("");
  const [productCategory, setProductCategory] = useState("");
  const [activeTab, setActiveTab] = useState('dashboard');
  const [animatedStats, setAnimatedStats] = useState({
    users: 0,
    swaps: 0,
    revenue: 0,
    satisfaction: 0
  });
  const [viewProduct, setViewProduct] = useState(null);
  const [showAddModal, setShowAddModal] = useState(false);

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


  // This is Add Product Function
  const saveProduc = async (e) => {
    e.preventDefault();

    const data = {

    }

    try {
      const response = await axios.post("http://localhost:8080/api/v1/item/add/new/product", data);
      console.log(response.data);
      clearProductFields();
    } catch (error) {
      console.log(error);
    }

    
  }

  const clearProductFields = () => {
    // Clear all input fields in the add product modal
    const form = document.querySelector('.product-modal form');
    if (form) {
      form.reset();
    }
    setProductCategory("");
  }


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

  // Sample data for different sections
  const customersData = [
    { id: 1, name: 'Alice Johnson', email: 'alice@example.com', joinDate: '2024-01-15', status: 'Active', orders: 12, spent: 456.78 },
    { id: 2, name: 'Bob Smith', email: 'bob@example.com', joinDate: '2024-01-14', status: 'Pending', orders: 5, spent: 234.50 },
    { id: 3, name: 'Carol Davis', email: 'carol@example.com', joinDate: '2024-01-13', status: 'Active', orders: 8, spent: 678.90 },
    { id: 4, name: 'David Wilson', email: 'david@example.com', joinDate: '2024-01-12', status: 'Inactive', orders: 3, spent: 123.45 }
  ];

  const ordersData = [
    { id: '#ORD001', customer: 'Alice Johnson', date: '2024-01-20', total: 89.99, status: 'Completed', items: 3 },
    { id: '#ORD002', customer: 'Bob Smith', date: '2024-01-19', total: 156.78, status: 'Processing', items: 2 },
    { id: '#ORD003', customer: 'Carol Davis', date: '2024-01-18', total: 234.50, status: 'Shipped', items: 4 },
    { id: '#ORD004', customer: 'David Wilson', date: '2024-01-17', total: 67.89, status: 'Pending', items: 1 }
  ];

  const eventsData = [
    { id: 'EVT001', title: 'Urban Composting Workshop', date: '2024-02-15', attendees: 24, maxAttendees: 30, status: 'Upcoming' },
    { id: 'EVT002', title: 'Seed Swap & Social', date: '2024-02-20', attendees: 67, maxAttendees: 100, status: 'Upcoming' },
    { id: 'EVT003', title: 'Vertical Garden Design', date: '2024-01-25', attendees: 15, maxAttendees: 20, status: 'Completed' }
  ];

  const blogsData = [
    { id: 'BLG001', title: 'Getting Started with Urban Gardening', author: 'Admin', date: '2024-01-20', status: 'Published', views: 1240 },
    { id: 'BLG002', title: 'Composting in Small Spaces', author: 'Admin', date: '2024-01-18', status: 'Draft', views: 0 },
    { id: 'BLG003', title: 'Best Plants for Vertical Gardens', author: 'Admin', date: '2024-01-15', status: 'Published', views: 856 }
  ];

  // Render different sections based on activeTab
  const renderCustomersSection = () => (
    <div>
      <div className="mb-4">
        <div>
          <h2 className="fw-bold text-primary mb-1">Customer Management</h2>
          <p className="text-muted mb-0">Manage customer accounts and profiles</p>
        </div>
      </div>

      <div className="admin-card">
        <div className="card-header">
          <h5 className="card-title">All Customers</h5>
        </div>
        <div className="card-body">
          <div className="table-responsive">
            <table className="table table-hover">
              <thead>
                <tr>
                  <th>Customer</th>
                  <th>Email</th>
                  <th>Join Date</th>
                  <th>Orders</th>
                  <th>Total Spent</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {customersData.map(customer => (
                  <tr key={customer.id}>
                    <td>
                      <div className="user-info">
                        <div className="user-avatar">
                          {customer.name.split(' ').map(n => n[0]).join('')}
                        </div>
                        <span>{customer.name}</span>
                      </div>
                    </td>
                    <td>{customer.email}</td>
                    <td>{customer.joinDate}</td>
                    <td>{customer.orders}</td>
                    <td>${customer.spent.toFixed(2)}</td>
                    <td>
                      <span className={`badge ${getStatusBadge(customer.status)}`}>
                        {customer.status}
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
                        <button className="btn btn-sm btn-outline-danger">
                          <i className="fas fa-trash"></i>
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
  );

  const renderOrdersSection = () => (
    <div>
      <div className="mb-4">
        <div>
          <h2 className="fw-bold text-success mb-1">Order Management</h2>
          <p className="text-muted mb-0">Track and manage all orders</p>
        </div>
      </div>

      <div className="admin-card">
        <div className="card-header">
          <h5 className="card-title">Recent Orders</h5>
        </div>
        <div className="card-body">
          <div className="table-responsive">
            <table className="table table-hover">
              <thead>
                <tr>
                  <th>Order ID</th>
                  <th>Customer</th>
                  <th>Date</th>
                  <th>Items</th>
                  <th>Total</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {ordersData.map(order => (
                  <tr key={order.id}>
                    <td className="fw-semibold">{order.id}</td>
                    <td>{order.customer}</td>
                    <td>{order.date}</td>
                    <td>{order.items} items</td>
                    <td className="fw-semibold">${order.total}</td>
                    <td>
                      <span className={`badge ${getStatusBadge(order.status)}`}>
                        {order.status}
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
                        <button className="btn btn-sm btn-outline-warning">
                          <i className="fas fa-print"></i>
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
  );

  const renderProductsSection = () => (
    <div>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h2 className="fw-bold text-warning mb-1">Product Management</h2>
          <p className="text-muted mb-0">Add and manage products</p>
        </div>
        <button className="btn btn-warning" onClick={() => setShowAddModal(true)}>
          <i className="fas fa-plus me-2"></i>Add Product
        </button>
      </div>
      <div className="mb-3 d-flex gap-2" style={{ maxWidth: 600 }}>
        <input
          type="text"
          className="form-control"
          placeholder="Search product"
          value={productSearch}
          onChange={e => setProductSearch(e.target.value)}
          style={{ maxWidth: 250 }}
        />
        <select
          className="form-select"
          value={productCategoryFilter}
          onChange={e => setProductCategoryFilter(e.target.value)}
          style={{ maxWidth: 200 }}
        >
          <option value="">All Categories</option>
          <option value="Composting">Composting</option>
          <option value="Gardening">Gardening</option>
          <option value="Soil">Soil</option>
          <option value="Technology">Technology</option>
        </select>
      </div>
      {/* ...existing code... */}
      {/* Add Product Modal */}
      {showAddModal && (
        <div className="product-modal-overlay" style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', background: 'rgba(0,0,0,0.4)', zIndex: 9999, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div className="product-modal" style={{ background: '#fff', padding: '2rem', borderRadius: '10px', maxWidth: '400px', width: '100%', boxShadow: '0 2px 16px rgba(0,0,0,0.2)', position: 'relative', maxHeight: '80vh', overflowY: 'auto' }}>
            <button onClick={() => setShowAddModal(false)} style={{ position: 'absolute', top: '10px', right: '10px', background: 'none', border: 'none', fontSize: '1.5rem', cursor: 'pointer' }}>&times;</button>
            <h4 className="mb-3">Add Product</h4>
            <form>
              <div className="mb-3">
                <label className="form-label">Category</label>
                <select className="form-control" value={productCategory} onChange={e => setProductCategory(e.target.value)}>
                  <option value="">Select category</option>
                  <option value="Composting">Composting</option>
                  <option value="Gardening">Gardening</option>
                  <option value="Soil">Soil</option>
                  <option value="Technology">Technology</option>
                </select>
              </div>
              <div className="mb-3">
                <label className="form-label">Name</label>
                <input type="text" className="form-control" placeholder="Enter product name" />
              </div>
              <div className="mb-3">
                <label className="form-label">Description</label>
                <textarea className="form-control" rows="3" placeholder="Enter product description"></textarea>
              </div>
              <div className="mb-3">
                <label className="form-label">Image</label>
                <input type="file" className="form-control" accept="image/*" />
              </div>
              <div className="mb-3">
                <label className="form-label">Price</label>
                <input type="number" className="form-control" placeholder="Enter price" min="0" step="0.01" />
              </div>
              <div className="mb-3">
                <label className="form-label">Qty</label>
                <input type="number" className="form-control" placeholder="Enter quantity" min="0" step="1" />
              </div>
              <button type="submit" className="btn btn-warning w-100" onClick={saveProduc}>Add Product</button>
            </form>
          </div>
        </div>
      )}

      {/* Product Details Modal/Section */}
      {viewProduct && (
        <div className="product-modal-overlay" style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', background: 'rgba(0,0,0,0.4)', zIndex: 9999, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div className="product-modal" style={{ background: '#fff', padding: '2rem', borderRadius: '10px', maxWidth: '400px', width: '100%', boxShadow: '0 2px 16px rgba(0,0,0,0.2)', position: 'relative' }}>
            <button onClick={() => setViewProduct(null)} style={{ position: 'absolute', top: '10px', right: '10px', background: 'none', border: 'none', fontSize: '1.5rem', cursor: 'pointer' }}>&times;</button>
            <h4 className="mb-3">Product Details</h4>
            <img src={`https://via.placeholder.com/300x200/28a745/ffffff?text=${encodeURIComponent(viewProduct.name)}`} alt={viewProduct.name} style={{ width: '100%', borderRadius: '8px', marginBottom: '1rem' }} />
            <h5>{viewProduct.name}</h5>
            <p className="text-muted mb-1">{viewProduct.category}</p>
            <p>{viewProduct.description}</p>
            <div className="mb-2"><strong>Product ID:</strong> {viewProduct.id}</div>
            <div className="mb-2"><strong>Price:</strong> ${viewProduct.price}</div>
            <div className="mb-2"><strong>Stock:</strong> {viewProduct.stock} units</div>
            <div className="mb-2"><strong>Status:</strong> <span className={`badge ${getStatusBadge(viewProduct.status)}`}>{viewProduct.status}</span></div>
          </div>
        </div>
      )}
    </div>
  );

  const renderEventsSection = () => (
    <div>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h2 className="fw-bold text-info mb-1">Event Management</h2>
          <p className="text-muted mb-0">Create and manage events</p>
        </div>
        <button className="btn btn-info">
          <i className="fas fa-calendar-plus me-2"></i>New Event
        </button>
      </div>

      <div className="admin-card">
        <div className="card-header">
          <h5 className="card-title">All Events</h5>
        </div>
        <div className="card-body">
          <div className="table-responsive">
            <table className="table table-hover">
              <thead>
                <tr>
                  <th>Event ID</th>
                  <th>Title</th>
                  <th>Date</th>
                  <th>Attendees</th>
                  <th>Capacity</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {eventsData.map(event => (
                  <tr key={event.id}>
                    <td className="fw-semibold">{event.id}</td>
                    <td>{event.title}</td>
                    <td>{event.date}</td>
                    <td>{event.attendees}</td>
                    <td>{event.maxAttendees}</td>
                    <td>
                      <span className={`badge ${getStatusBadge(event.status)}`}>
                        {event.status}
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
                        <button className="btn btn-sm btn-outline-danger">
                          <i className="fas fa-trash"></i>
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
  );

  const renderBlogsSection = () => (
    <div>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h2 className="fw-bold text-dark mb-1">Blog Management</h2>
          <p className="text-muted mb-0">Create and publish blogs</p>
        </div>
        <button className="btn btn-dark">
          <i className="fas fa-edit me-2"></i>Write Blog
        </button>
      </div>

      <div className="admin-card">
        <div className="card-header">
          <h5 className="card-title">All Blog Posts</h5>
        </div>
        <div className="card-body">
          <div className="table-responsive">
            <table className="table table-hover">
              <thead>
                <tr>
                  <th>Post ID</th>
                  <th>Title</th>
                  <th>Author</th>
                  <th>Date</th>
                  <th>Views</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {blogsData.map(blog => (
                  <tr key={blog.id}>
                    <td className="fw-semibold">{blog.id}</td>
                    <td>{blog.title}</td>
                    <td>{blog.author}</td>
                    <td>{blog.date}</td>
                    <td>{blog.views}</td>
                    <td>
                      <span className={`badge ${getStatusBadge(blog.status)}`}>
                        {blog.status}
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
                        <button className="btn btn-sm btn-outline-danger">
                          <i className="fas fa-trash"></i>
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
  );

  const renderAnalyticsSection = () => (
    <div>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h2 className="fw-bold text-info mb-1">Analytics & Reports</h2>
          <p className="text-muted mb-0">View detailed analytics</p>
        </div>
        <button className="btn btn-info">
          <i className="fas fa-download me-2"></i>Export Report
        </button>
      </div>

      <div className="row g-4 mb-4">
        <div className="col-lg-3 col-md-6">
          <div className="admin-card text-center">
            <div className="card-body">
              <i className="fas fa-chart-line fa-2x text-primary mb-3"></i>
              <h4 className="fw-bold">Revenue Growth</h4>
              <h2 className="text-primary">+15%</h2>
              <p className="text-muted">This month vs last month</p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="admin-card text-center">
            <div className="card-body">
              <i className="fas fa-users fa-2x text-success mb-3"></i>
              <h4 className="fw-bold">New Customers</h4>
              <h2 className="text-success">342</h2>
              <p className="text-muted">This month</p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="admin-card text-center">
            <div className="card-body">
              <i className="fas fa-shopping-cart fa-2x text-warning mb-3"></i>
              <h4 className="fw-bold">Orders</h4>
              <h2 className="text-warning">1,284</h2>
              <p className="text-muted">Total this month</p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="admin-card text-center">
            <div className="card-body">
              <i className="fas fa-star fa-2x text-info mb-3"></i>
              <h4 className="fw-bold">Satisfaction</h4>
              <h2 className="text-info">4.8/5</h2>
              <p className="text-muted">Average rating</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderDashboardOverview = () => (
    <div>
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
                      <i className={`fas ${notification.type === 'success' ? 'fa-check' :
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
  );

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
            <h1 className="admin-title">
              {activeTab === 'dashboard' && 'Dashboard Overview'}
              {activeTab === 'customers' && 'Customer Management'}
              {activeTab === 'orders' && 'Order Management'}
              {activeTab === 'products' && 'Product Management'}
              {activeTab === 'analytics' && 'Analytics & Reports'}
              {activeTab === 'events' && 'Event Management'}
              {activeTab === 'blogs' && 'Blog Management'}
            </h1>
            <p className="admin-subtitle">
              {activeTab === 'dashboard' && "Welcome back, Admin! Here's what's happening today."}
              {activeTab === 'customers' && 'Manage your customer base and user accounts.'}
              {activeTab === 'orders' && 'Track and process customer orders.'}
              {activeTab === 'products' && 'Manage your product inventory and catalog.'}
              {activeTab === 'analytics' && 'View detailed reports and analytics.'}
              {activeTab === 'events' && 'Create and manage community events.'}
              {activeTab === 'blogs' && 'Create and publish blog content.'}
            </p>
          </div>
          <div className="admin-header-right">
            <div className="admin-user-info">
              <div className="admin-avatar">A</div>
              <span>Admin User</span>
            </div>
          </div>
        </div>

        <div className="admin-content">
          {activeTab === 'dashboard' && renderDashboardOverview()}
          {activeTab === 'customers' && renderCustomersSection()}
          {activeTab === 'orders' && renderOrdersSection()}
          {activeTab === 'products' && renderProductsSection()}
          {activeTab === 'analytics' && renderAnalyticsSection()}
          {activeTab === 'events' && renderEventsSection()}
          {activeTab === 'blogs' && renderBlogsSection()}
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
