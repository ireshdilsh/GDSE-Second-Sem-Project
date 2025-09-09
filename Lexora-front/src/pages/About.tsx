import { useEffect, useState, } from 'react'
import '../style/about.css'
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
            .map(function (c) {
                return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
            })
            .join('')
    );
    return JSON.parse(jsonPayload);
}


export default function About() {
    const navigate = useNavigate();

    const [showSignInModal, setShowSignInModal] = useState<boolean>(false)
    const [showSignUpModal, setShowSignUpModal] = useState<boolean>(false)

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
        <div className='about-page'>
            <nav className='about-navbar'>
                <div className="left-side" onClick={() => { navigate('/') }}>
                    <h1>Lexora</h1>
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
            {showSignInModal && (
                <div className="modal-overlay" onClick={closeModals}>
                    <div className="modal-container" onClick={(e) => e.stopPropagation()}>
                        <button className="close-btn" onClick={closeModals}>×</button>

                        <div className="modal-header">
                            <h2 style={{ fontFamily: 'Charter, Georgia, serif', textAlign: 'center' }}>Welcome Back.</h2>
                        </div>

                        <div className="modal-content">

                            <div id="google-signin-btn" style={{ marginBottom: '16px' }}></div>

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

            {showSignUpModal && (
                <div className="modal-overlay" onClick={closeModals}>
                    <div className="modal-container" onClick={(e) => e.stopPropagation()}>
                        <button className="close-btn" onClick={closeModals}>×</button>

                        <div className="modal-header">
                            <h2 style={{ fontFamily: 'Charter, Georgia, serif', textAlign: 'center' }}>Join Lexora.</h2>
                        </div>

                        <div className="modal-content">

                            <div id="google-signin-btn" style={{ marginBottom: '16px' }}></div>

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
