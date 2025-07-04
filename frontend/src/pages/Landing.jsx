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
            </section>

            <section id='blog'>
                <p id='title'>Insights & Ideas — Our Blog</p>
                <p id='description'>Explore fresh perspectives, practical tips, and inspiring stories on technology, design, and innovation — updated regularly for curious minds.</p>
                <div className="blog-body">
                    
                </div>
            </section>

        </div>
    )
}
