import React, { useState } from 'react'
import '../styles/landing.css'
import bgVideo from '../assets/Green Aesthetic Forest Nature Video.mp4'
import logo from '../assets/logo.png'

import seeds1 from '../assets/seeds/1.jpg'
import seeds2 from '../assets/seeds/2.jpg'
import seeds3 from '../assets/seeds/3.jpg'
import seeds4 from '../assets/seeds/4.jpg'
import seeds5 from '../assets/seeds/5.jpg'
import seeds6 from '../assets/seeds/6.jpg'

import tool1 from '../assets/tools/1.jpg'
import tool2 from '../assets/tools/2.jpg'
import tool3 from '../assets/tools/3.jpg'
import tool4 from '../assets/tools/4.jpg'
import tool5 from '../assets/tools/5.jpg'
import tool6 from '../assets/tools/6.jpg'

import soil1 from '../assets/soil/1.jpg'
import soil2 from '../assets/soil/2.jpg'
import soil3 from '../assets/soil/3.jpg'
import soil4 from '../assets/soil/4.jpg'
import soil5 from '../assets/soil/5.jpg'
import soil6 from '../assets/soil/6.jpg'

import planter1 from '../assets/planters/1.jpg'
import planter2 from '../assets/planters/2.jpg'
import planter3 from '../assets/planters/3.jpg'
import planter4 from '../assets/planters/4.jpg'
import planter5 from '../assets/planters/5.jpg'
import planter6 from '../assets/planters/6.jpg'

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
                  <img src={seeds1} alt="" />
                  <h5>Organic Tomato Seeds</h5>
                  <hr />
                  <p>Grow your own fresh, juicy tomatoes with these high-quality organic seeds. Perfect for beginners and experienced gardeners alike, they thrive in pots, raised beds, or directly in the soil. Enjoy flavorful, healthy tomatoes from your garden while reducing your grocery bills and eating more sustainably every season.</p>
                  <div className="instock">
                    in stock
                  </div>
                </div>
                <div className="card-2">
                  <img src={seeds2} alt="" />
                  <h5>Basil Herb Plant</h5>
                  <hr />
                  <p>Add vibrant green basil to your kitchen or garden. This healthy basil plant provides a constant supply of aromatic leaves, perfect for cooking or garnishing. Easy to care for and fast-growing, it brings both flavor and beauty to any space while helping you connect with your garden daily.</p>
                  <div className="instock">
                    in stock
                  </div>
                </div>
                <div className="card-3">
                  <img src={seeds3} alt="" />
                  <h5>Sunflower Seeds</h5>
                  <hr />
                  <p>Brighten up your garden with these cheerful sunflower seeds. Perfect for garden borders or pots, sunflowers attract bees and birds while adding bold color to your space. They grow tall and strong, offering joy and natural beauty, making them a favorite choice for both children and adults alike.</p>
                  <div className="instock">
                    in stock
                  </div>
                </div>
              </div>
              <div className="set-2">
                <div className="card-1">
                  <img src={seeds4} alt="" />
                  <h5>Strawberry Runners</h5>
                  <hr />
                  <p>Start growing sweet, delicious strawberries at home with these healthy runners. Easy to plant and maintain, they produce fresh fruits right from your garden or balcony. Experience the joy of harvesting your own juicy strawberries while saving money and reducing your carbon footprint. Perfect for any gardening enthusiast!</p>
                  <div className="instock">
                    in stock
                  </div>
                </div>
                <div className="card-2">
                  <img src={seeds5} alt="" />
                  <h5>Lavender Plant</h5>
                  <hr />
                  <p>Bring beauty and calming fragrance into your garden with this hardy lavender plant. Its purple flowers attract pollinators and its soothing aroma creates a relaxing environment. Perfect for gardens, patios, or windowsills, lavender is low-maintenance and long-lasting, offering both ornamental value and natural charm throughout the year.</p>
                  <div className="instock">
                    in stock
                  </div>
                </div>
                <div className="card-3">
                  <img src={seeds6} alt="" />
                  <h5>Spinach Seeds</h5>
                  <hr />
                  <p>Enjoy fresh, nutrient-rich greens at home with these easy-to-grow spinach seeds. Ideal for small gardens, pots, or raised beds, spinach grows quickly and provides a healthy, tasty addition to your meals. A perfect choice for anyone looking to eat healthier and garden sustainably, even in limited spaces.</p>
                  <div className="instock">
                    in stock
                  </div>
                </div>
              </div>
            </div>
          )}

          {active === "tools" && (
            <div className='tools'>
              <div className="set-1">
                <div className="card-1">
                  <img src={tool1} alt="" />
                  <h5>Stainless Steel Pruning Shears</h5>
                  <hr />
                  <p>Durable and sharp, these stainless steel pruning shears are perfect for trimming plants, harvesting herbs, and shaping your garden. With comfortable handles and a precise cut, they make gardening easier and more enjoyable while keeping your plants healthy and looking great.
                  </p>
                  <div className="instock">
                    in stock
                  </div>
                </div>
                <div className="card-2">
                  <img src={tool2} alt="" />
                  <h5>Gardening Gloves (Pair)</h5>
                  <hr />
                  <p>Protect your hands from dirt, thorns, and blisters with these comfortable gardening gloves. Breathable and durable, they give you a good grip and keep your hands clean while working with soil, plants, or tools. Essential for any gardener to work safely and comfortably in the garden.</p>
                  <div className="instock">
                    in stock
                  </div>
                </div>
                <div className="card-3">
                  <img src={tool3} alt="" />
                  <h5>Watering Can (Metal, 5L)</h5>
                  <hr />
                  <p>Keep your plants happy and hydrated with this sturdy metal watering can. Its classic design and long spout allow for gentle, precise watering without splashing. Perfect for indoor and outdoor plants, it’s both functional and stylish — a must-have tool for everyday gardening tasks.</p>
                  <div className="instock">
                    in stock
                  </div>
                </div>
              </div>
              <div className="set-2">
                <div className="card-1">
                  <img src={tool4} alt="" />
                  <h5>Hand Trowel</h5>
                  <hr />
                  <p>A versatile and handy tool for digging, planting, and transplanting small plants or seedlings. This hand trowel features a comfortable grip and a strong metal blade to handle all your soil work with ease, making it an essential addition to any gardener’s toolkit.</p>
                  <div className="instock">
                    in stock
                  </div>
                </div>
                <div className="card-2">
                  <img src={tool5} alt="" />
                  <h5>Garden Tool Set (5-piece)</h5>
                  <hr />
                  <p>This complete garden tool set includes all the essentials: trowel, pruners, weeder, cultivator, and gloves. Perfect for beginners and experienced gardeners, it helps you dig, plant, prune, and maintain your garden efficiently. Compact and easy to store, this set makes gardening more organized and fun.</p>
                  <div className="instock">
                    in stock
                  </div>
                </div>
                <div className="card-3">
                  <img src={tool6} alt="" />
                  <h5>Small Garden Hoe</h5>
                  <hr />
                  <p>Keep your soil loose and weed-free with this lightweight yet sturdy garden hoe. Ideal for breaking up compacted soil, shaping beds, and removing weeds, it saves time and energy while improving soil health and plant growth. A reliable companion for maintaining a beautiful and productive garden.</p>
                  <div className="instock">
                    in stock
                  </div>
                </div>
              </div>
            </div>
          )}

          {active === "soil" && (
            <div className='soil'>
              <div className="set-1">
                <div className="card-1">
                  <img src={soil1} alt="" />
                  <h5>Organic Compost (10kg Bag)</h5>
                  <hr />
                  <p>Enrich your soil with this nutrient-packed organic compost. Perfect for vegetables, flowers, and herbs, it improves soil structure, retains moisture, and promotes healthy plant growth naturally. An eco-friendly way to recycle and boost your garden’s productivity while caring for the earth.</p>
                  <div className="instock">
                    in stock
                  </div>
                </div>
                <div className="card-2">
                  <img src={soil2} alt="" />
                  <h5>Coco Peat Blocks</h5>
                  <hr />
                  <p>Lightweight and sustainable, these compressed coco peat blocks expand into soft, airy soil ideal for seedlings, pots, and garden beds. They retain water effectively and improve aeration, giving your plants the perfect growing medium without chemicals. Great for indoor and outdoor gardening alike.</p>
                  <div className="instock">
                    in stock
                  </div>
                </div>
                <div className="card-3">
                  <img src={soil3} alt="" />
                  <h5>Organic Vegetable Fertilizer</h5>
                  <hr />
                  <p>Boost your vegetable garden with this all-natural fertilizer, rich in essential nutrients. Specially formulated for edible plants, it enhances flavor, yield, and overall health of your crops while being safe for you and the environment. Enjoy healthier, tastier harvests naturally!</p>
                  <div className="instock">
                    in stock
                  </div>
                </div>
              </div>
              <div className="set-2">
                <div className="card-1">
                  <img src={soil4} alt="" />
                  <h5>Worm Castings (Vermicompost)</h5>
                  <hr />
                  <p>A natural powerhouse of nutrients, worm castings improve soil fertility, increase microbial activity, and help plants resist diseases. This odorless, organic vermicompost is perfect for all plants — flowers, veggies, or herbs — and ensures stronger roots and lush growth.</p>
                  <div className="instock">
                    in stock
                  </div>
                </div>
                <div className="card-2">
                  <img src={soil5} alt="" />
                  <h5>Potting Mix (Ready-to-Use)</h5>
                  <hr />
                  <p>Convenient and balanced, this ready-to-use potting mix is perfect for houseplants, balconies, and container gardening. Blended for optimal drainage and nutrient retention, it supports healthy root development and vibrant foliage. Just open the bag and start planting!</p>
                  <div className="instock">
                    in stock
                  </div>
                </div>
                <div className="card-3">
                  <img src={soil6} alt="" />
                  <h5>Natural Pest-Repellent Fertilizer</h5>
                  <hr />
                  <p>Protect and nourish your plants at the same time with this dual-purpose fertilizer. Enriched with organic ingredients that repel common pests while feeding the soil, it keeps your garden healthy and chemical-free. Ideal for eco-conscious gardeners looking for an easy, safe solution.</p>
                  <div className="instock">
                    in stock
                  </div>
                </div>
              </div>
            </div>
          )}

          {active === "planters" && (
            <div className='planters'>
              <div className="set-1">
                <div className="card-1">
                  <img src={planter1} alt="" />
                  <h5>Ceramic Herb Planter</h5>
                  <hr />
                  <p>A stylish ceramic planter perfect for herbs, succulents, or flowers. Its sleek design fits beautifully on kitchen counters, balconies, or windowsills, adding a touch of elegance to your indoor or outdoor spaces while keeping your plants happy and healthy.</p>
                  <div className="instock">
                    in stock
                  </div>
                </div>
                <div className="card-2">
                  <img src={planter2} alt="" />
                  <h5>Hanging Basket Planters (Set of 2)</h5>
                  <hr />
                  <p>Maximize your space and add charm with these woven hanging baskets. Ideal for trailing plants, ferns, or flowers, they bring life to walls, balconies, or patios while saving floor space. Durable, lightweight, and perfect for creating a cozy green corner.</p>
                  <div className="instock">
                    in stock
                  </div>
                </div>
                <div className="card-3">
                  <img src={planter3} alt="" />
                  <h5>Wooden Raised Garden Bed</h5>
                  <hr />
                  <p>Grow vegetables, herbs, or flowers in this sturdy wooden raised bed. Perfect for backyards or terraces, it improves drainage, reduces weeds, and protects your plants from pests. A practical and attractive way to organize your garden while making planting more comfortable.</p>
                  <div className="instock">
                    in stock
                  </div>
                </div>
              </div>
              <div className="set-2">
                <div className="card-1">
                  <img src={planter4} alt="" />
                  <h5>Self-Watering Plastic Planters (Set of 3)</h5>
                  <hr />
                  <p>Keep your plants hydrated effortlessly with these self-watering planters. Ideal for busy gardeners, they store water at the bottom and deliver it as needed, reducing maintenance while promoting healthy roots. Lightweight, durable, and perfect for home or office use.</p>
                  <div className="instock">
                    in stock
                  </div>
                </div>
                <div className="card-2">
                  <img src={planter5} alt="" />
                  <h5>Decorative Metal Planter Stand</h5>
                  <hr />
                  <p>Elevate your plants with this elegant metal stand and planter combo. Adds height and dimension to your plant display while keeping pots off the ground. Perfect for indoor or outdoor use, combining functionality and style to showcase your favorite greenery beautifully.</p>
                  <div className="instock">
                    in stock
                  </div>
                </div>
                <div className="card-3">
                  <img src={planter6} alt="" />
                  <h5>Recycled Eco-Friendly Pots</h5>
                  <hr />
                  <p>Sustainably made from recycled materials, these eco-friendly pots are both beautiful and kind to the planet. Lightweight yet sturdy, they’re perfect for any type of plant and show your commitment to green living while enhancing your garden’s charm.</p>
                  <div className="instock">
                    in stock
                  </div>
                </div>
              </div>
            </div>
          )}

          {active === "books" && (
            <div className='books'>
              <div className="set-1">
                <div className="card-1">
                  <h5>The Urban Gardener’s Handbook</h5>
                  <hr />
                  <p>A practical guide for growing food in small spaces. Learn how to create a thriving garden on your balcony, rooftop, or windowsill. Packed with tips on choosing plants, maximizing space, and maintaining your garden sustainably, it’s perfect for beginners and experienced gardeners alike.</p>
                  <div className="instock">
                    in stock
                  </div>
                </div>
                <div className="card-2">
                  <h5>Organic Gardening Made Easy</h5>
                  <hr />
                  <p>Discover the secrets of chemical-free gardening with this easy-to-follow book. Learn how to grow healthy vegetables, fruits, and flowers naturally. Includes soil tips, composting, pest control, and more to help you create a thriving, eco-friendly garden.</p>
                  <div className="instock">
                    in stock
                  </div>
                </div>
                <div className="card-3">
                  <h5>Seasonal Planting Guide</h5>
                  <hr />
                  <p>Plan your garden for year-round beauty and productivity with this seasonal planting guide. It helps you know what to plant, when to plant, and how to care for your garden through every season. A must-have reference for maximizing harvests and maintaining a vibrant garden all year.</p>
                  <div className="instock">
                    in stock
                  </div>
                </div>
              </div>
              <div className="set-2">
                <div className="card-1">
                  <h5>Companion Planting Secrets</h5>
                  <hr />
                  <p>Learn how to pair plants strategically to improve growth, deter pests, and boost yields naturally. This guide explains which plants thrive together and which don’t — helping you create a more productive and harmonious garden ecosystem.</p>
                  <div className="instock">
                    in stock
                  </div>
                </div>
                <div className="card-2">
                  <h5>Composting for Beginners</h5>
                  <hr />
                  <p>Turn your kitchen scraps and garden waste into nutrient-rich compost with this beginner-friendly guide. Step-by-step instructions make it easy to start composting, improve your soil, and reduce household waste while keeping your garden healthy and green.</p>
                  <div className="instock">
                    in stock
                  </div>
                </div>
                <div className="card-3">
                  <h5>Flower Gardening Inspiration</h5>
                  <hr />
                  <p>Bring color and fragrance to your garden with this beautifully illustrated guide to flower gardening. Learn how to choose the right flowers, design stunning beds, and care for blooms throughout the year. Perfect for gardeners who love vibrant, blooming spaces.</p>
                  <div className="instock">
                    in stock
                  </div>
                </div>
              </div>
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
