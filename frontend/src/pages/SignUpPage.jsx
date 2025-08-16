import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/AuthPages.css';

export default function SignUpPage() {
  const navigate = useNavigate();
  
  // Form state
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  
  // Validation states
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
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

    // First name validation
    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required';
    }

    // Last name validation
    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required';
    }

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
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters long';
    }

    // Confirm password validation
    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Please confirm your password';
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
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
      
      console.log('Sign up data:', formData);
      
      // On success, redirect to sign in page or dashboard
      navigate('/signin', { 
        state: { 
          message: 'Account created successfully! Please sign in.' 
        }
      });
      
    } catch (error) {
      console.error('Sign up error:', error);
      setErrors({
        submit: 'An error occurred. Please try again.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Handle Google sign up
  const handleGoogleSignUp = () => {
    console.log('Google sign up clicked');
    // Implement Google OAuth here
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
            
            <h1>Join Our Growing Community</h1>
            <p>Connect with urban gardeners worldwide. Share knowledge, exchange seeds, and build sustainable communities.</p>
            
            <div className="brand-features">
              <div className="feature-item">
                <i className="fas fa-users"></i>
                <span>50K+ Active Gardeners</span>
              </div>
              <div className="feature-item">
                <i className="fas fa-seedling"></i>
                <span>125K+ Seed Exchanges</span>
              </div>
              <div className="feature-item">
                <i className="fas fa-globe"></i>
                <span>350+ Cities Worldwide</span>
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

        {/* Right Side - Sign Up Form */}
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
                <h2>Create Your Account</h2>
                <p>Start your urban gardening journey today</p>
              </div>

              <form className="auth-form" onSubmit={handleSubmit}>
                {/* Error Message */}
                {errors.submit && (
                  <div className="alert alert-danger" role="alert">
                    {errors.submit}
                  </div>
                )}

                {/* Name Fields */}
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="firstName">First Name</label>
                    <div className={`input-wrapper ${errors.firstName ? 'error' : ''}`}>
                      <i className="fas fa-user"></i>
                      <input 
                        type="text" 
                        id="firstName" 
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        placeholder="Enter your first name"
                        className={errors.firstName ? 'error' : ''}
                      />
                    </div>
                    {errors.firstName && <span className="error-message">{errors.firstName}</span>}
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="lastName">Last Name</label>
                    <div className={`input-wrapper ${errors.lastName ? 'error' : ''}`}>
                      <i className="fas fa-user"></i>
                      <input 
                        type="text" 
                        id="lastName" 
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        placeholder="Enter your last name"
                        className={errors.lastName ? 'error' : ''}
                      />
                    </div>
                    {errors.lastName && <span className="error-message">{errors.lastName}</span>}
                  </div>
                </div>

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
                      placeholder="Create a password (min 6 characters)"
                      className={errors.password ? 'error' : ''}
                    />
                  </div>
                  {errors.password && <span className="error-message">{errors.password}</span>}
                </div>

                {/* Confirm Password Field */}
                <div className="form-group">
                  <label htmlFor="confirmPassword">Confirm Password</label>
                  <div className={`input-wrapper ${errors.confirmPassword ? 'error' : ''}`}>
                    <i className="fas fa-lock"></i>
                    <input 
                      type="password" 
                      id="confirmPassword" 
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      placeholder="Confirm your password"
                      className={errors.confirmPassword ? 'error' : ''}
                    />
                  </div>
                  {errors.confirmPassword && <span className="error-message">{errors.confirmPassword}</span>}
                </div>

                {/* Terms and Conditions */}
                <div className="form-options">
                  <label className="checkbox-wrapper">
                    <input type="checkbox" required />
                    <span className="checkmark"></span>
                    I agree to the <Link to="/terms" className="text-link">Terms of Service</Link> and <Link to="/privacy" className="text-link">Privacy Policy</Link>
                  </label>
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
                      <span>Creating Account...</span>
                    </>
                  ) : (
                    <>
                      <span>Create Account</span>
                      <i className="fas fa-arrow-right"></i>
                    </>
                  )}
                </button>

                {/* Divider */}
                <div className="auth-divider">
                  <span>or</span>
                </div>

                {/* Google Sign Up */}
                <button 
                  type="button" 
                  className="btn-auth-google"
                  onClick={handleGoogleSignUp}
                  disabled={isSubmitting}
                >
                  <i className="fab fa-google"></i>
                  <span>Sign up with Google</span>
                </button>

                {/* Sign In Link */}
                <div className="auth-switch">
                  <p>Already have an account? 
                    <Link to="/signin" className="switch-auth">
                      Sign in
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
