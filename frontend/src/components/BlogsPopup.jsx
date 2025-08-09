import React, { useState, useRef, useEffect } from 'react';

const BlogsPopup = ({ show, onClose, user }) => {
  const popupRef = useRef(null);

  const [blogs] = useState([
    {
      id: 1,
      title: "10 Best Indoor Plants for Beginners",
      excerpt: "Starting your indoor garden? Here are the most forgiving and beautiful plants perfect for newcomers to plant parenting...",
      date: "2024-01-20",
      readTime: "5 min read",
      category: "Beginner Tips",
      image: "/src/assets/planters/1.jpg",
      likes: 142,
      comments: 28,
      tags: ["Indoor Plants", "Beginner", "Plant Care"]
    },
    {
      id: 2,
      title: "The Art of Plant Propagation: From Cuttings to New Growth",
      excerpt: "Master the magical process of creating new plants from existing ones. Learn the secrets of successful propagation techniques...",
      date: "2024-01-15",
      readTime: "8 min read",
      category: "Advanced Tips",
      image: "/src/assets/planters/2.jpg",
      likes: 89,
      comments: 15,
      tags: ["Propagation", "Plant Growth", "DIY"]
    },
    {
      id: 3,
      title: "Seasonal Plant Care: Winter Edition",
      excerpt: "How to keep your green friends thriving during the colder months. Essential tips for winter plant maintenance...",
      date: "2024-01-10",
      readTime: "6 min read",
      category: "Seasonal Care",
      image: "/src/assets/planters/3.jpg",
      likes: 203,
      comments: 34,
      tags: ["Winter Care", "Seasonal", "Plant Health"]
    },
    {
      id: 4,
      title: "Plant Swap Success Stories: Building Community Through Greenery",
      excerpt: "Real stories from our community members about amazing plant swaps and the friendships that grew from them...",
      date: "2024-01-05",
      readTime: "4 min read",
      category: "Community",
      image: "/src/assets/planters/4.jpg",
      likes: 76,
      comments: 12,
      tags: ["Community", "Plant Swap", "Stories"]
    },
    {
      id: 5,
      title: "Common Plant Diseases and How to Treat Them",
      excerpt: "Identify and treat the most common plant ailments. A comprehensive guide to keeping your plants disease-free...",
      date: "2023-12-28",
      readTime: "10 min read",
      category: "Plant Health",
      image: "/src/assets/planters/5.jpg",
      likes: 167,
      comments: 45,
      tags: ["Plant Health", "Disease", "Treatment"]
    }
  ]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        onClose();
      }
    };

    if (show) {
      document.addEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'unset';
    };
  }, [show, onClose]);

  if (!show) return null;

  return (
    <div className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center" 
         style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', zIndex: 1060 }}>
      <div ref={popupRef} className="bg-white rounded-3 shadow-lg" style={{ width: '90%', maxWidth: '800px', maxHeight: '90vh', overflow: 'hidden' }}>
        {/* Header */}
        <div className="p-4 border-bottom d-flex align-items-center justify-content-between bg-gradient" 
             style={{ background: 'linear-gradient(135deg, #22c55e, #16a34a)' }}>
          <div className="d-flex align-items-center text-white">
            <img 
              src={user.avatar} 
              alt={user.name}
              className="rounded-circle me-3"
              width="50" 
              height="50"
              style={{objectFit: 'cover'}}
            />
            <div>
              <h4 className="mb-0 fw-bold">My Garden Blog</h4>
              <small className="opacity-75">Plant care tips & gardening insights</small>
            </div>
          </div>
          <button 
            className="btn btn-link text-white p-0 fs-4"
            onClick={onClose}
          >
            <i className="fas fa-times"></i>
          </button>
        </div>

        {/* Blog Stats */}
        <div className="p-3 bg-light border-bottom">
          <div className="row text-center">
            <div className="col-4">
              <div className="fw-bold text-success">{blogs.length}</div>
              <small className="text-muted">Articles</small>
            </div>
            <div className="col-4">
              <div className="fw-bold text-primary">{blogs.reduce((sum, blog) => sum + blog.likes, 0)}</div>
              <small className="text-muted">Total Likes</small>
            </div>
            <div className="col-4">
              <div className="fw-bold text-info">{blogs.reduce((sum, blog) => sum + blog.comments, 0)}</div>
              <small className="text-muted">Comments</small>
            </div>
          </div>
        </div>

        {/* Blog List */}
        <div className="p-0" style={{ maxHeight: '55vh', overflowY: 'auto' }}>
          {blogs.map((blog) => (
            <div key={blog.id} className="border-bottom p-4 hover-bg-light" style={{ cursor: 'pointer' }}>
              <div className="row align-items-center">
                <div className="col-md-3">
                  <img 
                    src={blog.image} 
                    alt={blog.title}
                    className="w-100 rounded"
                    style={{ height: '80px', objectFit: 'cover' }}
                  />
                </div>
                <div className="col-md-9">
                  <div className="d-flex align-items-center mb-2">
                    <span className="badge bg-success bg-opacity-10 text-success small me-2">
                      {blog.category}
                    </span>
                    <small className="text-muted">
                      {new Date(blog.date).toLocaleDateString()} • {blog.readTime}
                    </small>
                  </div>
                  
                  <h6 className="fw-bold mb-2 text-dark">{blog.title}</h6>
                  <p className="text-muted small mb-3" style={{ fontSize: '0.9rem' }}>
                    {blog.excerpt}
                  </p>
                  
                  <div className="d-flex align-items-center justify-content-between">
                    <div className="d-flex align-items-center gap-3">
                      <div className="d-flex align-items-center text-muted">
                        <i className="fas fa-heart me-1"></i>
                        <small>{blog.likes}</small>
                      </div>
                      <div className="d-flex align-items-center text-muted">
                        <i className="fas fa-comment me-1"></i>
                        <small>{blog.comments}</small>
                      </div>
                    </div>
                    <div className="d-flex gap-1">
                      {blog.tags.slice(0, 2).map((tag, index) => (
                        <span key={index} className="badge bg-light text-muted" style={{ fontSize: '0.7rem' }}>
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="p-3 border-top bg-light text-center">
          <div className="d-flex justify-content-center gap-2">
            <button className="btn btn-success btn-sm">
              <i className="fas fa-plus me-2"></i>
              Write New Post
            </button>
            <button className="btn btn-outline-secondary btn-sm">
              <i className="fas fa-external-link-alt me-2"></i>
              View All Blogs
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        .hover-bg-light:hover {
          background-color: #f8f9fa;
          transition: background-color 0.2s ease;
        }
      `}</style>
    </div>
  );
};

export default BlogsPopup;
