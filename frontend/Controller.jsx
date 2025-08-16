import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LandingPage from './src/pages/LandingPage'
import SignInPage from './src/pages/SignInPage'
import SignUpPage from './src/pages/SignUpPage'

export default function Controller() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LandingPage />}></Route>
          <Route path='/signin' element={<SignInPage />}></Route>
          <Route path='/signup' element={<SignUpPage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}
