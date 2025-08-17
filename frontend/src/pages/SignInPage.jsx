import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/AuthPages.css';

export default function SignInPage() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });
  const [showPassword, setShowPassword] = useState(false);
  // const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle sign in logic here
    console.log('Sign in data:', formData);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="auth-page">
      <div className="auth-container">
        <div className="auth-visual">
          {/* Wave Effects for Left Side */}
          <div className="auth-wave-container">
            <div className="auth-wave auth-wave-1"></div>
            <div className="auth-wave auth-wave-2"></div>
            <div className="auth-wave auth-wave-3"></div>
            <div className="auth-wave auth-wave-4"></div>
          </div>
          
          <div className="visual-overlay">
            <div className="visual-content">
              <div className="brand-logo">
                <div className="logo-icon">
                  <i className="fas fa-leaf"></i>
                </div>
                <span className="brand-text">UrbanGreen</span>
              </div>
              <h2>Welcome Back!</h2>
              <p>Continue your journey in building sustainable urban communities through gardening and sharing.</p>
              
              <div className="visual-stats">
                <div className="stat-item">
                  <div className="stat-number">50K+</div>
                  <div className="stat-label">Gardeners</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">125K+</div>
                  <div className="stat-label">Swaps Made</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">350+</div>
                  <div className="stat-label">Cities</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="auth-form-section">
          <div className="auth-form-wrapper">
            <div className="auth-header">
              <h1>Sign In</h1>
              <p>Enter your credentials to access your account</p>
            </div>

            <form onSubmit={handleSubmit} className="auth-form">
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <div className="input-wrapper">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your@email.com"
                    required
                  />
                  <i className="fas fa-envelope input-icon"></i>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="password">Password</label>
                <div className="input-wrapper">
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    placeholder="Enter your password"
                    required
                  />
                  <i className="fas fa-lock input-icon"></i>
                  <button
                    type="button"
                    className="password-toggle"
                    onClick={togglePasswordVisibility}
                  >
                    <i className={`fas ${showPassword ? 'fa-eye-slash' : 'fa-eye'}`}></i>
                  </button>
                </div>
              </div>

              <div className="form-options">
                <label className="checkbox-label">
                  <input
                    type="checkbox"
                    name="rememberMe"
                    checked={formData.rememberMe}
                    onChange={handleInputChange}
                  />
                  <span className="checkmark"></span>
                  <span>Remember me</span>
                </label>
                <Link to="/forgot-password" className="forgot-link">
                  Forgot password?
                </Link>
              </div>

              <button type="submit" className="auth-btn primary">
                <span>Sign In</span>
                <i className="fas fa-arrow-right"></i>
              </button>

              <div className="divider">
                <span>or</span>
              </div>

              <div className="social-signin">
                <button type="button" className="social-btn google">
                  <i className="fab fa-google"></i>
                  <span>Continue with Google</span>
                </button>
                <button type="button" className="social-btn facebook">
                  <i className="fab fa-facebook-f"></i>
                  <span>Continue with Facebook</span>
                </button>
              </div>
            </form>

            <div className="auth-footer">
              <p>
                Don't have an account? 
                <Link to="/signup" className="auth-link"> Sign up here</Link>
              </p>
            </div>

            <div className="back-to-home">
              <Link to="/" className="back-link">
                <i className="fas fa-arrow-left"></i>
                <span>Back to Home</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
