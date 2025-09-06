import React from 'react'
import '../styles/LandingPage.css'

export default function LandingPage() {
  return (
    <div>
      <nav>
        <div className="logo">
          <h3>Lexora</h3>
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
          <h1>Human <br />
            stories & ideas</h1>
          <p>A place to read, write, and deepen your understanding
          </p>
          <button>Start reading</button>
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
    </div>
  )
}
