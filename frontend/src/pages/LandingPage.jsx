import React, { useState, useRef, useEffect } from 'react'
import logo from "../assets/logo.png"
import hero_card_img from '../assets/hero-card-img.png'
import course_card_img from '../assets/Link.png'
import about_img from '../assets/aboutus-img.png'
import '../styles/LandingPage.css'
import feature_img from '../assets/feature-img.png'

export default function LandingPage() {
  // Category popup state and outside click handler
  const [showCats, setShowCats] = useState(false);
  const catRef = useRef(null);
  useEffect(() => {
    function handleClick(e) {
      if (catRef.current && !catRef.current.contains(e.target)) {
        setShowCats(false);
      }
    }
    if (showCats) document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [showCats]);

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
          <div className="nav-categories" ref={catRef}>
            <a
              href="#"
              className="categories-link"
              onClick={e => {
                e.preventDefault();
                setShowCats(v => !v);
              }}
            >Categories</a>
            <div
              className="categories-popup"
              style={{
                display: showCats ? 'grid' : 'none',
                opacity: showCats ? 1 : 0,
                pointerEvents: showCats ? 'auto' : 'none'
              }}
            >
              {[
                'Web Development', 'Mobile Apps', 'UI/UX', 'Data Science', 'AI & ML', 'Cloud', 'Cybersecurity',
                'Business', 'Marketing', 'Finance', 'Photography', 'Music', 'Language', 'Health',
                'Personal Dev', 'Productivity', 'Design', 'Animation', 'Game Dev', 'Engineering', 'Math',
                'Science', 'Cooking', 'Fitness', 'Writing', 'Test Prep', 'Kids', 'Other'
              ].map((cat, i) => (
                <span className="category-item" key={i}>{cat}</span>
              ))}
            </div>
          </div>
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
            <div className="card-1">
              <img src={course_card_img} alt="card-1-img" />
              <div className="cate-and-price">
                <p id='category'>Development</p>
                <p id='price'>$19.99</p>
              </div>
              <p id='card-title'>Learning JavaScript With
                Imagination</p>
              <p id='overview'>
                Discover JavaScript in a fun and creative way! Learn coding concepts through imagination, real-world examples, and interactive exercises that make learning enjoyable and easy.
              </p>
              <p id='name'>Iresh Dilshan</p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '3px' }}>
                <img src="https://img.icons8.com/?size=100&id=8ggStxqyboK5&format=png&color=000000" alt="" style={{ height: '15px', width: '15px' }} />
                <p style={{ fontSize: '12px', color: 'var(--text-color)' }}> (4.8 Reviews)</p>
              </div>
              <button>Enroll Now <img src="https://img.icons8.com/?size=100&id=VjUxG2ZHfWSs&format=png&color=fcfcfc" alt="right-arrow" style={{ height: '15px', width: '15px' }} /></button>
            </div>
            <div className="card-2">
              <img src={course_card_img} alt="card-1-img" />
              <div className="cate-and-price">
                <p id='category'>Development</p>
                <p id='price'>$19.99</p>
              </div>
              <p id='card-title'>Learning JavaScript With
                Imagination</p>
              <p id='overview'>
                Discover JavaScript in a fun and creative way! Learn coding concepts through imagination, real-world examples, and interactive exercises that make learning enjoyable and easy.
              </p>
              <p id='name'>Iresh Dilshan</p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '3px' }}>
                <img src="https://img.icons8.com/?size=100&id=8ggStxqyboK5&format=png&color=000000" alt="" style={{ height: '15px', width: '15px' }} />
                <p style={{ fontSize: '12px', color: 'var(--text-color)' }}> (4.8 Reviews)</p>
              </div>

              <button>Enroll Now <img src="https://img.icons8.com/?size=100&id=VjUxG2ZHfWSs&format=png&color=fcfcfc" alt="right-arrow" style={{ height: '15px', width: '15px' }} /></button>
            </div>
            <div className="card-3">
              <img src={course_card_img} alt="card-1-img" />
              <div className="cate-and-price">
                <p id='category'>Development</p>
                <p id='price'>$19.99</p>
              </div>
              <p id='card-title'>Learning JavaScript With
                Imagination</p>
              <p id='overview'>
                Discover JavaScript in a fun and creative way! Learn coding concepts through imagination, real-world examples, and interactive exercises that make learning enjoyable and easy.
              </p>
              <p id='name'>Iresh Dilshan</p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '3px' }}>
                <img src="https://img.icons8.com/?size=100&id=8ggStxqyboK5&format=png&color=000000" alt="" style={{ height: '15px', width: '15px' }} />
                <p style={{ fontSize: '12px', color: 'var(--text-color)' }}> (4.8 Reviews)</p>
              </div>

              <button>Enroll Now <img src="https://img.icons8.com/?size=100&id=VjUxG2ZHfWSs&format=png&color=fcfcfc" alt="right-arrow" style={{ height: '15px', width: '15px' }} /></button>
            </div>
          </div>
          <div className="set-2">
            <div className="card-1">
              <img src={course_card_img} alt="card-1-img" />
              <div className="cate-and-price">
                <p id='category'>Development</p>
                <p id='price'>$19.99</p>
              </div>
              <p id='card-title'>Learning JavaScript With
                Imagination</p>
              <p id='overview'>
                Discover JavaScript in a fun and creative way! Learn coding concepts through imagination, real-world examples, and interactive exercises that make learning enjoyable and easy.
              </p>
              <p id='name'>Iresh Dilshan</p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '3px' }}>
                <img src="https://img.icons8.com/?size=100&id=8ggStxqyboK5&format=png&color=000000" alt="" style={{ height: '15px', width: '15px' }} />
                <p style={{ fontSize: '12px', color: 'var(--text-color)' }}> (4.8 Reviews)</p>
              </div>

              <button>Enroll Now <img src="https://img.icons8.com/?size=100&id=VjUxG2ZHfWSs&format=png&color=fcfcfc" alt="right-arrow" style={{ height: '15px', width: '15px' }} /></button>
            </div>
            <div className="card-2">
              <img src={course_card_img} alt="card-1-img" />
              <div className="cate-and-price">
                <p id='category'>Development</p>
                <p id='price'>$19.99</p>
              </div>
              <p id='card-title'>Learning JavaScript With
                Imagination</p>
              <p id='overview'>
                Discover JavaScript in a fun and creative way! Learn coding concepts through imagination, real-world examples, and interactive exercises that make learning enjoyable and easy.
              </p>
              <p id='name'>Iresh Dilshan</p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '3px' }}>
                <img src="https://img.icons8.com/?size=100&id=8ggStxqyboK5&format=png&color=000000" alt="" style={{ height: '15px', width: '15px' }} />
                <p style={{ fontSize: '12px', color: 'var(--text-color)' }}> (4.8 Reviews)</p>
              </div>

              <button>Enroll Now <img src="https://img.icons8.com/?size=100&id=VjUxG2ZHfWSs&format=png&color=fcfcfc" alt="right-arrow" style={{ height: '15px', width: '15px' }} /></button>
            </div>
            <div className="card-3">
              <img src={course_card_img} alt="card-1-img" />
              <div className="cate-and-price">
                <p id='category'>Development</p>
                <p id='price'>$19.99</p>
              </div>
              <p id='card-title'>Learning JavaScript With
                Imagination</p>
              <p id='overview'>
                Discover JavaScript in a fun and creative way! Learn coding concepts through imagination, real-world examples, and interactive exercises that make learning enjoyable and easy.
              </p>
              <p id='name'>Iresh Dilshan</p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '3px' }}>
                <img src="https://img.icons8.com/?size=100&id=8ggStxqyboK5&format=png&color=000000" alt="" style={{ height: '15px', width: '15px' }} />
                <p style={{ fontSize: '12px', color: 'var(--text-color)' }}> (4.8 Reviews)</p>
              </div>

              <button>Enroll Now <img src="https://img.icons8.com/?size=100&id=VjUxG2ZHfWSs&format=png&color=fcfcfc" alt="right-arrow" style={{ height: '15px', width: '15px' }} /></button>
            </div>
          </div>
        </div>
      </section>
      {/* Pricing Section */}
      <section id="pricing">
        <p id="title">Pricing Plans</p>
        <p id="sub-title">Choose the plan that fits your learning journey</p>
        <p id="description">Choose the plan under that fits your learning journey. Unlock more features and flexibility as you upgrade.</p>
        <div className="pricing-cards">
          <div className="pricing-card">
            <div className="plan-name">Starter</div>
            <div className="plan-price">$0<span>/mo</span></div>
            <ul className="plan-features">
              <li>Access to free courses</li>
              <li>Community support</li>
              <li>Basic resources</li>
              <li>Mobile app access</li>
              <li>Weekly newsletter</li>
              <li>Limited quizzes</li>
              <li>Access on any device</li>
              <li>Course progress tracking</li>
            </ul>
            <button className="plan-btn">Get Started</button>
          </div>
          <div className="pricing-card popular">
            <div className="plan-badge">Most Popular</div>
            <div className="plan-name">Pro</div>
            <div className="plan-price">$19<span>/mo</span></div>
            <ul className="plan-features">
              <li>All Starter features</li>
              <li>Unlimited course access</li>
              <li>Downloadable resources</li>
              <li>Priority support</li>
              <li>Certificate of completion</li>
              <li>Exclusive webinars</li>
              <li>Practice projects</li>
              <li>Offline access</li>
              <li>Early access to new courses</li>
              <li>Ad-free experience</li>
            </ul>
            <button className="plan-btn">Start Free Trial</button>
          </div>
          <div className="pricing-card">
            <div className="plan-name">Team</div>
            <div className="plan-price">$49<span>/mo</span></div>
            <ul className="plan-features">
              <li>All Pro features</li>
              <li>Team analytics</li>
              <li>Admin dashboard</li>
              <li>Custom onboarding</li>
              <li>Dedicated account manager</li>
              <li>Team collaboration tools</li>
              <li>Bulk enrollment discounts</li>
              <li>Custom team training</li>
              <li>Advanced reporting</li>
              <li>API access</li>
            </ul>
            <button className="plan-btn">Contact Sales</button>
          </div>
        </div>
      </section>
      {/* About Us Section */}
      <section id="about" className="about-section">
        <p className="about-title">About Us</p>
        <p className="about-sub-title">Empowering Learners Everywhere</p>
        <div className="about-desc">
          EduSpark is dedicated to making high-quality education accessible to everyone. Our platform brings together expert instructors, engaging content, and a supportive community to help you achieve your learning goals. Whether you're advancing your career, exploring new interests, or upskilling your team, EduSpark is your trusted partner on the journey to success.
        </div>
        <div className="about-highlights">
          <div className="about-highlight-card">
            <img src="https://img.icons8.com/?size=100&id=60671&format=png&color=6366f1" alt="icon" className="about-icon" />
            <div className="about-highlight-value">20,000+</div>
            <div className="about-highlight-label">Active Learners</div>
          </div>
          <div className="about-highlight-card">
            <img src="https://img.icons8.com/?size=100&id=79387&format=png&color=6366f1" alt="icon" className="about-icon" />
            <div className="about-highlight-value">150+</div>
            <div className="about-highlight-label">Expert Instructors</div>
          </div>
          <div className="about-highlight-card">
            <img src="https://img.icons8.com/?size=100&id=9oUOrI5mCb9u&format=png&color=6366f1" alt="icon" className="about-icon" />
            <div className="about-highlight-value">1,200+</div>
            <div className="about-highlight-label">Courses Offered</div>
          </div>
        </div>
      </section>

      {/* Wrorkshop section */}
      <section id='worksop'>
        <div className="left-side">
          <img src={about_img} alt="" />
        </div>
        <div className="right-side">
          <div className="top">
            <p id="title">Free Workshop</p>
            <p id="sub-title">Join Our Free Workshops</p>
            <p id="description">Edhen an unknown printer took a galley of type and scrambled it to make a <br />
              type specimen bookas survived not only five centuries.Edhen an unknown <br />
              printer took a galley of type and scrambled.</p>
          </div>
          <div className="bottom">
            <div className="left-side">
              <div className="logo-and-title">
                <div className="logo">
                  <img src="" alt="" />
                </div>
                <p id='title'>Smooth Virtual Live <br />
                  Classes</p>
              </div>
              <p id='bottom-txt'>Edhen an unknown printer Rtook <br />
                galley of type scrambled.</p>
            </div>
            <div className="right-side">
              <div className="logo-and-title">
                <div className="logo">
                  <img src="" alt="" />
                </div>
                <p id='title'>99% Graduation <br />
                  Complete</p>
              </div>
              <p id='bottom-txt'>Edhen an unknown printer Rtook <br />
                galley of type scrambled.</p>
            </div>
          </div>
          <button>Quick Join Now  <img src="https://img.icons8.com/?size=100&id=VjUxG2ZHfWSs&format=png&color=fcfcfc" alt="right-arrow" /></button>
        </div>
      </section>
    </div>
  )
}
