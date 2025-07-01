import React from 'react'
import Landing from './pages/Landing'
import { BrowserRouter, Route , Routes } from 'react-router-dom'
import Register from './pages/Register'
import Login from './pages/Login'

export default function Controller() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Landing/>}></Route>
          <Route path='/navigate/user/create/account' element = {<Register/>}></Route>
          <Route path='/navigate/user/auth/login' element = {<Login/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}
