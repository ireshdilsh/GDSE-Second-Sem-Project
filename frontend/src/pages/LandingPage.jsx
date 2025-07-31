import React, { useState } from 'react'
import hero from '../assets/hero.jpeg'
import '../styles/LandingPage.css'
import logo from '../assets/logo.png'

// ai for images
import step3 from '../assets/ai-steps/step-3.png'
import step4 from '../assets/ai-steps/step-4.png'
import step5 from '../assets/ai-steps/step-5.png'

// images for marketplace 
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

import book1 from '../assets/books/1.jpg'
import book2 from '../assets/books/2.jpg'
import book3 from '../assets/books/3.jpg'
import book4 from '../assets/books/4.jpg'
import book5 from '../assets/books/5.jpg'
import book6 from '../assets/books/6.jpg'
// import { useNavigate } from 'react-router-dom'


export default function LandingPage() {

  const [active, setActive] = useState("seeds");
  // const navigate = useNavigate();

  const btnStyle = (id) => ({
    border: "1.5px solid #333",
    cursor: "pointer",
    backgroundColor: active === id ? "#373643" : "#fff",
    color: active === id ? "#fff" : "#373643",
  });

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
            <a href="#greenai">GreenAI</a>
            <a href="#blogs">Blogs & Tips</a>
            <a href="#about">About Us</a>
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

      <section id="marketplace">
        <h1>Buy, Sell & Swap Sustainable Goods</h1>
        <p id="description">Discover a thriving eco-market where urban growers and green enthusiasts trade plants, seeds, compost, tools, and handmade eco-products. <br />
          Support local growers and find everything you need to nurture your urban jungle—right from your neighborhood.</p>
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
                  <img src={book1} alt="" />
                  <h5>The Urban Gardener’s Handbook</h5>
                  <hr />
                  <p>A practical guide for growing food in small spaces. Learn how to create a thriving garden on your balcony, rooftop, or windowsill. Packed with tips on choosing plants, maximizing space, and maintaining your garden sustainably, it’s perfect for beginners and experienced gardeners alike.</p>
                  <div className="instock">
                    in stock
                  </div>
                </div>
                <div className="card-2">
                  <img src={book2} alt="" />
                  <h5>Organic Gardening Made Easy</h5>
                  <hr />
                  <p>Discover the secrets of chemical-free gardening with this easy-to-follow book. Learn how to grow healthy vegetables, fruits, and flowers naturally. Includes soil tips, composting, pest control, and more to help you create a thriving, eco-friendly garden.</p>
                  <div className="instock">
                    in stock
                  </div>
                </div>
                <div className="card-3">
                  <img src={book3} alt="" />
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
                  <img src={book4} alt="" />
                  <h5>Companion Planting Secrets</h5>
                  <hr />
                  <p>Learn how to pair plants strategically to improve growth, deter pests, and boost yields naturally. This guide explains which plants thrive together and which don’t — helping you create a more productive and harmonious garden ecosystem.</p>
                  <div className="instock">
                    in stock
                  </div>
                </div>
                <div className="card-2">
                  <img src={book5} alt="" />
                  <h5>Composting for Beginners</h5>
                  <hr />
                  <p>Turn your kitchen scraps and garden waste into nutrient-rich compost with this beginner-friendly guide. Step-by-step instructions make it easy to start composting, improve your soil, and reduce household waste while keeping your garden healthy and green.</p>
                  <div className="instock">
                    in stock
                  </div>
                </div>
                <div className="card-3">
                  <img src={book6} alt="" />
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

      <section id='greenai'>
        <h1>Smart Gardening, Powered by AI</h1>
        <p>Let GreenAI guide your urban gardening journey. From plant care tips to pest detection and personalized watering schedules, our intelligent ass-
          istant uses AI to help your plants thrive—saving time, water, and effort.</p>
        <div className="body">
          <div className="step-1">
            <h6>1. Start a Chat</h6>
            <p>Open the GreenAI chat and say hello or ask a question.</p>
            <img src={step3} alt="" />
          </div>
          <div className="step-2">
            <h6>2. Chat With GreenAI</h6>
            <p>Whether it’s about plant care, composting, or what to grow next—just type it in.</p>
            <img src={step4} alt="" />
          </div>
          <div className="step-3">
            <h6>3. Get Instant Smart Advice</h6>
            <p>GreenAI replies with accurate, eco-friendly tips to guide your urban gardening journey.</p>
            <img src={step5} alt="" />
          </div>
        </div>
      </section>

      <section id='blogs'>
        <h1>Learn. Grow. Thrive.</h1>
        <p id='description'>Explore bite-sized gardening guides, eco-friendly lifestyle tips, and DIY projects—all tailored for city life.
          Whether you're a beginner or a seasoned grower, our curated blog helps you stay inspired and informed every day.</p>
        <div className="blogs-cards">
          <div className="set-1">
            <div className="card-1">
              <h5>5 Easy Herbs to Grow in Small Spaces</h5>
              <hr />
              <p>Learn which herbs thrive on balconies and windowsills — pe
                rfect for beginners with limited space.</p>
              <p id='author'>- Iresh Dilshan -</p>
            </div>
            <div className="card-2">
              <h5>5 Easy Herbs to Grow in Small Spaces</h5>
              <hr />
              <p>Learn which herbs thrive on balconies and windowsills — pe
                rfect for beginners with limited space.</p>
              <p id='author'>- Iresh Dilshan -</p>
            </div>
            <div className="card-3">
              <h5>5 Easy Herbs to Grow in Small Spaces</h5>
              <hr />
              <p>Learn which herbs thrive on balconies and windowsills — pe
                rfect for beginners with limited space.</p>
              <p id='author'>- Iresh Dilshan -</p>
            </div>
          </div>
          <div className="set-2">
            <div className="card-1">
              <h5>5 Easy Herbs to Grow in Small Spaces</h5>
              <hr />
              <p>Learn which herbs thrive on balconies and windowsills — pe
                rfect for beginners with limited space.</p>
              <p id='author'>- Iresh Dilshan -</p>
            </div>
            <div className="card-2">
              <h5>5 Easy Herbs to Grow in Small Spaces</h5>
              <hr />
              <p>Learn which herbs thrive on balconies and windowsills — pe
                rfect for beginners with limited space.</p>
              <p id='author'>- Iresh Dilshan -</p>
            </div>
            <div className="card-3">
              <h5>5 Easy Herbs to Grow in Small Spaces</h5>
              <hr />
              <p>Learn which herbs thrive on balconies and windowsills — pe
                rfect for beginners with limited space.</p>
              <p id='author'>- Iresh Dilshan -</p>
            </div>
          </div>
          <div className="set-3">
            <div className="card-1">
              <h5>5 Easy Herbs to Grow in Small Spaces</h5>
              <hr />
              <p>Learn which herbs thrive on balconies and windowsills — pe
                rfect for beginners with limited space.</p>
              <p id='author'>- Iresh Dilshan -</p>
            </div>
            <div className="card-2">
              <h5>5 Easy Herbs to Grow in Small Spaces</h5>
              <hr />
              <p>Learn which herbs thrive on balconies and windowsills — pe
                rfect for beginners with limited space.</p>
              <p id='author'>- Iresh Dilshan -</p>
            </div>
            <div className="card-3">
              <h5>5 Easy Herbs to Grow in Small Spaces</h5>
              <hr />
              <p>Learn which herbs thrive on balconies and windowsills — pe
                rfect for beginners with limited space.</p>
              <p id='author'>- Iresh Dilshan -</p>
            </div>
          </div>
          <div className="set-4">
            <div className="card-1">
              <h5>5 Easy Herbs to Grow in Small Spaces</h5>
              <hr />
              <p>Learn which herbs thrive on balconies and windowsills — pe
                rfect for beginners with limited space.</p>
              <p id='author'>- Iresh Dilshan -</p>
            </div>
            <div className="card-2">
              <h5>5 Easy Herbs to Grow in Small Spaces</h5>
              <hr />
              <p>Learn which herbs thrive on balconies and windowsills — pe
                rfect for beginners with limited space.</p>
              <p id='author'>- Iresh Dilshan -</p>
            </div>
            <div className="card-3">
              <h5>5 Easy Herbs to Grow in Small Spaces</h5>
              <hr />
              <p>Learn which herbs thrive on balconies and windowsills — pe
                rfect for beginners with limited space.</p>
              <p id='author'>- Iresh Dilshan -</p>
            </div>
          </div>
        </div>
      </section>

      <section id='about'>
        <h1>Greening Cities, One Plant at a Time</h1>
        <p>Urban Green is an innovative GreenTech platform designed to bring nature back into urban environments. In a time where cities are growing faster
          than green spaces, we believe the solution lies in empowering individuals to take sustainability into their own hands. Founded in 2025 in Colom-
          bo, Sri Lanka, Urban Green was built on the vision of transforming every balcony, rooftop, and wall into a thriving patch of green. Our platfor-
          m bridges the gap between nature and technology, offering smart tools for gardening, eco-commerce, and green education—all in one app.</p>

        <p>We believe that everyone can be a gardener, no matter how much space or experience they have. Our app is built for beginners, hobbyists, and exp-
          erts alike. Whether you're growing herbs on a kitchen shelf or cultivating a rooftop vegetable garden, Urban Green provides the knowledge, suppo-
          rt, and community to help you succeed. By turning everyday spaces into eco-friendly zones, we promote not just plant growth, but well-being, bio-
          diversity, and community connections.</p>

        <p>At the heart of our technology is GreenAI, an intelligent chat-based assistant that helps users with personalized plant care. Users simply chat
          with GreenAI to identify plant types, diagnose problems like yellowing leaves or pests, and receive actionable tips based on their specific loca-
          tion and plant needs. The AI constantly learns and adapts, offering increasingly accurate guidance over time. This eliminates guesswork and allo-
          ws even first-time growers to become confident caretakers.</p>

        <p>Alongside GreenAI, we’ve built a thriving Green Marketplace—a local eco-commerce hub where users can buy, sell, or swap everything from plants and seeds to compost, tools, and handmade organic products. Our marketplace supports small-scale urban growers, eco-entrepreneurs, and sustainable businesses by giving them a dedicated platform to reach local buyers. We charge a small commission to ensure quality control while reinvesting in our tech and user support.</p>
        <p>Education is a core part of our mission. Our Blogs & Tips section delivers expert-written content that’s easy to understand and relevant to urban living. From seasonal planting guides to eco-lifestyle hacks and DIY green decor, our content is tailored to inspire and inform. We also regularly spotlight real user stories, promote eco-challenges, and provide insights into sustainable practices that can be easily adopted in any city home.</p>
        <p>Community is key to lasting impact. That’s why Urban Green isn't just a tool—it’s a movement. We aim to build a connected network of green-minded individuals who support one another through tips, trades, and collaborations. Our app includes features like grow-logs, plant sharing, and community garden finders to foster interaction and collective action. In doing so, we hope to reduce environmental anxiety and build a hopeful, shared vision for the future.</p>
        <p>From a business perspective, Urban Green operates on a freemium model with in-app purchases and marketplace commissions. Premium users gain access to advanced AI features, exclusive blog content, and early access to eco-product launches. We are actively exploring brand partnerships, grant funding, and municipal collaborations to scale our impact and reach new markets across Asia and beyond.</p>
        <p>In everything we do, our core belief remains the same: small green actions lead to big environmental change. Urban Green is here to equip and empower urban dwellers with the tools, knowledge, and community they need to make that change—starting right where they live.</p>
      </section>
    </div>
  )
}
