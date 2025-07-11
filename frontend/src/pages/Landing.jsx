import React, { useState } from 'react'
import '../styles/landing.css'
import bgVideo from '../assets/Green Aesthetic Forest Nature Video.mp4'
import logo from '../assets/logo.png'

export default function Landing() {

  const [active, setActive] = useState("seeds");

  const btnStyle = (id) => ({
    border: "1.5px solid #333",
    cursor: "pointer",
    backgroundColor: active === id ? "#333" : "#fcfcfc",
    color: active === id ? "#fcfcfc" : "#333",
  });

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
          <a href="#about">About Us</a>
          <a href="#contact">Contact Us</a>
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
        <div className="btns">
          <button onClick={() => setActive("seeds")} style={btnStyle("seeds")}>
            Seeds & Plants
          </button>
          <button onClick={() => setActive("tools")} style={btnStyle("tools")}>
            Tools & Equipment
          </button>
          <button onClick={() => setActive("soil")} style={btnStyle("soil")}>
            Soil & Fertilizer
          </button>
          <button onClick={() => setActive("planters")} style={btnStyle("planters")}>
            Planters & Decorates
          </button>
          <button onClick={() => setActive("books")} style={btnStyle("books")}>
            Books & Guides
          </button>
        </div>
        <div className="selections">
          {active === "seeds" && (
            <div>
              <h3>Seeds & Plants</h3>
              <p>Explore a wide variety of seeds and live plants for your garden.</p>
            </div>
          )}

          {active === "tools" && (
            <div>
              <h3>Tools & Equipment</h3>
              <p>Find high-quality tools and equipment to help you garden with ease.</p>
            </div>
          )}

          {active === "soil" && (
            <div>
              <h3>Soil & Fertilizer</h3>
              <p>Nourish your plants with the best soil mixes and fertilizers.</p>
            </div>
          )}

          {active === "planters" && (
            <div>
              <h3>Planters & Decorates</h3>
              <p>Add beauty and style with our range of planters and garden decor.</p>
            </div>
          )}

          {active === "books" && (
            <div>
              <h3>Books & Guides</h3>
              <p>Learn more with gardening books and step-by-step guides.</p>
            </div>
          )}
        </div>
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

      <section id='about'>
        <p id="title">About Us — Growing Together with UrbanGreen</p>
        <p id="description">At UrbanGreen, we believe gardening is more than just growing plants — it’s about growing connections, sharing harvests, and nurturing a greener world. Our platform helps gardeners of all skill levels connect, swap their homegrown p-
          roduce, and learn from each other. Whether you have a big garden, a small balcony, or just a pot of herbs on your windowsill — you’re part of the GreenLoop community!</p>
        <div className="about-body">
          <div className="left-side">
            <div className="card-1">
              <h5>Our Mission</h5>
              <hr />
              <p>To create a vibrant, sustainable community where people grow, share, and thrive through gardening.</p>
            </div>
            <div className="card-2">
              <h5>Our Vision</h5>
              <hr />
              <p>A world where no harvest goes to waste, everyone has access to fresh food, and neighbors grow closer
                — one plant at a time.</p>
            </div>
            <div className="card-3">
              <h5>Our Values</h5>
              <hr />
              <p>Sustainability — We care for the earth by reducing waste and encouraging eco-friendly practices.</p>
              <p>Community — We bring people together through a shared love of gardening.</p>
              <p>Learning — We help each other grow, not just plants but also knowledge.</p>
              <p>Inclusivity — Everyone is welcome, regardless of experience or space.</p>
            </div>
          </div>
          <div className="right-side">
            <img src={logo} alt="" />
          </div>
        </div>
        <h4>Let’s grow together, share more, and make the world greener — one swap at a time!</h4>
      </section>

      <section id="contact">

      </section>

      <footer>
       
      </footer>

    </div>
  )
}
