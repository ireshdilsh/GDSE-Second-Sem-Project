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
          <div className="categories">
            <select class="form-select" aria-label="Default select example">
              <option selected>Open this select menu</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
          <div className="search-bar">
            <input type="text" class="form-control" aria-describedby="emailHelp" placeholder='Search Here . . .' />
            <button><img src="https://img.icons8.com/?size=100&id=132&format=png&color=fcfcfc" alt="" /></button>
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
            <p id='title'>Welcome</p>
            <p id='email'>ireshgithub@gmail.com</p>
          </div>
        </div>
      </div>

      <div className="dashboard-title">
        <h4>Results for dashboard</h4>
        <p>Depending on your preferences and needs, you can choose dashboard in different designs or brands. In addition to a wide variety of quality products, you can also find many discounts during the sale. Don't
          forget to use the filter at the bottom to get the most out of your online shopping!</p>
      </div>
    </div>
  )
}
