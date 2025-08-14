import React, { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import '../styles/PasswordResetPage.css';

export default function PasswordResetPage() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    password: '',
    confirmPassword: ''
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [resetSuccess, setResetSuccess] = useState(false);
  const [_token, setToken] = useState('');

  useEffect(() => {
    // Get token from URL parameters
    const resetToken = searchParams.get('token');
    if (!resetToken) {
      // Redirect to forgot password if no token
      navigate('/forget/password');
    } else {
      setToken(resetToken);
    }
  }, [searchParams, navigate]);

  const validateForm = () => {
    const newErrors = {};

    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters long';
    } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(formData.password)) {
      newErrors.password = 'Password must contain at least one uppercase letter, one lowercase letter, and one number';
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Please confirm your password';
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsLoading(true);
    
    try {
      // Here you would make an API call to reset the password
      // const response = await fetch('/api/reset-password', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify({
      //     token: _token,
      //     password: formData.password
      //   }),
      // });

      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setResetSuccess(true);
      
      // Redirect to login page after 3 seconds
      setTimeout(() => {
        navigate('/');
      }, 3000);
      
    } catch (error) {
      console.error('Password reset error:', error);
      setErrors({ general: 'An error occurred while resetting your password. Please try again.' });
    } finally {
      setIsLoading(false);
    }
  };

  const handleBackToLogin = () => {
    navigate('/');
  };

  if (resetSuccess) {
    return (
      <div className="password-reset-container">
        <div className="success-message">
          <div className="success-icon">✓</div>
          <h2>Password Reset Successful!</h2>
          <p>Your password has been successfully reset.</p>
          <p>You will be redirected to the login page in a few seconds...</p>
          <button onClick={handleBackToLogin} className="back-to-login-btn">
            Go to Login Now
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="password-reset-container">
      <div className="password-reset-card">
        <h2>Reset Your Password</h2>
        <p className="reset-subtitle">Enter your new password below</p>
        
        {errors.general && (
          <div className="error-message general-error">
            {errors.general}
          </div>
        )}
        
        <form onSubmit={handleSubmit} className="password-reset-form">
          <div className="form-group">
            <label htmlFor="password">New Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              className={errors.password ? 'error' : ''}
              placeholder="Enter your new password"
              required
            />
            {errors.password && (
              <span className="error-message">{errors.password}</span>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm New Password</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleInputChange}
              className={errors.confirmPassword ? 'error' : ''}
              placeholder="Confirm your new password"
              required
            />
            {errors.confirmPassword && (
              <span className="error-message">{errors.confirmPassword}</span>
            )}
          </div>

          <div className="password-requirements">
            <h4>Password Requirements:</h4>
            <ul>
              <li className={formData.password.length >= 8 ? 'valid' : ''}>
                At least 8 characters long
              </li>
              <li className={/(?=.*[a-z])/.test(formData.password) ? 'valid' : ''}>
                At least one lowercase letter
              </li>
              <li className={/(?=.*[A-Z])/.test(formData.password) ? 'valid' : ''}>
                At least one uppercase letter
              </li>
              <li className={/(?=.*\d)/.test(formData.password) ? 'valid' : ''}>
                At least one number
              </li>
            </ul>
          </div>

          <button 
            type="submit" 
            className="reset-password-btn"
            disabled={isLoading}
          >
            {isLoading ? 'Resetting Password...' : 'Reset Password'}
          </button>
        </form>

        <div className="back-to-login">
          <button onClick={handleBackToLogin} className="link-btn">
            ← Back to Login
          </button>
        </div>
      </div>
    </div>
  );
}
