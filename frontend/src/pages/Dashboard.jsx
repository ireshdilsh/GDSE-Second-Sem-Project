import React from 'react'
import '../styles/dashboard.css'
import { Link } from 'react-router-dom'

export default function Dashboard() {
  return (
    <div className="dashboard">
        <nav className="dash-nav">
          <div className="left-side">
            <h1><h1><h4>Lexora</h4></h1></h1>
            <input type="text" placeholder='Search'/>
          </div>
          <div className="right-side">
            <Link to="/writer/write"><img src="https://img.icons8.com/?size=100&id=Pi3IAam41WM2&format=png&color=333333" alt="write-img"/> Write</Link>
            <img src="https://img.icons8.com/?size=100&id=83989&format=png&color=333333" alt="notification-img" />
            <div className="profile">
              <img src="https://img.icons8.com/?size=100&id=7819&format=png&color=333333" alt="profile-img" /><span>Iresh Dilshan</span>
            </div>
          </div>
        </nav>
    </div>
  )
}
