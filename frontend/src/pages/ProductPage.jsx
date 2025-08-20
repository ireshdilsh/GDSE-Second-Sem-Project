import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const initialProducts = [
  { 
    id: 1, 
    name: 'Urban Compost Bin', 
    price: 49.99, 
    stock: 12, 
    category: 'Composting', 
    description: 'Eco-friendly compost bin for home use with ventilation system.',
    status: 'active',
    image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=100&h=100&fit=crop',
    sku: 'UCB001',
    rating: 4.5
  },
  { 
    id: 2, 
    name: 'Vertical Garden Kit', 
    price: 89.99, 
    stock: 8, 
    category: 'Gardening', 
    description: 'Complete vertical garden system for urban spaces.',
    status: 'active',
    image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=100&h=100&fit=crop',
    sku: 'VGK002',
    rating: 4.8
  },
  { 
    id: 3, 
    name: 'Organic Fertilizer', 
    price: 19.99, 
    stock: 30, 
    category: 'Soil', 
    description: 'All-natural organic fertilizer for healthy plant growth.',
    status: 'active',
    image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=100&h=100&fit=crop',
    sku: 'OF003',
    rating: 4.2
  },
  { 
    id: 4, 
    name: 'Smart Irrigation System', 
    price: 159.99, 
    stock: 5, 
    category: 'Technology', 
    description: 'IoT-enabled automatic watering system for gardens.',
    status: 'low_stock',
    image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=100&h=100&fit=crop',
    sku: 'SIS004',
    rating: 4.7
  },
  { 
    id: 5, 
    name: 'Seed Starter Tray', 
    price: 24.99, 
    stock: 0, 
    category: 'Gardening', 
    description: 'Professional seed starting system with drainage.',
    status: 'out_of_stock',
    image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=100&h=100&fit=crop',
    sku: 'SST005',
    rating: 4.3
  }
];

const categories = ['All', 'Composting', 'Gardening', 'Soil', 'Technology'];

