import React from 'react'
import logo from '../assets/logo.png'
import '../styles/landing.css'

export default function Landing() {
  return (
    <div>

        <div className="glass">
          <div className="logo">
            <img src={logo} alt="" />
          </div>
          <div className="links">
            <a href="">Home</a>
            <a href="">MarketPlace</a>
            <a href="">Blogs & Tips</a>
            <a href="">GreenAI</a>
            <a href="">About Us</a>
            <a href="">Contact Us</a>
          </div>
        </div>

    </div>
  )
}
