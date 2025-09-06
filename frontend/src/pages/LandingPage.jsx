import React from 'react'
import '../styles/LandingPage.css'

export default function LandingPage() {
  return (
    <div>
      <nav>
        <div className="logo">
          <h3>Medium</h3>
        </div>
        <div className="middle">
          <div className="links">
            <a href="">Our Story</a>
            <a href="">Membership</a>
            <a href="">Write</a>
            <a href="">Sign In</a>
            <button>Get Started</button>
          </div>
        </div>
      </nav>

      <section id='hero'>
        <div className="left-side">
          
        </div>
        <div className="right-side">
           <img src="https://miro.medium.com/v2/format:webp/4*SdjkdS98aKH76I8eD0_qjw.png" alt="hero-image" />
        </div>
      </section>
    </div>
  )
}