export default function ProductPage() {
  const [products, setProducts] = useState(initialProducts);
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState('add');
  const [currentProduct, setCurrentProduct] = useState({ 
    name: '', price: '', stock: '', category: '', description: '', status: 'active', sku: '', rating: 0 
  });
  const [editId, setEditId] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [viewMode, setViewMode] = useState('table'); // 'table' or 'cards'

  // Computed statistics
  const stats = useMemo(() => {
    const totalProducts = products.length;
    const totalValue = products.reduce((sum, product) => sum + (product.price * product.stock), 0);
    const lowStockCount = products.filter(product => product.stock <= 10 && product.stock > 0).length;
    const outOfStockCount = products.filter(product => product.stock === 0).length;
    
    return { totalProducts, totalValue, lowStockCount, outOfStockCount };
  }, [products]);

  // Filtered products
  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          product.sku.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [products, searchTerm, selectedCategory]);

  const openAddModal = () => {
    setModalType('add');
    setCurrentProduct({ 
      name: '', price: '', stock: '', category: '', description: '', status: 'active', sku: '', rating: 0 
    });
    setShowModal(true);
  };

  const openEditModal = (product) => {
    setModalType('edit');
    setCurrentProduct(product);
    setEditId(product.id);
    setShowModal(true);
  };

  const openViewModal = (product) => {
    setModalType('view');
    setCurrentProduct(product);
    setShowModal(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCurrentProduct((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddProduct = (e) => {
    e.preventDefault();
    const newProduct = {
      ...currentProduct,
      id: Date.now(),
      price: parseFloat(currentProduct.price),
      stock: parseInt(currentProduct.stock),
      rating: parseFloat(currentProduct.rating),
      image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=100&h=100&fit=crop'
    };
    setProducts([...products, newProduct]);
    setShowModal(false);
  };

  const handleUpdateProduct = (e) => {
    e.preventDefault();
    const updatedProduct = {
      ...currentProduct,
      id: editId,
      price: parseFloat(currentProduct.price),
      stock: parseInt(currentProduct.stock),
      rating: parseFloat(currentProduct.rating)
    };
    setProducts(products.map((p) => (p.id === editId ? updatedProduct : p)));
    setShowModal(false);
  };

  const handleDeleteProduct = (id) => {
    if (window.confirm('Are you sure you want to delete this product?')) {
      setProducts(products.filter((p) => p.id !== id));
    }
  };

  const getStatusBadge = (status, stock) => {
    if (stock === 0) return <span className="badge bg-danger">Out of Stock</span>;
    if (stock <= 10) return <span className="badge bg-warning text-dark">Low Stock</span>;
    return <span className="badge bg-success">In Stock</span>;
  };

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <i key={i} className={`fas fa-star ${i <= rating ? 'text-warning' : 'text-muted'}`}></i>
      );
    }
    return stars;
  };

  return (
    <div className="min-vh-100" style={{ background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)' }}>
      <div className="container py-5">
        {/* Header */}
        <div className="row mb-4">
          <div className="col-12">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <div>
                <h1 className="fw-bold text-dark mb-1">
                  <i className="fas fa-box text-success me-3"></i>
                  Product Management
                </h1>
                <p className="text-muted mb-0">Manage your product inventory and catalog</p>
              </div>
              <div className="d-flex gap-2">
                <Link to="/admin" className="btn btn-outline-secondary">
                  <i className="fas fa-arrow-left me-2"></i>Back to Admin
                </Link>
                <button className="btn btn-success" onClick={openAddModal}>
                  <i className="fas fa-plus me-2"></i>Add Product
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Statistics Cards */}
        <div className="row mb-4">
          <div className="col-lg-3 col-md-6 mb-3">
            <div className="card border-0 shadow-sm h-100" style={{ background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)' }}>
              <div className="card-body text-white">
                <div className="d-flex justify-content-between align-items-center">
                  <div>
                    <h3 className="fw-bold mb-1">{stats.totalProducts}</h3>
                    <p className="mb-0 opacity-75">Total Products</p>
                  </div>
                  <div className="bg-white bg-opacity-25 rounded-circle p-3">
                    <i className="fas fa-box fa-xl"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 mb-3">
            <div className="card border-0 shadow-sm h-100" style={{ background: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)' }}>
              <div className="card-body text-white">
                <div className="d-flex justify-content-between align-items-center">
                  <div>
                    <h3 className="fw-bold mb-1">${stats.totalValue.toLocaleString()}</h3>
                    <p className="mb-0 opacity-75">Total Value</p>
                  </div>
                  <div className="bg-white bg-opacity-25 rounded-circle p-3">
                    <i className="fas fa-dollar-sign fa-xl"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 mb-3">
            <div className="card border-0 shadow-sm h-100" style={{ background: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)' }}>
              <div className="card-body text-white">
                <div className="d-flex justify-content-between align-items-center">
                  <div>
                    <h3 className="fw-bold mb-1">{stats.lowStockCount}</h3>
                    <p className="mb-0 opacity-75">Low Stock</p>
                  </div>
                  <div className="bg-white bg-opacity-25 rounded-circle p-3">
                    <i className="fas fa-exclamation-triangle fa-xl"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 mb-3">
            <div className="card border-0 shadow-sm h-100" style={{ background: 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)' }}>
              <div className="card-body text-white">
                <div className="d-flex justify-content-between align-items-center">
                  <div>
                    <h3 className="fw-bold mb-1">{stats.outOfStockCount}</h3>
                    <p className="mb-0 opacity-75">Out of Stock</p>
                  </div>
                  <div className="bg-white bg-opacity-25 rounded-circle p-3">
                    <i className="fas fa-times-circle fa-xl"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Filters and Search */}
        <div className="card border-0 shadow-sm mb-4">
          <div className="card-body">
            <div className="row g-3">
              <div className="col-lg-4 col-md-6">
                <div className="input-group">
                  <span className="input-group-text bg-light border-end-0">
                    <i className="fas fa-search text-muted"></i>
                  </span>
                  <input
                    type="text"
                    className="form-control border-start-0"
                    placeholder="Search products by name or SKU..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <select
                  className="form-select"
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                >
                  {categories.map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </div>
              <div className="col-lg-5 col-md-12">
                <div className="d-flex justify-content-between align-items-center">
                  <div className="btn-group" role="group">
                    <input
                      type="radio"
                      className="btn-check"
                      name="viewMode"
                      id="table-view"
                      checked={viewMode === 'table'}
                      onChange={() => setViewMode('table')}
                    />
                    <label className="btn btn-outline-primary" htmlFor="table-view">
                      <i className="fas fa-table me-1"></i>Table
                    </label>
                    <input
                      type="radio"
                      className="btn-check"
                      name="viewMode"
                      id="cards-view"
                      checked={viewMode === 'cards'}
                      onChange={() => setViewMode('cards')}
                    />
                    <label className="btn btn-outline-primary" htmlFor="cards-view">
                      <i className="fas fa-th me-1"></i>Cards
                    </label>
                  </div>
                  <small className="text-muted">
                    Showing {filteredProducts.length} of {products.length} products
                  </small>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Products Display */}
        {viewMode === 'table' ? (
          <div className="card border-0 shadow-sm">
            <div className="card-body p-0">
              <div className="table-responsive">
                <table className="table table-hover align-middle mb-0">
                  <thead className="table-success">
                    <tr>
                      <th className="px-4 py-3">Product</th>
                      <th className="py-3">Category</th>
                      <th className="py-3">Price</th>
                      <th className="py-3">Stock</th>
                      <th className="py-3">Status</th>
                      <th className="py-3">Rating</th>
                      <th className="py-3 text-center">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredProducts.length === 0 ? (
                      <tr>
                        <td colSpan="7" className="text-center py-5">
                          <div className="text-muted">
                            <i className="fas fa-search fa-3x mb-3 d-block"></i>
                            <h5>No products found</h5>
                            <p>Try adjusting your search criteria or add a new product.</p>
                          </div>
                        </td>
                      </tr>
                    ) : (
                      filteredProducts.map((product) => (
                        <tr key={product.id}>
                          <td className="px-4 py-3">
                            <div className="d-flex align-items-center">
                              <img 
                                src={product.image} 
                                alt={product.name}
                                className="rounded me-3"
                                style={{ width: '50px', height: '50px', objectFit: 'cover' }}
                              />
                              <div>
                                <h6 className="mb-1 fw-semibold">{product.name}</h6>
                                <small className="text-muted">SKU: {product.sku}</small>
                              </div>
                            </div>
                          </td>
                          <td className="py-3">
                            <span className="badge bg-light text-dark">{product.category}</span>
                          </td>
                          <td className="py-3 fw-semibold">${product.price.toFixed(2)}</td>
                          <td className="py-3">{product.stock}</td>
                          <td className="py-3">{getStatusBadge(product.status, product.stock)}</td>
                          <td className="py-3">
                            <div className="d-flex align-items-center">
                              <div className="me-2">{renderStars(product.rating)}</div>
                              <small className="text-muted">({product.rating})</small>
                            </div>
                          </td>
                          <td className="py-3 text-center">
                            <div className="btn-group" role="group">
                              <button 
                                className="btn btn-outline-info btn-sm" 
                                onClick={() => openViewModal(product)}
                                title="View Details"
                              >
                                <i className="fas fa-eye"></i>
                              </button>
                              <button 
                                className="btn btn-outline-primary btn-sm" 
                                onClick={() => openEditModal(product)}
                                title="Edit Product"
                              >
                                <i className="fas fa-edit"></i>
                              </button>
                              <button 
                                className="btn btn-outline-danger btn-sm" 
                                onClick={() => handleDeleteProduct(product.id)}
                                title="Delete Product"
                              >
                                <i className="fas fa-trash"></i>
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        ) : (
          <div className="row">
            {filteredProducts.length === 0 ? (
              <div className="col-12 text-center py-5">
                <div className="text-muted">
                  <i className="fas fa-search fa-4x mb-3 d-block"></i>
                  <h4>No products found</h4>
                  <p>Try adjusting your search criteria or add a new product.</p>
                </div>
              </div>
            ) : (
              filteredProducts.map((product) => (
                <div key={product.id} className="col-xl-4 col-lg-6 col-md-6 mb-4">
                  <div className="card border-0 shadow-sm h-100">
                    <div className="position-relative">
                      <img 
                        src={product.image} 
                        alt={product.name}
                        className="card-img-top"
                        style={{ height: '200px', objectFit: 'cover' }}
                      />
                      <div className="position-absolute top-0 end-0 m-2">
                        {getStatusBadge(product.status, product.stock)}
                      </div>
                    </div>
                    <div className="card-body d-flex flex-column">
                      <div className="mb-2">
                        <div className="d-flex justify-content-between align-items-start mb-2">
                          <h5 className="card-title mb-0">{product.name}</h5>
                          <span className="badge bg-light text-dark">{product.category}</span>
                        </div>
                        <small className="text-muted">SKU: {product.sku}</small>
                      </div>
                      <p className="card-text text-muted small flex-grow-1">{product.description}</p>
                      <div className="mb-3">
                        <div className="d-flex justify-content-between align-items-center mb-2">
                          <span className="h5 text-success mb-0">${product.price.toFixed(2)}</span>
                          <span className="text-muted">Stock: {product.stock}</span>
                        </div>
                        <div className="d-flex align-items-center">
                          <div className="me-2">{renderStars(product.rating)}</div>
                          <small className="text-muted">({product.rating})</small>
                        </div>
                      </div>
                      <div className="d-grid gap-2">
                        <div className="btn-group" role="group">
                          <button 
                            className="btn btn-outline-info btn-sm" 
                            onClick={() => openViewModal(product)}
                          >
                            <i className="fas fa-eye me-1"></i>View
                          </button>
                          <button 
                            className="btn btn-outline-primary btn-sm" 
                            onClick={() => openEditModal(product)}
                          >
                            <i className="fas fa-edit me-1"></i>Edit
                          </button>
                          <button 
                            className="btn btn-outline-danger btn-sm" 
                            onClick={() => handleDeleteProduct(product.id)}
                          >
                            <i className="fas fa-trash me-1"></i>Delete
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        )}

        {/* Modal */}
        {showModal && (
          <div className="modal fade show d-block" tabIndex="-1" style={{ background: 'rgba(0,0,0,0.5)' }}>
            <div className="modal-dialog modal-lg">
              <div className="modal-content border-0 shadow">
                {modalType === 'view' ? (
                  // View Modal
                  <>
                    <div className="modal-header bg-info text-white">
                      <h5 className="modal-title">
                        <i className="fas fa-eye me-2"></i>Product Details
                      </h5>
                      <button type="button" className="btn-close btn-close-white" onClick={() => setShowModal(false)}></button>
                    </div>
                    <div className="modal-body">
                      <div className="row">
                        <div className="col-md-4">
                          <img 
                            src={currentProduct.image} 
                            alt={currentProduct.name}
                            className="img-fluid rounded mb-3"
                          />
                        </div>
                        <div className="col-md-8">
                          <h4 className="mb-3">{currentProduct.name}</h4>
                          <div className="row mb-3">
                            <div className="col-sm-4"><strong>SKU:</strong></div>
                            <div className="col-sm-8">{currentProduct.sku}</div>
                          </div>
                          <div className="row mb-3">
                            <div className="col-sm-4"><strong>Category:</strong></div>
                            <div className="col-sm-8">
                              <span className="badge bg-light text-dark">{currentProduct.category}</span>
                            </div>
                          </div>
                          <div className="row mb-3">
                            <div className="col-sm-4"><strong>Price:</strong></div>
                            <div className="col-sm-8 text-success fw-bold">${currentProduct.price?.toFixed(2)}</div>
                          </div>
                          <div className="row mb-3">
                            <div className="col-sm-4"><strong>Stock:</strong></div>
                            <div className="col-sm-8">{currentProduct.stock} units</div>
                          </div>
                          <div className="row mb-3">
                            <div className="col-sm-4"><strong>Status:</strong></div>
                            <div className="col-sm-8">{getStatusBadge(currentProduct.status, currentProduct.stock)}</div>
                          </div>
                          <div className="row mb-3">
                            <div className="col-sm-4"><strong>Rating:</strong></div>
                            <div className="col-sm-8">
                              <div className="d-flex align-items-center">
                                <div className="me-2">{renderStars(currentProduct.rating)}</div>
                                <span>({currentProduct.rating})</span>
                              </div>
                            </div>
                          </div>
                          <div className="row mb-3">
                            <div className="col-sm-4"><strong>Description:</strong></div>
                            <div className="col-sm-8">{currentProduct.description}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="modal-footer">
                      <button type="button" className="btn btn-secondary" onClick={() => setShowModal(false)}>Close</button>
                      <button type="button" className="btn btn-primary" onClick={() => openEditModal(currentProduct)}>
                        <i className="fas fa-edit me-2"></i>Edit Product
                      </button>
                    </div>
                  </>
                ) : (
                  // Add/Edit Modal
                  <form onSubmit={modalType === 'add' ? handleAddProduct : handleUpdateProduct}>
                    <div className={`modal-header ${modalType === 'add' ? 'bg-success' : 'bg-primary'} text-white`}>
                      <h5 className="modal-title">
                        <i className={`fas ${modalType === 'add' ? 'fa-plus' : 'fa-edit'} me-2`}></i>
                        {modalType === 'add' ? 'Add New Product' : 'Update Product'}
                      </h5>
                      <button type="button" className="btn-close btn-close-white" onClick={() => setShowModal(false)}></button>
                    </div>
                    <div className="modal-body">
                      <div className="row">
                        <div className="col-md-6 mb-3">
                          <label className="form-label fw-semibold">Product Name *</label>
                          <input 
                            type="text" 
                            className="form-control" 
                            name="name" 
                            value={currentProduct.name} 
                            onChange={handleInputChange} 
                            required 
                            placeholder="Enter product name"
                          />
                        </div>
                        <div className="col-md-6 mb-3">
                          <label className="form-label fw-semibold">SKU *</label>
                          <input 
                            type="text" 
                            className="form-control" 
                            name="sku" 
                            value={currentProduct.sku} 
                            onChange={handleInputChange} 
                            required 
                            placeholder="e.g., UCB001"
                          />
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6 mb-3">
                          <label className="form-label fw-semibold">Category *</label>
                          <select 
                            className="form-select" 
                            name="category" 
                            value={currentProduct.category} 
                            onChange={handleInputChange} 
                            required
                          >
                            <option value="">Select category</option>
                            {categories.filter(cat => cat !== 'All').map(category => (
                              <option key={category} value={category}>{category}</option>
                            ))}
                          </select>
                        </div>
                        <div className="col-md-6 mb-3">
                          <label className="form-label fw-semibold">Price ($) *</label>
                          <div className="input-group">
                            <span className="input-group-text">$</span>
                            <input 
                              type="number" 
                              step="0.01" 
                              className="form-control" 
                              name="price" 
                              value={currentProduct.price} 
                              onChange={handleInputChange} 
                              required 
                              min="0"
                              placeholder="0.00"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6 mb-3">
                          <label className="form-label fw-semibold">Stock Quantity *</label>
                          <input 
                            type="number" 
                            className="form-control" 
                            name="stock" 
                            value={currentProduct.stock} 
                            onChange={handleInputChange} 
                            required 
                            min="0"
                            placeholder="0"
                          />
                        </div>
                        <div className="col-md-6 mb-3">
                          <label className="form-label fw-semibold">Rating</label>
                          <select 
                            className="form-select" 
                            name="rating" 
                            value={currentProduct.rating} 
                            onChange={handleInputChange}
                          >
                            <option value="0">No rating</option>
                            <option value="1">1 Star</option>
                            <option value="2">2 Stars</option>
                            <option value="3">3 Stars</option>
                            <option value="4">4 Stars</option>
                            <option value="5">5 Stars</option>
                          </select>
                        </div>
                      </div>
                      <div className="mb-3">
                        <label className="form-label fw-semibold">Description *</label>
                        <textarea 
                          className="form-control" 
                          name="description" 
                          value={currentProduct.description} 
                          onChange={handleInputChange} 
                          rows="3" 
                          required
                          placeholder="Enter product description"
                        />
                      </div>
                    </div>
                    <div className="modal-footer">
                      <button type="button" className="btn btn-secondary" onClick={() => setShowModal(false)}>
                        Cancel
                      </button>
                      <button type="submit" className={`btn ${modalType === 'add' ? 'btn-success' : 'btn-primary'}`}>
                        <i className={`fas ${modalType === 'add' ? 'fa-plus' : 'fa-save'} me-2`}></i>
                        {modalType === 'add' ? 'Add Product' : 'Update Product'}
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
