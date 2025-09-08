import React, { useState } from 'react'
import '../style/landing.css'
import { Link, useNavigate } from 'react-router-dom'

export default function Landing() {
    const [showSignInModal, setShowSignInModal] = useState<boolean>(false)
    const [showSignUpModal, setShowSignUpModal] = useState<boolean>(false)

    const navigate = useNavigate();

    const openSignInModal = () => {
        setShowSignInModal(true)
        setShowSignUpModal(false)
    }

    const openSignUpModal = () => {
        setShowSignUpModal(true)
        setShowSignInModal(false)
    }

    const closeModals = () => {
        setShowSignInModal(false)
        setShowSignUpModal(false)
    }

    const switchToSignUp = () => {
        setShowSignInModal(false)
        setShowSignUpModal(true)
    }

    const switchToSignIn = () => {
        setShowSignUpModal(false)
        setShowSignInModal(true)
    }
    return (
        <div>
            <nav>
                <div className="logo" onClick={() => navigate('/')}>
                    <h3>Lexora</h3>
                </div>
                <div className="middle">
                    <div className="links">
                        <Link to='/about'>Our Story</Link>
                        <Link to='/membership'>Membership</Link>
                        <a href="#" onClick={openSignUpModal}>Write</a>
                        <a href="#" onClick={(e) => { e.preventDefault(); openSignInModal(); }}>Sign In</a>
                        <button onClick={openSignUpModal}>Get Started</button>
                    </div>
                </div>
            </nav>

            <section id='hero'>
                <div className="left-side">
                    <h1>Human <br />
                        stories & ideas</h1>
                    <p>A place to read, write, and deepen your understanding
                    </p>
                    <button onClick={openSignUpModal}>Start reading</button>
                </div>
                <div className="right-side">
                    <img src="https://miro.medium.com/v2/format:webp/4*SdjkdS98aKH76I8eD0_qjw.png" alt="hero-image" />
                </div>
            </section>

            <footer>
                <Link to="/help">Help</Link>
                <a href="">Status</a>
                <Link to='/about'>About</Link>
                <a href="">Careers</a>
                <a href="">Press</a>
                <a href="">Blog</a>
                <Link to="/privacy">Privacy</Link>
                <Link to='/terms'>Terms</Link>
                <a href="">Text to Speech</a>
            </footer>

            {/* Sign In Modal */}
            {showSignInModal && (
                <div className="modal-overlay" onClick={closeModals}>
                    <div className="modal-container" onClick={(e) => e.stopPropagation()}>
                        <button className="close-btn" onClick={closeModals}>×</button>

                        <div className="modal-header">
                            <h2 style={{fontFamily:'Charter, Georgia, serif', textAlign: 'center'}}>Welcome Back.</h2>
                        </div>

                        <div className="modal-content">

                            <button><img src="https://img.icons8.com/?size=100&id=V5cGWnc9R4xj&format=png&color=000000" alt="google-logo" />Sign in With Google</button>
                            <button><img src="https://img.icons8.com/?size=100&id=118497&format=png&color=000000" alt="facebook-logo" />Sign in With FaceBook</button>
                            <button><img src="https://img.icons8.com/?size=100&id=12599&format=png&color=000000" alt="github-logo" />Sign in With GitHub</button>

                            <div className="modal-footer">
                                <p>
                                    No account? <a href="#" onClick={(e) => { e.preventDefault(); switchToSignUp(); }}>Create one</a>
                                </p>
                                <p>Forgot email or trouble signing in? <Link to="/help">Get help.</Link></p>
                                <p id='privacy-policy'>By clicking "Sign in", you accept Medium's <Link to="/terms">Terms of Service</Link> and <Link to="/privacy">Privacy Policy.</Link></p>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Sign Up Modal */}
            {showSignUpModal && (
                <div className="modal-overlay" onClick={closeModals}>
                    <div className="modal-container" onClick={(e) => e.stopPropagation()}>
                        <button className="close-btn" onClick={closeModals}>×</button>

                        <div className="modal-header">
                            <h2 style={{fontFamily:'Charter, Georgia, serif', textAlign: 'center'}}>Join Lexora.</h2>
                        </div>

                        <div className="modal-content">

                            <button><img src="https://img.icons8.com/?size=100&id=V5cGWnc9R4xj&format=png&color=000000" alt="google-logo" />Sign up With Google</button>
                            <button><img src="https://img.icons8.com/?size=100&id=118497&format=png&color=000000" alt="facebook-logo" />Sign up With FaceBook</button>
                            <button><img src="https://img.icons8.com/?size=100&id=12599&format=png&color=000000" alt="github-logo" />Sign up With GitHub</button>

                            <div className="modal-footer">
                                <p>
                                    Already have an account? <a href="#" onClick={(e) => { e.preventDefault(); switchToSignIn(); }}>Sign in</a>
                                </p>
                                <p id='privacy-policy'>By clicking "Sign up", you accept Medium's <Link to="/terms">Terms of Service</Link> and <Link to="/privacy">Privacy Policy.</Link></p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}