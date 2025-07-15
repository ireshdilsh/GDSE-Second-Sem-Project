import React from 'react'
import '../styles/userdashboard.css'
import logo from '../assets/footer-logo.png'

export default function UserDashboard() {
  return (
    <div>
      <div className="header">
        <div className="left-side">
          <img src={logo} alt="" />
        </div>
        <div className="middle-side">
          <div className="search-bar">
            <input type="text" class="form-control" aria-describedby="emailHelp" />
            <button><img src="https://img.icons8.com/?size=100&id=132&format=png&color=000000" alt="" /></button>
          </div>
          <div className="download-app">
            <img src="https://img.icons8.com/?size=100&id=15894&format=png&color=333333" alt="" />
            <p>Download the <br />
              UrbanGreen App</p>
          </div>
        </div>
        <div className="right-side">
          <img src="https://img.icons8.com/?size=100&id=H101gtpJBVoh&format=png&color=000000" alt="" />
          <div className="email">
            <p>Welcome</p>
            <p>ireshgithub@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  )
}
