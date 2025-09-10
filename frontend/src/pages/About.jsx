import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../styles/about.css'

export default function About() {

    const navigate = useNavigate();

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
