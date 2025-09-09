import React from 'react'
import '../styles/landing.css'

export default function Landing() {
    return (
        <div className='landing-page'>
            <nav className="landing-nav">
                <div className="left-side">
                    <h1><h1><h4>Lexora</h4></h1></h1>
                </div>
                <div className="right-side">
                    <div className="links">
                        <a href="">Our Story</a>
                        <a href="">Membership</a>
                        <a href="">Write</a>
                    </div>
                    <div className="btns">
                        <button className="login-btn">Sign in</button>
                        <button className="signup-btn">Get Started</button>
                    </div>
                </div>
            </nav>

            <div className="hero-section">
                <div className="left-side">
                    <h1>Human <br />
                        stories & ideas</h1>
                        <p>A place to read, write, and deepen your understanding</p>
                        <button>Start Reading</button>
                </div>
                <div className="right-side">
                    <img src="https://miro.medium.com/v2/format:webp/4*SdjkdS98aKH76I8eD0_qjw.png" alt="hero-img" />
                </div>
            </div>
        </div>
    )
}
