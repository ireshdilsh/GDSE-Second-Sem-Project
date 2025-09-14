import React, { useState } from 'react'
import '../styles/landing.css'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';

export default function Landing() {
    const navigate = useNavigate();
    const [showSignInModal, setShowSignInModal] = useState(false);
    const [showSignUpModal, setShowSignUpModal] = useState(false);
    const [showSignInForm, setShowSignInForm] = useState(false);
    const [showSignUpForm, setShowSignUpForm] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [signInData, setSignInData] = useState({
        usernameOrEmail: '',
        password: ''
    });
    const [signUpData, setSignUpData] = useState({
        firstname: '',
        lastname: '',
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
        bio: ''
    });

    const openSignInModal = () => {
        setShowSignInModal(true);
        setShowSignUpModal(false);
        setShowSignInForm(false);
        setShowSignUpForm(false);
        setErrorMessage('');
    };

    const openSignUpModal = () => {
        setShowSignUpModal(true);
        setShowSignInModal(false);
        setShowSignInForm(false);
        setShowSignUpForm(false);
        setErrorMessage('');
    };

    const closeModals = () => {
        setShowSignInModal(false);
        setShowSignUpModal(false);
        setShowSignInForm(false);
        setShowSignUpForm(false);
        setErrorMessage('');
        setSignInData({ usernameOrEmail: '', password: '' });
        setSignUpData({ firstname: '', lastname: '', username: '', email: '', password: '', confirmPassword: '', bio: '' });
    };

    const openSignInForm = () => {
        setShowSignInForm(true);
        setErrorMessage('');
    };

    const openSignUpForm = () => {
        setShowSignUpForm(true);
        setErrorMessage('');
    };

    const handleSignInChange = (e) => {
        const { name, value } = e.target;
        setSignInData(prev => ({
            ...prev,
            [name]: value
        }));
        setErrorMessage(''); // Clear error when user types
    };

    const handleSignUpChange = (e) => {
        const { name, value } = e.target;
        setSignUpData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSignInSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setErrorMessage('');

        try {
            const response = await fetch('http://localhost:8080/api/v1/auth/signin', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    usernameOrEmail: signInData.usernameOrEmail,
                    password: signInData.password
                })
            });

            const data = await response.json();

            if (response.ok && data.status === 200) {
                // Store authentication data
                localStorage.setItem('authToken', data.data.accessToken);
                localStorage.setItem('userData', JSON.stringify({
                    id: data.data.id,
                    username: data.data.username,
                    email: data.data.email,
                    firstName: data.data.firstName,
                    lastName: data.data.lastName,
                    role: data.data.role
                }));

                console.log('id is : '+ data.data.id);

                alert('Sign in successful!');
                closeModals();
                navigate('/writer/dashboard');
            } else {
                setErrorMessage(data.message || 'Sign in failed. Please try again.');
            }
        } catch (error) {
            console.error('Sign in error:', error);
            setErrorMessage('Network error. Please check your connection and try again.');
        } finally {
            setIsLoading(false);
        }
    };

    const handleSignUpSubmit = async (e) => {
        e.preventDefault();
        if (signUpData.password !== signUpData.confirmPassword) {
            alert('Passwords do not match!');
            return;
        }

        const data = {
            "firstName": signUpData.firstname,
            "lastName": signUpData.lastname,
            "username": signUpData.username,
            "email": signUpData.email,
            "password": signUpData.password,
            "bio": signUpData.bio
        }

        try {
            const reap = await axios.post('http://localhost:8080/api/v1/auth/signup', data);
            console.log(reap.data);
            alert('Account created successfully!');
            closeModals();
            openSignInModal();
        } catch (error) {
            console.error('Sign up error:', error);
        }
    };

    return (
        <div className='landing-page'>
            <nav className="landing-nav">
                <div className="left-side">
                    <h1><h1><h4>Lexora</h4></h1></h1>
                </div>
                <div className="right-side">
                    <div className="links">
                        <Link to='/about'>Our Story</Link>
                        <Link to='/membership'>Membership</Link>
                        <Link to='/privacy'>Privacy</Link>
                        <Link to='/terms'>Terms</Link>
                        <a href="#" onClick={(e) => {
                            e.preventDefault();
                            openSignInModal();
                        }}>Write</a>
                    </div>
                    <div className="btns">
                        <button className="login-btn" onClick={openSignInModal}>Sign in</button>
                        <button className="signup-btn" onClick={openSignUpModal}>Get Started</button>
                    </div>
                </div>
            </nav>

            <div className="hero-section">
                <div className="left-side">
                    <h1>Human <br />
                        stories & ideas</h1>
                    <p>A place to read, write, and deepen your understanding</p>
                    <button onClick={openSignUpModal}>Start Reading</button>
                </div>
                <div className="right-side">
                    <img src="https://miro.medium.com/v2/format:webp/4*SdjkdS98aKH76I8eD0_qjw.png" alt="hero-img" />
                </div>
            </div>

            {/* Sign In Modal */}
            {showSignInModal && !showSignInForm && (
                <div className="modal-overlay" onClick={closeModals}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <button className="close-modal" onClick={closeModals}>&times;</button>
                        <h1>Welcome Back.</h1>
                        <div className="btns">
                            <button>
                                <img src="https://img.icons8.com/?size=100&id=17949&format=png&color=000000" alt="google-logo" />
                                Sign in With Google
                            </button>
                            <button onClick={openSignInForm}>
                                <img src="https://img.icons8.com/?size=100&id=85467&format=png&color=000000" alt="email-logo" />
                                Sign in With Email
                            </button>
                        </div>
                        <div className="modal-footer">
                            <p>No Account? <a href="#" onClick={(e) => {
                                e.preventDefault();
                                openSignUpModal();
                            }}>Create one</a></p>
                            <p>By clicking "Sign in", you accept Medium's <Link to='/terms'>Terms of Service</Link> and <Link to='/privacy'>Privacy Policy.</Link></p>
                        </div>
                    </div>
                </div>
            )}

            {/* Sign In Form */}
            {showSignInModal && showSignInForm && (
                <div className="modal-overlay" onClick={closeModals}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <button className="close-modal" onClick={closeModals}>&times;</button>
                        <h1>Sign in with email</h1>
                        {errorMessage && (
                            <div className="error-message">
                                {errorMessage}
                            </div>
                        )}
                        <form onSubmit={handleSignInSubmit} className="auth-form">
                            <div className="form-group">
                                <label>Email or Username</label>
                                <input
                                    type="text"
                                    name="usernameOrEmail"
                                    value={signInData.usernameOrEmail}
                                    onChange={handleSignInChange}
                                    required
                                    disabled={isLoading}
                                    placeholder="Enter your email or username"
                                />
                            </div>
                            <div className="form-group">
                                <label>Password</label>
                                <input
                                    type="password"
                                    name="password"
                                    value={signInData.password}
                                    onChange={handleSignInChange}
                                    required
                                    disabled={isLoading}
                                    placeholder="Enter your password"
                                />
                            </div>
                            <button type="submit" className="auth-submit-btn" disabled={isLoading}>
                                {isLoading ? 'Signing in...' : 'Sign in'}
                            </button>
                        </form>
                        <div className="modal-footer">
                            <p>No Account? <a href="#" onClick={(e) => {
                                e.preventDefault();
                                openSignUpModal();
                            }}>Create one</a></p>
                        </div>
                    </div>
                </div>
            )}

            {/* Sign Up Modal */}
            {showSignUpModal && !showSignUpForm && (
                <div className="modal-overlay" onClick={closeModals}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <button className="close-modal" onClick={closeModals}>&times;</button>
                        <h1>Join Lexora.</h1>
                        <div className="btns">
                            <button>
                                <img src="https://img.icons8.com/?size=100&id=17949&format=png&color=000000" alt="google-logo" />
                                Sign up With Google
                            </button>
                            <button onClick={openSignUpForm}>
                                <img src="https://img.icons8.com/?size=100&id=85467&format=png&color=000000" alt="email-logo" />
                                Sign up With Email
                            </button>
                        </div>
                        <div className="modal-footer">
                            <p>Already have an account? <a href="#" onClick={(e) => {
                                e.preventDefault();
                                openSignInModal();
                            }}>Sign in</a></p>
                            <p id='privacy-p'>By clicking "Sign up", you accept Medium's <Link to='/terms'>Terms of Service</Link> and <Link to='/privacy'>Privacy Policy.</Link></p>
                        </div>
                    </div>
                </div>
            )}

            {/* Sign Up Form */}
            {showSignUpModal && showSignUpForm && (
                <div className="modal-overlay" onClick={closeModals}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <button className="close-modal" onClick={closeModals}>&times;</button>
                        <h1>Sign up with email</h1>
                        <form onSubmit={handleSignUpSubmit} className="auth-form">
                            <div className="form-row">
                                <div className="form-group">
                                    <label>First Name</label>
                                    <input
                                        type="text"
                                        name="firstname"
                                        value={signUpData.firstname}
                                        onChange={handleSignUpChange}
                                        required
                                        placeholder="Enter your first name"
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Last Name</label>
                                    <input
                                        type="text"
                                        name="lastname"
                                        value={signUpData.lastname}
                                        onChange={handleSignUpChange}
                                        required
                                        placeholder="Enter your last name"
                                    />
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group">
                                    <label>Username</label>
                                    <input
                                        type="text"
                                        name="username"
                                        value={signUpData.username}
                                        onChange={handleSignUpChange}
                                        required
                                        placeholder="Choose a unique username"
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={signUpData.email}
                                        onChange={handleSignUpChange}
                                        required
                                        placeholder="Enter your email address"
                                    />
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group">
                                    <label>Create Password</label>
                                    <input
                                        type="password"
                                        name="password"
                                        value={signUpData.password}
                                        onChange={handleSignUpChange}
                                        required
                                        placeholder="Create a strong password"
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Confirm Password</label>
                                    <input
                                        type="password"
                                        name="confirmPassword"
                                        value={signUpData.confirmPassword}
                                        onChange={handleSignUpChange}
                                        required
                                        placeholder="Confirm your password"
                                    />
                                </div>
                            </div>
                            <div className="form-group">
                                <label>Bio (Optional)</label>
                                <textarea
                                    name="bio"
                                    value={signUpData.bio}
                                    onChange={handleSignUpChange}
                                    placeholder="Tell us a bit about yourself..."
                                    rows="3"
                                />
                            </div>
                            <button type="submit" className="auth-submit-btn">Create account</button>
                        </form>
                        <div className="modal-footer">
                            <p>Already have an account? <a href="#" onClick={(e) => {
                                e.preventDefault();
                                openSignInModal();
                            }}>Sign in</a></p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}
