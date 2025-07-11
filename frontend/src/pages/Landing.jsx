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
            <div className="seeds">
             <div className="set-1">
              <div className="card-1">
                <h5>Organic Tomato Seeds</h5>
                <hr />
                <p>Grow your own fresh, juicy tomatoes with these high-quality organic seeds. Perfect for beginners and experienced gardeners alike, they thrive in pots, raised beds, or directly in the soil. Enjoy flavorful, healthy tomatoes from your garden while reducing your grocery bills and eating more sustainably every season.</p>
              </div>
              <div className="card-2">
                  <h5>Basil Herb Plant</h5>
                <hr />
                <p>Add vibrant green basil to your kitchen or garden. This healthy basil plant provides a constant supply of aromatic leaves, perfect for cooking or garnishing. Easy to care for and fast-growing, it brings both flavor and beauty to any space while helping you connect with your garden daily.</p>
              </div>
              <div className="card-3">
                  <h5>Sunflower Seeds</h5>
                <hr />
                <p>Brighten up your garden with these cheerful sunflower seeds. Perfect for garden borders or pots, sunflowers attract bees and birds while adding bold color to your space. They grow tall and strong, offering joy and natural beauty, making them a favorite choice for both children and adults alike.</p>
              </div>
             </div>
             <div className="set-2">
              <div className="card-1">
                <h5>Strawberry Runners</h5>
                <hr />
                <p>Start growing sweet, delicious strawberries at home with these healthy runners. Easy to plant and maintain, they produce fresh fruits right from your garden or balcony. Experience the joy of harvesting your own juicy strawberries while saving money and reducing your carbon footprint. Perfect for any gardening enthusiast!</p>
              </div>
              <div className="card-2">
                 <h5>Lavender Plant</h5>
                <hr />
                <p>Bring beauty and calming fragrance into your garden with this hardy lavender plant. Its purple flowers attract pollinators and its soothing aroma creates a relaxing environment. Perfect for gardens, patios, or windowsills, lavender is low-maintenance and long-lasting, offering both ornamental value and natural charm throughout the year.</p>
              </div>
              <div className="card-3">
                 <h5>Spinach Seeds</h5>
                <hr />
                <p>Enjoy fresh, nutrient-rich greens at home with these easy-to-grow spinach seeds. Ideal for small gardens, pots, or raised beds, spinach grows quickly and provides a healthy, tasty addition to your meals. A perfect choice for anyone looking to eat healthier and garden sustainably, even in limited spaces.</p>
              </div>
             </div>
            </div>
          )}

          {active === "tools" && (
            <div className='tools'>
              <div className="set-1">
                <div className="card-1">
                  <h5></h5>
                  <hr />
                  <p></p>
                </div>
                <div className="card-2">
                  <h5></h5>
                  <hr />
                  <p></p>
                </div>
                <div className="card-3">
                  <h5></h5>
                  <hr />
                  <p></p>
                </div>
              </div>
              <div className="set-2">
                <div className="card-1">
                  <h5></h5>
                  <hr />
                  <p></p>
                </div>
                <div className="card-2">
                  <h5></h5>
                  <hr />
                  <p></p>
                </div>
                <div className="card-3">
                  <h5></h5>
                  <hr />
                  <p></p>
                </div>
              </div>
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
