import React from 'react'
import hero from '../assets/hero.jpeg'
import '../styles/LandingPage.css'
import logo from '../assets/logo.png'

export default function LandingPage() {
  return (
    <div>
      <img src={hero} id='img' alt="" />

      <section id='home'>
        <nav>
          <div className="logo">
            <img src={logo} alt="" />
          </div>
          <div className="links">
            <a href="#home">Home</a>
            <a href="#marketplace">Marketplace</a>
            <a href="">GreenAI</a>
            <a href="">Blogs & Tips</a>
            <a href="">About Us</a>
            <a href="">Contact Us</a>
          </div>
          <button>Sign In Now</button>
        </nav>

        <div className="body">
          <h6>Grow Together, Greener Cities Ahead_</h6>
          <h1>Reconnect with nature in the
          <br />  heart of your city.</h1>
          <p>Urban Green empowers you to plant, share, and care for green spaces—whether it's a balcony garden, rooftop planter,
            or community patch. <br /> Track your plants, swap seeds, and grow a greener neighborhood—one leaf at a time.</p>
          <button>Get Started</button>
        </div>
      </section>

      <section id='marketplace'></section>
    </div>
  )
}
