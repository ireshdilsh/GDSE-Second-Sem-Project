import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/AuthPages.css';

export default function SignUpPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    city: '',
    gardenType: '',
    agreeToTerms: false,
    newsletter: true
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
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
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    if (!formData.agreeToTerms) {
      alert('Please agree to the Terms and Conditions');
      return;
    }
    // Handle sign up logic here
    console.log('Sign up data:', formData);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
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
              <h2>Join Our Community!</h2>
              <p>Start your journey in urban gardening and connect with like-minded gardeners in your city.</p>
              
              <div className="visual-features">
                <div className="feature-item">
                  <i className="fas fa-users"></i>
                  <span>Connect with local gardeners</span>
                </div>
                <div className="feature-item">
                  <i className="fas fa-exchange-alt"></i>
                  <span>Share and swap produce</span>
                </div>
                <div className="feature-item">
                  <i className="fas fa-book"></i>
                  <span>Learn from experts</span>
                </div>
                <div className="feature-item">
                  <i className="fas fa-globe"></i>
                  <span>Build sustainable communities</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="auth-form-section">
          <div className="auth-form-wrapper">
            <div className="auth-header">
              <h1>Create Account</h1>
              <p>Join thousands of urban gardeners worldwide</p>
            </div>

            <form onSubmit={handleSubmit} className="auth-form">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="firstName">First Name</label>
                  <div className="input-wrapper">
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      placeholder="John"
                      required
                    />
                    <i className="fas fa-user input-icon"></i>
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="lastName">Last Name</label>
                  <div className="input-wrapper">
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      placeholder="Doe"
                      required
                    />
                    <i className="fas fa-user input-icon"></i>
                  </div>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <div className="input-wrapper">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="john.doe@example.com"
                    required
                  />
                  <i className="fas fa-envelope input-icon"></i>
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <div className="input-wrapper">
                    <input
                      type={showPassword ? "text" : "password"}
                      id="password"
                      name="password"
                      value={formData.password}
                      onChange={handleInputChange}
                      placeholder="Create password"
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
                <div className="form-group">
                  <label htmlFor="confirmPassword">Confirm Password</label>
                  <div className="input-wrapper">
                    <input
                      type={showConfirmPassword ? "text" : "password"}
                      id="confirmPassword"
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleInputChange}
                      placeholder="Confirm password"
                      required
                    />
                    <i className="fas fa-lock input-icon"></i>
                    <button
                      type="button"
                      className="password-toggle"
                      onClick={toggleConfirmPasswordVisibility}
                    >
                      <i className={`fas ${showConfirmPassword ? 'fa-eye-slash' : 'fa-eye'}`}></i>
                    </button>
                  </div>
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="city">City</label>
                  <div className="input-wrapper">
                    <input
                      type="text"
                      id="city"
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      placeholder="Your city"
                      required
                    />
                    <i className="fas fa-map-marker-alt input-icon"></i>
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="gardenType">Garden Type</label>
                  <div className="input-wrapper">
                    <select
                      id="gardenType"
                      name="gardenType"
                      value={formData.gardenType}
                      onChange={handleInputChange}
                      required
                    >
                      <option value="">Select garden type</option>
                      <option value="balcony">Balcony Garden</option>
                      <option value="indoor">Indoor Garden</option>
                      <option value="backyard">Backyard Garden</option>
                      <option value="community">Community Garden</option>
                      <option value="rooftop">Rooftop Garden</option>
                    </select>
                    <i className="fas fa-seedling input-icon"></i>
                  </div>
                </div>
              </div>

              <div className="form-group">
                <div className="checkbox-wrapper">
                  <label className="checkbox-label">
                    <input
                      type="checkbox"
                      name="agreeToTerms"
                      checked={formData.agreeToTerms}
                      onChange={handleInputChange}
                      className="form-checkbox"
                      required
                    />
                    <span className="checkmark"></span>
                    <span className="checkbox-text">
                      I agree to the <Link to="/terms" className="legal-link">Terms and Conditions</Link> and <Link to="/privacy" className="legal-link">Privacy Policy</Link>
                    </span>
                  </label>
                </div>
              </div>

              <div className="form-group">
                <div className="checkbox-wrapper">
                  <label className="checkbox-label">
                    <input
                      type="checkbox"
                      name="newsletter"
                      checked={formData.newsletter}
                      onChange={handleInputChange}
                      className="form-checkbox"
                    />
                    <span className="checkmark"></span>
                    <span className="checkbox-text">
                      Subscribe to our newsletter for gardening tips and community updates
                    </span>
                  </label>
                </div>
              </div>

              <button type="submit" className="auth-btn primary">
                <span>Create Account</span>
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
                Already have an account? 
                <Link to="/signin" className="auth-link"> Sign in here</Link>
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
