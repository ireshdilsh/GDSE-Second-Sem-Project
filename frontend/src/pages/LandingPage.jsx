import React, { useState } from 'react'
import '../styles/LandingPage.css'

export default function LandingPage() {
  const [showSignInModal, setShowSignInModal] = useState(false)
  const [showSignUpModal, setShowSignUpModal] = useState(false)

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
        <div className="logo">
          <h3>Lexora</h3>
        </div>
        <div className="middle">
          <div className="links">
            <a href="#" onClick={(e) => { e.preventDefault(); }}>Our Story</a>
            <a href="#" onClick={(e) => { e.preventDefault(); }}>Membership</a>
            <a href="#" onClick={(e) => { e.preventDefault(); }}>Write</a>
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
        <a href="">Help</a>
        <a href="">Status</a>
        <a href="">About</a>
        <a href="">Careers</a>
        <a href="">Press</a>
        <a href="">Blog</a>
        <a href="">Privacy</a>
        <a href="">Rules</a>
        <a href="">Terms</a>
        <a href="">Text to Speach</a>
      </footer>

      {/* Sign In Modal */}
      {showSignInModal && (
        <div className="modal-overlay" onClick={closeModals}>
          <div className="modal-container" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={closeModals}>×</button>

            <div className="modal-header">
              <h2>Welcome Back.</h2>
            </div>

            <div className="modal-content">

              <button>Sign in With Google</button>
              <button>Sign in With FaceBook</button>
              <button>Sign in With GitHub</button>

              <div className="modal-footer">
                <p>
                  No account? <a href="#" onClick={(e) => { e.preventDefault(); switchToSignUp(); }}>Create one</a>
                </p>
                <p>Forgot email or trouble signing in? <a href="">Get help.</a></p>
                <p id='privacy-policy'>By clicking "Sign in", you accept Medium's <a href="">Terms of Service</a> and <a href="">Privacy Policy.</a></p>
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
              <h2>Join Lexora.</h2>
            </div>

            <div className="modal-content">

              <button>Sign in With Google</button>
              <button>Sign in With FaceBook</button>
              <button>Sign in With GitHub</button>

              <div className="modal-footer">
                <p>
                  Already have an account? <a href="#" onClick={(e) => { e.preventDefault(); switchToSignIn(); }}>Sign in</a>
                </p>
                <p id='privacy-policy'>By clicking "Sign up", you accept Medium's <a href="">Terms of Service</a> and <a href="">Privacy Policy.</a></p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
