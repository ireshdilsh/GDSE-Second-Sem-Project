import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../styles/about.css'

export default function About() {

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

                alert('Sign in successful!');
                closeModals();
                
                // Navigate to dashboard
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
        <div className="about-page">
            <nav className='about-navbar'>
                <div className="left-side" onClick={() => navigate('/')}>
                    <h1><h1><h4>Lexora</h4></h1></h1>
                    <p>About us</p>
                </div>
                <div className="right-side">
                    <button id='sign-in' onClick={openSignInModal}>Sign in</button>
                    <button id='sign-up' onClick={openSignUpModal}>Sign up</button>
                </div>
            </nav>

            <div className="about-body">
                <h1>Everyone has a <br /> story to tell</h1>
                <p className='about-desc'>Medium is a home for human stories and ideas. Here, anyone can share <br /> knowledge and wisdom with the world—without having to build <br /> a mailing list or a following first. The internet is noisy and chaotic; <br /> Medium is quiet yet full of insight. It's simple, beautiful, collaborative, <br /> and helps you find the right readers for whatever you have to say.</p>
                <p className='about-desc-secnd-title'>Ultimately, our goal is to deepen our collective <br /> understanding of the world through the power of <br /> writing.</p>
                <p className='about-desc'>We believe that what you read and write matters. Words can divide or <br /> empower us, inspire or discourage us. In a world where the most <br /> sensational and surface-level stories often win, we're building a system <br /> that rewards depth, nuance, and time well spent. A space for thoughtful <br /> conversation more than drive-by takes, and substance over packaging.</p>
                <p className="about-desc">Over 100 million people connect and share their wisdom on Lexora <br /> every month. They're software developers, amateur novelists, product <br /> designers, CEOs, and anyone burning with a story they need to get out <br /> into the world. They write about what they're working on, what's keeping <br /> them up at night, what they've lived through, and what they've learned <br /> that the rest of us might want to know too.</p>
                <p className="about-desc">Instead of selling ads or selling your data, we're supported by a growing <br /> community of over a million Lexora members who believe in our <br /> mission. If you're new here, start reading. Dive deeper into whatever <br /> matters to you. Find a post that helps you learn something new, or <br /> reconsider something familiar—and then write your story.</p>
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
