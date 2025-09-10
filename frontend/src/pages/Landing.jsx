import React, { useState } from 'react'
import '../styles/landing.css'
import { Link } from 'react-router-dom'

export default function Landing() {
    const [showSignInModal, setShowSignInModal] = useState(false);
    const [showSignUpModal, setShowSignUpModal] = useState(false);

    const openSignInModal = () => {
        setShowSignInModal(true);
        setShowSignUpModal(false);
    };

    const openSignUpModal = () => {
        setShowSignUpModal(true);
        setShowSignInModal(false);
    };

    const closeModals = () => {
        setShowSignInModal(false);
        setShowSignUpModal(false);
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
            {showSignInModal && (
                <div className="modal-overlay" onClick={closeModals}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <button className="close-modal" onClick={closeModals}>&times;</button>
                        <h1>Welcome Back.</h1>
                        {/* Minimal content as requested */}
                        <div className="btns">
                            <button> <img src="https://img.icons8.com/?size=100&id=17949&format=png&color=000000" alt="google-logo" /> Sign in With Google</button>
                            <button> <img src="https://img.icons8.com/?size=100&id=85467&format=png&color=000000" alt="email-logo" /> Sign in With Email</button>
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

            {/* Sign Up Modal */}
            {showSignUpModal && (
                <div className="modal-overlay" onClick={closeModals}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <button className="close-modal" onClick={closeModals}>&times;</button>
                        <h1>join Lexora.</h1>
                        <div className="btns">
                            <button> <img src="https://img.icons8.com/?size=100&id=17949&format=png&color=000000" alt="google-logo" /> Sign in With Google</button>
                            <button> <img src="https://img.icons8.com/?size=100&id=85467&format=png&color=000000" alt="email-logo" /> Sign in With Email</button>
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
        </div>
    )
}
