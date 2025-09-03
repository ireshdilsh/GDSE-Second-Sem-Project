import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LandingPage from './src/pages/LandingPage'
import HelpCenter from './src/pages/HelpCenter'
import PrivacyPolicy from './src/pages/PrivacyPolicy'
import './src/index.css'

export default function Controller() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LandingPage />}></Route>
          <Route path='/help' element={<HelpCenter />}></Route>
          <Route path='/privacy' element={<PrivacyPolicy />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}
