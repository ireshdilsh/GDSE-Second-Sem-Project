import React from 'react'
import '../styles/landing.css'
import hero from '../assets/hero.jpg'
import logo from '../assets/logo.png'

export default function Landing() {
  return (
    <div>

      <section id='home'>
        <div className="top">
          <nav>
            <div className="logo">
              <img src={logo} alt="" />
            </div>
            <div className="links">
              <a href="#">Home</a>
              <a href="">Marketplace</a>
              <a href="">Blogs & Tips</a>
              <a href="">GreenAI</a>
              <a href="#">About Us</a>
              <a href="#">Contact Us</a>
            </div>
          </nav>
        </div>
        <div className="bottom">
          <div className="left-side">
            <p id='title'>Grow Together, Swap Freshness.</p>
            <p id='sub-title'>Join the UrbanGreen - your <br /> community garden exchange.</p>
            <p id='description'>Discover a vibrant network of local gardeners trading homegrown fruits, vegetables, herbs, and plants. Share your harvest, find what you need, and connect
              with nature-loving neighbors — all in one simple, green circle.</p>
            <button>Get Started</button>
          </div>
          <div className="right-side">
           
              <h3>Create Account</h3>
              <p>Share your garden, discover fresh produce nearby,
                and grow your community today.</p>
              <div className="name">
                <label>Enter Your Name</label>
                <input type="text" class="form-control" id="name" aria-describedby="nameHelp" />
              </div>
              <div className="email">
                <label>Enter Your Email</label>
                <input type="email" class="form-control" id="email" aria-describedby="emailHelp" />
                <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
              </div>
              <div className="password">
                <label>Create Password</label>
                <input type="password" class="form-control" id="password" aria-describedby="emailHelp" />
              </div>
              <div className="con-password">
                <label>Confirm Password</label>
                <input type="password" class="form-control" id="con-password" aria-describedby="emailHelp" />
              </div>
              <button>Create My UrbanGreen Account</button>
          </div>
        </div>
      </section>

      <img src={hero} alt="" id='hero' />

      <section id='blogs'>
        <p id="title">
          Green Marketplace — Tools, Seeds & More
        </p>
        <p id="description">
          Browse and shop gardening essentials from trusted sellers and local growers. Find seeds, tools, compost, and everything you need to make your garden thrive — all in one place.
        </p>
      </section>

    </div>
  )
}
