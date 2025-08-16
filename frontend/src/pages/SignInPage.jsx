import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/AuthPages.css';

export default function SignInPage() {
  const navigate = useNavigate();
  const location = useLocation();
  
  // Form state
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });
  
  // UI states
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  // Check for success message from signup
  useEffect(() => {
    if (location.state?.message) {
      setSuccessMessage(location.state.message);
      // Clear the message after 5 seconds
      setTimeout(() => setSuccessMessage(''), 5000);
    }
  }, [location.state]);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  // Validate form
  const validateForm = () => {
    const newErrors = {};

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    // Password validation
    if (!formData.password) {
      newErrors.password = 'Password is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      console.log('Sign in data:', formData);
      
      // On success, redirect to dashboard or home
      navigate('/', { 
        state: { 
          message: 'Welcome back! You have been signed in successfully.' 
        }
      });
      
    } catch (error) {
      console.error('Sign in error:', error);
      setErrors({
        submit: 'Invalid email or password. Please try again.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Handle Google sign in
  const handleGoogleSignIn = () => {
    console.log('Google sign in clicked');
    // Implement Google OAuth here
  };

  // Handle forgot password
  const handleForgotPassword = () => {
    console.log('Forgot password clicked');
    // Implement forgot password flow
  };

  return (
    <div className="auth-page">
      <div className="auth-container">
        {/* Left Side - Branding */}
        <div className="auth-brand">
          <div className="brand-content">
            <div className="brand-logo">
              <i className="fas fa-leaf"></i>
              <span>UrbanGreen</span>
            </div>
            
            <h1>Welcome Back!</h1>
            <p>Continue your urban gardening journey. Connect with your community and grow together.</p>
            
            <div className="brand-features">
              <div className="feature-item">
                <i className="fas fa-chart-line"></i>
                <span>Track Your Growth</span>
              </div>
              <div className="feature-item">
                <i className="fas fa-exchange-alt"></i>
                <span>Trade with Neighbors</span>
              </div>
              <div className="feature-item">
                <i className="fas fa-comments"></i>
                <span>Expert Advice</span>
              </div>
            </div>
          </div>
          
          {/* Background Elements */}
          <div className="brand-bg-elements">
            <div className="bg-circle bg-circle-1"></div>
            <div className="bg-circle bg-circle-2"></div>
            <div className="bg-circle bg-circle-3"></div>
          </div>
        </div>

        {/* Right Side - Sign In Form */}
        <div className="auth-form-container">
          <div className="auth-form-wrapper">
            {/* Back to Home Link */}
            <div className="auth-header">
              <Link to="/" className="back-to-home">
                <i className="fas fa-arrow-left"></i>
                <span>Back to Home</span>
              </Link>
            </div>

            <div className="auth-form-content">
              <div className="form-header">
                <h2>Sign In to Your Account</h2>
                <p>Welcome back to the community</p>
              </div>

              <form className="auth-form" onSubmit={handleSubmit}>
                {/* Success Message */}
                {successMessage && (
                  <div className="alert alert-success" role="alert">
                    {successMessage}
                  </div>
                )}

                {/* Error Message */}
                {errors.submit && (
                  <div className="alert alert-danger" role="alert">
                    {errors.submit}
                  </div>
                )}

                {/* Email Field */}
                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <div className={`input-wrapper ${errors.email ? 'error' : ''}`}>
                    <i className="fas fa-envelope"></i>
                    <input 
                      type="email" 
                      id="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your email"
                      className={errors.email ? 'error' : ''}
                      autoFocus
                    />
                  </div>
                  {errors.email && <span className="error-message">{errors.email}</span>}
                </div>

                {/* Password Field */}
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <div className={`input-wrapper ${errors.password ? 'error' : ''}`}>
                    <i className="fas fa-lock"></i>
                    <input 
                      type="password" 
                      id="password" 
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      placeholder="Enter your password"
                      className={errors.password ? 'error' : ''}
                    />
                  </div>
                  {errors.password && <span className="error-message">{errors.password}</span>}
                </div>

                {/* Form Options */}
                <div className="form-options">
                  <label className="checkbox-wrapper">
                    <input 
                      type="checkbox" 
                      name="rememberMe"
                      checked={formData.rememberMe}
                      onChange={handleChange}
                    />
                    <span className="checkmark"></span>
                    Remember me
                  </label>
                  <button 
                    type="button" 
                    className="forgot-password"
                    onClick={handleForgotPassword}
                  >
                    Forgot password?
                  </button>
                </div>

                {/* Submit Button */}
                <button 
                  type="submit" 
                  className="btn-auth-primary"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <i className="fas fa-spinner fa-spin"></i>
                      <span>Signing In...</span>
                    </>
                  ) : (
                    <>
                      <span>Sign In</span>
                      <i className="fas fa-arrow-right"></i>
                    </>
                  )}
                </button>

                {/* Divider */}
                <div className="auth-divider">
                  <span>or</span>
                </div>

                {/* Google Sign In */}
                <button 
                  type="button" 
                  className="btn-auth-google"
                  onClick={handleGoogleSignIn}
                  disabled={isSubmitting}
                >
                  <i className="fab fa-google"></i>
                  <span>Continue with Google</span>
                </button>

                {/* Sign Up Link */}
                <div className="auth-switch">
                  <p>Don't have an account? 
                    <Link to="/signup" className="switch-auth">
                      Sign up
                    </Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
