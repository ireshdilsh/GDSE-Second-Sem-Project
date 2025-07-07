import React from 'react'
import '../styles/landing.css'
import bgVideo from '../assets/Green Aesthetic Forest Nature Video.mp4'
import logo from '../assets/logo.png'

export default function Landing() {
  return (
    <div>

      <video src={bgVideo} autoPlay loop muted>
      </video>

      <nav>
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <div className="links">
          <a href="">Home</a>
          <a href="">Marketplace</a>
          <a href="">GreenAI</a>
          <a href="">Blogs & Tips</a>
          <a href="">About Us</a>
          <a href="">Contact Us</a>
        </div>
      </nav>

      <section id="home">
        <div className="left-side">
          <p id='title'>Grow Together, Swap Freshness.</p>
          <p id='sub-title'>Join the Urban Green — your community
            garden exchange.</p>
          <p id='description'>Discover a vibrant network of local gardeners trading homegrown fruits, vegetables, herbs, and plants. Share your harvest, find what you need, and connect
            with nature-loving neighbors — all in one simple, green circle.</p>
          <button>Get Started</button>
        </div>
        <div className="right-side">
          <h3>Create Account</h3>
        </div>
      </section>
    </div>
  )
}
