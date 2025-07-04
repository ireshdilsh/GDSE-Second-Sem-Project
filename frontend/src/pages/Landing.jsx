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
                        <div className="set-1-1">
                            <div className="card-1">
                                <h6>Tips for Clean & Scalable Code</h6>
                                <p id='detail'>Discover practical techniques to write clean, maintainable React applications. From component structure to state management, we cover essential patterns every developer should know.</p>
                                <p id='author'>- By Alex Johnson -</p>
                            </div>
                            <div className="card-2">
                                <h6>Why Spring Boot is Still a Top Choice in 2025</h6>
                                <p id='detail'>Learn why Spring Boot remains a reliable framework for modern backend development — including its simplicity, power, and growing ecosystem.</p>
                                <p id='author'>- By Priya Sharma -</p>
                            </div>
                        </div>
                        <div className="set-1-2">
                            <div className="card-3">
                                <h6>UX Mistakes That Drive Users Away — And How to Fix Them</h6>
                                <p id='detail'>Bad user experience can hurt your product. We highlight common UX pitfalls and offer actionable tips to create delightful, user-friendly designs.</p>
                                <p id='author'>- By Michael Lee -</p>
                            </div>
                            <div className="card-4">
                                <h6>Tips for Clean & Scalable Code</h6>
                                <p id='detail'>Discover practical techniques to write clean, maintainable React applications. From component structure to state management, we cover essential patterns every developer should know.</p>
                                <p id='author'>-By Alex Johnson-</p>
                            </div>
                        </div>
                    </div>
                    <div className="set-2">
                        <div className="set-2-1">
                            <div className="card-1">
                                <h6>Boost Your Productivity with These Developer Tools</h6>
                                <p id='detail'>From debugging to deployment, we list essential tools and extensions that can save you time and make coding more enjoyable.</p>
                                <p id='author'>- By Daniel Kim -</p>
                            </div>
                            <div className="card-2">
                                <h6>Why Responsive Design Is More Critical Than Ever</h6>
                                <p id='detail'>With more devices and screen sizes than ever, responsive design is no longer optional. Learn how to ensure your site looks great everywhere.</p>
                                <p id='author'>- By Emily Wong -</p>
                            </div>
                        </div>
                        <div className="set-2-2">
                            <div className="card-3">
                                <h6>Security Best Practices for Modern Web Apps</h6>
                                <p id='detail'>Protect your users and your app by following key security principles — covering authentication, data privacy, and safe coding habits.</p>
                                <p id='author'>- By Rahul Patel -</p>
                            </div>
                            <div className="card-4">
                                <h6>How to Build a Personal Brand as a Developer</h6>
                                <p id='detail'>Stand out in a crowded industry by building your personal brand. Learn how to showcase your work, share knowledge, and connect with your audience.</p>
                                <p id='author'>- By Olivia Brown -</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id='pricing'>
                <p id='title'>Simple & Transparent Pricing</p>
                <p id='description'>Choose a plan that fits your needs — no hidden fees, no surprises. Upgrade anytime as your goals grow.</p>
                <div className="pricing-body">
                    <div className="card-1">
                        <h6>Basic — Free</h6>
                        <p>Perfect for trying out the essentials.</p>
                        <ul>
                            <li>Core features</li>
                            <li>Limited access</li>
                            <li>Community support</li>
                            <li>500 MB storage</li>
                        </ul>
                        <button>Choose Plan</button>
                    </div>
                    <div className="card-2">
                        <h6>Pro — $9/month</h6>
                        <p>For individuals who want more functionality.</p>
                        <ul>
                            <li>All core features</li>
                            <li>Priority email support</li>
                            <li>Advanced analytics</li>
                            <li>10 GB storage</li>
                            <li>Enable Learna AI</li>
                        </ul>
                        <button>Choose Plan</button>
                    </div>
                    <div className="card-3">
                        <h6>Premium — $19/month</h6>
                        <p>For power users who need the best experience.</p>
                        <ul>
                            <li>Everything in Pro</li>
                            <li>Early access to new features</li>
                            <li>Dedicated support</li>
                            <li>100 GB storage</li>
                            <li>Enable Learna AI</li>
                        </ul>
                        <button>Choose Plan</button>
                    </div>
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
