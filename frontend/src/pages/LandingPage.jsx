import React from 'react'
import logo from "../assets/logo.png"
import hero_card_img from '../assets/hero-card-img.png'
import course_card_img from '../assets/Link.png'
import '../styles/LandingPage.css'
import feature_img from '../assets/feature-img.png'

export default function LandingPage() {
  return (
    <div>
      <nav>
        <div className="logo">
          <img src={logo} alt="eduspark-logo" />
        </div>
        <div className="links">
          <a href="#home">Home</a>
          <a href="#features">Features</a>
          <a href="#courses">Courses</a>
          <a href="">Categories</a>
          <a href="#pricing">Pricing</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>
        <div className="signup-btn">
          <button>Register</button>
        </div>
      </nav>

      {/* hero Section */}
      <section id='hero'>
        <div className="left-side">
          <h4 id='title'>Welcome to EduSpark</h4>
          <p id='sub-title'>Learning is <span> What you </span> <br />
            Make of it. Make it Yours
            at VideoEditing.</p>
          <p id='description'>Discover expert-led courses designed to fit your goals. Learn at your own pace, master new skills, <br /> and take control of your future with VideoEditing.</p>
          <div className="btns">
            <div className="play-btn">
              <img src="https://img.icons8.com/?size=100&id=fjx0LfGCNuZb&format=png&color=fcfcfc" alt="playbtn-icn" />
            </div>
            <button id='signin-btn'>Get Free Trial <img src="https://img.icons8.com/?size=100&id=VjUxG2ZHfWSs&format=png&color=fcfcfc" alt="right-arrow" /></button>
            <button id='demo-btn'>Watch Our
              <br /> Class Demo</button>
          </div>
        </div>
        <div className="right-side">
          <img src={hero_card_img} alt="hero-card-img" />

          <div className="card-1">
            <p>Total Students <br /> <span>15K</span></p>
          </div>
          <div className="card-2"></div>

          <div className="bar-1"></div>
          <div className="bar-2"></div>
        </div>
      </section>

      {/* features Section */}
      <section id='features'>
        <p id='title'>Our Top Features</p>
        <p id='sub-title'>Achieve Your Goal With EduSpark</p>
        <p id='description'>when an unknown printer took a galley of type and scrambled make <br />
          specimen book has survived not only five centuries</p>
        <div className="cards">
          <div className="card-1">
            <img src="https://img.icons8.com/?size=100&id=tDtvWzs979he&format=png&color=fcfcfc" alt="" id='star' />
            <div className="title">
              <div className="card-1-logo">
                <img src="https://img.icons8.com/?size=100&id=79387&format=png&color=fcfcfc" alt="" />
              </div>
              <p>Expert Tutors</p>
            </div>
            <p id="description">when an unknown printer took a galley offe
              type and scrambled makes.</p>
          </div>
          <div className="card-2">
            <img src="https://img.icons8.com/?size=100&id=tDtvWzs979he&format=png&color=fcfcfc" alt="" id='star' />
            <div className="title">
              <div className="card-2-logo">
                <img src="https://img.icons8.com/?size=100&id=59739&format=png&color=fcfcfc" alt="" />
              </div>
              <p>Effective Courses</p>
            </div>
            <p id="description">when an unknown printer took a galley offe
              type and scrambled makes.</p>
          </div>
          <div className="card-3">
            <img src="https://img.icons8.com/?size=100&id=tDtvWzs979he&format=png&color=fcfcfc" alt="" id='star' />
            <div className="title">
              <div className="card-3-logo">
                <img src="https://img.icons8.com/?size=100&id=9oUOrI5mCb9u&format=png&color=fcfcfc" alt="" />
              </div>
              <p>Earn Certificate</p>
            </div>
            <p id="description">when an unknown printer took a galley offe
              type and scrambled makes.</p>
          </div>
        </div>
        <div className="next-section">
          <div className="left-side">
            <img src={feature_img} alt="featre-section-img" />
          </div>
          <div className="right-side">
            <p id="next-title">Get More About Us</p>
            <p id="next-sub-title">
              Thousand Of Top <span>Courses </span> <br />
              Now in One Place
            </p>
            <p id="next-description">
              Groove’s intuitive shared inbox makes it easy for team members to <br />
              organize, prioritize and.In this episode of the Smashing Pod we’re <br />
              talking about Web Platform Baseline.
            </p>
            <div className="details">
              <div className="details-1">
                <div className="circle">
                  <img src="https://img.icons8.com/?size=100&id=60671&format=png&color=161439" alt="" />
                </div>
                <p>The Most World Class Instructors</p>
              </div>
              <div className="details-2">
                <div className="circle">
                  <img src="https://img.icons8.com/?size=100&id=60671&format=png&color=161439" alt="" />
                </div>
                <p>Access Your Class anywhere</p>
              </div>
              <div className="details-3">
                <div className="circle">
                  <img src="https://img.icons8.com/?size=100&id=60671&format=png&color=161439" alt="" />
                </div>
                <p>Flexible Course Plan</p>
              </div>
            </div>
            <button>Start Free Trial <img src="https://img.icons8.com/?size=100&id=VjUxG2ZHfWSs&format=png&color=fcfcfc" alt="right-arrow" /></button>
          </div>
        </div>
      </section>

      <section id='courses'>
        <p id='title'>Top Class Courses</p>
        <p id='sub-title'>Explore Our World's Best Courses</p>
        <p id='description'>Find the right course for you from our extensive library of options.</p>
        <div className="cards">
          <div className="set-1">
            <div className="card-1"></div>
            <div className="card-2"></div>
            <div className="card-3"></div>
          </div>
          <div className="set-2"></div>
        </div>
      </section>
    </div>
  )
}
