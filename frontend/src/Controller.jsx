import React from 'react'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import LandingPage from './pages/LandingPage'

export default function Controller() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LandingPage />}></Route>
          <Route path='/goto/user/auth/signin' element={<Login />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}
