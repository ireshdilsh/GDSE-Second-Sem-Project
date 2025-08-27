import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../../styles/BlogPage.css';
import axios from 'axios';
import Swal from 'sweetalert2';

export default function Product() {
  const [showModal, setShowModal] = useState(false);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [qty, setQty] = useState("");
  const [categoryId, setCategoryId] = useState("");

  const [categories, setCategories] = useState([])

  useEffect(() => {
    getAllCategories()
  }, []);

  const [imageFile, setImageFile] = useState(null);
  const [imageFileName, setImageFileName] = useState("");

  const getAllCategories = async () => {
    try {
      const resp = await axios.get("http://localhost:8080/api/v1/category/get/all/categories");
      console.log(resp);
      setCategories(resp.data.data);
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

  const handleAddProduct = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", name);
    formData.append("description", description);
    formData.append("price", price);
    formData.append("qty", qty);
    formData.append("categoryId", categoryId);
    if (imageFile) {
      formData.append("image", imageFile);
    }

    axios.post("http://localhost:8080/api/v1/product/create", formData)
      .then(response => {
        console.log(response);
        clearFields();
        setShowModal(false);
        Swal.fire({
          icon: 'success',
          title: 'Product Added',
          text: 'The product has been added successfully!',
        });
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
            />
          </div>
          <button className="event-add-btn" style={{ background: 'linear-gradient(90deg, #36d1c4 0%, #5b86e5 100%)', color: '#fff' }} onClick={() => setShowModal(true)}>
            + Add Product
          </button>
        </div>
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
