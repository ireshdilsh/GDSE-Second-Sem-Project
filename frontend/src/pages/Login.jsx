import React from 'react'
import logo from '../assets/footer-logo.png'
import '../styles/signin.css'
import { Link } from 'react-router-dom'
export default function Login() {
  return (
    <div className='login'>
      <img src={logo} alt="" id='logo' />
      <h3>Sign In</h3>
      <div className="offer">
        <p>New shoppers get 10% off their first order.</p>
      </div>
      <p><img id='protect-icn' src="https://img.icons8.com/?size=100&id=16231&format=png&color=000000" alt="" /> Your information is protected.</p>
      <div className="email">
        <label htmlFor="">Email Address</label>
        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
      </div>
      <div className="password">
        <label htmlFor="">Password</label>
        <input type="password" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
      </div>
      <button>Goto Dashboard</button>
    </div>
  )
}
