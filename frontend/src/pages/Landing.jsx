import React from 'react'
import '../styles/landing.css'
import logo from '../assets/logo.png'

export default function Landing() {
    return (
        <div>
            <nav>
                <div className="logo">
                    <img src={logo} alt="logo" />
                </div>
                <div className="links">
                    <a href="#home">Home</a>
                    <a href="">Browse Lesson</a>
                    <a href="">Blogs</a>
                    <a href="">Prcing</a>
                    <a href="">About Us</a>
                    <a href="">Contact Us</a>
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
                        <button id='register'>Become a Member</button>
                        <button id='login'>Start Learning Now</button>
                    </div>
                </div>
                <div className="right-side">
                    <img src={logo} alt="" />
                </div>
            </section>

        </div>
    )
}
