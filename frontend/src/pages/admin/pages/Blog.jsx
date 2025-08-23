import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../../styles/BlogPage.css';
import axios from 'axios';
import Swal from 'sweetalert2';

export default function Blog() {
  const [blogList, setBlogList] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [menuOpenId, setMenuOpenId] = useState(null);

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const [description, setDescription] = useState("");

  const [headerText, setHeaderText] = useState("");
  const [showViewModal, setShowViewModal] = useState(false);
  const [selectedBlog, setSelectedBlog] = useState(null);

  useEffect(() => {
    getAllBlogs();
  }, []);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImageFile(file || null);
  };

  const clearFields = () => {
    setTitle("");
    setAuthor("");
    setImageFile(null);
    setDescription("");
  };

  const getAllBlogs = async () => {
    try {
      const resp = await axios.get("http://localhost:8080/api/v1/blog/get/all");
      if (resp.data && resp.data.data) {
        setBlogList(resp.data.data);
      }
    } catch (error) {
      console.log("Error fetching blogs:", error);
    }
  };



  const addNewBlog = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("content", description); // backend expects 'content'
    formData.append("author", author);

    if (imageFile) {
      formData.append("imageFile", imageFile);
    }

    try {
      const resp = await axios.post(
        "http://localhost:8080/api/v1/blog/create/with-image",
        formData,
        { headers: { "Content-Type": "multipart/form-data" } }
      );
      getAllBlogs();
      console.log("Blog created successfully:", resp.data);
      Swal.fire({
        icon: 'success',
        title: 'Created!',
        text: 'Blog Successfully Published !',
        timer: 1500,
        showConfirmButton: false
      });
      setShowModal(false);
      clearFields();
    } catch (error) {
      console.log(error);
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: error.response?.data?.message || 'Failed to create blog.'
      });
    }
  };

  const handleDelete = (id) => {
    setBlogList(blogList.filter(blog => blog.id !== id));
    setMenuOpenId(null);
  };

  return (
    <div className="blog-page" style={{ minHeight: '100vh', background: '#f8fafc' }}>
      <div className="blog-container">
        <div className="event-header">
          <div>
            <h2 className="event-title">Blog Management</h2>
            <p className="event-subtitle">Create, manage, and share your latest blog posts</p>
            <input
              type="text"
              className="form-control mt-2"
              placeholder="Find Any Blogs Using This Field"
              value={headerText}
              onChange={e => setHeaderText(e.target.value)}
              style={{ maxWidth: 400 }}
            />
          </div>
          <button className="event-add-btn" onClick={() => setShowModal(true)}>
            + Add Blog
          </button>
        </div>
        <div className="event-card-grid">
          {Array.isArray(blogList) && blogList.map(blog => (
            <div key={blog.id} className="event-card" style={{ position: 'relative' }}>
              {/* 3-dots menu */}
              <div style={{ position: 'absolute', top: 16, right: 16, zIndex: 2 }}>
                <button
                  className="btn btn-link p-0"
                  style={{ fontSize: 22, color: '#888', background: 'none', border: 'none' }}
                  onClick={() => setMenuOpenId(menuOpenId === blog.id ? null : blog.id)}
                  aria-label="Open menu"
                >
                  &#8942;
                </button>
                {menuOpenId === blog.id && (
                  <div style={{ position: 'absolute', top: 28, right: 0, background: '#fff', border: '1px solid #eee', borderRadius: 6, boxShadow: '0 2px 8px rgba(0,0,0,0.08)', padding: '6px 0', minWidth: 100 }}>
                    <button
                      className="dropdown-item text-danger"
                      style={{ width: '100%', textAlign: 'left', background: 'none', border: 'none', padding: '8px 16px', fontWeight: 500, fontSize: 15, cursor: 'pointer' }}
                      onClick={() => handleDelete(blog.id)}
                    >
                      Delete
                    </button>
                  </div>
                )}
              </div>
              <div>
                <img src={blog.imageUrl ? `http://localhost:8080${blog.imageUrl}` : ""}
                  alt={blog.title}
                  style={{ width: '100%', height: 180, objectFit: 'cover', borderRadius: 12, marginBottom: 12 }}
                />
                <h3 className="event-card-title">{blog.title}</h3>
                <div className="event-card-location-date">
                  By {blog.author} <br />{blog.createdAt}
                </div>
                <div className="event-card-description" style={{ minHeight: 60, textAlign: 'justify' }}>
                  {blog.content}
                </div>
              </div>
              <div className="event-card-actions">
                <button className="btn-view" onClick={() => { setSelectedBlog(blog); setShowViewModal(true); }}>View</button>
              </div>
            </div>
          ))}
          {(Array.isArray(blogList) && blogList.length === 0) && (
            <div className="text-center text-secondary p-4" style={{ fontSize: 18 }}>
              No blogs found.
            </div>
          )}
        </div>
        {/* Add Blog Modal */}
        {showModal && (
          <div className="event-modal-backdrop">
            <div className="event-modal">
              <button
                onClick={() => { setShowModal(false); clearFields(); }}
                className="event-modal-close"
                aria-label="Close"
              >
                &times;
              </button>
              <h3 className="event-modal-title">Add New Blog</h3>
              <form className="mt-3" onSubmit={addNewBlog}>
                <div className="mb-3">
                  <label htmlFor="blogTitle" className="form-label">Title</label>
                  <input type="text" onChange={e => setTitle(e.target.value)} value={title} className="form-control" id="blogTitle" placeholder="Enter blog title" required />
                </div>
                <div className="mb-3">
                  <label htmlFor="blogAuthor" className="form-label">Author</label>
                  <input type="text" onChange={e => setAuthor(e.target.value)} value={author} className="form-control" id="blogAuthor" placeholder="Enter author name" required />
                </div>
                <div className="mb-3">
                  <label htmlFor="blogImage" className="form-label">Image</label>
                  <input type="file" accept="image/*" onChange={handleImageChange} className="form-control" id="blogImage" required />
                </div>
                <div className="mb-3">
                  <label htmlFor="blogDescription" className="form-label">Description</label>
                  <textarea className="form-control" onChange={e => setDescription(e.target.value)} value={description} id="blogDescription" rows="3" placeholder="Enter blog description" required></textarea>
                </div>
                <button type="submit" className="btn btn-primary w-100"
                  style={{ background: 'linear-gradient(90deg, #f6d365 0%, #fda085 100%)', border: 'none' }}>
                  Add Blog
                </button>
              </form>
            </div>
          </div>
        )}
        {/* Blog Details Modal */}
        {showViewModal && selectedBlog && (
          <div className="event-modal-backdrop">
            <div className="event-modal" style={{ padding: '20px' }}>
              <button
                onClick={() => { setShowViewModal(false); setSelectedBlog(null); }}
                className="event-modal-close"
                aria-label="Close"
              >
                &times;
              </button>
              <h3 className="event-modal-title event-modal-title-margin">{selectedBlog.title}</h3>
              <div className="event-modal-location-date">
                By {selectedBlog.author} &middot; {selectedBlog.date}
              </div>
              <img src={selectedBlog.imageUrl ? `http://localhost:8080${selectedBlog.imageUrl}` : ""}
                style={{ width: '100%', height: 180, objectFit: 'cover', borderRadius: 12, marginBottom: 12 }}
              />              <div className="event-modal-description">
                {selectedBlog.content}
                <br /><br />
                {selectedBlog.createdAt}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}


