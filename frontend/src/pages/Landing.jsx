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
          <p>Share your garden, discover fresh produce nearby,
            and grow your community today.</p>
          <div className="name">
            <label for="exampleInputEmail1" class="form-label">Full Name</label>
            <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
          </div>
          <div className="email">
            <label for="exampleInputEmail1" class="form-label">Email address</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
            <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
          </div>
          <div className="create-pass">
            <label for="exampleInputEmail1" class="form-label">Create Password</label>
            <input type="password" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
          </div>
          <div className="confirm-pass">
            <label for="exampleInputEmail1" class="form-label">Confirm Password</label>
            <input type="password" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
          </div>
          <button>Create My UrbanGreen Account</button>
        </div>
      </section>
    </div>
  )
}
