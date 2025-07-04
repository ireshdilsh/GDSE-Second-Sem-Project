import React from 'react'
import '../styles/landing.css'
import logo from '../assets/logo.png'
import { useNavigate } from 'react-router-dom'

export default function Landing() {

    const navigate = useNavigate();

    const gotoRegisterPage = () => {
        navigate('/navigate/user/create/account')
    }

    const gotoLoginView = () => {
        navigate('/navigate/user/auth/login')
    }

    return (
        <div>
            <div className="box-1"></div>
            <div className="box-2"></div>
            <nav>
                <div className="logo">
                    <img src={logo} alt="logo" />
                </div>
                <div className="links">
                    <a href="#home">Home</a>
                    <a href="#lesson">Browse Lesson</a>
                    <a href="#blog">Blogs</a>
                    <a href="#pricing">Prcing</a>
                    <a href="#about">About Us</a>
                    <a href="#contact">Contact Us</a>
                </div>
            </nav>

            <section id='home'>
                <div className="left-side">
                    <p id='title'>Spark Your Skills in Minutes_</p>
                    <p id='subtitle'>Learn fast. Teach freely. Connect
                        through skills.</p>
                    <p id='description'>SkillSpark connects curious learners with everyday experts through short, powerful lessons.
                        Discover new skills or share yours — anytime, anywhere, in just minutes.</p>
                    <div className="btns">
                        <button id='register' onClick={gotoRegisterPage}>Become a Member</button>
                        <button id='login' onClick={gotoLoginView}>Start Learning Now</button>
                    </div>
                </div>
                <div className="right-side">
                    <img src={logo} alt="" />
                </div>
            </section>

            <section id='lesson'>
                <p id='title'>Discover & Book Micro-Lessons</p>
                <p id='description'>Explore a curated library of ultra-short lessons taught by real people.
                    Filter by category, skill level, or price — and instantly book a live or recorded session.</p>
                <div className="lesson-body">

                </div>
            </section>

            <section id='blog'>
                <p id='title'>Insights & Ideas — Our Blog</p>
                <p id='description'>Explore fresh perspectives, practical tips, and inspiring stories on technology, design, and innovation — updated regularly for curious minds.</p>
                <div className="blog-body">
                    <div className="set-1">
                        <div className="card-1">
                            <h4>Tips for Clean & Scalable Code</h4>
                            <p>Discover practical techniques to write clean, maintainable React applications. From component structure to state management, we cover essential patterns every developer should know.</p>
                            <p id='author'>By Alex Johnson</p>
                        </div>
                        <div className="card-2">
                            <h4>Tips for Clean & Scalable Code</h4>
                            <p>Discover practical techniques to write clean, maintainable React applications. From component structure to state management, we cover essential patterns every developer should know.</p>
                            <p id='author'>By Alex Johnson</p>
                        </div>
                        <div className="card-3">
                            <h4>Tips for Clean & Scalable Code</h4>
                            <p>Discover practical techniques to write clean, maintainable React applications. From component structure to state management, we cover essential patterns every developer should know.</p>
                            <p id='author'>By Alex Johnson</p>
                        </div>
                        <div className="card-4">
                            <h4>Tips for Clean & Scalable Code</h4>
                            <p>Discover practical techniques to write clean, maintainable React applications. From component structure to state management, we cover essential patterns every developer should know.</p>
                            <p id='author'>By Alex Johnson</p>
                        </div>
                    </div>
                    <div className="set-2">

                    </div>
                </div>
            </section>

            <section id='pricing'>
                <p id='title'>Simple & Transparent Pricing</p>
                <p id='description'>Choose a plan that fits your needs — no hidden fees, no surprises. Upgrade anytime as your goals grow.</p>
                <div className="pricing-body">

                </div>
            </section>

            <section id='about'>
                <p id='title'>About Us — Our Story & Mission</p>
                <p id='description'>We’re passionate creators on a mission to solve real-world problems with smart, user-friendly solutions. Learn more about who we are and what drives us.</p>
                <div className="about-body">

                </div>
            </section>

            <section id='contact'>
                <p id='title'>Get in Touch</p>
                <p id='description'>Have questions, feedback, or just want to say hello? We’d love to hear from you — reach out anytime and we’ll get back to you soon.</p>
                <div className="contact-body">

                </div>
            </section>


        </div>
    )
}
