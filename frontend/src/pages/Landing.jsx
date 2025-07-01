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
            <a href="">Home</a>
            <a href="">Browse Lesson</a>
            <a href="">Blogs</a>
            <a href="">Prcing</a>
            <a href="">About Us</a>
            <a href="">Contact Us</a>
        </div>
      </nav>
    </div>
  )
}
