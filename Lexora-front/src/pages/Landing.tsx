import { useState, useEffect } from 'react'
import '../style/landing.css'
import { Link, useNavigate } from 'react-router-dom'


const GOOGLE_CLIENT_ID = "141602930536-i1ia3re5sq16brqrdi7m8ctkk6n85i7s.apps.googleusercontent.com";

declare global {
        interface Window {
            google: {
                accounts: {
                    id: {
                          initialize: (options: { client_id: string; callback: (response: { credential: string }) => void }) => void;
                          renderButton: (element: HTMLElement | null, options: { theme: string; size: string; text: string }) => void;
                    };
                };
            };
        }
}

function decodeJwtResponse(token: string) {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(
        atob(base64)
            .split('')
            .map(function(c) {
                return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
            })
            .join('')
    );
    return JSON.parse(jsonPayload);
}

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

    // Google Sign-In callback
        useEffect(() => {
            if (showSignInModal || showSignUpModal) {
                const script = document.createElement('script');
                script.src = 'https://accounts.google.com/gsi/client';
                script.async = true;
                script.onload = () => {
                    window.google.accounts.id.initialize({
                        client_id: GOOGLE_CLIENT_ID,
                        callback: (response: { credential: string }) => {
                            const user = decodeJwtResponse(response.credential);
                            // Save user info to localStorage for Dashboard
                            localStorage.setItem('userInfo', JSON.stringify({
                                name: user.name,
                                email: user.email,
                                picture: user.picture || '/src/assets/react.svg'
                            }));
                            navigate('/dashboard');
                        },
                    });
                    window.google.accounts.id.renderButton(
                        document.getElementById('google-signin-btn'),
                        { theme: 'outline', size: 'large', text: showSignInModal ? 'signin_with' : 'signup_with' }
                    );
                };
                document.body.appendChild(script);
                return () => {
                    document.body.removeChild(script);
                };
            }
        }, [showSignInModal, showSignUpModal, navigate]);

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
                            <div id="google-signin-btn" style={{ marginBottom: '16px' }}></div>
                            {/* ...other sign-in options if needed... */}
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
                            <div id="google-signin-btn" style={{ marginBottom: '16px' }}></div>
                            {/* ...other sign-up options if needed... */}
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