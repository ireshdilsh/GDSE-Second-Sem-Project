import React, { useState} from 'react';
import ModernNavbar from '../components/ModernNavbar';
import GreenAI from '../components/GreenAI';
import BlogsPopup from '../components/BlogsPopup';
import '../components/ModernNavbar.css';

const UserDashboard = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [showBlogsPopup, setShowBlogsPopup] = useState(false);
  
  const [user] = useState({
    name: 'John Gardener',
    email: 'john@growswap.com',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
    joinDate: '2024-01-15',
    plantsOwned: 32,
    swapsCompleted: 18,
    reputation: 4.9,
    level: 'Expert Gardener'
  });

  const [plants] = useState([
    { id: 1, name: 'Monstera Deliciosa', health: '95%', nextWater: 'Tomorrow', image: '/src/assets/planters/1.jpg', category: 'Indoor', status: 'Thriving' },
    { id: 2, name: 'Snake Plant', health: '88%', nextWater: '3 days', image: '/src/assets/planters/2.jpg', category: 'Indoor', status: 'Good' },
    { id: 3, name: 'Peace Lily', health: '92%', nextWater: 'Today', image: '/src/assets/planters/3.jpg', category: 'Indoor', status: 'Thriving' },
    { id: 4, name: 'Rubber Plant', health: '78%', nextWater: 'Overdue', image: '/src/assets/planters/4.jpg', category: 'Indoor', status: 'Needs Care' }
  ]);

  const [sellingProducts] = useState([
    { 
      id: 1, 
      name: 'Monstera Deliciosa', 
      price: '$45.00', 
      originalPrice: '$65.00',
      image: '/src/assets/planters/1.jpg', 
      category: 'Indoor Plants', 
      rating: 4.8,
      reviews: 124,
      discount: '30%',
      status: 'Available',
      description: 'Beautiful large-leafed plant perfect for indoor decoration'
    },
    { 
      id: 2, 
      name: 'Snake Plant', 
      price: '$25.00', 
      originalPrice: '$35.00',
      image: '/src/assets/planters/2.jpg', 
      category: 'Low Maintenance', 
      rating: 4.9,
      reviews: 89,
      discount: '28%',
      status: 'Available',
      description: 'Low maintenance plant that purifies air naturally'
    },
    { 
      id: 3, 
      name: 'Peace Lily', 
      price: '$32.00', 
      originalPrice: '$42.00',
      image: '/src/assets/planters/3.jpg', 
      category: 'Flowering Plants', 
      rating: 4.7,
      reviews: 156,
      discount: '23%',
      status: 'Available',
      description: 'Elegant flowering plant that blooms beautiful white flowers'
    },
    { 
      id: 4, 
      name: 'Rubber Plant', 
      price: '$38.00', 
      originalPrice: '$50.00',
      image: '/src/assets/planters/4.jpg', 
      category: 'Decorative Plants', 
      rating: 4.6,
      reviews: 203,
      discount: '24%',
      status: 'Available',
      description: 'Glossy-leafed plant that adds elegance to any space'
    },
    { 
      id: 5, 
      name: 'Fiddle Leaf Fig', 
      price: '$85.00', 
      originalPrice: '$120.00',
      image: '/src/assets/planters/5.jpg', 
      category: 'Statement Plants', 
      rating: 4.9,
      reviews: 78,
      discount: '29%',
      status: 'Available',
      description: 'Trendy large plant perfect as a statement piece'
    },
    { 
      id: 6, 
      name: 'Spider Plant', 
      price: '$18.00', 
      originalPrice: '$25.00',
      image: '/src/assets/planters/6.jpg', 
      category: 'Easy Care', 
      rating: 4.8,
      reviews: 145,
      discount: '28%',
      status: 'Available',
      description: 'Easy to care for plant that produces baby plants'
    }
  ]);

  const renderDashboard = () => (
    <div>
      {/* Header */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h2 className="fw-bold text-dark mb-1">Selling Products</h2>
          <p className="text-muted mb-0">Manage your plant collection for sale</p>
        </div>
      </div>

      {/* Selling Products Grid */}
      <div className="row g-4">
        {sellingProducts.map((product) => (
          <div key={product.id} className="col-xl-4 col-lg-6 col-md-6">
            <div className="card border-0 shadow-sm h-100 position-relative overflow-hidden">
              {/* Discount Badge */}
              {product.discount && (
                <div className="position-absolute top-0 start-0 bg-danger text-white px-2 py-1 m-2 rounded-pill small fw-bold" style={{zIndex: 1}}>
                  -{product.discount}
                </div>
              )}
              
              {/* Product Image */}
              <div className="position-relative" style={{height: '200px'}}>
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="card-img-top w-100 h-100"
                  style={{objectFit: 'cover'}}
                />
                <div className="position-absolute top-0 end-0 p-2">
                  <button className="btn btn-light btn-sm rounded-circle">
                    <i className="fas fa-heart text-muted"></i>
                  </button>
                </div>
              </div>

              <div className="card-body">
                {/* Category Badge */}
                <span className="badge bg-success bg-opacity-10 text-success small mb-2">
                  {product.category}
                </span>
                
                {/* Product Title */}
                <h5 className="card-title fw-bold mb-2">{product.name}</h5>
                
                {/* Description */}
                <p className="card-text text-muted small mb-3">
                  {product.description}
                </p>
                
                {/* Rating */}
                <div className="d-flex align-items-center mb-3">
                  <div className="d-flex align-items-center me-2">
                    {[...Array(5)].map((_, i) => (
                      <i 
                        key={i} 
                        className={`fas fa-star ${i < Math.floor(product.rating) ? 'text-warning' : 'text-muted'}`}
                        style={{fontSize: '0.8rem'}}
                      ></i>
                    ))}
                  </div>
                  <span className="small text-muted">
                    {product.rating} ({product.reviews} reviews)
                  </span>
                </div>
                
                {/* Price */}
                <div className="d-flex align-items-center justify-content-between mb-3">
                  <div>
                    <span className="fw-bold text-success fs-5 me-2">{product.price}</span>
                    <span className="text-muted text-decoration-line-through small">
                      {product.originalPrice}
                    </span>
                  </div>
                  <span className={`badge ${product.status === 'Available' ? 'bg-success' : 'bg-warning'}`}>
                    {product.status}
                  </span>
                </div>
                
                {/* Action Buttons */}
                <div className="d-flex gap-2">
                  <button className="btn btn-primary flex-fill">
                    <i className="fas fa-shopping-cart me-1"></i>
                    Buy Now
                  </button>
                  <button className="btn btn-outline-secondary">
                    <i className="fas fa-eye"></i>
                  </button>
                  <button className="btn btn-outline-secondary">
                    <i className="fas fa-share"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderPlants = () => (
    <div>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h4 className="mb-1">My Garden Collection</h4>
          <p className="text-muted mb-0">{plants.length} plants in your care</p>
        </div>
        <div className="d-flex gap-2">
          <button className="btn btn-outline-secondary">
            <i className="bi bi-grid me-2"></i>Grid
          </button>
          <button className="btn btn-success">
            <i className="bi bi-plus-lg me-2"></i>Add Plant
          </button>
        </div>
      </div>

      <div className="row g-4">
        {plants.map((plant) => (
          <div key={plant.id} className="col-xl-3 col-lg-4 col-md-6">
            <div className="card border-0 shadow-sm h-100 position-relative overflow-hidden">
              <div className="position-relative">
                <img 
                  src={plant.image} 
                  alt={plant.name} 
                  className="card-img-top"
                  style={{ height: '200px', objectFit: 'cover' }}
                />
                <div className={`position-absolute top-0 end-0 m-2 badge ${
                  plant.status === 'Thriving' ? 'bg-success' : 
                  plant.status === 'Good' ? 'bg-primary' : 'bg-warning'
                }`}>
                  {plant.status}
                </div>
                <div className="position-absolute bottom-0 start-0 end-0 bg-gradient" 
                     style={{ background: 'linear-gradient(transparent, rgba(0,0,0,0.7))', height: '60px' }}>
                </div>
              </div>
              
              <div className="card-body">
                <h6 className="card-title fw-bold mb-2">{plant.name}</h6>
                <div className="mb-3">
                  <div className="d-flex justify-content-between align-items-center mb-2">
                    <span className="small text-muted">Health Status</span>
                    <span className="badge bg-light text-dark">{plant.health}</span>
                  </div>
                  <div className="progress" style={{ height: '4px' }}>
                    <div 
                      className={`progress-bar ${
                        parseInt(plant.health) > 90 ? 'bg-success' : 
                        parseInt(plant.health) > 80 ? 'bg-primary' : 'bg-warning'
                      }`}
                      style={{ width: plant.health }}
                    ></div>
                  </div>
                </div>
                
                <div className="d-flex justify-content-between align-items-center text-small">
                  <span className="text-muted">Next watering:</span>
                  <span className={`fw-medium ${plant.nextWater === 'Overdue' ? 'text-danger' : 'text-success'}`}>
                    {plant.nextWater}
                  </span>
                </div>
              </div>
              
              <div className="card-footer bg-light border-0">
                <div className="d-flex justify-content-between">
                  <button className="btn btn-sm btn-outline-primary">💧 Water</button>
                  <button className="btn btn-sm btn-outline-secondary">📝 Notes</button>
                  <button className="btn btn-sm btn-outline-success">🔄 Trade</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderContent = () => {
    switch(activeTab) {
      case 'dashboard': return renderDashboard();
      case 'greenai': return <GreenAI />;
      case 'plants': return renderPlants();
      case 'trades': return <div className="text-center py-5"><h4>Trade History</h4><p className="text-muted">Coming soon...</p></div>;
      case 'community': return <div className="text-center py-5"><h4>Community</h4><p className="text-muted">Coming soon...</p></div>;
      case 'profile': return <div className="text-center py-5"><h4>Profile Settings</h4><p className="text-muted">Coming soon...</p></div>;
      case 'settings': return <div className="text-center py-5"><h4>Settings</h4><p className="text-muted">Coming soon...</p></div>;
      default: return renderDashboard();
    }
  };

  return (
    <div className="min-vh-100" style={{ background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)' }}>
      {/* Modern Navigation Bar */}
      <ModernNavbar 
        user={user} 
        onTabChange={setActiveTab} 
        activeTab={activeTab}
        onBlogsClick={() => setShowBlogsPopup(true)} 
      />

      {/* Main Content - Full Width */}
      <div className="container-fluid p-4">
        {renderContent()}
      </div>

      {/* Blogs Popup */}
      <BlogsPopup 
        show={showBlogsPopup} 
        onClose={() => setShowBlogsPopup(false)} 
        user={user} 
      />
    </div>
  );
};

export default UserDashboard;
