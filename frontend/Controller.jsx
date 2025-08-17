import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LandingPage from './src/pages/LandingPage'
import SignInPage from './src/pages/SignInPage'
import SignUpPage from './src/pages/SignUpPage'
import TermsAndConditions from './src/pages/TermsAndConditions'
import PrivacyPolicy from './src/pages/PrivacyPolicy'
import PricingPage from './src/pages/PricingPage'

export default function Controller() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LandingPage />}></Route>
          <Route path='/signin' element={<SignInPage />}></Route>
          <Route path='/signup' element={<SignUpPage />}></Route>
          <Route path='/terms' element={<TermsAndConditions />}></Route>
          <Route path='/privacy' element={<PrivacyPolicy />}></Route>
          <Route path='/pricing' element={<PricingPage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}
