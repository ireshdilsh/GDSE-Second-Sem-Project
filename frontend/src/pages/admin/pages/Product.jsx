// ...existing code...
import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../../styles/BlogPage.css';
import axios from 'axios';
import Swal from 'sweetalert2';

export default function Product() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [showViewModal, setShowViewModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [qty, setQty] = useState("");
  const [categoryId, setCategoryId] = useState("");

  const [categories, setCategories] = useState([])
  const [products, setProducts] = useState([])

  useEffect(() => {
    getAllCategories();
    getAllProducts();
  }, []);

  useEffect(() => {
    if (!searchTerm) {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(
        products.filter(product =>
          product.name && product.name.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    }
  }, [searchTerm, products]);

  const [imageFile, setImageFile] = useState(null);
  const [imageFileName, setImageFileName] = useState("");

  const getAllCategories = async () => {
    try {
      const resp = await axios.get("http://localhost:8080/api/v1/category/get/all/categories");
      console.log(resp.data);
      setCategories(resp.data.data);
    } catch (error) {
      console.log(error);
    }
  }

  const getAllProducts = async () => {
    try {
      const resp = await axios.get("http://localhost:8080/api/v1/item/get/all/items");
      console.log(resp.data);
      setProducts(resp.data.data);
    } catch (error) {
      console.log(error);
    }
  }

  const clearFields = () => {
    setName("");
    setDescription("");
    setPrice("");
    setQty("");
    setCategoryId("");
    setImageFile(null);
    setImageFileName("");
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImageFile(file || null);
    setImageFileName(file ? file.name : "");
  };

  const handleAddProduct = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", name);
    formData.append("description", description);
    formData.append("price", price);
    formData.append("qty", qty);
    formData.append("categoryId", categoryId);
    if (imageFile) {
      formData.append("imageFile", imageFile);
    }

    await axios.post("http://localhost:8080/api/v1/item/add/new/product", formData)
      .then(response => {
        console.log(response);
        clearFields();
        setShowModal(false);
        Swal.fire({
          icon: 'success',
          title: 'Product Added',
          text: 'The product has been added successfully!',
        });
        getAllProducts();
      })
      .catch(error => {
        console.log(error);
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'There was an error adding the product.',
        });
      });

  };

  return (
    <div className="blog-page" style={{ minHeight: '100vh', background: '#f8fafc' }}>
      <div className="blog-container">
        <div className="event-header">
          <div>
            <h2 className="event-title">Product Management</h2>
            <p className="event-subtitle">Create, manage, and update your products</p>
            <input
              type="text"
              className="form-control mt-2"
              placeholder="Search product..."
              style={{ maxWidth: 400 }}
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
            />
          </div>
          <button className="event-add-btn" style={{ background: 'linear-gradient(90deg, #36d1c4 0%, #5b86e5 100%)', color: '#fff' }} onClick={() => setShowModal(true)}>
            + Add Product
          </button>
        </div>
        {/* Product Card Grid */}
        <div className="event-card-grid">
          {Array.isArray(filteredProducts) && filteredProducts.map(product => (
            <div key={product.id || product.productId} className="event-card" style={{ position: 'relative' }}>
              {/* Category badge */}
              {product.category && (
                <span style={{
                  position: 'absolute',
                  top: 12,
                  left: 12,
                  background: '#36d1c4',
                  color: '#fff',
                  borderRadius: 8,
                  padding: '4px 12px',
                  fontWeight: 600,
                  fontSize: 14,
                  zIndex: 2
                }}>{product.category.cateName || product.category.name || product.category.categoryName || product.category}</span>
              )}
              <div>
                <img
                  src={
                    product.imageUrl
                      ? `http://localhost:8080${product.imageUrl}`
                      : product.image
                        ? `http://localhost:8080${product.image}`
                        : ''
                  }
                  alt={product.name}
                  style={{ width: '100%', height: 180, objectFit: 'cover', borderRadius: 12, marginBottom: 12 }}
                />
                <h3 className="event-card-title">{product.name}</h3>
                <div className="event-card-location-date">
                  Price: <span style={{ color: '#36d1c4', fontWeight: 600 }}>${product.price}</span> &nbsp;|&nbsp; Qty: {product.qty}
                </div>
                <div className="event-card-description" style={{ minHeight: 60, textAlign: 'justify' }}>
                  {product.description}
                </div>
                <div style={{ marginTop: 10, textAlign: 'right' }}>
                  <button className="btn btn-outline-info btn-sm" onClick={() => { setSelectedProduct(product); setShowViewModal(true); }}>View</button>
                </div>
              </div>
            </div>
          ))}
          {(Array.isArray(filteredProducts) && filteredProducts.length === 0) && (
            <div className="text-center text-secondary p-4" style={{ fontSize: 18 }}>
              No products found.
            </div>
          )}
        </div>
        {/* Product Details Modal */}
        {showViewModal && selectedProduct && (
          <div className="event-modal-backdrop">
            <div className="event-modal" style={{ padding: '20px', maxWidth: 600 }}>
              <button
                onClick={() => { setShowViewModal(false); setSelectedProduct(null); }}
                className="event-modal-close"
                aria-label="Close"
              >
                &times;
              </button>
              <h3 className="event-modal-title event-modal-title-margin">{selectedProduct.name}</h3>
              <div className="event-modal-location-date">
                Category: <span style={{ color: '#36d1c4', fontWeight: 600 }}>{selectedProduct.category?.cateName || selectedProduct.category?.name || selectedProduct.category?.categoryName || selectedProduct.category}</span>
              </div>
              {(selectedProduct.imageUrl || selectedProduct.image) && (
                <img
                  src={selectedProduct.imageUrl ? `http://localhost:8080${selectedProduct.imageUrl}` : selectedProduct.image ? `http://localhost:8080${selectedProduct.image}` : ''}
                  alt={selectedProduct.name}
                  style={{ width: '100%', height: 220, objectFit: 'cover', borderRadius: 12, margin: '18px 0' }}
                />
              )}
              <div className="event-modal-description">
                <strong>Description:</strong> {selectedProduct.description}
                <br /><br />
                <strong>Price:</strong> ${selectedProduct.price}
                <br />
                <strong>Quantity:</strong> {selectedProduct.qty}
              </div>
            </div>
          </div>
        )}
        {/* Modal */}
        {showModal && (
          <div className="event-modal-backdrop">
            <div className="event-modal" style={{ width: 750, maxWidth: '95vw', minHeight: 420, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <button
                onClick={() => { setShowModal(false); clearFields(); }}
                className="event-modal-close"
                aria-label="Close"
              >
                &times;
              </button>
              <h3 className="event-modal-title">Add New Product</h3>
              <form className="mt-3" onSubmit={handleAddProduct}>
                <div className="row">
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label className="form-label">Name</label>
                      <input type="text" className="form-control" value={name} onChange={e => setName(e.target.value)} required />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Price</label>
                      <input type="number" className="form-control" value={price} onChange={e => setPrice(e.target.value)} required min="0" step="0.01" />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Category</label>
                      <select className="form-control" value={categoryId} onChange={e => setCategoryId(e.target.value)} required>
                        <option value="" disabled>Choose category</option>
                        {categories && Array.isArray(categories) && categories.map(cat => (
                          <option key={cat.id || cat.categoryId} value={cat.id || cat.categoryId}>
                            {cat.name || cat.categoryName || cat.cateName || 'Unnamed Category'}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label className="form-label">Quantity</label>
                      <input type="number" className="form-control" value={qty} onChange={e => setQty(e.target.value)} required min="0" />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Product Image</label>
                      <div className="input-group">
                        <input
                          type="file"
                          id="productImageUpload"
                          accept="image/*"
                          style={{ display: 'none' }}
                          onChange={handleImageChange}
                        />
                        <label
                          htmlFor="productImageUpload"
                          className="btn btn-outline-secondary"
                          style={{
                            borderTopRightRadius: 0,
                            borderBottomRightRadius: 0,
                            borderRight: 'none',
                            borderColor: '#ced4da',
                            borderWidth: '1px',
                            borderStyle: 'solid',
                            height: '100%'
                          }}
                        >
                          Choose File
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          value={imageFileName}
                          placeholder="No file chosen"
                          readOnly
                          style={{ background: '#f8fafc', cursor: 'default' }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mb-3">
                  <label className="form-label">Description</label>
                  <textarea className="form-control" value={description} onChange={e => setDescription(e.target.value)} required rows={3} />
                </div>
                <button type="submit" className="btn w-100" style={{ background: 'linear-gradient(90deg, #36d1c4 0%, #5b86e5 100%)', color: '#fff', border: 'none' }}>
                  Add Product
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
