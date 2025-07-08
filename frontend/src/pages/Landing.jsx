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
          <a href="#home">Home</a>
          <a href="#marketplace">Marketplace</a>
          <a href="#blogs">Blogs & Tips</a>
          <a href="#ai">GreenAI</a>
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

      <section id="marketplace">
        <p id="title">Green Marketplace — Tools, Seeds & More</p>
        <p id="description">Browse and shop gardening essentials from trusted sellers and local growers. Find seeds, tools and everything you need to make your garden thrive all in one place.</p>
      </section>

      <section id="blogs">
        <p id="title">Grow Smarter — Blogs & Tips</p>
        <p id="description">Discover expert advice, creative gardening hacks, and inspiring stories from the GreenLoop community. Whether you’re a beginner or a seasoned grower, find tips to make your garden — and swaps — thrive.</p>
        <div className="blogs-cards">
          <div className="set-1">
            <div className="card-1">
              <h5>5 Easy Herbs to Grow in Small Spaces</h5>
              <hr />
              <p>Learn which herbs thrive on balconies and windowsills — pe
                rfect for beginners with limited space.</p>
            </div>
            <div className="card-2">
              <h5>5 Easy Herbs to Grow in Small Spaces</h5>
              <hr />
              <p>Learn which herbs thrive on balconies and windowsills — pe
                rfect for beginners with limited space.</p>
            </div>
            <div className="card-3">
              <h5>5 Easy Herbs to Grow in Small Spaces</h5>
              <hr />
              <p>Learn which herbs thrive on balconies and windowsills — pe
                rfect for beginners with limited space.</p>
            </div>
          </div>
          <div className="set-2">
            <div className="card-1">
              <h5>5 Easy Herbs to Grow in Small Spaces</h5>
              <hr />
              <p>Learn which herbs thrive on balconies and windowsills — pe
                rfect for beginners with limited space.</p>
            </div>
            <div className="card-2">
              <h5>5 Easy Herbs to Grow in Small Spaces</h5>
              <hr />
              <p>Learn which herbs thrive on balconies and windowsills — pe
                rfect for beginners with limited space.</p>
            </div>
            <div className="card-3">
              <h5>5 Easy Herbs to Grow in Small Spaces</h5>
              <hr />
              <p>Learn which herbs thrive on balconies and windowsills — pe
                rfect for beginners with limited space.</p>
            </div>
          </div>
          <div className="set-3">
            <div className="card-1">
              <h5>5 Easy Herbs to Grow in Small Spaces</h5>
              <hr />
              <p>Learn which herbs thrive on balconies and windowsills — pe
                rfect for beginners with limited space.</p>
            </div>
            <div className="card-2">
              <h5>5 Easy Herbs to Grow in Small Spaces</h5>
              <hr />
              <p>Learn which herbs thrive on balconies and windowsills — pe
                rfect for beginners with limited space.</p>
            </div>
            <div className="card-3">
              <h5>5 Easy Herbs to Grow in Small Spaces</h5>
              <hr />
              <p>Learn which herbs thrive on balconies and windowsills — pe
                rfect for beginners with limited space.</p>
            </div>
          </div>
          <div className="set-4">
            <div className="card-1">
              <h5>5 Easy Herbs to Grow in Small Spaces</h5>
              <hr />
              <p>Learn which herbs thrive on balconies and windowsills — pe
                rfect for beginners with limited space.</p>
            </div>
            <div className="card-2">
              <h5>5 Easy Herbs to Grow in Small Spaces</h5>
              <hr />
              <p>Learn which herbs thrive on balconies and windowsills — pe
                rfect for beginners with limited space.</p>
            </div>
            <div className="card-3">
              <h5>5 Easy Herbs to Grow in Small Spaces</h5>
              <hr />
              <p>Learn which herbs thrive on balconies and windowsills — pe
                rfect for beginners with limited space.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="ai">
        <p id="title">Ask GreenAI — Your Gardening Assistant</p>
        <p id="description">Got a question about plants, pests, or planting seasons? Let GreenAI help! Get instant, expert answers to all your gardening questions — anytime, anywhere.</p>
        <div className="tutorial">
          <div className="step-1">
            <h5>1 . Go to the Ask GreenAI section from the navigation bar.</h5>
            <p>Find the Ask GreenAI option in the navigation bar and click it to open the AI assistant page.</p>
          </div>
          <div className="step-2">
            <h5>2 . In the input box, type your gardening question.</h5>
            <p>In the input box at the bottom of the chat window, type any gardening-related question you have.</p>
          </div>
          <div className="step-3">
            <h5>3 . Click the Send button (or press Send).</h5>
            <p>After typing your question, click the Send button or simply press Enter on your keyboard to submit it.</p>
          </div>
          <div className="step-4">
            <h5>4 . Wait a moment and view the AI’s response in the chat window.</h5>
            <p>Wait a few seconds while the AI thinks, then see its answer appear in the chat window above.</p>
          </div>
          <div className="step-5">
            <h5>5 . Treat the advice like friendly guidance — always double-check and use your best judgment when applying suggestions in your garden.</h5>
            <p>Read the AI’s response carefully and treat it as helpful guidance. Always double-check and use your own judgment before applying advice in your garden.</p>
          </div>
        </div>
      </section>
    </div>
  )
}
