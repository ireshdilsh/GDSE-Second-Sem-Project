import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LandingPage from './src/pages/LandingPage'
import SignInPage from './src/pages/SignInPage'
import SignUpPage from './src/pages/SignUpPage'
import TermsAndConditions from './src/pages/TermsAndConditions'
import PrivacyPolicy from './src/pages/PrivacyPolicy'
import PricingPage from './src/pages/PricingPage'
import SuccessStoriesPage from './src/pages/SuccessStoriesPage'
import EventsPage from './src/pages/EventsPage'
import BlogPage from './src/pages/BlogPage'
import AdminPage from './src/pages/AdminPage'

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
          <Route path='/success-stories' element={<SuccessStoriesPage />}></Route>
          <Route path='/events' element={<EventsPage />}></Route>
          <Route path='/blog' element={<BlogPage />}></Route>
          <Route path='/admin' element={<AdminPage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}
