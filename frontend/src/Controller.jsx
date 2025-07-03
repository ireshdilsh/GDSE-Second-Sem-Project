import React from 'react'
import Landing from './pages/Landing'
import { BrowserRouter, Route , Routes } from 'react-router-dom'
import Register from './pages/Register'
import Login from './pages/Login'
import EmailSignin from './pages/EmailSignin'
import EmailSignup from './pages/EmailSignup'

export default function Controller() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Landing/>}></Route>
          <Route path='/navigate/user/create/account' element = {<Register/>}></Route>
          <Route path='/navigate/user/auth/login' element = {<Login/>}></Route>
          <Route path='/sign/in/with/email' element = {<EmailSignin/>}></Route>
          <Route path='/sign/up/with/email' element = {<EmailSignup/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}
