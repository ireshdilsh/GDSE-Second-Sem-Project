import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../../styles/BlogPage.css';
import axios from 'axios';

const mockBlogs = [
  {
    id: 1,
    title: 'How AI is Transforming the Future',
    date: '2025-08-18',
    author: 'Jane Doe',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80',
    description: 'Artificial Intelligence is rapidly changing the way we live and work. Discover the latest trends and how you can stay ahead.',
    category: 'AI'
  },
  {
    id: 2,
    title: 'Design Systems for Modern Web Apps',
    date: '2025-08-15',
    author: 'John Smith',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=80',
    description: 'A practical guide to building scalable and beautiful design systems for your next web project.',
    category: 'Design'
  },
  {
    id: 3,
    title: 'Top 10 Tech Trends in 2025',
    date: '2025-08-10',
    author: 'Alice Lee',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80',
    description: 'Stay ahead of the curve with these top technology trends that are shaping the world in 2025.',
    category: 'Tech'
  },
];

export default function Blog() {
  const [blogList, setBlogList] = useState(mockBlogs);
  const [showModal, setShowModal] = useState(false);
  const [menuOpenId, setMenuOpenId] = useState(null);

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");

  const [headerText, setHeaderText] = useState("");
  const [showViewModal, setShowViewModal] = useState(false);
  const [selectedBlog, setSelectedBlog] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImageFile(file || null);
  };

  const clearFields = () => {
    setTitle("");
    setAuthor("");
    setImageFile(null);
    setDescription("");
    setCategory("");
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
      const createdBlog = resp.data.data;
      setBlogList([{ ...createdBlog, description, category, image: createdBlog.imageUrl || createdBlog.image }, ...blogList]);
      setShowModal(false);
      clearFields();
    } catch (error) {
      console.log(error);
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
                <img src={blog.image} alt={blog.title} style={{ width: '100%', height: 180, objectFit: 'cover', borderRadius: 12, marginBottom: 12 }} />
                <h3 className="event-card-title">{blog.title}</h3>
                <div className="event-card-location-date">
                  By {blog.author} &middot; {blog.date}
                  {blog.category && (
                    <span style={{ marginLeft: 8, color: '#10B981', fontWeight: 600 }}>| {blog.category}</span>
                  )}
                </div>
                <div className="event-card-description" style={{ minHeight: 60 }}>
                  {blog.description}
                </div>
              </div>
              <div className="event-card-actions">
                <button className="btn-view" onClick={() => { setSelectedBlog(blog); setShowViewModal(true); }}>View</button>
                <button className="btn-edit">Edit</button>
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
            <div className="event-modal">
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
                {selectedBlog.category && (
                  <span style={{ marginLeft: 8, color: '#10B981', fontWeight: 600 }}>| {selectedBlog.category}</span>
                )}
              </div>
              <img src={selectedBlog.image} alt={selectedBlog.title} style={{ width: '100%', height: 220, objectFit: 'cover', borderRadius: 12, margin: '18px 0' }} />
              <div className="event-modal-description">
                {selectedBlog.description}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
