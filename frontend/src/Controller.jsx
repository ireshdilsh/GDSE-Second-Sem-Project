import React from 'react'

import { BrowserRouter, Route , Routes } from 'react-router-dom'
import Landing from './pages/Landing'
import Login from './pages/Login'
import UserDashboard from './pages/UserDashboard'

export default function Controller() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Landing/>}></Route>
          <Route path='/goto/user/auth/signin' element = {<Login/>}></Route>
          <Route path='/user/dashboard' element = {<UserDashboard/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}
