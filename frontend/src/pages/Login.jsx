import React from 'react'
import '../styles/login.css'
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom'

export default function Login() {
  return (
    <div>
      <div className="login-form">
        <img src={logo} alt="" />
        <p id='title'>SmartAccess — Seamless & Secure Login</p>
        <p id='description'>A fast, modern, and secure login experience designed for today’s web — combining elegant UI with robust authentication.</p>
        <button id='google'>Continue With Google</button>
        <button id='email'>Continue With Email</button>
        <div className="goto-signup">
          <p>if you already haven't an account ?</p>
          <Link to="/navigate/user/create/account">signup here</Link>
        </div>
      </div>
    </div>
  )
}
