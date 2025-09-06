import React, { useState } from 'react'
import '../styles/LandingPageMedium.css'

export default function LandingPage() {
  // Authentication modal states
  const [showSignInModal, setShowSignInModal] = useState(false);
  const [showSignUpModal, setShowSignUpModal] = useState(false);
  
  // Form states
  const [signInData, setSignInData] = useState({
    email: '',
    password: ''
  });

  const [signUpData, setSignUpData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  // Password validation state
  const [passwordError, setPasswordError] = useState('');
  const [isPasswordValid, setIsPasswordValid] = useState(true);
  const [passwordSuccess, setPasswordSuccess] = useState('');

  // Modal handlers
  const handleOpenSignIn = () => {
    setShowSignInModal(true);
    setShowSignUpModal(false);
  };

  const handleOpenSignUp = () => {
    setShowSignUpModal(true);
    setShowSignInModal(false);
  };

  const handleCloseModals = () => {
    setShowSignInModal(false);
    setShowSignUpModal(false);
    // Reset forms
    setSignInData({ email: '', password: '' });
    setSignUpData({ fullName: '', email: '', password: '', confirmPassword: '' });
    setPasswordError('');
    setIsPasswordValid(true);
    setPasswordSuccess('');
  };

  const handleSwitchToSignUp = () => {
    setShowSignInModal(false);
    setShowSignUpModal(true);
  };

  const handleSwitchToSignIn = () => {
    setShowSignUpModal(false);
    setShowSignInModal(true);
  };

  // Form handlers
  const handleSignInInputChange = (e) => {
    const { name, value } = e.target;
    setSignInData(prev => ({ ...prev, [name]: value }));
  };

  const handleSignUpInputChange = (e) => {
    const { name, value } = e.target;
    setSignUpData(prev => ({ ...prev, [name]: value }));

    // Password validation
    if (name === 'password' || name === 'confirmPassword') {
      const currentPassword = name === 'password' ? value : signUpData.password;
      const currentConfirmPassword = name === 'confirmPassword' ? value : signUpData.confirmPassword;
      
      if (name === 'password' && value && value.length < 8) {
        setPasswordError('Password must be at least 8 characters long');
        setIsPasswordValid(false);
        setPasswordSuccess('');
        return;
      }
      
      if (currentConfirmPassword && currentPassword && currentPassword !== currentConfirmPassword) {
        setPasswordError('Passwords do not match');
        setIsPasswordValid(false);
        setPasswordSuccess('');
      } else if (currentConfirmPassword && currentPassword && currentPassword === currentConfirmPassword && currentPassword.length >= 8) {
        setPasswordError('');
        setIsPasswordValid(true);
        setPasswordSuccess('Passwords match!');
      } else {
        setPasswordError('');
        setIsPasswordValid(true);
        setPasswordSuccess('');
      }
    }
  };

  const handleSignInSubmit = (e) => {
    e.preventDefault();
    console.log('Sign In submitted');
    alert('Welcome back!');
    handleCloseModals();
  };

  const handleSignUpSubmit = (e) => {
    e.preventDefault();
    
    if (!signUpData.password) {
      setPasswordError('Password is required');
      setIsPasswordValid(false);
      return;
    }

    if (signUpData.password.length < 8) {
      setPasswordError('Password must be at least 8 characters long');
      setIsPasswordValid(false);
      return;
    }
    
    if (signUpData.password !== signUpData.confirmPassword) {
      setPasswordError('Passwords do not match');
      setIsPasswordValid(false);
      return;
    }

    console.log('Sign Up submitted');
    alert('Account created successfully!');
    handleCloseModals();
  };

  const handleGoogleAuth = () => {
    console.log('Google authentication clicked');
    alert('Google authentication would be implemented here');
  };

  return (
    <div className="medium-landing">
      {/* Medium-style Navigation */}
      <nav className="medium-nav">
        <div className="nav-container">
          <div className="nav-left">
            <h1 className="medium-logo">EduSpark</h1>
          </div>
          <div className="nav-center">
            <div className="nav-links">
              <a href="#" className="nav-link">Our story</a>
              <a href="#" className="nav-link">Membership</a>
              <a href="#" className="nav-link">Write</a>
              <a href="#" className="nav-link" onClick={handleOpenSignIn}>Sign In</a>
            </div>
          </div>
          <div className="nav-right">
            <button className="get-started-btn" onClick={handleOpenSignUp}>
              Get started
            </button>
          </div>
        </div>
      </nav>

      {/* Medium-style Hero Section */}
      <section className="hero-section">
        <div className="hero-container">
          <div className="hero-content">
            <h1 className="hero-title">Stay curious.</h1>
            <p className="hero-subtitle">
              Discover stories, thinking, and expertise from writers on any topic.
            </p>
            <button className="start-reading-btn" onClick={handleOpenSignUp}>
              Start reading
            </button>
          </div>
          <div className="hero-image">
            <div className="floating-letters">
              <span className="letter letter-m">M</span>
              <span className="letter letter-e">E</span>
              <span className="letter letter-d">D</span>
              <span className="letter letter-i">I</span>
              <span className="letter letter-u">U</span>
              <span className="letter letter-final-m">M</span>
            </div>
          </div>
        </div>
      </section>

      {/* Trending Section */}
      <section className="trending-section">
        <div className="trending-container">
          <div className="trending-header">
            <div className="trending-icon">📈</div>
            <span className="trending-text">Trending on EduSpark</span>
          </div>
          <div className="trending-grid">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <article key={item} className="trending-article">
                <div className="trending-number">0{item}</div>
                <div className="trending-content">
                  <div className="author-info">
                    <img 
                      src={`https://images.unsplash.com/photo-${item === 1 ? '1472099645785-5658abf4ff4e' : item === 2 ? '1507003211169-0a1dd7228f2d' : item === 3 ? '1494790108755-2616c5e90aaf' : item === 4 ? '1507833423370-a126b89d394b' : item === 5 ? '1438761681033-6461ffad8d80' : '1500648767791-00dcc994a43e'}?w=32&h=32&fit=crop&crop=face`} 
                      alt="Author" 
                      className="author-avatar"
                    />
                    <span className="author-name">John Doe</span>
                  </div>
                  <h3 className="trending-title">
                    {item === 1 && "The Future of Learning: How AI is Transforming Education"}
                    {item === 2 && "5 Essential Skills Every Developer Should Master in 2025"}
                    {item === 3 && "Building Resilience in Remote Work Environments"}
                    {item === 4 && "The Psychology Behind Effective Team Communication"}
                    {item === 5 && "Sustainable Technology: Green Solutions for Modern Problems"}
                    {item === 6 && "Understanding Data Privacy in the Digital Age"}
                  </h3>
                  <div className="article-meta">
                    <span className="read-time">{3 + item} min read</span>
                    <button onClick={handleOpenSignIn} className="read-more-btn">Read More</button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="main-content">
        <div className="content-container">
          <div className="articles-feed">
            {[1, 2, 3, 4, 5].map((article) => (
              <article key={article} className="article-card">
                <div className="article-content">
                  <div className="author-info">
                    <img 
                      src={`https://images.unsplash.com/photo-${article === 1 ? '1535713875002-d1d0cf227877' : article === 2 ? '1580489944761-15a19d654956' : article === 3 ? '1522202176988-66273c2fd55f' : article === 4 ? '1506794778202-cad84cf45f1d' : '1519085360753-af0119f7c6d0'}?w=40&h=40&fit=crop&crop=face`} 
                      alt="Author" 
                      className="author-avatar"
                    />
                    <div className="author-details">
                      <span className="author-name">Jane Smith</span>
                      <span className="publish-date">Dec {article + 1}</span>
                    </div>
                  </div>
                  <h2 className="article-title">
                    {article === 1 && "How to Build a Successful Career in Tech Without a Computer Science Degree"}
                    {article === 2 && "The Art of Writing Clean Code: Best Practices Every Developer Should Know"}
                    {article === 3 && "Remote Work Revolution: Adapting to the New Normal in Professional Life"}
                    {article === 4 && "Understanding Machine Learning: A Beginner's Guide to AI Fundamentals"}
                    {article === 5 && "The Future of Web Development: Trends and Technologies to Watch"}
                  </h2>
                  <p className="article-excerpt">
                    {article === 1 && "Breaking into tech without a traditional computer science background is challenging but entirely possible. Here's how to navigate your journey..."}
                    {article === 2 && "Clean code is not just about making your code work; it's about making it readable, maintainable, and scalable. Learn the essential practices..."}
                    {article === 3 && "The shift to remote work has fundamentally changed how we approach professional relationships and productivity..."}
                    {article === 4 && "Machine learning might seem complex, but understanding its core concepts can open doors to exciting career opportunities..."}
                    {article === 5 && "Web development continues to evolve rapidly. Stay ahead by understanding these emerging trends and technologies..."}
                  </p>
                  <div className="article-tags">
                    <span className="tag">Programming</span>
                    <span className="tag">Career</span>
                    <span className="tag">Technology</span>
                  </div>
                  <div className="article-meta">
                    <span className="read-time">{4 + article} min read</span>
                    <div className="article-actions">
                      <button className="action-btn" onClick={handleOpenSignIn}>
                        ❤️
                      </button>
                      <button className="action-btn" onClick={handleOpenSignIn}>
                        💬
                      </button>
                      <button className="action-btn" onClick={handleOpenSignUp}>
                        🔖
                      </button>
                    </div>
                  </div>
                </div>
                <div className="article-image">
                  <img 
                    src={`https://images.unsplash.com/photo-${article === 1 ? '1581091226825-a5a50b7d3c5b' : article === 2 ? '1555949963-aa79dcb4c6e0' : article === 3 ? '1521737604893-d14cc237f11d' : article === 4 ? '1527474305487-b87b222841cc' : '1498050108023-c5d6532b407b'}?w=300&h=200&fit=crop`} 
                    alt="Article thumbnail" 
                  />
                </div>
              </article>
            ))}
          </div>

          <aside className="sidebar">
            <div className="sidebar-section">
              <h3 className="sidebar-title">Staff Picks</h3>
              <div className="staff-picks">
                {[1, 2, 3].map((pick) => (
                  <div key={pick} className="staff-pick" onClick={handleOpenSignIn}>
                    <div className="pick-author">
                      <img 
                        src={`https://images.unsplash.com/photo-${pick === 1 ? '1607346256330-dee7af15f7c5' : pick === 2 ? '1511367461989-f85a21fda167' : '1494790108755-2616c5e90aaf'}?w=32&h=32&fit=crop&crop=face`} 
                        alt="Author" 
                        className="pick-avatar"
                      />
                      <span className="pick-author-name">Editor's Choice</span>
                    </div>
                    <h4 className="pick-title">
                      {pick === 1 && "The Hidden Costs of Free Software"}
                      {pick === 2 && "Why Every Team Needs a Designer"}
                      {pick === 3 && "The Psychology of User Experience"}
                    </h4>
                  </div>
                ))}
              </div>
            </div>

            <div className="sidebar-section">
              <h3 className="sidebar-title">Recommended topics</h3>
              <div className="topics-grid">
                {['Programming', 'Technology', 'Startup', 'Productivity', 'Design', 'Data Science', 'Machine Learning', 'Career'].map((topic) => (
                  <button key={topic} className="topic-tag" onClick={handleOpenSignIn}>
                    {topic}
                  </button>
                ))}
              </div>
            </div>

            <div className="sidebar-section">
              <h3 className="sidebar-title">Who to follow</h3>
              <div className="follow-suggestions">
                {[1, 2, 3].map((user) => (
                  <div key={user} className="follow-suggestion">
                    <img 
                      src={`https://images.unsplash.com/photo-${user === 1 ? '1438761681033-6461ffad8d80' : user === 2 ? '1507003211169-0a1dd7228f2d' : '1517841905240-472988babdf9'}?w=40&h=40&fit=crop&crop=face`} 
                      alt="User" 
                      className="suggestion-avatar"
                    />
                    <div className="suggestion-info">
                      <h5 className="suggestion-name">Sarah Johnson</h5>
                      <p className="suggestion-bio">Frontend Developer & UI/UX Designer</p>
                    </div>
                    <button className="follow-btn" onClick={handleOpenSignUp}>Follow</button>
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* Footer */}
      <footer className="medium-footer">
        <div className="footer-container">
          <div className="footer-links">
            <a href="#">Help</a>
            <a href="#">Status</a>
            <a href="#">About</a>
            <a href="#">Careers</a>
            <a href="#">Press</a>
            <a href="#">Blog</a>
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
            <a href="#">Text to speech</a>
            <a href="#">Teams</a>
          </div>
        </div>
      </footer>

      {/* Sign In Modal */}
      {showSignInModal && (
        <div className="modal-overlay" onClick={handleCloseModals}>
          <div className="auth-modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2>Welcome back.</h2>
              <button className="modal-close" onClick={handleCloseModals}>
                ✕
              </button>
            </div>
            
            <div className="social-buttons">
              <button type="button" className="google-btn" onClick={handleGoogleAuth}>
                <svg width="18" height="18" viewBox="0 0 24 24">
                  <path fill="#4285f4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34a853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#fbbc05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="#ea4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                Sign in with Google
              </button>
              
              <button type="button" className="facebook-btn" onClick={handleGoogleAuth}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                Sign in with Facebook
              </button>
            </div>

            <div className="divider">
              <span>or</span>
            </div>

            <form onSubmit={handleSignInSubmit} className="auth-form">
              <div className="form-group">
                <label htmlFor="signInEmail">Email</label>
                <input
                  type="email"
                  id="signInEmail"
                  name="email"
                  value={signInData.email}
                  onChange={handleSignInInputChange}
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="signInPassword">Password</label>
                <input
                  type="password"
                  id="signInPassword"
                  name="password"
                  value={signInData.password}
                  onChange={handleSignInInputChange}
                  placeholder="Enter your password"
                  required
                />
              </div>
              <button type="submit" className="auth-submit-btn">
                Sign In
              </button>
            </form>

            <div className="auth-footer">
              <p>No account? <a href="#" onClick={(e) => {e.preventDefault(); handleSwitchToSignUp();}}>Create one</a></p>
            </div>
          </div>
        </div>
      )}

      {/* Sign Up Modal */}
      {showSignUpModal && (
        <div className="modal-overlay" onClick={handleCloseModals}>
          <div className="auth-modal signup-modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2>Join EduSpark.</h2>
              <button className="modal-close" onClick={handleCloseModals}>
                ✕
              </button>
            </div>
            
            <div className="social-buttons">
              <button type="button" className="google-btn" onClick={handleGoogleAuth}>
                <svg width="18" height="18" viewBox="0 0 24 24">
                  <path fill="#4285f4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34a853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#fbbc05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="#ea4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                Sign up with Google
              </button>
              
              <button type="button" className="facebook-btn" onClick={handleGoogleAuth}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                Sign up with Facebook
              </button>
            </div>

            <div className="divider">
              <span>or</span>
            </div>

            <button type="button" className="email-signup-btn" onClick={() => {
              // Toggle to show email form
              const emailForm = document.querySelector('.email-form');
              if (emailForm) {
                emailForm.style.display = emailForm.style.display === 'none' ? 'block' : 'none';
              }
            }}>
              Sign up with email
            </button>

            <form onSubmit={handleSignUpSubmit} className="auth-form email-form" style={{display: 'none'}}>
              <div className="form-group">
                <label htmlFor="signUpFullName">Full Name</label>
                <input
                  type="text"
                  id="signUpFullName"
                  name="fullName"
                  value={signUpData.fullName}
                  onChange={handleSignUpInputChange}
                  placeholder="Enter your full name"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="signUpEmail">Email</label>
                <input
                  type="email"
                  id="signUpEmail"
                  name="email"
                  value={signUpData.email}
                  onChange={handleSignUpInputChange}
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="signUpPassword">Password</label>
                <input
                  type="password"
                  id="signUpPassword"
                  name="password"
                  value={signUpData.password}
                  onChange={handleSignUpInputChange}
                  placeholder="Create a password"
                  required
                  className={!isPasswordValid && passwordError ? 'error' : ''}
                />
              </div>
              <div className="form-group">
                <label htmlFor="signUpConfirmPassword">Confirm Password</label>
                <input
                  type="password"
                  id="signUpConfirmPassword"
                  name="confirmPassword"
                  value={signUpData.confirmPassword}
                  onChange={handleSignUpInputChange}
                  placeholder="Confirm your password"
                  required
                  className={!isPasswordValid && passwordError ? 'error' : ''}
                />
                {passwordError && (
                  <div className="password-error">
                    {passwordError}
                  </div>
                )}
                {passwordSuccess && !passwordError && (
                  <div className="password-success">
                    {passwordSuccess}
                  </div>
                )}
              </div>
              <button type="submit" className="auth-submit-btn">
                Create Account
              </button>
            </form>

            <div className="auth-footer">
              <p>Already have an account? <a href="#" onClick={(e) => {e.preventDefault(); handleSwitchToSignIn();}}>Sign in</a></p>
            </div>

            <div className="terms-text">
              Click "Sign up" to agree to EduSpark's <a href="#">Terms of Service</a> and acknowledge that EduSpark's <a href="#">Privacy Policy</a> applies to you.
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

