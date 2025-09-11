import React, { useState } from 'react'
import '../styles/landing.css'
import { Link } from 'react-router-dom'

export default function Landing() {
    const [showSignInModal, setShowSignInModal] = useState(false);
    const [showSignUpModal, setShowSignUpModal] = useState(false);
    const [showSignInForm, setShowSignInForm] = useState(false);
    const [showSignUpForm, setShowSignUpForm] = useState(false);
    const [signInData, setSignInData] = useState({
        email: '',
        password: ''
    });
    const [signUpData, setSignUpData] = useState({
        email: '',
        password: '',
        confirmPassword: ''
    });

    const openSignInModal = () => {
        setShowSignInModal(true);
        setShowSignUpModal(false);
        setShowSignInForm(false);
        setShowSignUpForm(false);
    };

    const openSignUpModal = () => {
        setShowSignUpModal(true);
        setShowSignInModal(false);
        setShowSignInForm(false);
        setShowSignUpForm(false);
    };

    const closeModals = () => {
        setShowSignInModal(false);
        setShowSignUpModal(false);
        setShowSignInForm(false);
        setShowSignUpForm(false);
    };

    const openSignInForm = () => {
        setShowSignInForm(true);
    };

    const openSignUpForm = () => {
        setShowSignUpForm(true);
    };

    const handleSignInChange = (e) => {
        const { name, value } = e.target;
        setSignInData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSignUpChange = (e) => {
        const { name, value } = e.target;
        setSignUpData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSignInSubmit = (e) => {
        e.preventDefault();
        console.log('Sign in data:', signInData);
        // Here you would typically handle authentication
        alert('Sign in successful!');
        closeModals();
    };

    const handleSignUpSubmit = (e) => {
        e.preventDefault();
        if (signUpData.password !== signUpData.confirmPassword) {
            alert('Passwords do not match!');
            return;
        }
        console.log('Sign up data:', signUpData);
        // Here you would typically handle registration
        alert('Account created successfully!');
        closeModals();
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
                        <form onSubmit={handleSignInSubmit} className="auth-form">
                            <div className="form-group">
                                <label>Email</label>
                                <input 
                                    type="email" 
                                    name="email" 
                                    value={signInData.email} 
                                    onChange={handleSignInChange} 
                                    required 
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
                                />
                            </div>
                            <button type="submit" className="auth-submit-btn">Sign in</button>
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
                            <div className="form-group">
                                <label>Email</label>
                                <input 
                                    type="email" 
                                    name="email" 
                                    value={signUpData.email} 
                                    onChange={handleSignUpChange} 
                                    required 
                                />
                            </div>
                            <div className="form-group">
                                <label>Create Password</label>
                                <input 
                                    type="password" 
                                    name="password" 
                                    value={signUpData.password} 
                                    onChange={handleSignUpChange} 
                                    required 
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
